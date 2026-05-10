import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import MacGotchaBlock from '../../../components/content/MacGotchaBlock.jsx'
import CommandBlock from '../../../components/content/CommandBlock.jsx'

export default function S1HighWatermark() {
  return (
    <>
      <p>
        <code>PYTORCH_MPS_HIGH_WATERMARK_RATIO</code> is the second non-negotiable env var on Mac.
        It controls when PyTorch's MPS allocator refuses to allocate more memory. The wrong value
        causes OOM where the OS would happily satisfy the request.
      </p>

      <DefinitionBlock title="What the watermark is">
        PyTorch's MPS allocator has a safety threshold: if a new allocation would push allocated MPS
        memory above <code>HIGH_WATERMARK_RATIO × total_system_memory</code>, the allocator throws OOM
        before asking macOS. Default is around 1.7 (yes, &gt; 1, by design).
      </DefinitionBlock>

      <h2>Why default isn't always right</h2>
      <p>
        On a unified-memory Mac, "VRAM" and "system RAM" are the same pool. PyTorch can't reliably
        distinguish "still room for me" from "OS needs this for itself." The default 1.7 ratio is a
        compromise — too generous when other apps are open, too conservative when ComfyUI has the
        machine to itself.
      </p>

      <h2>Setting it to 0.0 — what happens</h2>
      <p><code>PYTORCH_MPS_HIGH_WATERMARK_RATIO=0.0</code> tells PyTorch: <em>never refuse based on the watermark; always ask the OS.</em></p>
      <CommandBlock command="export PYTORCH_MPS_HIGH_WATERMARK_RATIO=0.0" />
      <p>The OS becomes the gatekeeper. It will:</p>
      <ul>
        <li>Satisfy the allocation if there's free RAM.</li>
        <li>Compress memory pages to make room.</li>
        <li>Page out idle memory (Safari background tabs, etc.) if needed.</li>
        <li>Eventually swap if all else fails.</li>
      </ul>

      <h2>Why 0.0 is the right default for ComfyUI on Mac</h2>
      <ol>
        <li>The OS knows what's truly idle better than PyTorch can.</li>
        <li>Diffusion workloads are bursty — peaking at, say, 17 GB during a forward pass and dropping back to 12 GB. The watermark fires on transient peaks the OS could handle.</li>
        <li>You'd rather see a real OS-level OOM (rare and obvious) than a PyTorch-level OOM that's actually conservative.</li>
      </ol>

      <h2>The tradeoff: the OS will swap</h2>
      <MacGotchaBlock title="Watermark off ≠ unlimited memory">
        With watermark off, PyTorch will happily request 25 GB on a 24 GB machine. macOS will
        satisfy it by swapping. Your sampler keeps running but at 1/100th speed because activations
        are paging in/out. Watch Activity Monitor's <strong>Memory Pressure</strong> indicator —
        green is fine, yellow is compressing, red is swapping.
      </MacGotchaBlock>

      <h2>Other watermark values</h2>
      <ul>
        <li><strong>0.0</strong> — disabled. Recommended for dedicated ComfyUI sessions.</li>
        <li><strong>1.7</strong> (default) — balanced. Use if you'll be multitasking heavily while ComfyUI runs.</li>
        <li><strong>1.4</strong> — tighter. Use on 16 GB Macs (not our target but exists).</li>
        <li><strong>2.0+</strong> — looser than default. Rarely useful.</li>
      </ul>

      <h2>Verifying it's set</h2>
      <CommandBlock command="echo $PYTORCH_MPS_HIGH_WATERMARK_RATIO" />
      <p>
        If empty, your shell hasn't picked it up — set it in <code>~/.zshrc</code> or in your
        <code>start.sh</code>. The launch script from chapter 4 already exports it.
      </p>
    </>
  )
}

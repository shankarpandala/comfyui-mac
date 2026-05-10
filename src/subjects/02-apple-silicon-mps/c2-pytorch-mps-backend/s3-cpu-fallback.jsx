import CommandBlock from '../../../components/content/CommandBlock.jsx'
import MacGotchaBlock from '../../../components/content/MacGotchaBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3CpuFallback() {
  return (
    <>
      <p>
        <code>PYTORCH_ENABLE_MPS_FALLBACK=1</code> is one of two environment variables every Mac
        ComfyUI user must set. It's also one of the most misunderstood. This section explains exactly
        what it does, when it saves you, and when it secretly destroys your performance.
      </p>

      <h2>What it does</h2>
      <p>
        When PyTorch encounters an op that has no MPS implementation, the default behavior is to
        raise <code>NotImplementedError</code>. With <code>PYTORCH_ENABLE_MPS_FALLBACK=1</code>, it
        instead:
      </p>
      <ol>
        <li>Copies the input tensors from MPS to CPU (essentially free on unified memory).</li>
        <li>Runs the op on CPU.</li>
        <li>Copies the result back to MPS.</li>
        <li>Continues execution.</li>
      </ol>

      <h2>How to set it</h2>
      <CommandBlock command="export PYTORCH_ENABLE_MPS_FALLBACK=1" label="Add to ~/.zshrc, or set in start.sh" />
      <p>Our launch script from Subject 01 / Chapter 2 / Section 4 already exports this. Verify with:</p>
      <CommandBlock command="echo $PYTORCH_ENABLE_MPS_FALLBACK" />

      <h2>When fallback saves you</h2>
      <ul>
        <li>An obscure custom-node import calls a niche op (e.g., a non-standard interpolation).</li>
        <li>A new model uses a layer that's MPS-supported in PyTorch nightly but not yet in your stable build.</li>
        <li>Some preprocessor (especially in ControlNet Aux) does CPU-friendly numpy work via PyTorch.</li>
      </ul>

      <h2>When fallback secretly costs you</h2>
      <MacGotchaBlock title="Silent slowdown is the real danger">
        With <code>FALLBACK=1</code>, PyTorch does not print a warning when it falls back. Your
        sampler runs; it just runs 5–20× slower on the affected steps because it's secretly bouncing
        to CPU. The warning sign is "I expected ~3 it/s, I'm seeing 0.3 it/s." Diagnose with the
        profiler in Chapter 6.
      </MacGotchaBlock>

      <h2>Should I just leave it on?</h2>
      <p><strong>Yes, in 2026.</strong> Two reasons:</p>
      <ol>
        <li>Without it, ComfyUI will crash on a non-trivial fraction of workflows. The "fail loud" alternative is worse than "run slow".</li>
        <li>The performance damage from fallback is well-localized. If a sampler step suddenly slows down, you'll feel it and investigate. If a model loader briefly falls back to CPU during init, you won't even notice.</li>
      </ol>

      <h2>How to detect that fallback is active</h2>
      <p>There's no built-in counter, but you can wrap a forward pass and time individual modules:</p>
      <pre>{`import torch
from torch.profiler import profile, ProfilerActivity, record_function

with profile(activities=[ProfilerActivity.CPU, ProfilerActivity.MPS]) as prof:
    with record_function("forward"):
        out = model(x)

print(prof.key_averages().table(
    sort_by="cpu_time_total", row_limit=20))`}</pre>
      <p>
        If a non-trivial percentage of compute time shows up under "CPU" rather than "MPS", you've
        located a fallback hotspot. Either upgrade PyTorch (op may be newly implemented), switch to a
        Mac-friendlier alternative node, or accept the cost.
      </p>

      <NoteBlock title="The other essential env var">
        <code>PYTORCH_MPS_HIGH_WATERMARK_RATIO=0.0</code> — covered in chapter 5 of this subject. Set
        both. Forget about both.
      </NoteBlock>
    </>
  )
}

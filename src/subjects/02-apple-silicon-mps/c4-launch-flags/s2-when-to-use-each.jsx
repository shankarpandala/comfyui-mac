import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2WhenToUseEach() {
  return (
    <>
      <p>
        We just listed the flags. The harder skill is choosing the right combination for your model.
        This section is the decision tree.
      </p>

      <h2>Decision tree</h2>

      <h3>Model trained in fp16 (SD1.5, SDXL, SDXL Turbo, AnimateDiff)</h3>
      <ul>
        <li><code>--force-fp16</code></li>
        <li>That's it.</li>
      </ul>

      <h3>Model trained in bf16 (SD3, SD3.5, FLUX, Hunyuan, Wan, LTX)</h3>
      <ul>
        <li><code>--force-fp16 --bf16-unet</code></li>
        <li>FLUX/Hunyuan VAEs are bf16: add <code>--bf16-vae</code></li>
        <li>If using GGUF: <code>UnetLoaderGGUF</code> handles dtype internally; the flags still help downstream nodes.</li>
      </ul>

      <h3>Model + activations exceed ~14 GB</h3>
      <ul>
        <li>Try <code>--cpu-vae</code> first (frees ~1 GB at small decode cost on unified memory).</li>
        <li>Still tight? Add <code>--lowvram</code> — moves entire model offline between samplers.</li>
        <li>Still OOM? <code>--novram</code> — significant slowdown but will work.</li>
      </ul>

      <h3>Random "operator not implemented" errors</h3>
      <ul>
        <li>Make sure <code>PYTORCH_ENABLE_MPS_FALLBACK=1</code> is exported.</li>
        <li>If still failing, the op probably touches fp8: see chapter 3.</li>
      </ul>

      <h3>Sampler suspiciously slow</h3>
      <ul>
        <li>Profile to find the CPU fallback hotspot (chapter 6).</li>
        <li>If <code>SamplerCustom</code>: check <code>--use-pytorch-cross-attention</code> is set.</li>
        <li>Verify Activity Monitor shows ComfyUI's GPU usage near 100% during steps.</li>
      </ul>

      <h2>The "kitchen sink" config</h2>
      <p>If you don't want to think and you have memory headroom, this works for most workflows:</p>
      <pre>{`PYTORCH_ENABLE_MPS_FALLBACK=1 \\
PYTORCH_MPS_HIGH_WATERMARK_RATIO=0.0 \\
python main.py \\
  --force-fp16 \\
  --bf16-unet \\
  --bf16-vae \\
  --use-pytorch-cross-attention`}</pre>
      <p>Trade-off: slightly higher memory use than fp16-everything for SDXL workflows. Acceptable on 24 GB.</p>

      <h2>The "tight budget" config</h2>
      <p>For HunyuanVideo, Wan 14B, FLUX Dev fp16 attempts:</p>
      <pre>{`PYTORCH_ENABLE_MPS_FALLBACK=1 \\
PYTORCH_MPS_HIGH_WATERMARK_RATIO=0.0 \\
python main.py \\
  --force-fp16 \\
  --bf16-unet \\
  --lowvram \\
  --cpu-vae \\
  --use-pytorch-cross-attention`}</pre>
      <p>Step times will go up; the workflow runs at all instead of OOM.</p>

      <NoteBlock title="Don't lock yourself in">
        These flags are launch-time only — to change them you restart ComfyUI. Plan to have at least
        two presets (default + tight) in your launch script. Switching takes 30 seconds; OOMing
        mid-workflow loses minutes of state.
      </NoteBlock>

      <h2>Per-workflow flag override</h2>
      <p>
        Most flags can also be set per-node via specific loaders. The <code>UnetLoaderGGUF</code>{' '}
        node, for example, has its own dequant-dtype dropdown that overrides <code>--bf16-unet</code>.
        When in doubt, the node-level setting wins.
      </p>
    </>
  )
}

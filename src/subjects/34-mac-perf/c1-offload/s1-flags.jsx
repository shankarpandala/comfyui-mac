import CommandBlock from '../../../components/content/CommandBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Flags() {
  return (
    <>
      <p>Offload flags reference. Mac-specific impact of each.</p>

      <h2>The flag matrix</h2>
      <table>
        <thead><tr><th>Flag</th><th>Mac effect</th></tr></thead>
        <tbody>
          <tr><td><code>--cpu-vae</code></td><td>VAE on CPU. Free on unified memory; slight decode time cost.</td></tr>
          <tr><td><code>--gpu-only</code></td><td>Don't offload. Fastest if everything fits.</td></tr>
          <tr><td><code>--highvram</code></td><td>Keep all loaded. Default on big NVIDIA; on Mac use only if memory permits.</td></tr>
          <tr><td><code>--normalvram</code></td><td>Default. Swap text encoders / VAE in/out.</td></tr>
          <tr><td><code>--lowvram</code></td><td>Aggressive offload during sampler. Slower; survives tighter budgets.</td></tr>
          <tr><td><code>--novram</code></td><td>Keep almost nothing resident. Painful slow.</td></tr>
        </tbody>
      </table>

      <h2>Recommended Mac defaults</h2>
      <CommandBlock command="PYTORCH_ENABLE_MPS_FALLBACK=1 PYTORCH_MPS_HIGH_WATERMARK_RATIO=0.0 python main.py --force-fp16 --bf16-unet --bf16-vae --use-pytorch-cross-attention" />

      <h2>Tight-budget config</h2>
      <CommandBlock command="... --force-fp16 --bf16-unet --lowvram --cpu-vae" label="When stacking heavy adapters" />

      <h2>For HunyuanVideo / Wan / SD3.5 Large</h2>
      <p>Always combine <code>--lowvram</code> + <code>--cpu-vae</code> to avoid mid-render OOM.</p>

      <NoteBlock title="The 'two presets' approach">
        Maintain two start.sh presets: default (normalvram) and lowvram. Switch based on what
        you're rendering. Subject 02 / Chapter 4 has the script template.
      </NoteBlock>
    </>
  )
}

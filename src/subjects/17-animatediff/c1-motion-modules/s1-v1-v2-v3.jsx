import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1V1V2V3() {
  return (
    <>
      <p>
        AnimateDiff is the original "make a Stable Diffusion model do video" technique. Adds a
        motion module — temporal attention layers — between the spatial blocks of an existing UNet.
        The base UNet stays frozen; only the motion module is trained.
      </p>

      <h2>The version history</h2>
      <ul>
        <li><strong>v1 / v2 / v3</strong> — SD 1.5 motion modules, increasing quality. v3 is best.</li>
        <li><strong>SDXL</strong> — separate motion module. <code>mm_sdxl_v10_beta.safetensors</code>.</li>
        <li><strong>Lightning</strong> — distilled few-step variant. <code>animatediff_lightning_4step_diffusers.safetensors</code>.</li>
      </ul>

      <h2>Files</h2>
      <table>
        <thead><tr><th>File</th><th>Base</th><th>Size</th></tr></thead>
        <tbody>
          <tr><td><code>mm_sd_v15_v3.ckpt</code></td><td>SD 1.5</td><td>~1.6 GB</td></tr>
          <tr><td><code>mm_sdxl_v10_beta.safetensors</code></td><td>SDXL</td><td>~2 GB</td></tr>
          <tr><td><code>animatediff_lightning_4step_diffusers.safetensors</code></td><td>SDXL</td><td>~1.5 GB</td></tr>
          <tr><td><code>v3_sd15_mm.ckpt</code></td><td>SD 1.5</td><td>~1.6 GB</td></tr>
        </tbody>
      </table>

      <p>Folder: <code>models/animatediff_models/</code></p>

      <h2>Custom node</h2>
      <p><code>ComfyUI-AnimateDiff-Evolved</code> by Kosinkadink — install via Manager. The de-facto standard.</p>

      <h2>How it integrates</h2>
      <p>
        AnimateDiff's <code>AnimateDiffLoaderGen1</code> node takes the UNet from your standard
        CheckpointLoader, wraps it with the motion module, and returns a "now-temporal" MODEL that
        KSampler uses. The rest of the workflow is unchanged — just operates on multiple frames.
      </p>

      <h2>Per-step compute cost</h2>
      <p>
        AnimateDiff adds ~30% per-step cost on top of base SDXL. For 16 frames at 1024×576 SDXL on
        M5 Pro: ~2 minutes total wall time (vs ~17 s for single image).
      </p>

      <NoteBlock title="The Mac default for quick video">
        AnimateDiff Lightning 4-step + SDXL base for a 2-second clip in ~30 seconds on M5 Pro. The
        fastest path to "image generation but in motion" on Mac.
      </NoteBlock>
    </>
  )
}

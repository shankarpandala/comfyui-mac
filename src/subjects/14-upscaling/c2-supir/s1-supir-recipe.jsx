import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1SupirRecipe() {
  return (
    <>
      <p>
        SUPIR is a diffusion-based upscaler. Where ESRGAN is a one-shot CNN, SUPIR runs a full
        diffusion sampling pass on the upscale, conditioned on the low-res input as a control image.
        Higher quality, much slower, much more memory.
      </p>

      <h2>Files</h2>
      <ul>
        <li><strong>SUPIR-v0Q</strong>: the standard variant (~5 GB)</li>
        <li><strong>SUPIR-v0F</strong>: face-tuned variant</li>
        <li>Plus an SDXL base (SUPIR uses SDXL as its diffusion engine)</li>
      </ul>

      <h2>Custom node</h2>
      <p><code>ComfyUI-SUPIR</code> by kijai — install via Manager.</p>

      <h2>Recipe</h2>
      <ol>
        <li><code>SUPIR_model_loader</code> → loads SUPIR weights + SDXL base.</li>
        <li><code>SUPIR_first_stage</code> → preprocesses the low-res input.</li>
        <li><code>SUPIR_encode</code> → encodes input to latent.</li>
        <li><code>SUPIR_sample</code> → runs sampling. Steps 30, denoise 0.5–0.7.</li>
        <li><code>SUPIR_decode</code> → produces upscaled output.</li>
      </ol>

      <h2>Wall time on M5 Pro</h2>
      <p>1024 → 2048 SUPIR upscale: ~3-4 minutes. (vs ESRGAN ~3-5 seconds).</p>

      <h2>When SUPIR is worth the wait</h2>
      <ul>
        <li>Hero shots — single image where quality matters more than speed.</li>
        <li>Restoration — old photos, degraded scans.</li>
        <li>Faces — SUPIR-v0F preserves faces exceptionally well.</li>
      </ul>

      <h2>When ESRGAN is enough</h2>
      <ul>
        <li>Batch upscaling many images.</li>
        <li>Frames in a video pipeline (Phase 3).</li>
        <li>Already-clean inputs that just need 4× resolution.</li>
      </ul>

      <h2>Memory budget</h2>
      <p>SUPIR + SDXL base = ~14 GB. Tight on Mac with other apps open. Quit Safari first.</p>

      <NoteBlock title="The recommendation">
        For Mac: ESRGAN as the daily-driver upscaler. SUPIR for hero shots and restoration tasks
        where the 3-minute wait is worth it. Don't put SUPIR in your video pipeline — too slow.
      </NoteBlock>
    </>
  )
}

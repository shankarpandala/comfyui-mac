import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3TileUpscale() {
  return (
    <>
      <p>Tile ControlNet for high-fidelity detail enhancement at higher resolution. Better than ESRGAN alone for hero shots.</p>

      <h2>Recipe</h2>
      <ol>
        <li>Generate at native res (1024 SDXL, 1024 FLUX).</li>
        <li><code>ImageUpscaleWithModel</code> + ESRGAN x2 → 2048 base.</li>
        <li>VAEEncode → 2048 latent.</li>
        <li>ControlNetLoader → SDXL Union, type=tile.</li>
        <li>ControlNetApplyAdvanced with the 2048 image as input, strength 0.7.</li>
        <li>KSampler at 2048 latent, denoise 0.4, 15 steps.</li>
        <li>VAEDecode + SaveImage.</li>
      </ol>

      <h2>Why it beats ESRGAN alone</h2>
      <p>
        ESRGAN upscales but doesn't add detail. Tile ControlNet upscale sample lets the diffusion
        model add new detail at high resolution while Tile ControlNet keeps it consistent with the
        input.
      </p>

      <h2>Wall time on M5 Pro</h2>
      <p>1024 → 2048 with tile-controlnet upscale: ~40 seconds. (vs ESRGAN alone: ~3s, but quality jump is real.)</p>

      <NoteBlock title="The hero-shot upscale">
        For hero outputs going to 4K final: ESRGAN x2 + Tile ControlNet refine + ESRGAN x2 again.
        Gets you to 4K with diffusion-added detail. ~80 seconds total.
      </NoteBlock>
    </>
  )
}

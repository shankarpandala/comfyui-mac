import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1SoftMasks() {
  return (
    <>
      <p>
        Differential Diffusion (Levin et al. 2024) extends inpainting to support masks with
        intermediate values, not just binary 0/1. Where standard inpaint treats gray as "blend
        50/50 with original", differential diffusion uses the gray value as a per-pixel denoise
        strength.
      </p>

      <h2>How it differs from standard inpaint</h2>
      <ul>
        <li><strong>Binary mask</strong>: hard cut between change and preserve.</li>
        <li><strong>Soft mask + standard inpaint</strong>: gray pixels blend after sampling. Visible interpolation.</li>
        <li><strong>Soft mask + differential diffusion</strong>: each pixel has its own denoise strength based on mask value. Smooth, natural transitions.</li>
      </ul>

      <h2>Use cases</h2>
      <ul>
        <li><strong>Hair editing</strong> — paint a soft gradient mask over hair; diff diffusion produces natural variation.</li>
        <li><strong>Lighting changes</strong> — gradient masks for lighting transitions.</li>
        <li><strong>Style blending</strong> — feather an inpainted region's transition into the original style.</li>
      </ul>

      <h2>Custom node</h2>
      <p><code>ComfyUI-Differential-Diffusion</code> — install via Manager. Adds a <code>DifferentialDiffusion</code> node.</p>

      <h2>Wiring</h2>
      <ol>
        <li>Standard SDXL load.</li>
        <li><code>DifferentialDiffusion</code> node patches the MODEL.</li>
        <li>LoadImage with soft (gradient) mask.</li>
        <li>SetLatentNoiseMask with the soft mask.</li>
        <li>KSampler → standard.</li>
      </ol>

      <h2>Soft mask creation</h2>
      <ul>
        <li>MaskBlur with 30+ pixel radius produces good soft masks from binary masks.</li>
        <li>Hand-paint with low brush opacity in MaskEditor.</li>
        <li>Generate from depth maps for distance-based effects.</li>
      </ul>

      <NoteBlock title="When to reach for it">
        Differential diffusion is power-user territory. For 95% of inpaint work, binary mask + soft
        edge feather is enough. Reach for differential diffusion when you specifically need
        per-pixel denoise control — usually for cosmetics, lighting, or style transitions.
      </NoteBlock>
    </>
  )
}

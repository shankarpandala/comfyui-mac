import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Fill() {
  return (
    <>
      <p>
        FLUX Fill is the dedicated FLUX inpainting model. Better than using base FLUX with denoise
        partial-strength inpainting because Fill was specifically trained on mask+inpaint pairs.
      </p>

      <h2>The model</h2>
      <ul>
        <li><strong>file</strong>: <code>flux1-fill-dev-Q5_K_S.gguf</code></li>
        <li>Same 12 B param shape as base FLUX, different weights</li>
        <li>HF: <code>city96/FLUX.1-Fill-dev-gguf</code></li>
      </ul>

      <h2>Recipe</h2>
      <ol>
        <li>UnetLoaderGGUF → load Fill GGUF.</li>
        <li>DualCLIPLoaderGGUF + VAELoader as usual.</li>
        <li>LoadImage → the image to inpaint.</li>
        <li>LoadImage → the mask (or paint a mask via MaskEditor).</li>
        <li>VAEEncode → encode the input image to latent.</li>
        <li>InpaintModelConditioning → wire latent + mask + positive conditioning.</li>
        <li>KSampler → 20 steps, euler, simple, denoise=1.0.</li>
        <li>VAEDecode + SaveImage.</li>
      </ol>

      <h2>Mask conventions</h2>
      <ul>
        <li>Mask: white = inpaint here; black = keep original.</li>
        <li>Soft (gray) edges blend the inpainted region with the original.</li>
        <li>ComfyUI's MaskEditor (Custom-Scripts) lets you paint masks directly on the canvas.</li>
      </ul>

      <h2>What FLUX Fill does well</h2>
      <ul>
        <li>Seamless integration of inpainted regions — no visible mask seam.</li>
        <li>Style coherence — the inpainted region matches the surrounding image.</li>
        <li>Object insertion — "add a hat" works without ghosting.</li>
        <li>Object removal — masking out an unwanted element with empty positive prompt.</li>
      </ul>

      <h2>What it doesn't do</h2>
      <ul>
        <li>Outpainting — for that, see Subject 13.</li>
        <li>Region-specific style — Fill follows the image's existing style, not a new one.</li>
      </ul>

      <NoteBlock title="Fill is a separate model, not a flag">
        You can't make base FLUX Dev do good inpainting by setting denoise=0.5. Fill was trained
        for the task. The difference in seam quality is significant.
      </NoteBlock>
    </>
  )
}

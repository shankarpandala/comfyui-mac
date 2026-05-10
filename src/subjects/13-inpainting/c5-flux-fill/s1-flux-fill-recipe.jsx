import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1FluxFillRecipe() {
  return (
    <>
      <p>
        FLUX Fill is the FLUX-native inpaint model. We introduced it in Subject 08 / Chapter 6.
        This section is the concrete Mac recipe — the workflow you actually wire up.
      </p>

      <h2>Files needed</h2>
      <ul>
        <li><code>flux1-fill-dev-Q5_K_S.gguf</code> — FLUX Fill UNet (~7.8 GB)</li>
        <li><code>t5-v1_1-xxl-encoder-Q5_K_M.gguf</code> — T5 GGUF</li>
        <li><code>clip_l.safetensors</code></li>
        <li><code>ae.safetensors</code> — FLUX VAE</li>
      </ul>

      <h2>The full graph</h2>
      <ol>
        <li><code>UnetLoaderGGUF</code> → flux1-fill-dev-Q5_K_S.gguf → MODEL</li>
        <li><code>DualCLIPLoaderGGUF</code> with type=flux → CLIP</li>
        <li><code>VAELoader</code> → ae.safetensors → VAE</li>
        <li><code>LoadImage</code> → input image (with mask painted in MaskEditor)</li>
        <li><code>CLIPTextEncode (positive)</code> → "what to put in the masked region"</li>
        <li><code>FluxGuidance</code> → wrap positive cond, guidance 30 (Fill uses higher guidance than Dev — recommended 30 by Black Forest)</li>
        <li><code>CLIPTextEncode (negative)</code> → empty or quality-negative</li>
        <li><code>InpaintModelConditioning</code> → wires positive + negative + image + mask + VAE</li>
        <li><code>KSampler</code> → 20 steps, cfg 1.0, euler, simple, denoise 1.0</li>
        <li><code>VAEDecode</code> + <code>SaveImage</code></li>
      </ol>

      <h2>The unusual guidance value</h2>
      <p>
        FLUX Fill is trained with high guidance (~30). This is non-intuitive — base FLUX Dev uses
        guidance 3.5. Using 3.5 with FLUX Fill produces washed-out edits. Stick to 30 for Fill.
      </p>

      <h2>Wall time on M5 Pro</h2>
      <p>~50–60 s per inpaint at 1024×1024.</p>

      <h2>Memory budget</h2>
      <p>FLUX Fill UNet (7.8 GB) + T5 GGUF + CLIP + VAE + activations = ~14 GB. Comfortable.</p>

      <h2>Common Fill recipes</h2>
      <ul>
        <li><strong>Replace clothing</strong>: paint mask over outfit; positive prompt = new outfit description.</li>
        <li><strong>Add accessory</strong>: paint mask where accessory should appear; positive = "wearing [accessory]".</li>
        <li><strong>Background swap</strong>: paint mask everywhere except the subject; positive = new background description.</li>
        <li><strong>Object removal</strong>: paint mask over object; positive = "background, no people" or empty.</li>
      </ul>

      <NoteBlock title="The Mac inpaint default">
        FLUX Fill GGUF Q5_K_S is the recommended Mac default for serious inpainting. Quality is
        excellent, fits comfortably in memory, and integrates with the rest of the FLUX ecosystem.
      </NoteBlock>
    </>
  )
}

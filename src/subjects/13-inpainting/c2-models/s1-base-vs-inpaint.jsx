import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1BaseVsInpaint() {
  return (
    <>
      <p>
        You can inpaint with a base model + denoise &lt; 1.0, OR with a dedicated inpaint model.
        Dedicated models are trained on (image, mask, prompt) triples and produce noticeably better
        seam quality.
      </p>

      <h2>Base model + denoise inpaint</h2>
      <p>What we covered in section 2. Wire mask via SetLatentNoiseMask, run sampler at denoise 0.4-0.7.</p>
      <ul>
        <li>Pros: works with any base; no extra model download.</li>
        <li>Cons: visible seams at mask boundary; lower fidelity to surrounding context.</li>
      </ul>

      <h2>Dedicated inpaint models</h2>
      <ul>
        <li><strong>SDXL Inpainting Base</strong> — official Stability inpaint variant. ~6.7 GB. Use with InpaintModelConditioning.</li>
        <li><strong>FLUX Fill</strong> (Subject 08 / Chapter 6) — FLUX-native inpaint. ~7.8 GB GGUF Q5_K_S.</li>
        <li><strong>BrushNet</strong> (next chapter) — alternative architecture, works on top of base.</li>
        <li><strong>PowerPaint</strong> — even newer; good for object-aware inpaints.</li>
      </ul>

      <h2>When to use which</h2>
      <ul>
        <li><strong>Quick touch-up</strong> (sharpen face, fix small artifact) → base + low denoise.</li>
        <li><strong>Add or remove an object</strong> → SDXL Inpainting or FLUX Fill.</li>
        <li><strong>Object-aware editing with strict surrounding preservation</strong> → BrushNet / PowerPaint.</li>
      </ul>

      <h2>Workflow comparison</h2>
      <table>
        <thead><tr><th>Goal</th><th>Quick path</th><th>Quality path</th></tr></thead>
        <tbody>
          <tr><td>Touch-up faces</td><td>SDXL + denoise 0.4 + face mask</td><td>SDXL + Detailer (Subject 14)</td></tr>
          <tr><td>Add a hat to a person</td><td>SDXL + denoise 0.7</td><td>FLUX Fill</td></tr>
          <tr><td>Remove a person from photo</td><td>SDXL Inpaint + empty prompt</td><td>FLUX Fill + "background, no people"</td></tr>
          <tr><td>Change outfit</td><td>FLUX Fill</td><td>FLUX Fill + LoRA + ControlNet pose</td></tr>
        </tbody>
      </table>

      <NoteBlock title="The Mac default">
        For most inpaint work on Mac: FLUX Fill GGUF Q5_K_S. Slightly slower than SDXL Inpaint
        (~50 s vs ~20 s per inpaint) but visibly better seams and context awareness. SDXL Inpaint
        for fast iteration.
      </NoteBlock>
    </>
  )
}

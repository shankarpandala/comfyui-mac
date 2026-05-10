import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Brushnet() {
  return (
    <>
      <p>
        BrushNet is an inpainting framework that adds a parallel branch (similar to ControlNet)
        specifically tuned for inpainting tasks. Excellent at object-aware editing — the model
        understands what's around the masked region and matches lighting, perspective, scale.
      </p>

      <h2>Files</h2>
      <ul>
        <li><strong>SD 1.5 BrushNet</strong>: ~1.5 GB</li>
        <li><strong>SDXL BrushNet</strong>: ~3 GB</li>
      </ul>

      <h2>Custom node</h2>
      <p><code>ComfyUI-BrushNet</code> by nullquant — install via Manager.</p>

      <h2>Recipe (SDXL BrushNet)</h2>
      <ol>
        <li>Standard SDXL load.</li>
        <li><code>BrushNetLoader</code> → load brushnet weights.</li>
        <li>LoadImage + mask.</li>
        <li><code>BrushNet</code> node → wires base MODEL + BrushNet weights + image + mask.</li>
        <li>Standard CLIPTextEncode prompts.</li>
        <li>KSampler → denoise 1.0, steps 20-25.</li>
      </ol>

      <h2>What BrushNet does well</h2>
      <ul>
        <li><strong>Object insertion</strong> — "add a coffee cup on the table" produces a coffee cup that matches the table's lighting, perspective, and scale.</li>
        <li><strong>Object removal</strong> — context-aware fill of where the object was.</li>
        <li><strong>Edge preservation</strong> — surrounding pixels stay bit-identical (truly).</li>
      </ul>

      <h2>Memory on Mac</h2>
      <p>SDXL + BrushNet ~10 GB. Comfortable on M5 Pro.</p>

      <NoteBlock title="BrushNet vs FLUX Fill">
        FLUX Fill produces equally good or better seams but requires the FLUX base. BrushNet works
        with SDXL — useful when you have an SDXL character LoRA you want to inpaint with. Both are
        viable; pick based on which base you're already in.
      </NoteBlock>
    </>
  )
}

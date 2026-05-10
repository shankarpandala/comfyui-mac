import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Powerpaint() {
  return (
    <>
      <p>
        PowerPaint is another SD 1.5 / SDXL inpainting framework. Notable for explicit modes — it
        has separate "object inpaint", "shape-guided inpaint", and "outpainting" modes baked in.
      </p>

      <h2>Modes</h2>
      <ul>
        <li><strong>Text-guided inpainting</strong> — standard mode; prompt drives the inpaint content.</li>
        <li><strong>Object removal</strong> — empty prompt removes the masked object cleanly.</li>
        <li><strong>Shape-guided inpainting</strong> — preserves the masked area's silhouette while changing content.</li>
        <li><strong>Outpainting</strong> — extends the image into masked regions outside the original.</li>
      </ul>

      <h2>Files</h2>
      <ul>
        <li>PowerPaint v2 SDXL: ~3 GB</li>
        <li>BrushNet-PowerPaint variant: ships with both</li>
      </ul>

      <h2>Custom node</h2>
      <p><code>ComfyUI-PowerPaint</code> — install via Manager.</p>

      <h2>Picking PowerPaint vs BrushNet vs FLUX Fill</h2>
      <table>
        <thead><tr><th>Use case</th><th>Best choice</th></tr></thead>
        <tbody>
          <tr><td>Object removal (clean fill)</td><td>PowerPaint object-removal mode</td></tr>
          <tr><td>Add object to scene</td><td>BrushNet (best context awareness)</td></tr>
          <tr><td>Outpainting (extend image)</td><td>PowerPaint outpaint mode</td></tr>
          <tr><td>FLUX-quality inpaint</td><td>FLUX Fill</td></tr>
          <tr><td>Quick generic inpaint</td><td>SDXL Inpaint base</td></tr>
        </tbody>
      </table>

      <NoteBlock title="The 'one inpaint method per workflow' rule">
        Don't try to combine PowerPaint + BrushNet + FLUX Fill in the same workflow. Pick one based
        on the goal. Each is a complete inpaint system; mixing them produces conflict.
      </NoteBlock>
    </>
  )
}

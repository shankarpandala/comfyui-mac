import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1WhichQuant() {
  return (
    <>
      <p>
        Concrete quant comparison for Hunyuan on M5 Pro. Picks based on memory budget and quality
        requirements.
      </p>

      <h2>Hunyuan UNet quant comparison</h2>
      <table>
        <thead>
          <tr><th>Quant</th><th>UNet size</th><th>Mac feasibility</th><th>Quality vs fp16</th></tr>
        </thead>
        <tbody>
          <tr><td>fp16 reference</td><td>~26 GB</td><td>❌</td><td>Reference</td></tr>
          <tr><td>Q8_0</td><td>~14 GB</td><td>❌ too tight with activations</td><td>~99%</td></tr>
          <tr><td>Q6_K</td><td>~10.5 GB</td><td>⚠️ very tight</td><td>~98%</td></tr>
          <tr><td>Q5_K_S</td><td>~9.2 GB</td><td>⚠️ tight at full resolution</td><td>~97%</td></tr>
          <tr><td>Q4_K_M</td><td>~8 GB</td><td>✅</td><td>~95%</td></tr>
          <tr><td>Q4_K_S</td><td>~7.5 GB</td><td>✅ Mac default</td><td>~94%</td></tr>
          <tr><td>Q3_K_M</td><td>~6 GB</td><td>✅ if very tight</td><td>~88%</td></tr>
        </tbody>
      </table>

      <h2>Picking based on resolution</h2>
      <ul>
        <li><strong>544×960 × 121 frames</strong>: Q4_K_S is comfortable.</li>
        <li><strong>720×720 × 121 frames</strong>: Q4_K_S works; Q5_K_S tight.</li>
        <li><strong>960×544 × 121 frames</strong>: same as 544×960.</li>
        <li><strong>1280×720 × 121 frames</strong>: Q4_K_S only with --lowvram.</li>
      </ul>

      <h2>Picking based on goal</h2>
      <ul>
        <li><strong>B-roll / social media</strong>: Q4_K_S, fits comfortably, fast enough.</li>
        <li><strong>Hero shots</strong>: Q5_K_S at lower resolution (544×960), then upscale post.</li>
        <li><strong>If you have to use Q3</strong>: only for ideation; quality drop is real.</li>
      </ul>

      <h2>Where to download</h2>
      <p><code>city96/HunyuanVideo-gguf</code> on HuggingFace. Pick the matching file.</p>

      <NoteBlock title="The Mac default">
        Q4_K_S at 544×960 × 121 frames is the recommended starting point. Quality is good, runs in
        ~12 minutes, fits comfortably on 24 GB. Tune from there.
      </NoteBlock>
    </>
  )
}

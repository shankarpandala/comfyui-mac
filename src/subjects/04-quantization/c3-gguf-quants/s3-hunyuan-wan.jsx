import VRAMBudgetBlock from '../../../components/content/VRAMBudgetBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3HunyuanWan() {
  return (
    <>
      <p>
        Video models are the tightest fit on a 24 GB Mac. Hunyuan and Wan are both ~13–14 B-param
        UNets — at fp16 they exceed memory; at GGUF Q4 they squeeze in. This section is the
        tight-budget reality for both.
      </p>

      <h2>HunyuanVideo</h2>
      <table>
        <thead>
          <tr><th>Quant</th><th>UNet size</th><th>Mac feasibility (5 s @ 544×960)</th></tr>
        </thead>
        <tbody>
          <tr><td>fp16</td><td>~26 GB</td><td>❌</td></tr>
          <tr><td>fp8</td><td>~13 GB</td><td>❌ MPS</td></tr>
          <tr><td>Q8_0</td><td>~14 GB</td><td>❌ too tight with activations</td></tr>
          <tr><td>Q5_K_S</td><td>~9.2 GB</td><td>⚠️ tight; works at lower resolution</td></tr>
          <tr><td>Q4_K_S</td><td>~7.5 GB</td><td>✅ Mac default</td></tr>
          <tr><td>Q3_K_M</td><td>~6.0 GB</td><td>⚠️ quality drop noticeable</td></tr>
        </tbody>
      </table>

      <VRAMBudgetBlock
        target="24 GB unified (M5 Pro)"
        rows={[
          { component: 'HunyuanVideo UNet', dtype: 'GGUF Q4_K_S → bf16', size: '~7.5 GB', notes: 'Bulk weights' },
          { component: 'Hunyuan T5 + LLAMA encoders', dtype: 'GGUF Q5', size: '~3.5 GB', notes: 'Combined text encoders' },
          { component: 'Hunyuan VAE (3D)', dtype: 'bf16', size: '~430 MB', notes: 'Bigger than image VAEs' },
          { component: 'Activations (5 s × 544×960 × 16 channels)', dtype: 'mixed', size: '~5–7 GB', notes: 'Video activations balloon' },
          { component: 'Total peak', dtype: '', size: '~17 GB', notes: 'Tight but viable; --lowvram helps' },
        ]}
      />

      <h2>Wan 2.1 / 2.2 — the 14B and 5B variants</h2>
      <p>
        Wan is two models in one repo: a 14B big model for highest quality, and a 5B smaller model
        for speed. Mac users almost always want the 5B variant or 14B Q4.
      </p>
      <table>
        <thead>
          <tr><th>Variant + quant</th><th>UNet size</th><th>Mac feasibility (5 s @ 720×480)</th></tr>
        </thead>
        <tbody>
          <tr><td>Wan 2.2 5B fp16</td><td>~10 GB</td><td>✅ comfortable</td></tr>
          <tr><td>Wan 2.2 5B Q5_K_S</td><td>~3.5 GB</td><td>✅ extra-comfortable</td></tr>
          <tr><td>Wan 2.1 14B Q4_K_S</td><td>~8 GB</td><td>✅ default for highest quality</td></tr>
          <tr><td>Wan 2.1 14B Q5_K_S</td><td>~10 GB</td><td>⚠️ tight with I2V at 720p</td></tr>
        </tbody>
      </table>

      <h2>Wan I2V vs T2V</h2>
      <p>
        Wan I2V (image-to-video) is more memory-intensive than t2v at the same resolution because
        the image-conditioning encoder lives alongside the UNet. Bump down a quant level when going
        from t2v to i2v if you're tight on budget.
      </p>

      <h2>Practical advice</h2>
      <ul>
        <li><strong>Start with LTX-Video</strong> (Subject 18) for video on Mac — it's the smallest and most Mac-friendly. Use Hunyuan/Wan for higher quality when you have time.</li>
        <li><strong>Render at native resolution.</strong> 544×960 (Hunyuan) and 720×480 / 832×480 (Wan) are tuned. Going larger increases activation cost faster than UNet cost.</li>
        <li><strong>5 seconds is the sweet spot.</strong> Both Hunyuan and Wan are trained for ~5-second clips. Going longer means sliding-window inference.</li>
        <li><strong>Add <code>--lowvram</code></strong> for Hunyuan Q4 and Wan 14B Q4 — buys you headroom at small step-time cost on unified memory.</li>
      </ul>

      <NoteBlock title="If you OOM">
        Drop one quant level (Q5 → Q4), then drop resolution, then enable lowvram, then drop frame
        count. In that order. Subject 19 and Subject 20 walk through the recipes.
      </NoteBlock>
    </>
  )
}

import VRAMBudgetBlock from '../../../components/content/VRAMBudgetBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2FluxQuants() {
  return (
    <>
      <p>
        FLUX is the model most Mac users want and most often hit a wall trying to run. This section
        is the GGUF-by-quant comparison for FLUX Dev specifically, with the M5 Pro 24 GB budget in
        mind.
      </p>

      <h2>FLUX Dev quant comparison</h2>
      <table>
        <thead>
          <tr>
            <th>Quant</th>
            <th>UNet size</th>
            <th>Quality vs fp16</th>
            <th>Mac budget OK?</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>fp16 reference</td><td>~23 GB</td><td>Reference</td><td>❌ won't fit</td></tr>
          <tr><td>Q8_0</td><td>~12 GB</td><td>Indistinguishable in blind A/B</td><td>⚠️ tight (UNet alone is 12 GB; need ~16 GB total)</td></tr>
          <tr><td>Q6_K</td><td>~9.7 GB</td><td>Marginal degradation</td><td>✅ comfortable</td></tr>
          <tr><td>Q5_K_M</td><td>~8.3 GB</td><td>Tiny visible loss in fine text</td><td>✅ comfortable. Recommended.</td></tr>
          <tr><td>Q5_K_S</td><td>~7.8 GB</td><td>Slight nudge below K_M</td><td>✅ Mac default.</td></tr>
          <tr><td>Q4_K_M</td><td>~7.0 GB</td><td>Visible: text smudge, finger artifacts</td><td>✅ tight-budget choice</td></tr>
          <tr><td>Q4_K_S</td><td>~6.6 GB</td><td>~Q4_K_M; tightest acceptable</td><td>✅ tight-budget choice</td></tr>
          <tr><td>Q3_K_M</td><td>~5.5 GB</td><td>Noticeable quality drop</td><td>⚠️ avoid for production</td></tr>
        </tbody>
      </table>

      <h2>Full FLUX Dev workflow budget on M5 Pro</h2>
      <p>FLUX needs UNet + T5 + CLIP-L + VAE in memory. Putting it together for the recommended Q5_K_S setup:</p>

      <VRAMBudgetBlock
        target="24 GB unified (M5 Pro)"
        rows={[
          { component: 'FLUX Dev UNet', dtype: 'GGUF Q5_K_S → bf16', size: '~7.8 GB', notes: 'On disk; dequantized in-place at compute' },
          { component: 'T5-XXL encoder', dtype: 'GGUF Q5_K_M → fp16', size: '~3.5 GB', notes: 'Big text encoder' },
          { component: 'CLIP-L encoder', dtype: 'fp16', size: '~250 MB', notes: 'Tiny' },
          { component: 'FLUX VAE', dtype: 'bf16', size: '~170 MB', notes: 'Decoder only on first encode/decode' },
          { component: 'Activations + KSampler temporaries', dtype: 'mixed', size: '~3 GB', notes: 'For 1024×1024 single-image' },
          { component: 'Total peak', dtype: '', size: '~14.7 GB', notes: 'Comfortably under 16 GB working budget' },
        ]}
      />

      <h2>What changes for FLUX Schnell</h2>
      <p>Same UNet size profile, same quants available. Schnell's advantage is step count:</p>
      <ul>
        <li>FLUX Dev Q5_K_S, 20 steps, 1024×1024 → ~45 s wall time on M5 Pro</li>
        <li>FLUX Schnell Q5_K_S, 4 steps, 1024×1024 → ~8 s wall time</li>
      </ul>
      <p>For ideation use Schnell; for hero shots use Dev.</p>

      <h2>Where to download</h2>
      <ul>
        <li><strong>UNet GGUF</strong>: <code>city96/FLUX.1-dev-gguf</code> on HuggingFace (and -schnell-gguf).</li>
        <li><strong>T5 GGUF</strong>: <code>city96/t5-v1_1-xxl-encoder-gguf</code>.</li>
        <li><strong>CLIP-L</strong>: any FLUX-compatible CLIP-L safetensors (Black Forest Labs ships one).</li>
        <li><strong>VAE</strong>: <code>black-forest-labs/FLUX.1-schnell</code> repo's <code>ae.safetensors</code> works for both Dev and Schnell.</li>
      </ul>

      <NoteBlock title="The recipe for chapter 4">
        Subject 08 has the full Mac FLUX recipe with downloadable workflow. This chapter teaches you
        why the recipe picks the components it does. Knowing why = ability to swap when a better
        quant ships.
      </NoteBlock>
    </>
  )
}

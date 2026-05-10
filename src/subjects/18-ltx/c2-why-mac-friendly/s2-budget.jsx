import VRAMBudgetBlock from '../../../components/content/VRAMBudgetBlock.jsx'

export default function S2Budget() {
  return (
    <>
      <p>LTX memory budget recap, with the headroom for stacking ControlNets, IP-Adapters, and LoRAs.</p>

      <h2>LTX 2B baseline</h2>
      <VRAMBudgetBlock
        target="24 GB unified"
        rows={[
          { component: 'LTX UNet 2B', dtype: 'fp16', size: '~5 GB', notes: '' },
          { component: 'T5 GGUF Q5_K_M', dtype: 'fp16', size: '~3.5 GB', notes: 'Or fp16 T5 ~9.5 GB' },
          { component: 'LTX VAE', dtype: 'bf16', size: '~600 MB', notes: '' },
          { component: 'Activations (97 frames @ 768×512)', dtype: 'mixed', size: '~2.5 GB', notes: '' },
          { component: 'Total', dtype: '', size: '~12 GB', notes: 'Plenty of headroom' },
        ]}
      />

      <h2>LTX + LoRA stack (e.g., motion or style)</h2>
      <p>Each LoRA: ~10–100 MB at runtime. Adding 2-3 LoRAs barely affects the budget.</p>

      <h2>LTX 13B</h2>
      <p>
        13B variant requires GGUF quantization on Mac. ~12 GB UNet at Q5_K_S. Total budget ~17 GB.
        Wall time ~3× slower than 2B.
      </p>

      <h2>The headroom advantage</h2>
      <p>
        LTX leaves ~4 GB free in the working budget. Means you can run a browser, monitor GPU
        usage, do other work alongside. With Hunyuan or Wan, 24 GB is fully committed — no
        headroom.
      </p>

      <h2>When LTX won't fit</h2>
      <p>
        Only at very high resolutions (1280×720+) with long clips (105 frames). Then drop frames
        first (97 → 81), then drop resolution (1280 → 1024).
      </p>
    </>
  )
}

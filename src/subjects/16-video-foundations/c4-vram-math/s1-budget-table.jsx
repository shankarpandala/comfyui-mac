import VRAMBudgetBlock from '../../../components/content/VRAMBudgetBlock.jsx'

export default function S1BudgetTable() {
  return (
    <>
      <p>
        Concrete VRAM budgets per video model on M5 Pro 24 GB. Use these to predict whether a
        workflow will OOM before spending an hour rendering.
      </p>

      <h2>LTX-Video 2B (recommended Mac default)</h2>
      <VRAMBudgetBlock
        target="24 GB unified (M5 Pro)"
        rows={[
          { component: 'LTX UNet', dtype: 'fp16', size: '~5 GB', notes: '' },
          { component: 'LTX text encoder (T5)', dtype: 'fp16', size: '~9.5 GB', notes: 'Or GGUF Q5 for ~3.5 GB' },
          { component: 'LTX VAE', dtype: 'bf16', size: '~600 MB', notes: '' },
          { component: 'Activations (5s @ 768×512 × 24 fps)', dtype: 'mixed', size: '~3 GB', notes: '' },
          { component: 'Total', dtype: '', size: '~12 GB (with GGUF T5)', notes: 'Comfortable' },
        ]}
      />

      <h2>HunyuanVideo Q4_K_S</h2>
      <VRAMBudgetBlock
        target="24 GB unified"
        rows={[
          { component: 'Hunyuan UNet', dtype: 'GGUF Q4_K_S', size: '~7.5 GB', notes: '' },
          { component: 'Hunyuan text encoders', dtype: 'GGUF Q5', size: '~3.5 GB', notes: 'Combined LLAMA + CLIP' },
          { component: 'Hunyuan 3D VAE', dtype: 'bf16', size: '~430 MB', notes: '' },
          { component: 'Activations (5s @ 544×960 × 24 fps)', dtype: 'mixed', size: '~5 GB', notes: 'Video activations balloon' },
          { component: 'Total', dtype: '', size: '~16-17 GB', notes: 'Tight; --lowvram helps' },
        ]}
      />

      <h2>Wan 2.1 14B I2V Q4_K_S</h2>
      <VRAMBudgetBlock
        target="24 GB unified"
        rows={[
          { component: 'Wan 14B UNet', dtype: 'GGUF Q4_K_S', size: '~8 GB', notes: '' },
          { component: 'Wan umT5 + CLIP encoders', dtype: 'GGUF Q5', size: '~3.5 GB', notes: '' },
          { component: 'Wan VAE', dtype: 'bf16', size: '~600 MB', notes: '' },
          { component: 'Activations (5s @ 832×480 × 16 fps)', dtype: 'mixed', size: '~6 GB', notes: 'I2V adds image-cond cost' },
          { component: 'Total', dtype: '', size: '~18-19 GB', notes: 'Tight; --lowvram + --cpu-vae required' },
        ]}
      />

      <h2>AnimateDiff SDXL (lighter alternative)</h2>
      <VRAMBudgetBlock
        target="24 GB unified"
        rows={[
          { component: 'SDXL UNet', dtype: 'fp16', size: '~6.7 GB', notes: '' },
          { component: 'AnimateDiff motion module', dtype: 'fp16', size: '~1.2 GB', notes: '' },
          { component: 'CLIP + VAE', dtype: 'fp16', size: '~1.3 GB', notes: '' },
          { component: 'Activations (16 frames @ 1024×576)', dtype: 'mixed', size: '~3 GB', notes: '' },
          { component: 'Total', dtype: '', size: '~12 GB', notes: 'Comfortable' },
        ]}
      />

      <h2>The Mac video ladder</h2>
      <ol>
        <li><strong>Quick test</strong>: AnimateDiff SDXL — fits comfortably, runs fast.</li>
        <li><strong>Daily-driver video</strong>: LTX-Video — best Mac quality/speed ratio.</li>
        <li><strong>High-quality short</strong>: Hunyuan Q4_K_S — slow but excellent output.</li>
        <li><strong>Image-to-video</strong>: Wan 14B I2V — best i2v quality, tightest memory.</li>
      </ol>
    </>
  )
}

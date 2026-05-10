import VRAMBudgetBlock from '../../../components/content/VRAMBudgetBlock.jsx'

export default function S1Fp16Budget() {
  return (
    <>
      <p>
        SDXL is the comfortable workhorse on M5 Pro. Full fp16 fits with plenty of headroom for
        ControlNets, IP-Adapters, LoRAs, and detailers. Concrete budget below.
      </p>

      <h2>SDXL fp16 standard workflow</h2>
      <VRAMBudgetBlock
        target="24 GB unified (M5 Pro)"
        rows={[
          { component: 'SDXL UNet', dtype: 'fp16', size: '~6.7 GB', notes: '' },
          { component: 'CLIP-L + CLIP-G', dtype: 'fp16', size: '~950 MB', notes: 'Bundled in checkpoint' },
          { component: 'SDXL VAE', dtype: 'fp16', size: '~340 MB', notes: '' },
          { component: 'Activations (1024² × 25 steps)', dtype: 'fp16', size: '~2.5 GB', notes: '' },
          { component: 'Total peak (no extras)', dtype: '', size: '~10.5 GB', notes: 'Comfortable on 16 GB working budget' },
        ]}
      />

      <h2>SDXL + 1 ControlNet</h2>
      <VRAMBudgetBlock
        target="24 GB unified (M5 Pro)"
        rows={[
          { component: 'SDXL stack as above', dtype: 'fp16', size: '~10.5 GB', notes: '' },
          { component: 'SDXL ControlNet (Union)', dtype: 'fp16', size: '~2.5 GB', notes: '' },
          { component: 'ControlNet residuals (per UNet block)', dtype: 'fp16', size: '~1 GB', notes: '' },
          { component: 'Total peak', dtype: '', size: '~14 GB', notes: 'Tight but workable' },
        ]}
      />

      <h2>SDXL + 1 ControlNet + IP-Adapter Plus</h2>
      <p>
        Adding IP-Adapter brings ~600 MB IP weights + ~250 MB CLIP-Vision encoder + small per-step
        cost. Total ~15.5 GB. Still fits.
      </p>

      <h2>SDXL + ControlNet + IP-Adapter + base+refiner</h2>
      <p>
        Base + refiner doubles the UNet load. Combined with ControlNet and IP-Adapter, you'd be at
        ~21 GB — too tight without --lowvram. This is one of the strongest arguments against
        running base+refiner on Mac.
      </p>

      <h2>The pattern</h2>
      <p>SDXL fp16 base alone uses ~10–11 GB. Each addition costs ~1–3 GB. Stay under 16 GB combined for safe headroom.</p>
    </>
  )
}

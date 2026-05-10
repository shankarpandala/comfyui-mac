import VRAMBudgetBlock from '../../../components/content/VRAMBudgetBlock.jsx'

export default function S1Under12gb() {
  return (
    <>
      <p>
        For very tight memory situations (heavy LoRA stacks, multiple ControlNets, or running
        ComfyUI alongside other apps), here's a Schnell recipe that fits in under 12 GB total.
      </p>

      <h2>The under-12 GB Schnell setup</h2>
      <VRAMBudgetBlock
        target="12 GB working budget"
        rows={[
          { component: 'FLUX Schnell UNet', dtype: 'GGUF Q4_K_S → bf16', size: '~6.6 GB', notes: 'Tight quant' },
          { component: 'T5-XXL', dtype: 'GGUF Q5_K_M → fp16', size: '~3.5 GB', notes: '' },
          { component: 'CLIP-L', dtype: 'fp16', size: '~250 MB', notes: '' },
          { component: 'FLUX VAE', dtype: 'bf16', size: '~170 MB', notes: '' },
          { component: 'Activations (1024², 4 steps)', dtype: 'mixed', size: '~1.5 GB', notes: 'Schnell uses fewer steps' },
          { component: 'Total peak', dtype: '', size: '~12 GB', notes: 'Just under target' },
        ]}
      />

      <h2>Recipe</h2>
      <ul>
        <li><strong>UNet</strong>: <code>flux1-schnell-Q4_K_S.gguf</code></li>
        <li><strong>T5</strong>: <code>t5-v1_1-xxl-encoder-Q5_K_M.gguf</code></li>
        <li><strong>CLIP-L</strong>: <code>clip_l.safetensors</code></li>
        <li><strong>VAE</strong>: <code>ae.safetensors</code></li>
        <li><strong>steps</strong>: 4</li>
        <li><strong>guidance</strong>: 0</li>
        <li><strong>cfg</strong>: 1.0</li>
        <li><strong>sampler</strong>: euler / simple</li>
        <li><strong>resolution</strong>: 1024×1024</li>
      </ul>

      <h2>Wall time on M5 Pro</h2>
      <p>~8–10 s per image. Same as Q5_K_S Schnell — quant level barely affects time at 4 steps.</p>

      <h2>Quality cost</h2>
      <p>Q4_K_S Schnell is ~92% of Q5_K_S Schnell quality. Visible on tiny text and faces. Acceptable for ideation, B-roll, social media. Not for hero shots.</p>

      <h2>What this leaves room for</h2>
      <ul>
        <li>2–3 character LoRAs (each ~50–200 MB)</li>
        <li>One IP-Adapter</li>
        <li>One ControlNet</li>
      </ul>
      <p>The freed memory is what makes the Phase 5 capstone (Subject 29) feasible: many adapters all loaded together for a complete identity stack.</p>
    </>
  )
}

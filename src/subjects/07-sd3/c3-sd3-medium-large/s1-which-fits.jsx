import VRAMBudgetBlock from '../../../components/content/VRAMBudgetBlock.jsx'

export default function S1WhichFits() {
  return (
    <>
      <p>
        SD3 has Medium and Large; SD3.5 has Medium, Large, and Large Turbo. The fit-on-Mac story
        differs significantly.
      </p>

      <h2>Default-config budgets</h2>

      <h3>SD3.5 Medium</h3>
      <VRAMBudgetBlock
        target="24 GB unified"
        rows={[
          { component: 'SD3.5 Medium UNet', dtype: 'bf16', size: '~5 GB', notes: '' },
          { component: 'CLIP-L + CLIP-G', dtype: 'fp16', size: '~950 MB', notes: '' },
          { component: 'T5-XXL', dtype: 'fp16', size: '~9.5 GB', notes: 'Or GGUF Q5_K_M (~3.5 GB)' },
          { component: 'SD3 VAE', dtype: 'bf16', size: '~170 MB', notes: '' },
          { component: 'Activations', dtype: 'mixed', size: '~3 GB', notes: '' },
          { component: 'Total peak', dtype: '', size: '~18.6 GB', notes: 'Tight; with GGUF T5 → ~12.6 GB comfortable' },
        ]}
      />

      <h3>SD3.5 Large</h3>
      <VRAMBudgetBlock
        target="24 GB unified"
        rows={[
          { component: 'SD3.5 Large UNet', dtype: 'bf16', size: '~16 GB', notes: '' },
          { component: 'Encoders + VAE + activations', dtype: 'mixed', size: '~14 GB', notes: 'With fp16 T5' },
          { component: 'Total peak', dtype: '', size: '~30 GB', notes: 'WONT FIT' },
          { component: 'With GGUF T5 + --lowvram', dtype: 'mixed', size: '~22 GB', notes: 'Works at lower performance' },
        ]}
      />

      <h2>Recommendation</h2>
      <ul>
        <li><strong>Mac default for SD3-family</strong>: SD3.5 Medium with bundled fp16 encoders (use the bundled checkpoint, not separates).</li>
        <li><strong>Tight-budget</strong>: SD3.5 Medium + GGUF T5 to free 6 GB for ControlNets / IP-Adapters.</li>
        <li><strong>If you need Large</strong>: SD3.5 Large + GGUF T5 + --lowvram + --cpu-vae. Slow but works.</li>
      </ul>

      <h2>SD3.5 vs SDXL on Mac</h2>
      <p>
        For most use cases, SDXL with a community finetune (Juggernaut XL v9) is better-supported,
        faster, and has a richer LoRA ecosystem than SD3.5. Reach for SD3.5 when:
      </p>
      <ul>
        <li>You need text in the image to render correctly (signs, posters, UI mocks).</li>
        <li>Long natural-language prompts that SDXL ignores.</li>
        <li>You're staging for a future SD3-family LoRA workflow.</li>
      </ul>
    </>
  )
}

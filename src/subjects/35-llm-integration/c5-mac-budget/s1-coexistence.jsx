import VRAMBudgetBlock from '../../../components/content/VRAMBudgetBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Coexistence() {
  return (
    <>
      <p>LLM + ComfyUI memory budget on M5 Pro. The agentic capstone runs both simultaneously.</p>

      <h2>The 24 GB pie</h2>
      <VRAMBudgetBlock
        target="24 GB unified"
        rows={[
          { component: 'macOS + apps', dtype: 'baseline', size: '~5 GB', notes: 'Cleared of memory-heavy apps' },
          { component: 'Ollama Llama 3.1 8B Q4', dtype: 'GGUF', size: '~5 GB', notes: 'Resident as background service' },
          { component: 'ComfyUI base (loaded)', dtype: 'mixed', size: '~12 GB', notes: 'FLUX Q5 + encoders + VAE' },
          { component: 'Activations during sample', dtype: 'mixed', size: '~3 GB', notes: '' },
          { component: 'Total', dtype: '', size: '~25 GB', notes: 'TIGHT — may swap on peaks' },
        ]}
      />

      <h2>The reality</h2>
      <p>
        Running LLM + FLUX simultaneously is right at the edge of 24 GB. Works but with some
        memory pressure spikes. Mitigations next section.
      </p>

      <h2>Lighter options</h2>
      <ul>
        <li>Llama 3.2 3B instead of 8B: saves ~3 GB.</li>
        <li>FLUX Q4_K_S instead of Q5: saves ~1 GB.</li>
        <li>SDXL instead of FLUX for B-roll: ~5 GB less.</li>
      </ul>

      <NoteBlock title="The 'sequential handoff' alternative">
        If memory is too tight to coexist, sequence the stages: LLM generates script + frees memory, then ComfyUI loads + generates. Next section covers this pattern.
      </NoteBlock>
    </>
  )
}

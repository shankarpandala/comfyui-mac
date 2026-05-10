import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1MacFeasibility() {
  return (
    <>
      <p>Video uncensored on Mac — Hunyuan/Wan with uncensored LoRAs. Feasible but tight on memory.</p>

      <h2>Mac memory reality</h2>
      <ul>
        <li>Hunyuan Q4_K_S + LoRA + activations: ~17-18 GB peak. Tight.</li>
        <li>Wan 14B I2V Q4_K_S + LoRA: ~18-19 GB peak. Tight.</li>
        <li>Wan 5B + LoRA: ~12 GB peak. Comfortable.</li>
      </ul>

      <h2>Available LoRAs</h2>
      <ul>
        <li>Hunyuan uncensored LoRAs on CivitAI (smaller community than SDXL).</li>
        <li>Wan uncensored LoRAs (newer, fewer options).</li>
      </ul>

      <h2>Recipe</h2>
      <ul>
        <li>Standard Hunyuan / Wan workflow.</li>
        <li>LoraLoader → uncensored LoRA at 0.7-0.9.</li>
        <li>--lowvram + --cpu-vae for the tightest stacks.</li>
      </ul>

      <NoteBlock title="The 'verify before commit' approach">
        Test uncensored video LoRAs on a few short clips before committing to a long render. LoRA
        quality varies; some break video coherence. ~5 minutes of testing prevents wasted hours.
      </NoteBlock>
    </>
  )
}

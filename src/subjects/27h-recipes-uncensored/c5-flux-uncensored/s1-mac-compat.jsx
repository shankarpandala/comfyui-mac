import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1MacCompat() {
  return (
    <>
      <p>FLUX uncensored finetunes on Mac. FLUX base is somewhat moderated; community finetunes remove the moderation.</p>

      <h2>Notable FLUX uncensored finetunes</h2>
      <ul>
        <li>Various community LoRAs and full finetunes published on CivitAI.</li>
        <li>Quality varies widely; community is younger than SDXL's.</li>
      </ul>

      <h2>Mac compatibility table</h2>
      <table>
        <thead><tr><th>Distribution</th><th>Mac compatibility</th></tr></thead>
        <tbody>
          <tr><td>Full finetune (.safetensors fp16)</td><td>~23 GB; won't fit on 24 GB. Need GGUF.</td></tr>
          <tr><td>Full finetune (.safetensors fp8)</td><td>Won't load on MPS (Subject 02).</td></tr>
          <tr><td>Full finetune GGUF Q4-Q5</td><td>Works on Mac.</td></tr>
          <tr><td>LoRA (.safetensors)</td><td>Works on Mac with base FLUX Dev Q5_K_S.</td></tr>
        </tbody>
      </table>

      <h2>Recipe</h2>
      <p>
        Standard FLUX Mac kit + LoraLoader for the uncensored LoRA at strength 0.7-1.0 (varies by LoRA quality).
      </p>

      <h2>Quality</h2>
      <p>FLUX's base anatomy understanding is excellent — even a moderate uncensored LoRA produces high-fidelity output. Better than SDXL uncensored bases for photoreal work.</p>

      <NoteBlock title="The Mac FLUX-uncensored default">
        Use FLUX Dev Q5_K_S as base + uncensored LoRA stack. Higher quality than SDXL alternatives.
        Slower per image but the gap is decreasing as Mac performance improves.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2TimeQuality() {
  return (
    <>
      <p>
        Realistic time and quality numbers for FLUX LoRA training on M5 Pro. Plan accordingly.
      </p>

      <h2>Per-step time</h2>
      <p>FLUX LoRA on M5 Pro at 1024×1024, batch 1: ~12–18 s per step (vs ~10 s for SDXL).</p>

      <h2>Total time by configuration</h2>
      <table>
        <thead><tr><th>Configuration</th><th>Steps</th><th>Wall time</th></tr></thead>
        <tbody>
          <tr><td>FLUX style LoRA, 50 images</td><td>2000</td><td>~7-10 hours</td></tr>
          <tr><td>FLUX self-clone, 50 images, no reg</td><td>2500</td><td>~9-12 hours</td></tr>
          <tr><td>FLUX self-clone, 50 images + 200 reg</td><td>3500</td><td>~12-16 hours</td></tr>
          <tr><td>FLUX detailed character, 100 images</td><td>3000</td><td>~10-13 hours</td></tr>
        </tbody>
      </table>

      <h2>Quality vs SDXL LoRAs</h2>
      <ul>
        <li><strong>Identity preservation</strong> — FLUX LoRAs of yourself look more like you, more consistently, than SDXL LoRAs.</li>
        <li><strong>Stylistic flexibility</strong> — FLUX LoRA + prompt for "in cyberpunk style" works better than equivalent SDXL — FLUX's bigger brain makes prompts matter more.</li>
        <li><strong>Stacking</strong> — FLUX LoRAs stack with PuLID + ControlNet without identity drift; SDXL LoRAs sometimes fight with FaceID.</li>
      </ul>

      <h2>The cost-benefit analysis</h2>
      <ul>
        <li><strong>SDXL LoRA</strong>: 6 hours training, good quality, smaller LoRA file (~150 MB).</li>
        <li><strong>FLUX LoRA</strong>: 12 hours training, better quality, larger LoRA file (~300 MB).</li>
      </ul>

      <h2>The two-step training strategy</h2>
      <p>Many users train both:</p>
      <ol>
        <li>SDXL LoRA first (6 hours overnight) — ready next day.</li>
        <li>Test extensively in SDXL workflows.</li>
        <li>If happy with the dataset and captions, train FLUX LoRA (12 hours, longer overnight).</li>
        <li>Use SDXL LoRA for fast iteration; FLUX LoRA for hero shots.</li>
      </ol>

      <NoteBlock title="The Phase 5 capstone path">
        For the AI clone capstone (Subject 29), the recipe trains both SDXL and FLUX self-clone
        LoRAs. SDXL handles fast B-roll generation; FLUX handles talking-head close-ups where
        identity matters most.
      </NoteBlock>
    </>
  )
}

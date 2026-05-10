import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2StyleLoras() {
  return (
    <>
      <p>
        Wan style LoRAs work the same way SDXL style LoRAs do — apply visual aesthetic uniformly
        across all frames.
      </p>

      <h2>Where to find</h2>
      <ul>
        <li>CivitAI — filter for Wan LoRAs.</li>
        <li>HuggingFace — community uploads.</li>
        <li>Smaller community than SDXL but growing.</li>
      </ul>

      <h2>Common style categories</h2>
      <ul>
        <li>Cinematic film looks</li>
        <li>Anime-style video</li>
        <li>Watercolor / painterly</li>
        <li>1980s VHS aesthetic</li>
        <li>Cyberpunk neon</li>
      </ul>

      <h2>Combine with character LoRAs</h2>
      <p>
        Your-LoRA at 0.7 + cinematic-LoRA at 0.5 = you in cinematic-style video. Standard LoRA
        stack budgeting (Subject 11) applies.
      </p>

      <h2>Train your own</h2>
      <p>
        Wan LoRA training is supported in ai-toolkit (Subject 12 / Chapter 2). Same flow as FLUX
        training. Time on M5 Pro: similar to FLUX (~10-15 hours for self-clone).
      </p>

      <NoteBlock title="The 'video LoRA' trend">
        As of 2026, video LoRA training is becoming accessible to consumers. Expect a much larger
        Wan/Hunyuan/LTX LoRA ecosystem within a year. Subject 12's training discipline applies
        directly to video LoRAs.
      </NoteBlock>
    </>
  )
}

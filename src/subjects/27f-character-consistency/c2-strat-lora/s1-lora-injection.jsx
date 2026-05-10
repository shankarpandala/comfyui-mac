import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1LoraInjection() {
  return (
    <>
      <p>Strategy 1: Character LoRA injection. Apply your trained self-LoRA in every video clip generation. Strongest single technique for identity consistency.</p>

      <h2>How it works</h2>
      <p>
        Your trained LoRA encodes your full appearance: face, body, common hairstyles, body
        proportions. Applied to each segment's UNet, it pulls the model toward "look like the
        trained subject" regardless of noise differences across segments.
      </p>

      <h2>Recipe per segment</h2>
      <ol>
        <li>Standard video model load (LTX, Wan, Hunyuan).</li>
        <li>LoraLoader → your-character-lora at 0.7-0.8 strength.</li>
        <li>Standard prompts include trigger word.</li>
        <li>Generate segment.</li>
      </ol>

      <h2>Strength tuning</h2>
      <ul>
        <li>Too low (0.5): drift between segments.</li>
        <li>Sweet spot (0.7-0.8): consistent across segments without over-fitting.</li>
        <li>Too high (1.0+): can fight prompt control.</li>
      </ul>

      <h2>Compatibility</h2>
      <ul>
        <li>SDXL LoRA + AnimateDiff — works.</li>
        <li>FLUX LoRA + LTX — works (LTX uses T5 + CLIP-L like FLUX, but compatibility varies; test).</li>
        <li>Wan/Hunyuan LoRAs — Wan and Hunyuan have their own LoRA ecosystems. Not interchangeable.</li>
      </ul>

      <NoteBlock title="Strategy 1's strength">
        LoRA-based consistency is the strongest single technique. Combined with PuLID per-segment
        re-anchor (Strategy 2), it eliminates ~80% of long-video drift.
      </NoteBlock>
    </>
  )
}

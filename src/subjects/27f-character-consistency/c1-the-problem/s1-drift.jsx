import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Drift() {
  return (
    <>
      <p>
        Long-video character consistency is the hardest problem in AI video. As clips chain past
        ~10 seconds, characters drift — face changes subtly, hair shifts, costume warps. The user's
        headline goal (long-form AI clone content) lives or dies on this.
      </p>

      <DefinitionBlock title="The drift problem">
        Each video model is trained on ~5-second clips. Beyond that, you chain segments. Each
        segment has its own noise, its own conditioning, its own slight interpretation of identity.
        Without explicit anchoring, segment 5 looks subtly different from segment 1.
      </DefinitionBlock>

      <h2>Symptoms</h2>
      <ul>
        <li><strong>Face drift</strong> — looks like the person but slightly off; gets worse each segment.</li>
        <li><strong>Costume change</strong> — shirt color shifts, accessories appear/disappear.</li>
        <li><strong>Hair drift</strong> — length, color, style changes.</li>
        <li><strong>Body proportion drift</strong> — height, build morphs subtly.</li>
      </ul>

      <h2>Six strategies (next chapters)</h2>
      <ol>
        <li>Character LoRA injection — your trained subject in every clip.</li>
        <li>PuLID/InstantID re-anchor — face anchor per segment.</li>
        <li>First-frame I2V chaining — last frame of N becomes first frame of N+1.</li>
        <li>IP-Adapter per-shot — visual reference image consistent across segments.</li>
        <li>VACE masked edits — preserve everything except subject region.</li>
        <li>Latent anchoring — fixed seed per character.</li>
      </ol>

      <NoteBlock title="The combined recipe">
        No single strategy solves it perfectly. The production recipe (chapter 8) combines 3-4 of
        these. Read through each strategy first; chapter 8 is where they assemble.
      </NoteBlock>
    </>
  )
}

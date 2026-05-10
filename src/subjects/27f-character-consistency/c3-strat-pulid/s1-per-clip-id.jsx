import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1PerClipId() {
  return (
    <>
      <p>Strategy 2: PuLID/InstantID re-injection per clip. Fresh face embedding for every segment so identity is re-anchored.</p>

      <h2>The technique</h2>
      <p>For each video segment:</p>
      <ol>
        <li>Take the same reference face image.</li>
        <li>Apply PuLID FLUX (for FLUX-based video) or InstantID (for SDXL/AnimateDiff) before each segment's sample.</li>
        <li>Each segment uses identical face conditioning.</li>
        <li>Drift is reset per segment.</li>
      </ol>

      <h2>Why it helps over LoRA alone</h2>
      <ul>
        <li>LoRA encodes general appearance; PuLID encodes specific face.</li>
        <li>PuLID's conditioning is fresh per segment — no accumulated drift.</li>
        <li>Combined: LoRA pulls toward "you" generally; PuLID re-anchors face exactly.</li>
      </ul>

      <h2>Mac compatibility</h2>
      <ul>
        <li>PuLID FLUX + LTX/Hunyuan/Wan: not directly supported (PuLID is image-side; video models have their own conditioning).</li>
        <li>Workaround: use first-frame I2V chaining. Generate the still with FLUX + PuLID + LoRA. Pass to video model i2v.</li>
      </ul>

      <NoteBlock title="The first-frame approach for video">
        PuLID applies to the still that initiates each segment. Strategy 3 (next chapter) chains
        these stills together. The combination is what makes long-form work.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1VaceMaskedId() {
  return (
    <>
      <p>Strategy 5: VACE masked identity-preserving edit. Generate raw footage with any subject, mask the subject across frames, swap to your AI clone via VACE.</p>

      <h2>The pipeline</h2>
      <ol>
        <li>Generate or shoot input clip with any person doing the motion you want.</li>
        <li>SAM2 segmentation → per-frame subject masks.</li>
        <li>VACE with input clip + masks + character reference (your AI clone face/identity).</li>
        <li>VACE preserves background + motion; replaces subject with your character.</li>
      </ol>

      <h2>Why this scales to long videos</h2>
      <ul>
        <li>Background and lighting are locked from input — no drift in those.</li>
        <li>Motion is locked from input — no awkward AI-generated motion.</li>
        <li>Only the subject region is "creative" — VACE keeps it consistent within and across segments.</li>
      </ul>

      <h2>Per-segment cost</h2>
      <p>~25-35 min for 5-second segment on M5 Pro.</p>

      <h2>Best for</h2>
      <ul>
        <li>Replicating a real video performance with your AI clone.</li>
        <li>Long-form where you want guaranteed motion realism.</li>
        <li>Multi-character where you want one specific character preserved.</li>
      </ul>

      <NoteBlock title="The capstone's secret weapon">
        VACE masked-edit is the strongest long-video character consistency technique. The trade-off
        is render time. For hero videos (the AI clone capstone's premium content), worth the wait.
      </NoteBlock>
    </>
  )
}

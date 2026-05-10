import WarningBlock from '../../../components/content/WarningBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1WatermarkStorage() {
  return (
    <>
      <p>Self-clone + uncensored stack — your AI clone in unrestricted content. The fullest combination of identity stack + uncensored model. Strict storage hygiene + provenance.</p>

      <h2>The stack</h2>
      <ol>
        <li>FLUX Mac kit.</li>
        <li>Your-FLUX-self-LoRA at 0.7.</li>
        <li>Uncensored FLUX LoRA at 0.7.</li>
        <li>PuLID FLUX with your face reference at 1.0.</li>
        <li>Detailer stack post-sample.</li>
        <li>C2PA + visible watermark + LUT post-process.</li>
        <li>Encrypted storage on local drive only.</li>
      </ol>

      <h2>The disclosure structure</h2>
      <ul>
        <li>Visible watermark: "AI clone of [your handle]".</li>
        <li>C2PA metadata signed.</li>
        <li>Caption: "AI-generated. AI clone of myself."</li>
      </ul>

      <h2>Storage hygiene</h2>
      <ul>
        <li>Encrypted DMG (Mac Disk Utility) for the output folder.</li>
        <li>External-only encrypted backup. No iCloud, no cloud services.</li>
        <li>Per-folder permissions; don't share access.</li>
      </ul>

      <WarningBlock title="The compounding risk">
        Self-clone + uncensored = visually photoreal output of yourself. This raises the stakes:
        deepfake-laws-style legal frameworks may apply even when you're the subject. Consult local
        regulations before commercial distribution. Disclose AI generation always.
      </WarningBlock>

      <NoteBlock title="The capstone closes">
        Subject 27h closes Phase 5b. You have the complete recipe library: t2i, t+i2i, t2v, t+i2v,
        v2v, long-video character consistency, self-clone, and (responsibly) uncensored. Phase 6
        covers production tooling; Phase 7 wraps everything in agentic orchestration.
      </NoteBlock>
    </>
  )
}

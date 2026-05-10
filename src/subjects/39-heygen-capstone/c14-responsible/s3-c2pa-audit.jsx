import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3C2paAudit() {
  return (
    <>
      <p>C2PA audit trail — cryptographically signed provenance for every Reel. The capstone closes here.</p>

      <h2>What gets logged</h2>
      <ul>
        <li>Original input (topic).</li>
        <li>Tools used (FLUX version, Sonic, F5-TTS reference, etc).</li>
        <li>Per-stage timestamps.</li>
        <li>Final output's hash + signature.</li>
      </ul>

      <h2>The signed manifest</h2>
      <pre>{`{
  "type": "ai-generated",
  "creator": "your-handle",
  "created_at": "2026-05-10T12:00:00Z",
  "tools": [
    {"name": "FLUX.1-dev", "version": "Q5_K_S"},
    {"name": "PuLID FLUX", "version": "0.9.1"},
    {"name": "F5-TTS", "version": "1.0"},
    {"name": "Sonic", "version": "1.0"}
  ],
  "subject": "self-clone",
  "consent": "self",
  "signature": "<cryptographic_hash>"
}`}</pre>

      <h2>Why audit matters</h2>
      <ul>
        <li>Regulatory compliance (deepfake-disclosure laws emerging).</li>
        <li>Platform compliance (C2PA detection).</li>
        <li>Trust signals — viewers can verify origin.</li>
        <li>Self-protection — clear that you generated it locally, not someone else.</li>
      </ul>

      <h2>The capstone closes</h2>
      <p>
        With C2PA on every output, your AI clone pipeline is end-to-end auditable: from topic
        input to signed publish-ready file. The HeyGen-class achievement, locally on Mac.
      </p>

      <NoteBlock title="Phase 7 + curriculum complete">
        Subject 39 closes Phase 7 and the entire curriculum. From Subject 01 (install ComfyUI) to
        Subject 39 (autonomous AI Reel publishing), you have the full Mac AI content production
        stack. Every recipe, every model choice, every guard — all documented and reproducible.
      </NoteBlock>
    </>
  )
}

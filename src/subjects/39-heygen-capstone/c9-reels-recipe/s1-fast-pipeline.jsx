import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1FastPipeline() {
  return (
    <>
      <p>Recipe: 60-second AI clone Reel, ~30-45 minutes Mac wall time. The flagship capstone use case.</p>

      <h2>Specs</h2>
      <ul>
        <li>1 talking-head intro (5s) + 2 B-roll segments (15s each) + 1 talking-head CTA (10s) = ~45s body + 15s buffer.</li>
        <li>F5-TTS for narration.</li>
        <li>FLUX + LoRA + PuLID for talking-head still (shared across both talking-head segments).</li>
        <li>LTX i2v for B-roll clips.</li>
        <li>Sonic for talking-head animation.</li>
        <li>RIFE x2 → 48fps for smooth playback.</li>
        <li>Captions + watermark + LUT.</li>
        <li>Export 9:16 1080×1920.</li>
      </ul>

      <h2>Wall time breakdown</h2>
      <table>
        <thead><tr><th>Stage</th><th>Time</th></tr></thead>
        <tbody>
          <tr><td>Research</td><td>~3 min</td></tr>
          <tr><td>Script + critique</td><td>~2 min</td></tr>
          <tr><td>Self-clone still</td><td>~1 min (one still, reused)</td></tr>
          <tr><td>2 talking-head Sonic clips</td><td>~14 min (parallel impossible on single Mac)</td></tr>
          <tr><td>2 B-roll stills + LTX clips (parallel with Sonic)</td><td>~8 min</td></tr>
          <tr><td>F5-TTS audio</td><td>~3 min (parallel)</td></tr>
          <tr><td>Compose + caption + export</td><td>~3 min</td></tr>
          <tr><td><strong>Total</strong></td><td><strong>~30-35 min</strong></td></tr>
        </tbody>
      </table>

      <NoteBlock title="The Mac Reel cadence">
        ~30-45 min per Reel = 1-2 Reels per evening if you trigger after work. ~5-10 Reels per
        weekend if you batch. Sustainable for daily content.
      </NoteBlock>
    </>
  )
}

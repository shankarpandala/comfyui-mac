import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1LiveportraitSonic() {
  return (
    <>
      <p>
        The LivePortrait + Sonic combo is the recommended Mac path for "AI clone talking-head".
        LivePortrait drives expression; Sonic syncs lips to audio.
      </p>

      <h2>The pipeline</h2>
      <ol>
        <li>Generate AI clone still (FLUX + your-LoRA + PuLID) at face-centered crop.</li>
        <li>Record yourself reading the script (any face, any setup) — call this "driver video".</li>
        <li><code>LivePortrait</code> → warps your AI clone still using driver expressions.</li>
        <li>Take output (now: AI clone with your expressions, no audio sync).</li>
        <li><code>Sonic</code> → re-syncs mouth movements to your voice-clone audio.</li>
        <li>Result: AI clone, your expressions, your voice, lip-synced.</li>
      </ol>

      <h2>Why both</h2>
      <ul>
        <li>Sonic alone: generic expressions matched to audio energy.</li>
        <li>LivePortrait alone: your specific expressions, but mouth doesn't match new audio.</li>
        <li>Combined: your specific expressions AND mouth-sync.</li>
      </ul>

      <h2>The driver video</h2>
      <ul>
        <li>Record yourself reading the script.</li>
        <li>Phone camera at eye level, face centered.</li>
        <li>Quality doesn't matter much — LivePortrait extracts keypoints, not appearance.</li>
        <li>Record once per script segment.</li>
      </ul>

      <h2>Mac wall time</h2>
      <ul>
        <li>LivePortrait: ~real-time (10s output → 10s wall).</li>
        <li>Sonic: ~5-8 min for 10s output.</li>
        <li>Total per 10s clip: ~6-9 min.</li>
      </ul>

      <h2>Audio source</h2>
      <p>F5-TTS-generated voice clone audio (Subject 26 / Chapter 3). The full pipeline:</p>
      <pre>{`script text → F5-TTS (voice clone) → audio.wav
                                         ↓
your face still → LivePortrait → ── ↓ → Sonic (lip-sync) → final.mp4
       (your driver video) ──────────┘`}</pre>

      <NoteBlock title="The 'segment by segment' approach">
        Don't try to generate a 60-second talking head in one go. Break script into 10-15 second
        segments, generate each, concatenate via ffmpeg. More reliable, easier to fix individual
        segments.
      </NoteBlock>
    </>
  )
}

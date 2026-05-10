import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Pipeline() {
  return (
    <>
      <p>End-to-end self-clone Reel pipeline. Type a script; produce a finished AI clone Reel. The manual version of Phase 7's agentic capstone.</p>

      <h2>The full pipeline</h2>
      <ol>
        <li><strong>Script</strong>: write 60s of dialogue, broken into 4-5 segments.</li>
        <li><strong>Voice generate</strong>: F5-TTS each segment → segment-N.wav.</li>
        <li><strong>Visual generate</strong>:
          <ul>
            <li>Talking-head segments (intro/CTA): Subject 27g / Chapter 9 (LivePortrait + Sonic).</li>
            <li>B-roll segments (scenes / actions): Subject 27g / Chapter 8 (i2v).</li>
          </ul>
        </li>
        <li><strong>Concatenate</strong>: ffmpeg combines all video segments.</li>
        <li><strong>Final audio</strong>: ffmpeg replaces video's audio with concatenated voice-clone audio.</li>
        <li><strong>Captions</strong>: Whisper → SRT → ffmpeg burn-in (Subject 30 / Chapter 3).</li>
        <li><strong>Watermark + LUT</strong>: ffmpeg overlay + lut3d filter (Subject 30).</li>
        <li><strong>Export 9:16 1080×1920</strong> (Subject 30 / Chapter 1).</li>
      </ol>

      <h2>Total wall time per 60s Reel</h2>
      <ul>
        <li>Voice + scripts: ~10 min</li>
        <li>5 talking-head segments × ~7 min: ~35 min</li>
        <li>2 B-roll segments × ~3 min: ~6 min</li>
        <li>ffmpeg post: ~5 min</li>
        <li><strong>Total: ~55 min per Reel</strong></li>
      </ul>

      <h2>For batch production (e.g., 5 Reels per week)</h2>
      <ul>
        <li>Sunday: write 5 scripts.</li>
        <li>Monday: voice-clone all + generate all stills (~30 min total).</li>
        <li>Monday night: queue all talking-head Sonic renders. Run overnight.</li>
        <li>Tuesday: ffmpeg assembly + post → 5 finished Reels.</li>
        <li>Wednesday-Sunday: schedule and post.</li>
      </ul>

      <NoteBlock title="The manual capstone is complete">
        At this point, you have a working manual pipeline for AI clone Reels. Phase 7 (Subjects
        35-39) wraps this in agentic LLM orchestration so you describe a topic and the agent
        executes the entire pipeline.
      </NoteBlock>
    </>
  )
}

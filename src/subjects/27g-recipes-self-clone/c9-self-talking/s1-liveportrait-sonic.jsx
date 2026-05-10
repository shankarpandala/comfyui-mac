import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1LiveportraitSonic() {
  return (
    <>
      <p>Self-clone talking head: LivePortrait + Sonic + voice clone. The "AI clone says my script" recipe.</p>

      <h2>The full pipeline per script segment</h2>
      <ol>
        <li>Generate self-clone still (face-centered crop) — FLUX + LoRA + PuLID.</li>
        <li>Voice clone audio: F5-TTS on the script segment with your voice reference.</li>
        <li>(Optional) Record yourself reading script → driver video.</li>
        <li>LivePortrait: target = self-clone still, driver = your driver video. Output: still warped to your expressions.</li>
        <li>Sonic: input = LivePortrait output + voice clone audio. Output: lip-synced talking head.</li>
        <li>Combine: ffmpeg merges Sonic mp4 with the original audio track for the final segment.</li>
      </ol>

      <h2>Wall time per 10-second segment</h2>
      <ul>
        <li>Self-clone still: ~70 s.</li>
        <li>Voice clone: ~10 s.</li>
        <li>Driver record: ~10 s.</li>
        <li>LivePortrait: ~10 s.</li>
        <li>Sonic: ~5-8 min.</li>
        <li>Total per segment: ~7-9 min.</li>
      </ul>

      <h2>For multi-segment scripts</h2>
      <p>
        Run segments sequentially. Each segment stands alone — face still doesn't drift between
        segments because each starts from the same face still.
      </p>

      <NoteBlock title="The hero-content recipe">
        Reels where you (your AI clone) speak directly to the audience use this pipeline. Per
        Reel: ~30-60 minutes of Mac wall time. Scale by running multiple segments overnight.
      </NoteBlock>
    </>
  )
}

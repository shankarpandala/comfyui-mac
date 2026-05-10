import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Pipeline() {
  return (
    <>
      <p>
        End-to-end script-to-video pipeline. Type a script; produce a finished AI clone video.
        This is the manual version of what Phase 7 automates with agents.
      </p>

      <h2>The pipeline</h2>
      <ol>
        <li><strong>Script</strong>: write or generate (eventually via Subject 37 LLM agent).</li>
        <li><strong>Segment</strong>: split into 10-15 second chunks at natural pauses.</li>
        <li><strong>Voice</strong>: F5-TTS each segment with your voice reference → segment-1.wav, segment-2.wav, ...</li>
        <li><strong>Driver record</strong>: shoot yourself reading each segment (rough, just for keypoints).</li>
        <li><strong>Generate AI clone still</strong>: FLUX + your-LoRA + PuLID → still.png. Use once for the entire video; consistency requires this.</li>
        <li><strong>Animate</strong>: per segment: LivePortrait(still, driver-segment-N) → expression-tracked clip → Sonic(audio=segment-N.wav) → final-segment-N.mp4.</li>
        <li><strong>Concatenate</strong>: ffmpeg combines all segments + adds final audio track.</li>
        <li><strong>Optional polish</strong>: face restore (CodeFormer) on each frame; subtitles burn-in (next chapter).</li>
        <li><strong>Export</strong>: 9:16 / 1:1 / 16:9 depending on platform.</li>
      </ol>

      <h2>The ffmpeg concatenation</h2>
      <pre>{`# concat.txt
file 'segment-1.mp4'
file 'segment-2.mp4'
file 'segment-3.mp4'

ffmpeg -f concat -safe 0 -i concat.txt -c copy combined.mp4`}</pre>

      <h2>Wall time per Reel (~60 seconds total, 4 segments)</h2>
      <ul>
        <li>Script + segmentation: 5 min</li>
        <li>Voice generation: 5 min (F5-TTS × 4)</li>
        <li>Driver recording: 5 min</li>
        <li>AI clone still: 1 min</li>
        <li>LivePortrait: 5 min (4 segments)</li>
        <li>Sonic per segment: 30 min (4 × 7 min)</li>
        <li>Concatenation + export: 1 min</li>
        <li><strong>Total: ~50 min for a 60-second AI clone Reel</strong></li>
      </ul>

      <NoteBlock title="The 'parallelize what you can' tip">
        Voice generation and driver recording can happen in parallel. Sonic per segment is the long
        pole — start each Sonic render as soon as its inputs are ready rather than batching at the
        end.
      </NoteBlock>
    </>
  )
}

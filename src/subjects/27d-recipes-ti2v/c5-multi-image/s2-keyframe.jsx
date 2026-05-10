import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Keyframe() {
  return (
    <>
      <p>Keyframe-guided generation — multiple anchor frames at specific timestamps. The model interpolates between them. More control than first/last alone.</p>

      <h2>The technique</h2>
      <p>
        Some Wan VACE workflows accept multiple keyframes (e.g., frames 0, 25, 50, 75, 100 of a
        100-frame clip). Each keyframe is a still image; VACE generates the in-between content.
      </p>

      <h2>Use cases</h2>
      <ul>
        <li>Storyboarded multi-beat sequences.</li>
        <li>Long-form narrative where you control specific moments.</li>
        <li>Music-synced content where keyframes hit specific beats.</li>
      </ul>

      <h2>Status in 2026</h2>
      <p>
        Multi-keyframe video editing is an active research area. VACE supports basic 2-frame
        anchoring; richer multi-keyframe is emerging. Check the latest Wan / Hunyuan / LTX releases.
      </p>

      <h2>The fallback: chain first-last clips</h2>
      <p>
        If multi-keyframe isn't available: split your timeline into segments, generate each via
        first/last interpolation, concatenate via ffmpeg. Lower coherence at segment boundaries
        but works today.
      </p>

      <NoteBlock title="The Phase 7 capstone usage">
        For the agentic capstone (Subject 39), the orchestrator can keyframe across narrative
        beats: title card → talking head → B-roll → talking head → end card. Each keyframe
        generated separately; videos glued via ffmpeg.
      </NoteBlock>
    </>
  )
}

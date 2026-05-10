import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2TemporalSmooth() {
  return (
    <>
      <p>Temporal smoothing post-process — remove residual flicker from per-frame style transfers using optical flow.</p>

      <h2>The technique</h2>
      <ol>
        <li>For each pair of consecutive frames (N, N+1):
          <ul>
            <li>Compute optical flow (RAFT) from N to N+1.</li>
            <li>Warp frame N forward to frame N+1's space.</li>
            <li>Blend warped(N) with frame N+1 by alpha (e.g., 0.3).</li>
          </ul>
        </li>
        <li>Result: temporally smoother output.</li>
      </ol>

      <h2>Custom node</h2>
      <p><code>ComfyUI-RAFT</code> + <code>FrameWarp</code> nodes. Or use external tools (FFmpeg with optical-flow filters; some video editors).</p>

      <h2>When to apply</h2>
      <ul>
        <li>After per-frame IP-Adapter style transfer.</li>
        <li>After AnimateDiff vid2vid that still flickers slightly.</li>
        <li>Not needed for Wan VACE (handles temporal internally).</li>
      </ul>

      <h2>Cost</h2>
      <p>~0.1 s per frame pair. Negligible.</p>

      <NoteBlock title="The 'flicker reduction' rule of thumb">
        If output flickers visibly, add temporal smoothing post-process. Diminishing returns above
        alpha=0.3 — over-smoothing makes motion feel laggy.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Windowing() {
  return (
    <>
      <p>
        Sliding-window inference processes long videos as overlapping shorter windows. Memory stays
        bounded; output can be arbitrarily long. The trade-off is consistency at window boundaries.
      </p>

      <h2>The basic pattern</h2>
      <ol>
        <li>Pick a window size that fits memory (e.g., 16 frames for AnimateDiff).</li>
        <li>Pick an overlap (e.g., 4 frames).</li>
        <li>Generate window 1 (frames 0-15).</li>
        <li>Generate window 2 (frames 12-27), seeded from window 1's last frames.</li>
        <li>Blend the overlap region.</li>
        <li>Continue for as many windows as needed.</li>
      </ol>

      <h2>Implementations</h2>
      <ul>
        <li><strong>AnimateDiff context windows</strong> — built into AnimateDiff Evolved nodes.</li>
        <li><strong>Hunyuan SkyReels-V2-style chaining</strong> — first-frame anchor.</li>
        <li><strong>Manual chaining</strong> — generate one segment, use last frame as i2v input for next.</li>
      </ul>

      <h2>Window-boundary failure modes</h2>
      <ul>
        <li><strong>Style drift</strong> — windows look slightly different due to different noise seeds.</li>
        <li><strong>Identity drift</strong> — character looks slightly different across windows.</li>
        <li><strong>Motion discontinuity</strong> — abrupt pose changes at window boundary.</li>
      </ul>

      <h2>Mitigations</h2>
      <ul>
        <li><strong>Larger overlap</strong> (8 frames vs 4) — smoother boundary blends.</li>
        <li><strong>Same noise seed</strong> across windows — reduces style drift.</li>
        <li><strong>Identity LoRA + PuLID injection per window</strong> — anchors character.</li>
        <li><strong>Optical flow blending</strong> — warp last-frame-of-window-N forward for window-N+1 init.</li>
      </ul>

      <NoteBlock title="The Subject 27f promise">
        Long-video character consistency is its own subject in Phase 5b (Subject 27f). It bundles
        these techniques into a production recipe. For now, know that windowing exists and trades
        memory for boundary artifacts.
      </NoteBlock>
    </>
  )
}

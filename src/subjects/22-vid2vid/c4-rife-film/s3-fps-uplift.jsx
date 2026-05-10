import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3FpsUplift() {
  return (
    <>
      <p>
        Concrete recipe: take an 8 fps generated clip and ship a 24 fps mp4 for social media. The
        "fps uplift" pipeline.
      </p>

      <h2>The pipeline</h2>
      <ol>
        <li>Generate at native (e.g., AnimateDiff at 8 fps × 16 frames = 2 seconds at 8 fps).</li>
        <li><code>RIFE VFI</code> → multiplier 3 → 24 fps × 46 frames.</li>
        <li><code>VHS_VideoCombine</code> at 24 fps.</li>
        <li>Output: smooth 2-second clip at standard cinema fps.</li>
      </ol>

      <h2>Multiplier choice</h2>
      <table>
        <thead><tr><th>Source fps</th><th>Target fps</th><th>Multiplier</th></tr></thead>
        <tbody>
          <tr><td>8</td><td>24</td><td>3×</td></tr>
          <tr><td>8</td><td>30</td><td>~4× (drop a frame)</td></tr>
          <tr><td>16</td><td>30</td><td>~2×</td></tr>
          <tr><td>24</td><td>48 (slow-mo)</td><td>2×</td></tr>
          <tr><td>24</td><td>60 (smooth-mo)</td><td>~2.5×</td></tr>
        </tbody>
      </table>

      <h2>Slow-motion via interpolation</h2>
      <p>
        Generate at 24 fps, RIFE at 4× → 96 fps, play back at 24 fps → smooth slow-motion. Common
        social-media trick.
      </p>

      <h2>The Phase 5 capstone usage</h2>
      <p>
        For Reels / Shorts: generate at native (LTX 24 fps), RIFE 2× to 48 fps, output at 30 fps for
        Instagram (cuts a few frames). Smooth playback, no judder.
      </p>

      <NoteBlock title="The 'always 24+ fps for export' rule">
        Final exports for social media should be ≥ 24 fps. RIFE makes this cheap. Treat it as a
        mandatory final step in any video workflow that goes outside ComfyUI.
      </NoteBlock>
    </>
  )
}

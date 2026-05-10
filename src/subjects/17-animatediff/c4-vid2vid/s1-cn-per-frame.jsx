import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1CnPerFrame() {
  return (
    <>
      <p>
        AnimateDiff vid2vid takes an input video, extracts ControlNet hints from each frame
        (depth, pose, canny), and uses them to constrain a generated video. The result preserves
        the input's motion while applying a new style/character/scene.
      </p>

      <h2>The pipeline</h2>
      <ol>
        <li><code>VHS_LoadVideo</code> → IMAGE batch (e.g., 16 frames from your input video).</li>
        <li>For each control type you want: run the preprocessor on the entire batch:
          <ul>
            <li><code>DWPreprocessor</code> → 16 pose skeletons</li>
            <li><code>DepthAnythingV2Preprocessor</code> → 16 depth maps</li>
            <li><code>CannyEdgePreprocessor</code> → 16 edge maps</li>
          </ul>
        </li>
        <li>Standard AnimateDiff load (SDXL + motion module).</li>
        <li><code>ControlNetApplyAdvanced</code> with the 16-frame control batch.</li>
        <li>KSampler → AnimateDiff samples a 16-frame output respecting per-frame controls.</li>
        <li>VAEDecode + VHS_VideoCombine → output mp4.</li>
      </ol>

      <h2>Control type recommendations</h2>
      <ul>
        <li><strong>OpenPose / DWPose</strong> — best for character motion. Captures dance, exercise, walking.</li>
        <li><strong>Depth</strong> — captures camera motion + 3D scene. Good for scene restyling.</li>
        <li><strong>Canny / Lineart</strong> — strong silhouette preservation. Good for precise object/character outline.</li>
      </ul>

      <h2>Strength tuning</h2>
      <ul>
        <li>Strong control (0.9-1.0) — output follows input motion exactly. Useful when style is the only thing changing.</li>
        <li>Moderate (0.6-0.7) — output respects motion but allows interpretation. Good for character swaps.</li>
        <li>Weak (0.3-0.5) — input is a hint; output is mostly free. Rarely used for vid2vid.</li>
      </ul>

      <h2>Mac performance</h2>
      <p>
        AnimateDiff vid2vid with one ControlNet on 16 frames @ 1024×576 SDXL: ~3 minutes on
        M5 Pro. Adds preprocessor time + per-frame ControlNet residuals to the base AnimateDiff
        cost.
      </p>

      <NoteBlock title="The use case">
        Vid2vid is the "transform this dance video into anime" use case. AnimateDiff is the
        lightweight option; for higher quality vid2vid, use Wan VACE (Subject 22) or LTX vid2vid.
      </NoteBlock>
    </>
  )
}

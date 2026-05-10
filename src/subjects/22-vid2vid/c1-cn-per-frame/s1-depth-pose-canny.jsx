import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1DepthPoseCanny() {
  return (
    <>
      <p>
        Per-frame ControlNet vid2vid is the canonical "preserve motion, change everything else"
        approach. Extract control hints (depth/pose/canny) from each input frame; generate output
        frames respecting those controls.
      </p>

      <h2>The pipeline (AnimateDiff + per-frame ControlNet)</h2>
      <ol>
        <li><code>VHS_LoadVideo</code> → input video as IMAGE batch.</li>
        <li>For each control type: run preprocessor on the batch:
          <ul>
            <li><code>DWPreprocessor</code> → pose skeletons (one per frame)</li>
            <li><code>DepthAnythingV2Preprocessor</code> → depth maps</li>
            <li><code>CannyEdgePreprocessor</code> → edge maps</li>
          </ul>
        </li>
        <li>AnimateDiff load (SDXL or SD1.5 base).</li>
        <li><code>ControlNetApplyAdvanced</code> wired with the per-frame batch.</li>
        <li>Standard sampler.</li>
      </ol>

      <h2>Control type by use case</h2>
      <ul>
        <li><strong>Pose</strong> — for character motion preservation (dance, exercise).</li>
        <li><strong>Depth</strong> — for camera motion + 3D scene preservation.</li>
        <li><strong>Canny</strong> — for tight silhouette preservation.</li>
        <li><strong>Multiple stacked</strong> — for maximum control (covered in chapter 4 / Subject 9).</li>
      </ul>

      <h2>Mac performance</h2>
      <p>16 frames AnimateDiff vid2vid + 1 ControlNet at 1024×576 SDXL: ~3 minutes on M5 Pro.</p>

      <h2>Limitations</h2>
      <ul>
        <li>16-frame window — short clips only via AnimateDiff.</li>
        <li>For longer clips, switch to LTX vid2vid or Wan VACE.</li>
        <li>Per-frame controls treated independently — slight flicker in regions ControlNet doesn't constrain.</li>
      </ul>

      <NoteBlock title="The 'good baseline' approach">
        AnimateDiff vid2vid is a fast learning baseline. Once you understand the pattern, level up
        to LTX vid2vid (next section) or Wan VACE (Subject 20 / Chapter 4) for production quality.
      </NoteBlock>
    </>
  )
}

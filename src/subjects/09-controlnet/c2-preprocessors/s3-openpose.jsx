import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3Openpose() {
  return (
    <>
      <p>
        OpenPose ControlNet steers character pose. The preprocessor extracts a stick-figure
        skeleton from an input image; ControlNet ensures the generated character matches that pose.
      </p>

      <h2>The preprocessors</h2>
      <ul>
        <li><strong>OpenPose</strong> — original, body keypoints only. <code>OpenposePreprocessor</code>.</li>
        <li><strong>DWPose</strong> — newer, more accurate, includes hand and face keypoints. <code>DWPreprocessor</code>. Recommended.</li>
        <li><strong>AnimalPose</strong> — for non-human subjects (rare).</li>
      </ul>

      <h2>What's in the output</h2>
      <p>A multi-color stick figure on black background:</p>
      <ul>
        <li>Body keypoints (shoulders, elbows, hips, knees, etc.) connected by colored lines.</li>
        <li>Hand keypoints (DWPose) — finger joints.</li>
        <li>Face keypoints (DWPose) — eye/nose/mouth landmarks for head orientation.</li>
      </ul>

      <h2>Use cases</h2>
      <ul>
        <li><strong>Pose transfer</strong> — extract a pose from a reference photo of a model; generate a different person in that pose.</li>
        <li><strong>Action shots</strong> — stick figures from action photography → generate fantasy characters in those actions.</li>
        <li><strong>Multi-character scenes</strong> — multiple skeletons in one image → multiple characters with controlled poses.</li>
      </ul>

      <h2>Painted-pose workflows</h2>
      <p>
        You don't need a reference photo. Some custom-node packs ship with a "pose editor" — drag
        stick-figure joints directly on a canvas, generate from that.
      </p>

      <h2>Mac performance</h2>
      <p>
        DWPose is ONNX-based and runs on CPU via ONNX Runtime. ~1 s per preprocess. ComfyUI handles
        the ONNX → tensor bridge transparently.
      </p>

      <NoteBlock title="OpenPose + Canny stack">
        Pose alone often isn't enough — the model has freedom to interpret pose into different body
        shapes. Pair OpenPose (controls pose) with low-strength Canny (controls silhouette) for
        tight character control. Multi-ControlNet stacking covered in chapter 4.
      </NoteBlock>
    </>
  )
}

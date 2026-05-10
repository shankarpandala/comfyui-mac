import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Canny() {
  return (
    <>
      <p>
        Canny edge detection is the simplest and most reliable ControlNet preprocessor. It produces
        a binary edge map (white edges on black) from any image. Useful for preserving outlines,
        silhouettes, and structural lines.
      </p>

      <h2>The preprocessor</h2>
      <p>ComfyUI Auxiliary Preprocessors provides <code>CannyEdgePreprocessor</code>:</p>
      <ul>
        <li><strong>image</strong> — input image</li>
        <li><strong>low_threshold</strong> — edges weaker than this are discarded (default 100)</li>
        <li><strong>high_threshold</strong> — edges stronger than this are kept (default 200)</li>
        <li><strong>resolution</strong> — output size (default 512)</li>
      </ul>

      <h2>Threshold tuning</h2>
      <ul>
        <li><strong>Low + low</strong> (50, 100) — captures even subtle edges; busy output</li>
        <li><strong>Mid (100, 200)</strong> — default; balanced edge density</li>
        <li><strong>High + high</strong> (150, 300) — only strong edges; clean silhouette only</li>
      </ul>

      <h2>Use cases</h2>
      <ul>
        <li><strong>Pose / silhouette transfer</strong> — extract Canny from a reference photo, generate a new image that respects the silhouette.</li>
        <li><strong>Line-art conversion</strong> — turn a sketch into a finished image.</li>
        <li><strong>Architectural preservation</strong> — keep the building's geometry while restyling.</li>
      </ul>

      <h2>Mac performance</h2>
      <p>Canny is OpenCV-based (numpy/CPU) — runs in milliseconds on Mac. No MPS issues.</p>

      <NoteBlock title="The 'safe ControlNet'">
        Canny is the default-safe ControlNet to try first. If it works, great. If too rigid, switch
        to Lineart or Depth. If you can't tell where the edges should be, switch to Depth or
        OpenPose.
      </NoteBlock>
    </>
  )
}

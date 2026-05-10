import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Facedetailer() {
  return (
    <>
      <p>
        FaceDetailer (from Impact Pack) is the most-used face-improvement node. It detects faces in
        the output, crops each face region, runs a separate sampler pass at higher resolution on
        just the face, then composites back. Result: sharper, more detailed faces without affecting
        the rest of the image.
      </p>

      <h2>How it works</h2>
      <ol>
        <li>YOLO face detector finds face bounding boxes in the input image.</li>
        <li>Each face is cropped + upscaled to a higher resolution (e.g., 1024 from 256).</li>
        <li>SDXL/FLUX runs a partial-denoise sample (denoise 0.5) on the cropped face latent.</li>
        <li>Result is downscaled back and composited into the original.</li>
      </ol>

      <h2>Recipe</h2>
      <ol>
        <li>Standard SDXL pipeline → image.</li>
        <li><code>UltralyticsDetectorProvider</code> → loads <code>face_yolov8m.pt</code>.</li>
        <li><code>FaceDetailer</code> → wires image + detector + same MODEL/CLIP/VAE + same prompts.</li>
        <li>Output: image with sharper faces.</li>
      </ol>

      <h2>Key parameters</h2>
      <ul>
        <li><strong>guide_size</strong>: target resolution for face crop (1024). Higher = more detail but slower.</li>
        <li><strong>max_size</strong>: upper bound on face crop size.</li>
        <li><strong>denoise</strong>: 0.5 typical; lower preserves identity better, higher adds more detail.</li>
        <li><strong>seed</strong>: per-detailer pass; can differ from main sampler.</li>
        <li><strong>positive / negative</strong>: usually same as main; can override for face-specific prompts.</li>
      </ul>

      <h2>Wall time on M5 Pro</h2>
      <p>One face detailer pass: ~10-15 seconds (small SDXL render at 1024). For an image with one face, total workflow time goes from ~17 s to ~30 s.</p>

      <h2>Multi-face handling</h2>
      <p>FaceDetailer iterates over all detected faces. 3 faces in image → 3 sequential detailer passes.</p>

      <NoteBlock title="The 'always run FaceDetailer' habit">
        For any portrait or person-containing output that goes to final use, FaceDetailer at default
        settings adds 10–15 seconds and visibly improves quality. Default to having it in your
        Mac workflow templates.
      </NoteBlock>
    </>
  )
}

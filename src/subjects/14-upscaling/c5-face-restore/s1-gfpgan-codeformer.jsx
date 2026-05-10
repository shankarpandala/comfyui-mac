import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1GfpganCodeformer() {
  return (
    <>
      <p>
        GFPGAN and CodeFormer are face-restoration models. They detect faces in an image and
        replace them with sharpened, fixed versions. Useful for cleaning up generated faces or
        restoring old photos.
      </p>

      <h2>GFPGAN</h2>
      <ul>
        <li><strong>File</strong>: <code>GFPGANv1.4.pth</code> (~340 MB)</li>
        <li><strong>Style</strong>: aggressive smoothing; faces look "polished".</li>
        <li><strong>Use</strong>: cleaning blurry generated faces; portraits.</li>
      </ul>

      <h2>CodeFormer</h2>
      <ul>
        <li><strong>File</strong>: <code>codeformer.pth</code> (~340 MB)</li>
        <li><strong>Style</strong>: more natural; preserves identity better.</li>
        <li><strong>Tunable</strong>: <code>fidelity</code> parameter (0.0–1.0). Low = more restoration; high = more identity preservation.</li>
        <li><strong>Use</strong>: when GFPGAN's smoothing is too aggressive.</li>
      </ul>

      <h2>Folder placement</h2>
      <p><code>models/facerestore_models/</code></p>

      <h2>Custom node</h2>
      <p><code>FaceRestoreModelLoader</code> + <code>FaceRestoreCFWithModel</code> from <code>ComfyUI-FaceRestore</code>.</p>

      <h2>Recipe</h2>
      <ol>
        <li>Generate or load image with face.</li>
        <li><code>FaceRestoreModelLoader</code> → load GFPGAN or CodeFormer.</li>
        <li><code>FaceRestoreCFWithModel</code> → restore.</li>
        <li><code>SaveImage</code></li>
      </ol>

      <h2>The "after generation" pattern</h2>
      <p>
        Standard pipeline: KSampler → VAEDecode → FaceDetailer (Subject 14 / Chapter 6) → optional
        face restore → SaveImage. Don't double-process — Detailer is usually enough; add face
        restore only when output still has face artifacts.
      </p>

      <NoteBlock title="Mac compatibility">
        Both models run on MPS. ~1 second per face restore. The InsightFace face-detector dependency
        runs on CPU via ONNX (~200 ms) — same pattern as IP-Adapter FaceID.
      </NoteBlock>
    </>
  )
}

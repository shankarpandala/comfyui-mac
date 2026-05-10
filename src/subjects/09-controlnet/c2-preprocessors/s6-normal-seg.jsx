import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S6NormalSeg() {
  return (
    <>
      <p>
        Two niche but useful preprocessors: <strong>Normal map</strong> for surface-orientation
        control, and <strong>Segmentation</strong> for region-aware generation.
      </p>

      <h2>Normal map</h2>
      <ul>
        <li><strong>Preprocessor</strong>: <code>BAE-NormalMapPreprocessor</code> or <code>MiDaS-NormalMapPreprocessor</code></li>
        <li><strong>Output</strong>: RGB-encoded surface normals (red=X, green=Y, blue=Z direction)</li>
        <li><strong>Use</strong>: 3D-renders-like surface orientation; preserves how surfaces face the camera.</li>
      </ul>
      <p>
        Normal maps are useful for product photography style transfers (preserve the way light hits
        surfaces) and architectural rendering (preserve facade orientation).
      </p>

      <h2>Semantic segmentation</h2>
      <ul>
        <li><strong>Preprocessor</strong>: <code>SemSegPreprocessor</code> (UPerNet ADE20K) or <code>OneFormer-COCO-SemSegPreprocessor</code></li>
        <li><strong>Output</strong>: per-region color-coded mask. Each color = one semantic class (sky, building, person, etc.)</li>
        <li><strong>Use</strong>: control which regions of the output contain which classes of objects.</li>
      </ul>

      <h2>Use case for segmentation</h2>
      <p>
        Take a real photo of a city street. Get the segmentation: sky in upper third, buildings on
        sides, road in middle. Now generate a totally different style (cyberpunk, watercolor) but
        with the same scene-class layout. The model knows where buildings should be without
        copying the exact geometry.
      </p>

      <h2>The other preprocessors worth mentioning</h2>
      <ul>
        <li><strong>MLSD</strong> — straight-line detector. Good for architecture/interiors.</li>
        <li><strong>Soft Edge / HED</strong> — softer alternative to Canny.</li>
        <li><strong>InpaintPreprocessor</strong> — special preprocessor for inpaint ControlNet variants.</li>
        <li><strong>Recolor</strong> — extracts brightness/luminance only; used for colorizing grayscale.</li>
      </ul>

      <NoteBlock title="The 80/20 rule">
        80% of ControlNet use is Canny + Depth + OpenPose (DWPose) + Tile. Master those four.
        Lineart, Normal, Seg, MLSD are good to know exists but you'll rarely need them.
      </NoteBlock>
    </>
  )
}

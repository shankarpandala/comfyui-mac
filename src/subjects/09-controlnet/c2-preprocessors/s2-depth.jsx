import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Depth() {
  return (
    <>
      <p>
        Depth ControlNet preserves 3D scene structure. The preprocessor estimates per-pixel depth
        from a 2D image; ControlNet uses the depth map to ensure generated output has the same
        spatial layout. Good for relighting, restyling, recoloring while keeping the scene intact.
      </p>

      <h2>The preprocessors</h2>
      <ul>
        <li><strong>MiDaS</strong> — older, faster, slightly less accurate. <code>MiDaS-DepthMapPreprocessor</code>.</li>
        <li><strong>ZoeDepth</strong> — better metric depth. <code>Zoe-DepthMapPreprocessor</code>.</li>
        <li><strong>DepthAnything v2</strong> — current state-of-the-art. <code>DepthAnythingV2Preprocessor</code>. Recommended.</li>
      </ul>

      <h2>Output</h2>
      <p>
        Grayscale image where bright = close, dark = far. ControlNet uses this to constrain the
        UNet's spatial understanding without telling it about colors or textures.
      </p>

      <h2>Use cases</h2>
      <ul>
        <li><strong>Relight a scene</strong> — preserve geometry; new prompt drives lighting/mood.</li>
        <li><strong>Restyle a photo</strong> — keep the layout; convert to oil painting / cyberpunk / anime.</li>
        <li><strong>Recolor</strong> — same scene, different palette.</li>
        <li><strong>Architectural visualization</strong> — preserve building geometry from a sketch.</li>
      </ul>

      <h2>Mac performance</h2>
      <p>
        DepthAnythingV2 uses a small ViT and runs on MPS. ~0.5 s per preprocess on M5 Pro at 1024
        input. Fast.
      </p>

      <NoteBlock title="Depth vs Canny">
        Depth preserves <em>3D</em> structure; Canny preserves <em>2D</em> edges. For relighting,
        depth is far better — the UNet can recolor without flattening the scene. For style transfer
        of a 2D illustration, Canny works better.
      </NoteBlock>
    </>
  )
}

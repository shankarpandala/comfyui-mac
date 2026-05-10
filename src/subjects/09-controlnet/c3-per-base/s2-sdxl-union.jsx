import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2SdxlUnion() {
  return (
    <>
      <p>
        SDXL ControlNets have an interesting property: many recent ones are <strong>Union</strong>{' '}
        models — a single file that handles multiple control types (Canny, Depth, OpenPose, Lineart,
        etc.) via a control type input. Saves disk and memory significantly.
      </p>

      <h2>The Union models</h2>
      <ul>
        <li><strong>Xinsir Union ProMax</strong> — <code>controlnet-union-sdxl-1.0-promax.safetensors</code>. The leading SDXL Union. ~2.5 GB. Supports Canny, Depth, OpenPose, Lineart, Tile, Scribble, Soft Edge, Normal, MLSD.</li>
        <li><strong>Diffusers SDXL ControlNets</strong> — separate files per type (older pattern).</li>
      </ul>

      <h2>How Union works in ComfyUI</h2>
      <ol>
        <li>Load the Union ControlNet via <code>ControlNetLoader</code>.</li>
        <li>Use <code>SetUnionControlNetType</code> node — picks which control type the model should expect (canny / depth / openpose / etc.).</li>
        <li>Run the matching preprocessor on your input image.</li>
        <li>Apply via <code>ControlNetApplyAdvanced</code>.</li>
      </ol>

      <h2>The Mac advantage</h2>
      <ul>
        <li>One ControlNet file (~2.5 GB) instead of seven (~10+ GB on disk).</li>
        <li>Switching control types is just a node config change — no model swap.</li>
        <li>Multi-ControlNet stacking (chapter 4) can stack Union + a second control type from the same Union file (with different SetUnionControlNetType settings).</li>
      </ul>

      <h2>Quality vs single-purpose ControlNets</h2>
      <p>
        Union ControlNets are competitive with type-specific ones for most controls. Slight edge for
        single-purpose models on niche cases (e.g., specialized lineart-anime). For 95% of work,
        Union is fine and simpler.
      </p>

      <NoteBlock title="The Mac SDXL ControlNet default">
        Download Xinsir Union ProMax once. Use it for everything SDXL-ControlNet. Skip the
        type-specific downloads unless you find a quality issue with a specific control.
      </NoteBlock>
    </>
  )
}

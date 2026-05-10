import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S5Tile() {
  return (
    <>
      <p>
        Tile ControlNet is a special case — it accepts the input image as the control directly (no
        edge / depth / pose preprocessing). It's used for "preserve this image but resample it"
        workflows: high-fidelity upscale, detail enhancement, style restyling that respects the
        original closely.
      </p>

      <h2>How it works</h2>
      <p>
        Tile ControlNet is trained on (image, slightly-degraded-image) pairs. At inference, the
        ControlNet steers the UNet to recreate the input image while the prompt influences detail
        choices. Strength = 1 reconstructs faithfully; lower lets the model deviate.
      </p>

      <h2>Use cases</h2>
      <ul>
        <li><strong>High-fidelity upscale</strong> — generate at 1024, ESRGAN to 2048, run a Tile-ControlNet pass at 2048 to add detail.</li>
        <li><strong>Detail enhancement</strong> — same image, more sharpness/detail via prompt.</li>
        <li><strong>Style match</strong> — keep image structure, prompt a different style.</li>
      </ul>

      <h2>Tile vs Canny</h2>
      <ul>
        <li>Canny throws away color and texture. Tile keeps everything.</li>
        <li>Canny works great for compositional control. Tile is for fidelity preservation.</li>
        <li>Tile is the ControlNet you reach for in upscaling pipelines.</li>
      </ul>

      <h2>The "tiled diffusion" combo</h2>
      <p>
        Tile ControlNet + Tile Sampler (from Custom-Scripts) lets you generate huge images by
        breaking them into overlapping tiles, each generated with Tile ControlNet preservation.
        Result: 4K outputs from a 1K SDXL on Mac in a few minutes.
      </p>

      <NoteBlock title="Tile is FLUX-friendly too">
        FLUX has its own Tile-equivalent (FLUX Redux can play this role with appropriate strength).
        For pure SDXL Mac workflows, Tile ControlNet + ESRGAN is the upscaling stack.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Tiling() {
  return (
    <>
      <p>
        Tiled diffusion upscaling generates very large images by chunking the canvas into
        overlapping tiles, sampling each, then blending. Memory stays bounded; output can be
        arbitrarily large.
      </p>

      <h2>The custom node</h2>
      <p><code>ComfyUI-TiledDiffusion</code> — install via Manager.</p>

      <h2>How it works</h2>
      <ol>
        <li>Take the input image (or upscaled-via-ESRGAN intermediate).</li>
        <li>Encode to latent via VAE.</li>
        <li>Tile the latent into 64×64 (or 128×128) overlapping tiles with ~25% overlap.</li>
        <li>Run sampler on each tile with low denoise (0.3–0.4) and a Tile ControlNet for fidelity.</li>
        <li>Blend tiles back together with feathered overlap regions.</li>
        <li>VAE decode the result.</li>
      </ol>

      <h2>The Tile ControlNet pairing</h2>
      <p>
        Without Tile ControlNet, each tile diverges from its neighbors. With Tile ControlNet
        constraining each tile to its underlying input, tiles stay coherent. Strength 0.6–0.8.
      </p>

      <h2>Recipe (SDXL tiled upscale 1024 → 4096)</h2>
      <ol>
        <li>Generate or load a 1024 image.</li>
        <li>ESRGAN upscale to 4096 → coarse upscaled image.</li>
        <li>VAEEncode → latent.</li>
        <li><code>TiledDiffusion</code> node wraps your standard sampler.</li>
        <li>Tile ControlNet with the coarse upscaled image as input, strength 0.7.</li>
        <li>KSampler at denoise 0.4, 20 steps.</li>
        <li>VAEDecode → final 4096 with diffusion-added detail.</li>
      </ol>

      <h2>Wall time on M5 Pro</h2>
      <p>4096×4096 tiled diffusion upscale of an SDXL output: ~5–8 minutes (depends on tile count).</p>

      <NoteBlock title="The Mac upscale ladder">
        ESRGAN alone for fast 4× (3 s). ESRGAN + tiled diffusion for high-quality 4× (5 min). SUPIR
        for hero-quality 2× (3 min). Pick based on speed vs quality tradeoff.
      </NoteBlock>
    </>
  )
}

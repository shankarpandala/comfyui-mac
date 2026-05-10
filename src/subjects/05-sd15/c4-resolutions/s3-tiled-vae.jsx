import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3TiledVae() {
  return (
    <>
      <p>
        For very large outputs (2K, 4K), the VAE decode step itself can OOM — even on Mac unified
        memory. Tiled VAE decode breaks the latent into overlapping tiles, decodes each, blends the
        seams. The trade-off is decode time for memory.
      </p>

      <h2>The node</h2>
      <p>
        ComfyUI ships <code>VAEDecodeTiled</code> as a built-in. Use it as a drop-in replacement for
        <code>VAEDecode</code>. Parameters:
      </p>
      <ul>
        <li><code>tile_size</code> — pixel dimension of each tile. 512 is the default; 256 for very tight memory.</li>
        <li><code>overlap</code> — how much each tile overlaps neighbors (in pixels). 64 default; higher overlap = better seam blending but slower.</li>
      </ul>

      <h2>When you need it</h2>
      <ul>
        <li>SD 1.5 + hi-res fix to 2048×2048 or larger.</li>
        <li>SDXL output at 2048+ (covered in Subject 06).</li>
        <li>Any time VAEDecode itself OOMs (rare on Mac with 24 GB until you go above 2K).</li>
      </ul>

      <h2>The seam problem</h2>
      <p>
        Tiles are decoded independently, so the boundary between tiles can show subtle seams.
        Increasing <code>overlap</code> reduces seams but increases compute. The default 64-pixel
        overlap is usually invisible; bump to 128 if you spot seams in detailed regions.
      </p>

      <h2>Mac-specific notes</h2>
      <p>
        On unified memory, the OOM threshold for VAEDecode is around 2048×2048 latents (i.e., 16K×16K
        images). You'll rarely hit it. When you do, tiled VAE is the answer — but you've also probably
        wandered into territory where you should be upscaling with ESRGAN instead of decoding huge
        latents.
      </p>

      <NoteBlock title="VAEEncodeTiled exists too">
        For the reverse direction (img2img on a huge input image), use <code>VAEEncodeTiled</code>.
        Same parameters, same trade-off. Less commonly needed since input images are usually 1–2 MP.
      </NoteBlock>
    </>
  )
}

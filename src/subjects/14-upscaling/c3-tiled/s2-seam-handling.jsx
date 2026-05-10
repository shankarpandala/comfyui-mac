import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2SeamHandling() {
  return (
    <>
      <p>
        Tiled upscaling can produce visible seams between tiles. The fix is in tile size, overlap,
        and blending strategy.
      </p>

      <h2>Seam-causing factors</h2>
      <ul>
        <li><strong>Insufficient overlap</strong> — tiles meet abruptly.</li>
        <li><strong>Different sampler RNG</strong> across tiles — each tile's noise is independent.</li>
        <li><strong>High denoise</strong> — more freedom per tile = more divergence.</li>
        <li><strong>Weak Tile ControlNet</strong> — tiles drift from input.</li>
      </ul>

      <h2>Mitigations</h2>
      <ul>
        <li><strong>Increase overlap to 32+ pixels</strong> — wider blend regions hide seams.</li>
        <li><strong>Lower denoise to 0.3–0.4</strong> — tiles stay closer to input.</li>
        <li><strong>Stronger Tile ControlNet (0.8)</strong> — anchor tiles to input.</li>
        <li><strong>Same seed across tiles</strong> — node options support this; reduces randomness divergence.</li>
        <li><strong>Multi-pass with different tile offsets</strong> — second pass with tiles offset by 50% of tile size, blended with first pass.</li>
      </ul>

      <h2>Tile size trade-off</h2>
      <ul>
        <li><strong>Smaller tiles (64×64 latent = 512×512 pixel)</strong> — less memory per tile; more tiles total; more seams to manage.</li>
        <li><strong>Larger tiles (128×128 latent = 1024×1024 pixel)</strong> — more memory per tile; fewer seams; closer to "regular generation".</li>
      </ul>
      <p>For Mac with ample memory, 128×128 latent tiles with 32-pixel overlap is the safe default.</p>

      <h2>The "single pass at huge res" alternative</h2>
      <p>
        If you have memory budget, generating directly at 2048×2048 SDXL (no tiling) avoids seam
        issues entirely. ~5 GB activation memory; works on M5 Pro. Sample quality will degrade
        slightly (composition issues from non-native resolution), but no seams.
      </p>

      <NoteBlock title="The pragmatic trade">
        For 2K outputs, generate at native + ESRGAN. For 4K, tiled diffusion or ESRGAN alone
        (faster, less detailed). For 8K, tiled diffusion is required — no other option fits in 24
        GB.
      </NoteBlock>
    </>
  )
}

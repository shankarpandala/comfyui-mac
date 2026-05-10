import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S13dVaeAnatomy() {
  return (
    <>
      <p>
        Image VAEs compress 2D pixel space (H × W × 3) → 2D latent space (H/8 × W/8 × C). Video VAEs
        add a temporal dimension and compress 3D (T × H × W × 3) → 3D latent (T/4 × H/8 × W/8 × C).
        Reduces the latent's size by an extra 4× temporal factor.
      </p>

      <h2>The "3D causal" qualifier</h2>
      <p>
        Modern video VAEs (Hunyuan, Wan, LTX) are 3D causal — convolutions extend across time but
        only look <em>backward</em>, not forward. This makes them streaming-compatible: encode frame
        N using only frames 0..N. Decoding the same way.
      </p>

      <h2>Compression numbers</h2>
      <table>
        <thead><tr><th>Model</th><th>Spatial</th><th>Temporal</th><th>Channels</th><th>Combined ratio</th></tr></thead>
        <tbody>
          <tr><td>HunyuanVideo VAE</td><td>1/8</td><td>1/4</td><td>16</td><td>~12×</td></tr>
          <tr><td>Wan VAE</td><td>1/8</td><td>1/4</td><td>16</td><td>~12×</td></tr>
          <tr><td>LTX VAE</td><td>1/32</td><td>1/8</td><td>128</td><td>~8× (denser channels)</td></tr>
          <tr><td>SVD VAE (image-based)</td><td>1/8</td><td>1 (no temporal compression)</td><td>4</td><td>~48×</td></tr>
        </tbody>
      </table>

      <h2>Why temporal compression matters</h2>
      <p>
        For a 5-second × 720p × 24 fps video: 120 frames × 720 × 1280 × 3 = ~330 M values. A 12×
        compressed latent is ~28 M values — manageable for a GPU. Without temporal compression,
        video diffusion would be 4× more expensive.
      </p>

      <h2>The decode/encode cost</h2>
      <p>
        Video VAE decode is more expensive than image VAE decode, scaling with frame count. For
        Hunyuan 5s, decode takes ~30 seconds on M5 Pro (vs ~1 second for image VAE).
      </p>

      <NoteBlock title="Mac memory note">
        Video VAE decode is the OOM bottleneck for many video workflows. <code>--cpu-vae</code>
        helps — moves the heavy decode to CPU at small cost on unified memory. Recommended for
        Hunyuan / Wan workflows on tight 24 GB.
      </NoteBlock>
    </>
  )
}

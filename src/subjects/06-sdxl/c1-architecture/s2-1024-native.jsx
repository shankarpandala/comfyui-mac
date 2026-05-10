import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S21024Native() {
  return (
    <>
      <p>
        SDXL was trained at 1024×1024 native resolution. Unlike SD 1.5 (which breaks above 768), SDXL
        is comfortable in the 768–1536 range. This single change is the biggest practical reason SDXL
        beat SD 1.5 for general-purpose work.
      </p>

      <h2>The trained aspect ratios</h2>
      <p>SDXL was trained on a curated set of aspect-ratio buckets, each a multiple of 64 with similar pixel count:</p>
      <table>
        <thead><tr><th>Ratio</th><th>Width × Height</th><th>Use</th></tr></thead>
        <tbody>
          <tr><td>1:1</td><td>1024 × 1024</td><td>Square — default</td></tr>
          <tr><td>4:3</td><td>1152 × 896</td><td>Classic photo landscape</td></tr>
          <tr><td>3:4</td><td>896 × 1152</td><td>Portrait</td></tr>
          <tr><td>16:9</td><td>1344 × 768</td><td>Cinematic landscape</td></tr>
          <tr><td>9:16</td><td>768 × 1344</td><td>Reels/Shorts</td></tr>
          <tr><td>21:9</td><td>1536 × 640</td><td>Ultra-wide</td></tr>
          <tr><td>2:3</td><td>832 × 1216</td><td>Portrait photo</td></tr>
          <tr><td>3:2</td><td>1216 × 832</td><td>Landscape photo</td></tr>
        </tbody>
      </table>

      <p>
        Sticking to these buckets gives best quality. Off-bucket dimensions still work but you may
        see composition issues similar to SD 1.5 at non-native res.
      </p>

      <h2>The 64-multiple rule</h2>
      <p>
        Width and height must be multiples of 8 minimum, multiples of 64 strongly preferred.
        ComfyUI's EmptyLatentImage will accept any multiple of 8.
      </p>

      <h2>Going larger than 1536</h2>
      <p>
        Above 1536×1536, SDXL starts to show composition artifacts (similar to SD 1.5 above 768).
        For larger outputs, use:
      </p>
      <ul>
        <li>Hi-res fix (generate at 1024, upscale latent, second-pass)</li>
        <li>ESRGAN upscaler post-VAE</li>
        <li>Tile-based ControlNet upscaler</li>
      </ul>

      <NoteBlock title="The 768 baseline">
        On a tight memory budget, generating SDXL at 768×768 and upscaling to 1024 can save 30–40%
        memory at the cost of slight detail loss. Useful when stacking many ControlNets / IP-Adapters.
      </NoteBlock>
    </>
  )
}

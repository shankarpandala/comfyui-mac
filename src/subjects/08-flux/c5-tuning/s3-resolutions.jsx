import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3Resolutions() {
  return (
    <>
      <p>
        FLUX is trained at multiple resolutions and is more flexible than SDXL or SD 1.5. It handles
        non-standard aspect ratios well. The trade-off on Mac is memory.
      </p>

      <h2>FLUX-friendly resolutions on Mac</h2>
      <table>
        <thead><tr><th>Resolution</th><th>Use</th><th>Activation memory</th></tr></thead>
        <tbody>
          <tr><td>1024 × 1024</td><td>Square default</td><td>~2.5 GB</td></tr>
          <tr><td>1216 × 832</td><td>3:2 landscape</td><td>~2.5 GB</td></tr>
          <tr><td>832 × 1216</td><td>2:3 portrait</td><td>~2.5 GB</td></tr>
          <tr><td>1344 × 768</td><td>16:9</td><td>~2.6 GB</td></tr>
          <tr><td>768 × 1344</td><td>9:16 (Reels)</td><td>~2.6 GB</td></tr>
          <tr><td>1536 × 1024</td><td>3:2 large</td><td>~3.7 GB</td></tr>
          <tr><td>1536 × 1536</td><td>Square large</td><td>~5.6 GB</td></tr>
          <tr><td>2048 × 1024</td><td>Wide cinematic</td><td>~5.0 GB</td></tr>
        </tbody>
      </table>

      <h2>The 24 GB Mac ceiling</h2>
      <p>
        With FLUX Dev Q5_K_S (UNet ~8 GB) + T5 GGUF (~3.5 GB) + CLIP-L + VAE + activations:
      </p>
      <ul>
        <li>1024×1024 → ~14.5 GB total. Comfortable.</li>
        <li>1536×1536 → ~17.5 GB total. Tight, but works.</li>
        <li>2048×2048 → ~22 GB total. Borderline; may need --lowvram.</li>
      </ul>

      <h2>The "go big later" pattern</h2>
      <p>
        For Mac, the best path to high-resolution FLUX output is:
      </p>
      <ol>
        <li>Generate at 1024×1024 (45 s).</li>
        <li>ESRGAN 4× upscale → 4096×4096 (5 s).</li>
      </ol>
      <p>
        Total: 50 s and 4K output. Compare to direct 2048×2048 FLUX: 180+ s and only 2× the
        resolution. The upscaler-after pattern wins.
      </p>

      <NoteBlock title="9:16 Reels is FLUX's strongest aspect ratio">
        FLUX produces excellent 768×1344 (9:16 portrait) outputs without any of the SDXL composition
        pitfalls. For social-media content (Subject 30), this is your aspect-ratio default.
      </NoteBlock>
    </>
  )
}

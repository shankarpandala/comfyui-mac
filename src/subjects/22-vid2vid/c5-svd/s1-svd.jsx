import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Svd() {
  return (
    <>
      <p>
        Stable Video Diffusion (Stability AI, 2023) is the original open-source image-to-video
        model. SVD-XT is the extended-time variant (25 frames vs 14). Older than LTX/Wan but still
        useful — well-supported, stable, fast on Mac.
      </p>

      <h2>Files</h2>
      <ul>
        <li><strong>SVD-XT</strong>: <code>svd_xt.safetensors</code> (~5 GB)</li>
      </ul>

      <h2>Recipe</h2>
      <ol>
        <li><code>ImageOnlyCheckpointLoader</code> → svd_xt.safetensors.</li>
        <li><code>LoadImage</code> → input still.</li>
        <li><code>SVD_img2vid_Conditioning</code> → wires image as conditioning, generates 25-frame latent.</li>
        <li><code>KSampler</code>: 30 steps, cfg 2.5 (SVD likes very low cfg).</li>
        <li><code>VAEDecode</code> + <code>VHS_VideoCombine</code> @ 7 fps.</li>
      </ol>

      <h2>Native output</h2>
      <ul>
        <li>25 frames @ 7 fps ≈ 3.5 seconds.</li>
        <li>Resolution: 1024×576 (16:9 only).</li>
      </ul>

      <h2>Wall time on M5 Pro</h2>
      <p>~3-5 minutes per 3.5-second clip.</p>

      <h2>SVD vs Wan I2V vs LTX I2V</h2>
      <table>
        <thead><tr><th>Model</th><th>Strength</th></tr></thead>
        <tbody>
          <tr><td>SVD-XT</td><td>Most stable / proven; 16:9 only</td></tr>
          <tr><td>LTX I2V</td><td>Fastest; flexible aspect ratios</td></tr>
          <tr><td>Wan I2V</td><td>Best identity preservation; slowest</td></tr>
        </tbody>
      </table>

      <NoteBlock title="The Phase 3 wrap-up">
        Phase 3 is done. You now have the full Mac video toolkit: AnimateDiff (fast iteration), LTX
        (daily t2v/i2v), Wan (quality + i2v + VACE editing), Hunyuan (cinematic), SVD (stable
        baseline), RIFE (frame interpolation). Phase 4 covers audio + voice — the other half of
        the AI clone capstone.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1SvdClip() {
  return (
    <>
      <p>SVD-XT i2v with CLIP-conditioning text — older but reliable. Works when Wan/Hunyuan fail or memory is too tight.</p>

      <h2>Recipe</h2>
      <ol>
        <li><code>ImageOnlyCheckpointLoader</code> → svd_xt.safetensors.</li>
        <li>LoadImage → input.</li>
        <li><code>SVD_img2vid_Conditioning</code>.</li>
        <li>KSampler: 30 steps, cfg 2.5, euler.</li>
        <li>VAEDecode + VHS_VideoCombine @ 7 fps.</li>
      </ol>

      <h2>Output spec</h2>
      <ul>
        <li>25 frames @ 7 fps ≈ 3.5 seconds.</li>
        <li>1024×576 only (16:9 fixed).</li>
      </ul>

      <h2>Wall time</h2>
      <p>~3-5 min on M5 Pro.</p>

      <h2>SVD's limitations</h2>
      <ul>
        <li>Fixed aspect ratio.</li>
        <li>Short output (3.5s).</li>
        <li>Less prompt influence — text mostly sets motion energy, not specific actions.</li>
      </ul>

      <NoteBlock title="SVD's Mac niche">
        When LTX/Wan/Hunyuan don't fit memory or fail. SVD is well-tested and lightweight — a
        reliable fallback.
      </NoteBlock>
    </>
  )
}

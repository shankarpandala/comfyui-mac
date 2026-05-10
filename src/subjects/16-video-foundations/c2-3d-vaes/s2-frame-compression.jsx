import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2FrameCompression() {
  return (
    <>
      <p>
        Latent frame counts don't equal output frame counts. The temporal compression ratio of the
        VAE matters when you're sizing batches and predicting memory.
      </p>

      <h2>Output frames vs latent frames</h2>
      <ul>
        <li>HunyuanVideo at 1/4 temporal compression: 121 output frames → 31 latent "time slices" (rounded).</li>
        <li>Wan VAE at 1/4: same.</li>
        <li>LTX VAE at 1/8: 97 output frames → 13 latent time slices.</li>
      </ul>

      <h2>Picking output frame counts</h2>
      <p>
        Frame counts must be valid for the VAE's compression. ComfyUI nodes for these models accept
        only specific frame counts — typically 4n+1 (HunyuanVideo) or 8n+1 (LTX).
      </p>
      <table>
        <thead><tr><th>Model</th><th>Valid frame counts</th><th>Common choice</th></tr></thead>
        <tbody>
          <tr><td>HunyuanVideo</td><td>4n+1: 5, 9, ..., 121, 125</td><td>121 frames @ 24 fps = 5 s</td></tr>
          <tr><td>Wan</td><td>4n+1: same range</td><td>81 frames @ 16 fps ≈ 5 s</td></tr>
          <tr><td>LTX</td><td>8n+1: 9, 17, ..., 97, 105</td><td>97 frames @ 24 fps ≈ 4 s</td></tr>
          <tr><td>SVD-XT</td><td>fixed 25 frames</td><td>25 frames @ 7 fps ≈ 3.5 s</td></tr>
          <tr><td>AnimateDiff</td><td>16, 24, 32 (model-dependent)</td><td>16 frames @ 8 fps = 2 s</td></tr>
        </tbody>
      </table>

      <h2>Memory scaling with frames</h2>
      <p>
        Activations grow ~linearly with frame count. Doubling frames doubles activation memory.
        That's why most Mac video workflows cap at 5 seconds — beyond that, OOM.
      </p>

      <h2>The "longer video" strategy</h2>
      <p>
        For &gt; 5s outputs, generate multiple 5s segments and stitch. Or use first-frame /
        last-frame interpolation to chain — Subject 27d / 27f cover this in detail.
      </p>

      <NoteBlock title="The 5-second sweet spot">
        Hunyuan and Wan are trained for ~5s clips. Going shorter wastes the model's expressivity;
        going longer hits memory walls. 5s × 24 fps = 120 frames is the default for a reason.
      </NoteBlock>
    </>
  )
}

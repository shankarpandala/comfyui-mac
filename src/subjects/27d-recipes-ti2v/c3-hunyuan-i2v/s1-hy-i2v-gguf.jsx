import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1HyI2vGguf() {
  return (
    <>
      <p>Hunyuan I2V GGUF — Tencent's i2v variant. Slightly better motion fidelity than Wan; tighter Mac memory.</p>

      <h2>Files</h2>
      <ul>
        <li><code>HunyuanVideo-I2V-Q4_K_S.gguf</code></li>
        <li>Hunyuan T5 + LLAMA encoders GGUF</li>
        <li>Hunyuan VAE bf16</li>
      </ul>

      <h2>Recipe</h2>
      <ol>
        <li>Standard Hunyuan load (UnetLoaderGGUF + DualCLIPLoaderGGUF + VAELoader).</li>
        <li>LoadImage → input still.</li>
        <li><code>HunyuanImageToVideo</code> → wraps as first frame.</li>
        <li>CLIPTextEncode → motion prompt.</li>
        <li>KSampler: 30 steps, cfg 6.0, euler, simple.</li>
        <li>VAEDecodeTiled + VHS_VideoCombine.</li>
      </ol>

      <h2>Wall time</h2>
      <p>~13-18 min for 5-second clip on M5 Pro.</p>

      <h2>Hunyuan I2V vs Wan I2V</h2>
      <ul>
        <li>Hunyuan: slightly more cinematic feel.</li>
        <li>Wan: stronger identity preservation through clip.</li>
        <li>Hunyuan slightly faster on Mac (tighter UNet + less encoder memory).</li>
      </ul>

      <NoteBlock title="The 'try both' approach">
        For hero AI clone shots, render the same input still through Wan I2V AND Hunyuan I2V. Pick
        the better output. ~30 minutes total wait but ensures best result.
      </NoteBlock>
    </>
  )
}

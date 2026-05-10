import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1SchnellQ5() {
  return (
    <>
      <p>FLUX Schnell GGUF Q5_K_S — fast FLUX iteration on Mac. ~8 seconds per image at FLUX quality.</p>

      <h2>Files</h2>
      <ul>
        <li><code>flux1-schnell-Q5_K_S.gguf</code></li>
        <li><code>t5-v1_1-xxl-encoder-Q5_K_M.gguf</code></li>
        <li><code>clip_l.safetensors</code></li>
        <li><code>ae.safetensors</code> (FLUX VAE, bf16)</li>
      </ul>

      <h2>Settings</h2>
      <ul>
        <li>UnetLoaderGGUF + DualCLIPLoaderGGUF (type=flux) + VAELoader</li>
        <li>Steps: 4 · cfg: 1.0 · guidance: 0 (Schnell is distilled, ignores guidance)</li>
        <li>Sampler: <code>euler</code> · Scheduler: <code>sgm_uniform</code></li>
        <li>Launch flags: <code>--bf16-unet --bf16-vae</code></li>
      </ul>

      <h2>Wall time</h2>
      <p>~8 seconds per 1024×1024 image on M5 Pro.</p>

      <h2>Memory</h2>
      <p>~12 GB peak. Comfortable on 24 GB Mac.</p>

      <NoteBlock title="The FLUX iteration default">
        FLUX Schnell Q5_K_S is the recommended Mac iteration loop for FLUX. Faster than SDXL
        canonical (8s vs 17s) at higher base quality.
      </NoteBlock>
    </>
  )
}

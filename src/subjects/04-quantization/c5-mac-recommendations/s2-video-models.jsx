import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2VideoModels() {
  return (
    <>
      <p>
        Video on Mac is more constrained than image. The cheat sheet, ordered by Mac-friendliness.
      </p>

      <h2>LTX-Video — most Mac-friendly, recommended starting point</h2>
      <table>
        <thead><tr><th>File</th><th>Source</th><th>Note</th></tr></thead>
        <tbody>
          <tr><td><code>ltx-video-2b-v0.9.7.safetensors</code></td><td>HF: <code>Lightricks/LTX-Video</code></td><td>2B params, fp16, ~5 GB</td></tr>
          <tr><td><code>ltx-vae.safetensors</code></td><td>same repo</td><td>Bundled in checkpoint</td></tr>
          <tr><td>LTX-Video 13B</td><td>same repo, larger checkpoint</td><td>Better quality, tighter on 24 GB</td></tr>
        </tbody>
      </table>

      <h2>HunyuanVideo</h2>
      <table>
        <thead><tr><th>File</th><th>Source</th></tr></thead>
        <tbody>
          <tr><td><code>HunyuanVideo-Q4_K_S.gguf</code></td><td>HF: <code>city96/HunyuanVideo-gguf</code></td></tr>
          <tr><td><code>HunyuanVideo-T5-LLM-Q5_K_M.gguf</code> (combined LLAMA+T5 encoders)</td><td>same family</td></tr>
          <tr><td><code>hunyuan_video_vae_bf16.safetensors</code></td><td>HF: <code>tencent/HunyuanVideo</code></td></tr>
          <tr><td>FastVideo distilled variant (when available)</td><td>community fp8 or GGUF — check city96</td></tr>
        </tbody>
      </table>

      <h2>Wan 2.1 / 2.2</h2>
      <table>
        <thead><tr><th>File</th><th>Source / variant</th></tr></thead>
        <tbody>
          <tr><td><code>Wan2.1-T2V-14B-Q4_K_S.gguf</code></td><td>HF: <code>city96/Wan2.1-T2V-14B-gguf</code></td></tr>
          <tr><td><code>Wan2.1-I2V-14B-720P-Q4_K_S.gguf</code></td><td>i2v variant</td></tr>
          <tr><td><code>Wan2.2-T2V-5B</code> (fp16)</td><td>Smaller, faster Wan 2.2 variant</td></tr>
          <tr><td><code>umt5-xxl-encoder-Q5_K_M.gguf</code> for Wan</td><td>Wan text encoder</td></tr>
          <tr><td>Wan VAE</td><td>From the Wan repo</td></tr>
        </tbody>
      </table>

      <h2>AnimateDiff (with SDXL or SD1.5 base)</h2>
      <table>
        <thead><tr><th>File</th><th>Source</th></tr></thead>
        <tbody>
          <tr><td><code>mm_sdxl_v10_beta.safetensors</code></td><td>HF: <code>guoyww/animatediff</code></td></tr>
          <tr><td><code>animatediff_lightning_4step_diffusers.safetensors</code></td><td>HF: <code>ByteDance/AnimateDiff-Lightning</code></td></tr>
          <tr><td>Motion LoRAs (camera pan/zoom/tilt)</td><td>same repo</td></tr>
        </tbody>
      </table>

      <h2>Stable Video Diffusion</h2>
      <table>
        <thead><tr><th>File</th><th>Source</th></tr></thead>
        <tbody>
          <tr><td><code>svd_xt.safetensors</code></td><td>HF: <code>stabilityai/stable-video-diffusion-img2vid-xt</code></td></tr>
        </tbody>
      </table>

      <h2>RIFE / FILM (frame interpolation)</h2>
      <p>For doubling fps cheaply after generation:</p>
      <ul>
        <li><code>rife49.pth</code> via <code>ComfyUI-Frame-Interpolation</code> custom node</li>
        <li><code>film_net_fp32.pt</code> via the same package</li>
      </ul>

      <NoteBlock title="Storage reality check">
        A complete video toolkit on Mac is ~25–35 GB on disk: LTX (5 GB) + Hunyuan Q4 (8 GB) +
        Hunyuan encoders + VAE (4 GB) + Wan 14B Q4 (8 GB) + Wan encoders + VAE + AnimateDiff motion
        modules (1 GB) + SVD (5 GB). Plan accordingly. External SSD via symlink if internal is
        tight.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1ImageModels() {
  return (
    <>
      <p>
        The cheat sheet. For every image model you'll touch in Phase 2, here's the Mac-recommended
        download. Bookmark this section.
      </p>

      <h2>SD 1.5 family</h2>
      <table>
        <thead><tr><th>Model</th><th>File</th><th>Source</th></tr></thead>
        <tbody>
          <tr><td>SD 1.5 base</td><td><code>v1-5-pruned-emaonly.safetensors</code> (~4 GB)</td><td>HF: <code>runwayml/stable-diffusion-v1-5</code></td></tr>
          <tr><td>DreamShaper 8</td><td><code>dreamshaper_8.safetensors</code></td><td>CivitAI</td></tr>
          <tr><td>Realistic Vision V6</td><td><code>realisticVisionV60B1_v51HyperVAE.safetensors</code></td><td>CivitAI</td></tr>
        </tbody>
      </table>

      <h2>SDXL family</h2>
      <table>
        <thead><tr><th>Model</th><th>File</th><th>Notes</th></tr></thead>
        <tbody>
          <tr><td>SDXL base</td><td><code>sd_xl_base_1.0.safetensors</code> (~6.7 GB)</td><td>HF: <code>stabilityai/stable-diffusion-xl-base-1.0</code></td></tr>
          <tr><td>SDXL refiner</td><td><code>sd_xl_refiner_1.0.safetensors</code></td><td>Optional second-pass</td></tr>
          <tr><td>Juggernaut XL v9</td><td>same family</td><td>Photoreal SDXL finetune</td></tr>
          <tr><td>SDXL Lightning 4-step LoRA</td><td><code>sdxl_lightning_4step_lora.safetensors</code></td><td>HF: <code>ByteDance/SDXL-Lightning</code></td></tr>
          <tr><td>Hyper-SDXL 8-step LoRA</td><td><code>Hyper-SDXL-8steps-CFG-lora.safetensors</code></td><td>HF: <code>ByteDance/Hyper-SD</code></td></tr>
          <tr><td>Pony Diffusion v6 XL</td><td>~6.7 GB</td><td>CivitAI; mature uncensored base</td></tr>
          <tr><td>Illustrious-XL</td><td>~6.7 GB</td><td>CivitAI; modern illustration base</td></tr>
        </tbody>
      </table>

      <h2>SD 3 / SD 3.5</h2>
      <table>
        <thead><tr><th>Model</th><th>File</th><th>Mac note</th></tr></thead>
        <tbody>
          <tr><td>SD 3.5 Medium</td><td><code>sd3.5_medium.safetensors</code></td><td>HF: <code>stabilityai/stable-diffusion-3.5-medium</code> — fp16, fits comfortably</td></tr>
          <tr><td>SD 3.5 Large</td><td><code>sd3.5_large.safetensors</code> (bf16)</td><td>Borderline at 24 GB; works with --lowvram</td></tr>
          <tr><td>SD 3.5 Large Turbo</td><td>4-step distilled Large</td><td>Faster than Large, similar memory</td></tr>
        </tbody>
      </table>

      <h2>FLUX</h2>
      <table>
        <thead><tr><th>Model</th><th>File</th><th>Notes</th></tr></thead>
        <tbody>
          <tr><td>FLUX Dev UNet</td><td><code>flux1-dev-Q5_K_S.gguf</code></td><td>HF: <code>city96/FLUX.1-dev-gguf</code></td></tr>
          <tr><td>FLUX Schnell UNet</td><td><code>flux1-schnell-Q5_K_S.gguf</code></td><td>HF: <code>city96/FLUX.1-schnell-gguf</code></td></tr>
          <tr><td>T5-XXL encoder</td><td><code>t5-v1_1-xxl-encoder-Q5_K_M.gguf</code></td><td>HF: <code>city96/t5-v1_1-xxl-encoder-gguf</code></td></tr>
          <tr><td>CLIP-L</td><td><code>clip_l.safetensors</code></td><td>HF: <code>black-forest-labs/FLUX.1-schnell</code></td></tr>
          <tr><td>FLUX VAE</td><td><code>ae.safetensors</code></td><td>Same Black Forest repo</td></tr>
        </tbody>
      </table>

      <h2>FLUX control variants</h2>
      <table>
        <thead><tr><th>Model</th><th>File</th></tr></thead>
        <tbody>
          <tr><td>FLUX Fill (inpaint)</td><td><code>flux1-fill-dev-Q5_K_S.gguf</code> via <code>city96/FLUX.1-Fill-dev-gguf</code></td></tr>
          <tr><td>FLUX Canny</td><td><code>flux1-canny-dev-Q4_K_S.gguf</code></td></tr>
          <tr><td>FLUX Depth</td><td><code>flux1-depth-dev-Q4_K_S.gguf</code></td></tr>
          <tr><td>FLUX Redux (image prompt)</td><td><code>flux1-redux-dev.safetensors</code></td></tr>
        </tbody>
      </table>

      <NoteBlock title="The 'one base, many LoRAs' pattern">
        On Mac you'll want one solid base per family (SD 1.5, SDXL, FLUX Dev or Schnell) plus a
        library of LoRAs and ControlNets. Don't hoard 20 different SDXL finetunes — pick 3–5,
        delete the rest. LoRAs are smaller (50–500 MB) and stack on whatever base you have loaded.
      </NoteBlock>
    </>
  )
}

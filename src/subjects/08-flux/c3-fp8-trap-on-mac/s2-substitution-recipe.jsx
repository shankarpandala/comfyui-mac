import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2SubstitutionRecipe() {
  return (
    <>
      <p>
        The mechanical translation from a community fp8 FLUX workflow to a Mac-friendly GGUF FLUX
        workflow. Repeat this every time you import a workflow.
      </p>

      <h2>File substitutions</h2>
      <table>
        <thead><tr><th>fp8 file (NVIDIA)</th><th>GGUF replacement (Mac)</th></tr></thead>
        <tbody>
          <tr><td><code>flux1-dev-fp8.safetensors</code></td><td><code>flux1-dev-Q5_K_S.gguf</code></td></tr>
          <tr><td><code>flux1-schnell-fp8.safetensors</code></td><td><code>flux1-schnell-Q5_K_S.gguf</code></td></tr>
          <tr><td><code>t5xxl_fp8_e4m3fn.safetensors</code></td><td><code>t5-v1_1-xxl-encoder-Q5_K_M.gguf</code></td></tr>
          <tr><td><code>flux1-fill-dev-fp8.safetensors</code></td><td><code>flux1-fill-dev-Q5_K_S.gguf</code></td></tr>
          <tr><td><code>flux1-canny-dev-fp8.safetensors</code></td><td><code>flux1-canny-dev-Q4_K_S.gguf</code></td></tr>
          <tr><td><code>flux1-depth-dev-fp8.safetensors</code></td><td><code>flux1-depth-dev-Q4_K_S.gguf</code></td></tr>
        </tbody>
      </table>

      <h2>Loader node substitutions</h2>
      <table>
        <thead><tr><th>NVIDIA loader</th><th>Mac loader</th></tr></thead>
        <tbody>
          <tr><td><code>UNETLoader</code> + fp8 file</td><td><code>UnetLoaderGGUF</code> + .gguf file</td></tr>
          <tr><td><code>DualCLIPLoader</code> + fp8 T5</td><td><code>DualCLIPLoaderGGUF</code> + GGUF T5</td></tr>
          <tr><td><code>VAELoader</code></td><td>same — VAEs stay .safetensors</td></tr>
          <tr><td><code>CheckpointLoaderSimple</code> (FLUX checkpoint)</td><td>not used; load UNet/CLIP/VAE separately</td></tr>
        </tbody>
      </table>

      <h2>The wiring is identical</h2>
      <p>
        Once loaders are swapped, the rest of the FLUX workflow is unchanged: KSampler /
        SamplerCustomAdvanced consumes MODEL/CONDITIONING/LATENT exactly the same way. The substitution
        is purely at the load layer.
      </p>

      <h2>Where to download</h2>
      <ul>
        <li><strong>FLUX UNet GGUF</strong>: HF <code>city96/FLUX.1-dev-gguf</code> and <code>city96/FLUX.1-schnell-gguf</code>.</li>
        <li><strong>T5 GGUF</strong>: HF <code>city96/t5-v1_1-xxl-encoder-gguf</code>.</li>
        <li><strong>CLIP-L</strong>: HF <code>black-forest-labs/FLUX.1-schnell</code> → <code>clip_l.safetensors</code> (used for both Dev and Schnell).</li>
        <li><strong>VAE</strong>: same Black Forest repo → <code>ae.safetensors</code>.</li>
      </ul>

      <NoteBlock title="The 'one-time setup' kit">
        Download once: FLUX Dev Q5_K_S (~8 GB) + Schnell Q5_K_S (~8 GB) + T5 Q5_K_M (~3.5 GB) +
        CLIP-L (~250 MB) + VAE (~170 MB). ~20 GB total. Powers every FLUX workflow you'll touch
        on Mac.
      </NoteBlock>
    </>
  )
}

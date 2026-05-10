import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Loading() {
  return (
    <>
      <p>
        Step-by-step the FLUX-on-Mac loading nodes from scratch. Three nodes, ten clicks.
      </p>

      <h2>The full FLUX load sequence</h2>

      <h3>1. UnetLoaderGGUF</h3>
      <ul>
        <li><strong>unet_name</strong>: <code>flux1-dev-Q5_K_S.gguf</code></li>
        <li>Output: MODEL (purple)</li>
      </ul>

      <h3>2. DualCLIPLoaderGGUF</h3>
      <ul>
        <li><strong>clip_name1</strong>: <code>clip_l.safetensors</code></li>
        <li><strong>clip_name2</strong>: <code>t5-v1_1-xxl-encoder-Q5_K_M.gguf</code></li>
        <li><strong>type</strong>: <code>flux</code></li>
        <li>Output: CLIP (yellow)</li>
      </ul>

      <h3>3. VAELoader</h3>
      <ul>
        <li><strong>vae_name</strong>: <code>ae.safetensors</code></li>
        <li>Output: VAE (red)</li>
      </ul>

      <h2>The downstream wiring</h2>
      <p>FLUX uses a slightly different downstream pattern than SD/SDXL because of the <code>guidance</code> input:</p>

      <h3>4. CLIPTextEncode (positive)</h3>
      <ul>
        <li><strong>clip</strong>: from DualCLIPLoaderGGUF</li>
        <li><strong>text</strong>: your prompt</li>
        <li>Output: CONDITIONING</li>
      </ul>

      <h3>5. FluxGuidance</h3>
      <p>Wrap the positive conditioning with <code>FluxGuidance</code>. <strong>guidance</strong>: 3.5.</p>

      <h3>6. CLIPTextEncode (negative)</h3>
      <p>Same as positive but with empty or quality-negative text. FLUX largely ignores negative; it's a placeholder.</p>

      <h3>7. EmptyLatentImage</h3>
      <ul>
        <li><strong>width × height</strong>: 1024 × 1024 (or any FLUX-friendly aspect ratio).</li>
        <li><strong>batch_size</strong>: 1 (FLUX is too big for batch &gt; 1 on 24 GB Mac)</li>
      </ul>

      <h3>8. KSampler</h3>
      <ul>
        <li><strong>seed</strong>: any</li>
        <li><strong>steps</strong>: 20 (Dev) or 4 (Schnell)</li>
        <li><strong>cfg</strong>: 1.0 (always)</li>
        <li><strong>sampler_name</strong>: <code>euler</code></li>
        <li><strong>scheduler</strong>: <code>simple</code> (Dev) or <code>sgm_uniform</code> (Schnell)</li>
        <li><strong>denoise</strong>: 1.0</li>
      </ul>

      <h3>9. VAEDecode + SaveImage</h3>
      <p>Standard.</p>

      <NoteBlock title="Save this as a template">
        Once wired, save as <code>flux-mac-base-template.json</code>. Every FLUX workflow you build
        starts from this. Swap in ControlNet, IP-Adapter, LoRA between the loaders and KSampler.
      </NoteBlock>
    </>
  )
}

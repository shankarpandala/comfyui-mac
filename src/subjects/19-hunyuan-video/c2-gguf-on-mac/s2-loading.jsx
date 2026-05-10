import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Loading() {
  return (
    <>
      <p>
        Step-by-step Hunyuan Mac loading. Same pattern as FLUX (Subject 08 / Chapter 4) — separate
        UNet + encoders + VAE — with Hunyuan-specific node variants.
      </p>

      <h2>Files</h2>
      <ul>
        <li><code>HunyuanVideo-Q4_K_S.gguf</code> — UNet</li>
        <li><code>HunyuanVideo-T5-LLM-Q5_K_M.gguf</code> — combined LLAMA + T5 text encoders</li>
        <li><code>hunyuan_video_vae_bf16.safetensors</code> — VAE</li>
      </ul>

      <h2>The graph</h2>
      <ol>
        <li><code>UnetLoaderGGUF</code> → HunyuanVideo Q4_K_S → MODEL.</li>
        <li><code>DualCLIPLoaderGGUF</code> with type=<strong>hunyuan_video</strong> → wires LLAMA + CLIP.</li>
        <li><code>VAELoader</code> → hunyuan_video_vae_bf16.</li>
        <li><code>CLIPTextEncode (positive)</code> → descriptive sentence prompt.</li>
        <li><code>CLIPTextEncode (negative)</code> → "low quality, blurry".</li>
        <li><code>EmptyHunyuanLatentVideo</code> → set width/height/length (must be 4n+1).</li>
        <li><code>KSampler</code>: 30 steps, cfg 6.0 (Hunyuan likes higher cfg than LTX), euler, simple.</li>
        <li><code>VAEDecodeTiled</code> (or <code>VAEDecode</code> with --cpu-vae) → IMAGE batch.</li>
        <li><code>VHS_VideoCombine</code> → mp4 @ 24 fps.</li>
      </ol>

      <h2>Key parameters</h2>
      <ul>
        <li><strong>steps</strong>: 30 (Hunyuan's sweet spot)</li>
        <li><strong>cfg</strong>: 6.0</li>
        <li><strong>guidance_embed</strong>: 6.0 (Hunyuan-specific cfg-like input on the conditioning node)</li>
        <li><strong>sampler</strong>: euler</li>
        <li><strong>scheduler</strong>: simple</li>
      </ul>

      <NoteBlock title="The Hunyuan template">
        Save your validated Hunyuan workflow as <code>hunyuan-mac-t2v.json</code>. Reuse by
        changing only the prompt and frame count. Resist tuning settings — Hunyuan is sensitive
        and the recommended config is well-tested.
      </NoteBlock>
    </>
  )
}

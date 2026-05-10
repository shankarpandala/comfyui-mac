import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1T2vBaseline() {
  return (
    <>
      <p>
        The canonical LTX text-to-video recipe on Mac. Save this as your template.
      </p>

      <h2>Files needed</h2>
      <ul>
        <li><code>ltx-video-2b-v0.9.7.safetensors</code> — bundled checkpoint (model + VAE + CLIP)</li>
        <li><code>t5-v1_1-xxl-encoder-Q5_K_M.gguf</code> (optional Mac-saver for the T5 encoder)</li>
      </ul>

      <h2>The graph</h2>
      <ol>
        <li><code>CheckpointLoaderSimple</code> → <code>ltx-video-2b-v0.9.7.safetensors</code> → MODEL, CLIP, VAE.</li>
        <li><code>CLIPTextEncode (positive)</code> → your prompt (descriptive sentence works well).</li>
        <li><code>CLIPTextEncode (negative)</code> → <code>"low quality, blurry, distorted"</code></li>
        <li><code>EmptyHunyuanLatentVideo</code> or <code>EmptyLatentVideo</code> (LTX-specific node) → width 768, height 512, frames 97.</li>
        <li><code>KSampler</code> → 40 steps, cfg 3.0, euler, sgm_uniform, denoise 1.0.</li>
        <li><code>VAEDecode</code> → IMAGE batch (97 frames).</li>
        <li><code>VHS_VideoCombine</code> → mp4, fps 24.</li>
      </ol>

      <h2>Prompt style</h2>
      <p>
        LTX likes descriptive sentences with motion verbs. Compare:
      </p>
      <ul>
        <li><strong>Bad</strong>: "person dancing"</li>
        <li><strong>Good</strong>: "A young woman with long brown hair is dancing in a sunlit dance studio, smooth flowing movements, professional cinematography, soft afternoon light."</li>
      </ul>

      <h2>Wall time on M5 Pro</h2>
      <p>~1.5–3 minutes for 97 frames @ 768×512.</p>

      <h2>Key parameters</h2>
      <ul>
        <li><strong>cfg</strong>: 3.0 (LTX uses lower CFG than SDXL)</li>
        <li><strong>steps</strong>: 40 (LTX needs more steps than FLUX/SDXL for video quality)</li>
        <li><strong>sampler</strong>: euler (LTX is flow-matching)</li>
        <li><strong>scheduler</strong>: sgm_uniform</li>
      </ul>

      <NoteBlock title="Save this as a template">
        Build once, save as <code>ltx-mac-t2v-baseline.json</code>. Drop into ComfyUI any time you
        want a quick clip from text. Modify only the prompt and frame count.
      </NoteBlock>
    </>
  )
}

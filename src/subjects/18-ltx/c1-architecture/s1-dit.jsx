import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Dit() {
  return (
    <>
      <p>
        LTX-Video (Lightricks, 2024) is the most Mac-friendly serious video model. Small (2B param
        UNet for the standard variant), fast, and competitive in quality with much larger models.
      </p>

      <DefinitionBlock title="LTX-Video">
        DiT-based video diffusion model with extreme VAE compression (1/32 spatial, 1/8 temporal).
        Trained on 768×512 native. Two main variants: 2B and 13B. Both are flow-matching, like FLUX
        and Hunyuan.
      </DefinitionBlock>

      <h2>Sizes</h2>
      <table>
        <thead><tr><th>Variant</th><th>Params</th><th>fp16 size</th></tr></thead>
        <tbody>
          <tr><td>LTX-Video 2B (v0.9.7)</td><td>~2 B</td><td>~5 GB</td></tr>
          <tr><td>LTX-Video 13B</td><td>~13 B</td><td>~26 GB (need GGUF on Mac)</td></tr>
        </tbody>
      </table>

      <h2>The VAE compression makes LTX special</h2>
      <p>
        1/32 spatial and 1/8 temporal compression means the latent is 256× smaller than naive
        frame-by-frame. The DiT operates on tiny tensors. Result: per-step compute is a fraction
        of Hunyuan's, despite similar output quality.
      </p>

      <h2>Trained at 768×512</h2>
      <p>
        Native resolution. Other ratios work (LTX is flexible) but 768×512 is the sweet spot.
        Common buckets:
      </p>
      <ul>
        <li>768×512 (3:2 landscape) — native</li>
        <li>512×768 (2:3 portrait)</li>
        <li>704×512 (~1.4:1)</li>
        <li>1280×720 (16:9 HD; works but heavier)</li>
      </ul>

      <h2>Frame counts</h2>
      <p>LTX uses 8n+1 frame counts: 9, 17, 25, ..., 97, 105. 97 frames @ 24 fps ≈ 4 seconds.</p>

      <NoteBlock title="The Mac video sweet spot">
        LTX 2B at 768×512 × 97 frames produces a 4-second clip in ~1.5–3 minutes on M5 Pro. Best
        speed/quality balance for any video model on Mac.
      </NoteBlock>
    </>
  )
}

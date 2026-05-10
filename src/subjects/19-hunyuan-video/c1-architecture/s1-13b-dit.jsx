import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S113bDit() {
  return (
    <>
      <p>
        HunyuanVideo (Tencent, 2024) is a 13 B-parameter dual-stream DiT video model. Higher
        quality than LTX, much heavier, requires GGUF on Mac. The choice when you want
        cinema-quality short clips and have time to wait.
      </p>

      <DefinitionBlock title="HunyuanVideo">
        Dual-stream MMDiT-style transformer (image + text streams with joint attention) extended
        with a temporal attention dimension. ~13 B parameters. Trained on a curated cinematic
        dataset; outputs have a notable filmic quality.
      </DefinitionBlock>

      <h2>Sizes</h2>
      <ul>
        <li>fp16: ~26 GB UNet — won't fit on 24 GB Mac.</li>
        <li>GGUF Q5_K_S: ~9.2 GB — tight but possible at lower resolutions.</li>
        <li>GGUF Q4_K_S: ~7.5 GB — Mac default.</li>
      </ul>

      <h2>Native resolution</h2>
      <p>HunyuanVideo is trained at multiple aspect ratios. Common Mac picks:</p>
      <ul>
        <li>544×960 (9:16 portrait, Reels) — recommended Mac default</li>
        <li>720×720 (1:1)</li>
        <li>960×544 (16:9 landscape)</li>
      </ul>

      <h2>Frame counts</h2>
      <p>4n+1 frame counts: 5, 9, ..., 121. 121 frames @ 24 fps = 5 seconds — the trained sweet spot.</p>

      <h2>Wall time on M5 Pro</h2>
      <p>121 frames @ 544×960 @ 30 steps with Q4_K_S: ~10–15 minutes.</p>

      <NoteBlock title="The Hunyuan use case">
        Hunyuan is too slow for iteration. Lock in your prompt with LTX first, then re-render the
        winner with Hunyuan for hero-quality output. The 10-minute commitment is worth it for the
        quality jump.
      </NoteBlock>
    </>
  )
}

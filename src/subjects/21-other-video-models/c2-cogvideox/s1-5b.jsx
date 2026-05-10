import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S15b() {
  return (
    <>
      <p>
        CogVideoX (Tsinghua, 2024) is a 5 B-parameter video model. Mid-quality, smaller than
        Hunyuan/Wan, larger than LTX 2B. Sits awkwardly between LTX (faster, similar quality) and
        Hunyuan (slower, better quality).
      </p>

      <h2>Sizes</h2>
      <ul>
        <li>fp16: ~10 GB</li>
        <li>GGUF Q5_K_S: ~3.5 GB</li>
      </ul>

      <h2>Native</h2>
      <ul>
        <li>720×480</li>
        <li>49 frames @ 8 fps ≈ 6 seconds</li>
      </ul>

      <h2>Recipe</h2>
      <ul>
        <li><strong>UNet</strong>: <code>CogVideoX-5b-Q5_K_S.gguf</code></li>
        <li><strong>Custom node</strong>: <code>ComfyUI-CogVideoXWrapper</code></li>
        <li><strong>Steps</strong>: 50</li>
        <li><strong>cfg</strong>: 6.0</li>
      </ul>

      <h2>Mac wall time</h2>
      <p>~8–12 min for 6-second clip.</p>

      <NoteBlock title="The Mac choice">
        CogVideoX is a fine third-tier choice. For most users: LTX 2B is faster, Wan 2.2 5B is
        comparable but more flexible. Pick CogVideoX if you find specific outputs you like better.
      </NoteBlock>
    </>
  )
}

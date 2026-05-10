import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Pony() {
  return (
    <>
      <p>Pony Diffusion v6 XL recipe — anime / character art on Mac.</p>

      <h2>Settings</h2>
      <ul>
        <li>Base: Pony Diffusion v6 XL (or any Pony-derivative finetune)</li>
        <li>Resolution: 1024×1024 or 832×1216</li>
        <li>Steps: 28 · cfg: 6.0 · sampler: <code>euler_ancestral</code> · scheduler: <code>karras</code></li>
      </ul>

      <h2>Pony-specific positive prefix</h2>
      <pre>{`score_9, score_8_up, score_7_up, source_anime, BREAK
[your subject prompt here]`}</pre>

      <h2>Pony-specific negative</h2>
      <pre>{`score_6, score_5, score_4, source_pony, source_furry,
worst quality, low quality, blurry`}</pre>
      <p>(Remove source_X negatives matching what you DO want.)</p>

      <h2>Wall time</h2>
      <p>~20 seconds per image on M5 Pro.</p>

      <NoteBlock title="Stack with character LoRAs">
        Most CivitAI character LoRAs are now Pony-based. Apply at 0.7-0.9 strength on top of Pony
        base for character generation.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Pony() {
  return (
    <>
      <p>
        Pony Diffusion v6 XL is one of the most-used SDXL bases in the community, especially for
        character art, anime, and stylized illustration. It has its own prompting style and CFG
        sweet spot that differ from base SDXL.
      </p>

      <h2>Why Pony</h2>
      <ul>
        <li>Heavily trained on tagged-image datasets — responds well to Booru-style tag prompts.</li>
        <li>Strong character anatomy, especially poses.</li>
        <li>Massive LoRA ecosystem — most CivitAI character LoRAs are now Pony-based.</li>
        <li>Uncensored base; comfortable producing the full range of community-art content.</li>
      </ul>

      <h2>Pony's prompting</h2>
      <p>Two distinctive things:</p>
      <ol>
        <li><strong>Quality tags</strong>: <code>score_9, score_8_up, score_7_up</code> — Pony's training included a quality-rated dataset; including these tags strongly biases toward quality.</li>
        <li><strong>Source tags</strong>: <code>source_anime, source_furry, source_pony, source_cartoon</code> — bias output style.</li>
      </ol>
      <p>A typical Pony positive starts:</p>
      <pre>{`score_9, score_8_up, score_7_up, source_anime, BREAK
1girl, long hair, ...`}</pre>

      <h2>Pony's CFG</h2>
      <p>
        Pony likes lower CFG than base SDXL — typically 5.0–6.5. Higher CFG over-saturates faster
        than vanilla SDXL.
      </p>

      <h2>Pony's negative</h2>
      <p>Standard quality-negative + Pony-specific anti-tags:</p>
      <pre>{`score_6, score_5, score_4, source_pony, source_furry,
worst quality, low quality, blurry`}</pre>
      <p>(omit the source_X negatives that match what you want.)</p>

      <h2>On Mac</h2>
      <p>Pony is a standard SDXL UNet — same memory profile as SDXL base. ~6.7 GB. Runs comfortably on M5 Pro.</p>

      <NoteBlock title="License note">
        Pony has its own license — check the CivitAI page before commercial use. The model itself is
        downloadable freely; the license restricts certain redistribution and commercial scenarios.
      </NoteBlock>
    </>
  )
}

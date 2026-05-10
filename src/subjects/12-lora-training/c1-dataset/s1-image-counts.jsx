import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1ImageCounts() {
  return (
    <>
      <p>
        Training a LoRA of yourself, a character, or a style on M5 Pro is feasible. The biggest
        single quality lever is your dataset — count, variety, and quality of training images. This
        section is the dataset spec.
      </p>

      <h2>Image counts by LoRA type</h2>
      <table>
        <thead><tr><th>LoRA type</th><th>Min</th><th>Sweet spot</th><th>Diminishing returns</th></tr></thead>
        <tbody>
          <tr><td>Style</td><td>30</td><td>50–100</td><td>200+</td></tr>
          <tr><td>Character (single appearance)</td><td>15</td><td>30–60</td><td>100+</td></tr>
          <tr><td>Character (multi-outfit/setting)</td><td>40</td><td>80–150</td><td>300+</td></tr>
          <tr><td>Self-clone</td><td>30</td><td>50–80</td><td>150+</td></tr>
          <tr><td>Concept</td><td>20</td><td>40–80</td><td>150+</td></tr>
        </tbody>
      </table>

      <h2>Variety beats quantity</h2>
      <p>30 photos with variety (different angles, lighting, settings, expressions) beat 100 near-identical photos. The model needs to see what's "essential" about the subject vs what varies.</p>

      <h2>Variety axes for a self-clone</h2>
      <ul>
        <li>Angles: front, 3/4, profile both sides, slight up/down.</li>
        <li>Lighting: bright daylight, soft window light, golden hour, indoor lamp.</li>
        <li>Backgrounds: indoor neutral, outdoor, busy scenes.</li>
        <li>Expressions: neutral, smiling, talking, laughing.</li>
        <li>Distances: close-up headshot, half-body, full-body.</li>
        <li>Outfits: 3–5 different looks.</li>
      </ul>

      <h2>What to avoid</h2>
      <ul>
        <li>All photos from the same session — too similar.</li>
        <li>Heavy filters (Instagram-style) — model learns the filter, not you.</li>
        <li>Sunglasses or masks — face is occluded.</li>
        <li>Group photos with you uncropped — distractors.</li>
        <li>Heavy makeup variations — model gets confused about your "base look".</li>
      </ul>

      <h2>Resolution</h2>
      <p>
        Crop to 1024×1024 for SDXL/FLUX (square) or 832×1216 / 1216×832 for portrait/landscape.
        Higher res is fine; trainer will downscale. Lower than 768 hurts quality.
      </p>

      <NoteBlock title="The 50-image rule of thumb">
        For a personal LoRA (your AI clone), aim for 50 carefully-curated photos with the variety
        above. Most failed personal LoRAs are dataset issues, not training-config issues.
      </NoteBlock>
    </>
  )
}

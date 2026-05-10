import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1MochiOverview() {
  return (
    <>
      <p>
        Mochi (Genmo, 2024) is an open-weights 10 B-parameter video model. Strong quality but
        memory-heavy on Mac. Less popular than Hunyuan or Wan in the community.
      </p>

      <h2>Sizes</h2>
      <ul>
        <li>fp16: ~20 GB UNet</li>
        <li>GGUF Q4_K_S: ~6 GB</li>
      </ul>

      <h2>Distinctive qualities</h2>
      <ul>
        <li>Strong realistic motion physics — gravity, fluids, fabric.</li>
        <li>Less "filmic" feel than Hunyuan; more documentary.</li>
        <li>Better with realistic prompts than stylized.</li>
      </ul>

      <h2>Native</h2>
      <p>848×480 typical; flexible across aspect ratios.</p>

      <NoteBlock title="When to use">
        Mochi is a third-tier choice for Mac. LTX (speed) and Hunyuan / Wan (quality) cover most
        cases. Reach for Mochi if you specifically need realistic motion physics that other models
        struggle with.
      </NoteBlock>
    </>
  )
}

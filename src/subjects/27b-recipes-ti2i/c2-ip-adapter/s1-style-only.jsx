import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1StyleOnly() {
  return (
    <>
      <p>Reference-only IP-Adapter style transfer — use one image's style with a totally different subject from the prompt.</p>

      <h2>Recipe (SDXL)</h2>
      <ol>
        <li>Standard SDXL load.</li>
        <li><code>IPAdapterUnifiedLoader</code> → STANDARD preset.</li>
        <li><code>LoadImage</code> → style reference (e.g., a Van Gogh painting).</li>
        <li><code>IPAdapter</code> → strength 0.7, weight_type <code>style transfer</code>.</li>
        <li>Standard CLIPTextEncode → describe your subject.</li>
        <li>KSampler.</li>
      </ol>

      <h2>Use cases</h2>
      <ul>
        <li>"Your subject in this artist's style"</li>
        <li>"Same subject palette as reference photo"</li>
        <li>"Match aesthetic of brand reference"</li>
      </ul>

      <h2>Strength tuning</h2>
      <ul>
        <li>0.5 — subtle stylistic flavor.</li>
        <li>0.7 — clearly the style; freedom in details.</li>
        <li>1.0 — overwhelming; rarely best.</li>
      </ul>

      <NoteBlock title="When style LoRA wins">
        For widely-used styles (anime, oil painting), a style LoRA usually outperforms IP-Adapter
        style transfer. IP-Adapter shines for one-off references.
      </NoteBlock>
    </>
  )
}

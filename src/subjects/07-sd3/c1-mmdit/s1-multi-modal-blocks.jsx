import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1MultiModalBlocks() {
  return (
    <>
      <p>
        SD3 is the first major Stable Diffusion to drop the UNet entirely in favor of a Diffusion
        Transformer (DiT). Specifically, MMDiT — Multimodal Diffusion Transformer. Image and text
        tokens flow through the same blocks, attending to each other.
      </p>

      <DefinitionBlock title="MMDiT">
        Each block has two parallel weight sets — one operating on image tokens, one on text tokens
        — but the attention is joint. Image tokens attend to text tokens and vice versa within the
        same self-attention call. No separate cross-attention; everything is one big self-attention.
      </DefinitionBlock>

      <h2>Why this matters</h2>
      <ul>
        <li><strong>Better text rendering.</strong> Text-in-image (signs, posters) is dramatically better than SDXL because the model literally has text tokens flowing alongside image tokens through every layer.</li>
        <li><strong>Cleaner conditioning.</strong> No cross-attention bottleneck — text influence propagates more uniformly.</li>
        <li><strong>Scalability.</strong> DiT scales more predictably with size than UNet — the path forward for bigger models.</li>
      </ul>

      <h2>SD3 / 3.5 sizes</h2>
      <table>
        <thead><tr><th>Variant</th><th>Params</th><th>fp16/bf16 size</th></tr></thead>
        <tbody>
          <tr><td>SD3 Medium</td><td>~2 B</td><td>~4 GB</td></tr>
          <tr><td>SD3.5 Medium</td><td>~2.5 B</td><td>~5 GB</td></tr>
          <tr><td>SD3.5 Large</td><td>~8 B</td><td>~16 GB</td></tr>
          <tr><td>SD3.5 Large Turbo</td><td>~8 B (distilled)</td><td>~16 GB</td></tr>
        </tbody>
      </table>

      <h2>Trained at 1024 native</h2>
      <p>
        Same 1024-native sweet spot as SDXL. Aspect-ratio buckets are similar — 1024×1024,
        1216×832, 1344×768, etc.
      </p>

      <NoteBlock title="The SD3 vs SD3.5 distinction">
        SD3 was the original release; SD3.5 is the refined follow-up with better fingers, faces,
        and prompt adherence. SD3.5 should be your default; SD3 is mostly historical.
      </NoteBlock>
    </>
  )
}

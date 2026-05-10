import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2DoubleSingleStream() {
  return (
    <>
      <p>
        FLUX's transformer has two block types arranged in sequence: <strong>double-stream</strong>{' '}
        blocks at the start (image and text tokens flow in parallel streams with cross-modal
        attention) and <strong>single-stream</strong> blocks at the end (concatenated tokens flow
        through one stream).
      </p>

      <h2>Double-stream blocks</h2>
      <p>
        First 19 blocks. Image tokens and text tokens have separate weight sets but jointly
        attention. Similar to MMDiT in concept. Lets the model build up text-conditioned image
        representations early.
      </p>

      <h2>Single-stream blocks</h2>
      <p>
        Final 38 blocks. Image and text tokens are concatenated into one sequence; the same weights
        process all of them. The text representation is "frozen" at this point — image tokens do
        most of the heavy lifting.
      </p>

      <h2>Why this design</h2>
      <ul>
        <li>Double-stream early gives strong text conditioning during composition formation.</li>
        <li>Single-stream late saves compute — fewer parameters per block when text is "done".</li>
        <li>Total: ~12 B params, less than a fully-double-stream model would need.</li>
      </ul>

      <h2>Practical relevance</h2>
      <p>
        You don't need to think about the block split day-to-day. It matters only when:
      </p>
      <ul>
        <li>Reading FLUX LoRA technical descriptions (LoRAs targeting double-stream blocks vs single-stream blocks have different effects).</li>
        <li>Custom-node authors implementing block-level patches.</li>
        <li>Optimizing memory with experimental block-offloading techniques.</li>
      </ul>

      <NoteBlock title="The takeaway">
        FLUX's two-stage block design is its key architectural innovation. For end-users it's
        invisible — you write a prompt, FLUX renders. For LoRA trainers and node authors it matters
        a lot.
      </NoteBlock>
    </>
  )
}

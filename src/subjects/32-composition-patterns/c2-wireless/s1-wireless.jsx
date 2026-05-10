import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Wireless() {
  return (
    <>
      <p>Anything-Everywhere — wireless connection nodes that broadcast outputs without visible links. Major workflow tidiness improvement for big graphs.</p>

      <h2>The custom node</h2>
      <p><code>cg-use-everywhere</code> — install via Manager.</p>

      <h2>How it works</h2>
      <ul>
        <li>Add an <code>Anything Everywhere</code> node and wire the source (e.g., MODEL).</li>
        <li>Any other node with an unconnected MODEL input automatically picks up the broadcast.</li>
        <li>No visible link.</li>
      </ul>

      <h2>Use cases</h2>
      <ul>
        <li>Broadcast MODEL/CLIP/VAE from CheckpointLoader to many KSamplers.</li>
        <li>Broadcast positive conditioning to multiple Apply nodes.</li>
        <li>Broadcast LATENT in fan-out workflows.</li>
      </ul>

      <h2>Variants</h2>
      <ul>
        <li><code>Anything Everywhere</code> — single value, picked up by any matching unconnected input.</li>
        <li><code>Anything Everywhere?</code> — optional (only if input is unconnected).</li>
        <li><code>Anything Everywhere3</code> — broadcast 3 values at once (MODEL/CLIP/VAE common pattern).</li>
      </ul>

      <NoteBlock title="The visual cleanup">
        For workflows where one CheckpointLoader feeds 6 KSamplers, wireless broadcast removes 18
        link lines. Massive readability gain.
      </NoteBlock>
    </>
  )
}

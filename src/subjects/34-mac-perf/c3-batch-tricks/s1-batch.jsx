import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Batch() {
  return (
    <>
      <p>Sequential batch tricks for Mac. Choose batch_size and queue count strategically to optimize wall time.</p>

      <h2>SD1.5 / SDXL on Mac</h2>
      <ul>
        <li>SDXL batch_size=4 at 1024 fits comfortably in 24 GB.</li>
        <li>Sub-linear in time: batch=4 takes ~2.5× single-image time, not 4×.</li>
        <li>Use for "4 variations of one prompt" rapid iteration.</li>
      </ul>

      <h2>FLUX on Mac</h2>
      <p>batch_size=1 only. FLUX activations are too large for batch.</p>

      <h2>Video on Mac</h2>
      <p>batch_size=1 always for video models. Frames within a clip are the "batch" already.</p>

      <h2>Queue count vs batch_size</h2>
      <ul>
        <li>For variations: prefer batch_size on SDXL.</li>
        <li>For sequential renders with different prompts: queue count + Auto Queue.</li>
        <li>For tight memory: queue count, batch_size=1.</li>
      </ul>

      <NoteBlock title="The 'measure don't guess' principle">
        Test batch_size 2, 4, 8 at your typical workflow. Pick the largest that fits without
        swapping. Activity Monitor's Memory Pressure indicator is the truth-teller.
      </NoteBlock>
    </>
  )
}

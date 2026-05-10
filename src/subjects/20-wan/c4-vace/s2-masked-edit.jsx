import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2MaskedEdit() {
  return (
    <>
      <p>
        VACE's masked-edit mode is the killer feature for AI clone work. Mask the subject's body in
        every frame; VACE swaps the subject for your AI clone while preserving everything else
        (background, motion, lighting).
      </p>

      <h2>The pipeline</h2>
      <ol>
        <li>Input video of someone (or anything) doing the motion you want.</li>
        <li>Per-frame segmentation (SAM2 or YOLO seg) → mask covering the subject.</li>
        <li>VACE with input video + mask + character reference (your AI clone face/identity).</li>
        <li>Output: same scene, same motion, your face on the body.</li>
      </ol>

      <h2>The segmentation step</h2>
      <p>
        Use <code>SAM2VideoSegmentation</code> (custom node) for per-frame masks. Click the subject
        in the first frame; SAM2 tracks across all frames. Output is a mask batch.
      </p>

      <h2>The reference</h2>
      <p>
        Provide a still image of your AI clone face. VACE attends to it during the masked-region
        sampling. Strong identity preservation when combined with PuLID-derived references.
      </p>

      <h2>Use cases</h2>
      <ul>
        <li><strong>Self-clone in any scene</strong> — find a stock-video clip with the motion you want; replace subject with you.</li>
        <li><strong>Reskin actors</strong> — same dance, different person.</li>
        <li><strong>Outfit changes</strong> — same person + motion, swap outfit via mask.</li>
      </ul>

      <h2>Mac wall time</h2>
      <p>5-second input clip with masking: ~25–35 minutes. The longest single render in this curriculum.</p>

      <NoteBlock title="The 'find the right reference clip' principle">
        VACE produces best results when input clip and your AI clone share rough body shape and
        scale. Find or shoot reference clips of similar build. Subject 27e and 27g cover the full
        recipe.
      </NoteBlock>
    </>
  )
}

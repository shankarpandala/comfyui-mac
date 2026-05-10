import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Iterative() {
  return (
    <>
      <p>Loops via Impact-Pack iterative nodes. ComfyUI is a DAG; loops are a workaround.</p>

      <h2>The patterns</h2>
      <ul>
        <li><code>ImpactQueue</code> — re-queue the workflow with modified parameters per iteration.</li>
        <li><code>ImpactImpactBatch</code> — batched processing.</li>
        <li><code>For Loop</code> from various custom-node packs.</li>
      </ul>

      <h2>Use cases</h2>
      <ul>
        <li>Multi-pass upscale: each pass increases resolution.</li>
        <li>Iterative refinement: 5 sampling passes with decreasing denoise.</li>
        <li>Batch over a folder of images.</li>
        <li>Hyperparameter sweep — same workflow, varying CFG / steps.</li>
      </ul>

      <h2>Limitations</h2>
      <ul>
        <li>Loops in ComfyUI are quirky — implementations vary by custom-node pack.</li>
        <li>For complex loops, often easier to use ComfyUI's API mode (Subject 33) and write a Python script.</li>
      </ul>

      <NoteBlock title="The 'API for loops' rule">
        For anything more than 2-3 iterations, escape the GUI. Build the inner workflow in
        ComfyUI; export as API JSON; loop in a Python script that submits via /prompt. Simpler
        than DAG loops.
      </NoteBlock>
    </>
  )
}

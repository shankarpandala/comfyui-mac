import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Reactor() {
  return (
    <>
      <p>
        ReActor face swap (Subject 14 / Chapter 5) is a post-process identity recovery — runs after
        generation. Useful as a fallback when upstream identity preservation didn't quite hit.
      </p>

      <h2>The ReActor pattern</h2>
      <ol>
        <li>Generate image with PuLID / FaceID / your-LoRA.</li>
        <li>Output is mostly correct but face identity drifted slightly.</li>
        <li>ReActor swaps the rendered face with reference face (inswapper_128).</li>
        <li>GFPGAN/CodeFormer cleanup pass to blend.</li>
        <li>Final: stronger identity than the upstream alone.</li>
      </ol>

      <h2>When ReActor helps</h2>
      <ul>
        <li>Upstream identity at 0.7 weight produced a slightly off face — boost identity post-hoc.</li>
        <li>Style LoRAs that warp facial features back toward a "stylized you".</li>
        <li>Outputs where upstream face needs to be exact (not just similar).</li>
      </ul>

      <h2>When ReActor hurts</h2>
      <ul>
        <li>Stylized outputs (anime, painting) — ReActor's swap looks unnatural in non-photoreal styles.</li>
        <li>Outputs where face is small / partially occluded — swap fails or produces artifacts.</li>
      </ul>

      <h2>Mac performance</h2>
      <p>~1-2 seconds per face swap. Negligible cost.</p>

      <NoteBlock title="The 'safety net' philosophy">
        ReActor is a backup. Don't rely on it as primary identity — use PuLID/InstantID/your-LoRA
        for that. Add ReActor to recover the last 10% on hero shots where identity must be exact.
      </NoteBlock>
    </>
  )
}

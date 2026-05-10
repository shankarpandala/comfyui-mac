import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2BatchIteration() {
  return (
    <>
      <p>Batch iteration of variants — produce 3-5 versions of the same Reel; pick the best.</p>

      <h2>The approach</h2>
      <ol>
        <li>Generate one master script.</li>
        <li>Vary 1-2 components: hook line + visual style.</li>
        <li>Render N variants in parallel (or sequentially overnight).</li>
        <li>LLM-judge picks best (or you do).</li>
        <li>Publish winner.</li>
      </ol>

      <h2>Variation strategies</h2>
      <ul>
        <li>Different hooks (3 hook variants, same body).</li>
        <li>Different aesthetics (cinematic vs documentary vs vibrant).</li>
        <li>Different music tracks.</li>
        <li>Different opening B-roll vs talking-head.</li>
      </ul>

      <h2>Mac wall time for batch</h2>
      <p>
        3 variants × ~35 min = ~105 minutes. Run overnight. Wake to 3 finished Reels.
      </p>

      <h2>The judge</h2>
      <p>
        For self-evaluation, watch all 3 quickly and pick favorite.
        For automated: LLM judges based on rubric (novelty, hook strength, visual quality).
      </p>

      <NoteBlock title="The 'A/B test your AI clones' habit">
        For high-stakes Reels (channel launch, sponsored content), batch variants. For daily
        content, one Reel is enough.
      </NoteBlock>
    </>
  )
}

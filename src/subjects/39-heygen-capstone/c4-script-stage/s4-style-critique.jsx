import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S4StyleCritique() {
  return (
    <>
      <p>Style critique pass — Subject 37 / Chapter 6 brought to bear on the capstone. After draft, before production.</p>

      <h2>The critique pipeline</h2>
      <ol>
        <li>Voice match check (Subject 37 / Chapter 6 / S2).</li>
        <li>Self-critique against rubric (Subject 37 / Chapter 6 / S1).</li>
        <li>If scores low, revise; loop max 2-3 times.</li>
        <li>If scores still low after iterations, raise human approval gate.</li>
      </ol>

      <h2>The rubric</h2>
      <ul>
        <li>Hook strength: 1-10</li>
        <li>Voice match: 1-10</li>
        <li>Specific claims (vs vague): 1-10</li>
        <li>Pacing: 1-10</li>
        <li>CTA strength: 1-10</li>
      </ul>

      <h2>Pass criteria</h2>
      <p>All scores ≥ 7. Or score sum ≥ 35/50.</p>

      <h2>Trade-off</h2>
      <p>Critique cycle adds ~1 minute per Reel. For hero content, worth it. For batch B-roll Reels, can skip.</p>

      <NoteBlock title="The capstone's quality gate">
        Style critique is the last automated quality check before expensive production stages.
        Catching script issues here saves ~30 minutes of wasted Sonic / Wan render time.
      </NoteBlock>
    </>
  )
}

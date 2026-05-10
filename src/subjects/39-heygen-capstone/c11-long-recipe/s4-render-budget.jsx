import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S4RenderBudget() {
  return (
    <>
      <p>Mac render budget for long-form. Honest expectations about what M5 Pro can deliver.</p>

      <h2>By video length</h2>
      <table>
        <thead><tr><th>Length</th><th>Mac wall time (M5 Pro 24GB)</th></tr></thead>
        <tbody>
          <tr><td>60s Reel</td><td>~30-45 min</td></tr>
          <tr><td>3-min Short</td><td>~90-120 min</td></tr>
          <tr><td>10-min long-form</td><td>~3-4 hours</td></tr>
          <tr><td>20-min long-form</td><td>~6-7 hours</td></tr>
          <tr><td>30-min long-form</td><td>~9-10 hours</td></tr>
        </tbody>
      </table>

      <h2>Speedup options</h2>
      <ul>
        <li><strong>Mac mini cluster</strong> (Subject 33 / Chapter 4): roughly halves time.</li>
        <li><strong>FastHunyuan / fewer Sonic steps</strong>: ~25% faster, slight quality cost.</li>
        <li><strong>SDXL instead of FLUX for B-roll</strong>: ~3× faster B-roll.</li>
        <li><strong>Skip critique cycles</strong>: 5-10 min savings per Reel.</li>
      </ul>

      <h2>Trade-offs</h2>
      <p>
        Speed vs quality is the constant trade. For weekly daily-Reel content: speed wins. For
        monthly hero long-form: quality wins.
      </p>

      <NoteBlock title="The 'plan render time as a resource' principle">
        Mac render time is your scarcest resource. Treat as you would API tokens — budget per
        piece. Some weeks you ship 5 quick Reels; some you ship one polished hero.
      </NoteBlock>
    </>
  )
}

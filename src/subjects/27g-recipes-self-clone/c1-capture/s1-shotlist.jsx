import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Shotlist() {
  return (
    <>
      <p>The 80-shot capture list for AI self-clone. Recap of Subject 29 / Chapter 2 with capstone-specific tweaks.</p>

      <h2>Capture targets</h2>
      <ul>
        <li><strong>40-50 face-focused shots</strong>: front, 3/4, profile, varied expressions.</li>
        <li><strong>20 body shots</strong>: half-body, full-body, varied poses.</li>
        <li><strong>10-20 outfit/scene variations</strong>: 3-5 outfits, indoor + outdoor.</li>
      </ul>

      <h2>The afternoon protocol</h2>
      <ol>
        <li>Phone on tripod, self-timer.</li>
        <li>Indoor near-window: 25 shots (varied expressions + angles).</li>
        <li>Indoor different rooms: 15 shots (varied lighting).</li>
        <li>Outfit change × 3: 20 shots per outfit.</li>
        <li>Outdoor (open shade, golden hour): 20 shots.</li>
        <li>Total ~80 shots, ~3 hours.</li>
      </ol>

      <h2>Quick QA</h2>
      <ul>
        <li>Each shot in focus.</li>
        <li>Eyes open and visible (no sunglasses).</li>
        <li>No motion blur.</li>
        <li>Background varied across shots.</li>
      </ul>

      <NoteBlock title="The 'one-time investment'">
        Spend an afternoon. Get a great dataset once. Re-use forever. Re-shoot only when your
        appearance changes significantly (haircut, gained/lost weight visibly).
      </NoteBlock>
    </>
  )
}

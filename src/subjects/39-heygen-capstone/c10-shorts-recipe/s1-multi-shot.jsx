import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1MultiShot() {
  return (
    <>
      <p>Recipe: 3-minute Short. Multi-shot structure with deeper substance.</p>

      <h2>Structure</h2>
      <ul>
        <li>Hook (5s) — talking-head.</li>
        <li>Promise (5s) — talking-head.</li>
        <li>Beat 1 (45s) — talking-head + 2 B-roll.</li>
        <li>Beat 2 (45s) — talking-head + 2 B-roll.</li>
        <li>Beat 3 (45s) — talking-head + 2 B-roll.</li>
        <li>Recap (15s) — talking-head with text overlay.</li>
        <li>CTA (10s) — talking-head.</li>
      </ul>

      <h2>Production specs</h2>
      <ul>
        <li>~7 talking-head clips total = ~50 min Sonic time.</li>
        <li>~6 B-roll segments = ~18 min LTX time.</li>
        <li>~7 F5-TTS audio segments = ~10 min.</li>
        <li>Compose / captions / etc = ~5 min.</li>
        <li>Total: ~90 min wall time.</li>
      </ul>

      <h2>Visual variety</h2>
      <p>For Shorts, B-roll is critical — pure talking-head for 3 minutes is fatiguing. Aim for visual cuts every 3-5 seconds.</p>

      <NoteBlock title="The 'plan the cuts' workflow">
        For Shorts, plan visual cuts in the script's beat sheet. Each beat should have at least 2
        visual change points. Subject 37's beat sheet template covers this.
      </NoteBlock>
    </>
  )
}

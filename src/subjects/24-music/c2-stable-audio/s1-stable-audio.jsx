import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1StableAudio() {
  return (
    <>
      <p>
        Stable Audio Open for music — same model as Subject 23 / Chapter 3, applied to musical prompts.
        Lower per-track wall time than MusicGen but less explicit musical structure.
      </p>

      <h2>Music prompts that work</h2>
      <ul>
        <li>"upbeat lo-fi hip hop, jazzy piano, vinyl crackle, 90 BPM"</li>
        <li>"electronic techno, 132 BPM, driving four-on-the-floor"</li>
        <li>"orchestral cinematic, slow build, strings and brass"</li>
        <li>"acoustic guitar fingerpicking, melancholic, no drums"</li>
      </ul>

      <h2>Stable Audio vs MusicGen for music</h2>
      <table>
        <thead><tr><th>Aspect</th><th>Stable Audio Open</th><th>MusicGen Medium</th></tr></thead>
        <tbody>
          <tr><td>Mac wall time (30 s)</td><td>~30-45 s</td><td>~3 min</td></tr>
          <tr><td>Musical coherence</td><td>Decent</td><td>Strong</td></tr>
          <tr><td>Genre flexibility</td><td>Wide</td><td>Strong on western pop/electronic</td></tr>
          <tr><td>Length max</td><td>~47 s</td><td>~30 s default; can extend</td></tr>
        </tbody>
      </table>

      <h2>For Reels background music</h2>
      <p>Reels are short (15-60 s) — Stable Audio Open's 47-second cap is enough. Speed advantage on Mac wins for iteration.</p>

      <NoteBlock title="The 'try both' rule">
        For a given music need, generate from both Stable Audio Open and MusicGen. Pick the better
        result. They have different strengths and a few seconds wasted on a second model is cheap.
      </NoteBlock>
    </>
  )
}

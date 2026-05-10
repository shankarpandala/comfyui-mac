import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Tradeoffs() {
  return (
    <>
      <p>
        Decision matrix for picking voice-clone tools on Mac.
      </p>

      <h2>The picks</h2>
      <table>
        <thead>
          <tr><th>Need</th><th>Tool</th><th>Setup time</th><th>Quality</th></tr>
        </thead>
        <tbody>
          <tr><td>Quick voice clone, narration</td><td>F5-TTS zero-shot</td><td>5 min (record reference)</td><td>Good</td></tr>
          <tr><td>Multilingual voice clone</td><td>OpenVoice v2 / XTTS-v2</td><td>5 min</td><td>Good</td></tr>
          <tr><td>Maximum voice fidelity</td><td>RVC trained model</td><td>~5 hours setup + train</td><td>Best</td></tr>
          <tr><td>Singing in your voice</td><td>RVC trained model</td><td>Same</td><td>Best (only option for singing)</td></tr>
        </tbody>
      </table>

      <h2>The Phase 5 capstone recommendation</h2>
      <ul>
        <li><strong>Day 1</strong>: Record 30s reference clip. Use F5-TTS zero-shot for everything.</li>
        <li><strong>Day 2-3</strong>: If F5-TTS quality is good enough, ship. If not, plan RVC training.</li>
        <li><strong>Week 2</strong>: If you decided to go for top quality, train RVC overnight.</li>
        <li><strong>Production</strong>: F5-TTS for narration; RVC for emotional / dramatic moments.</li>
      </ul>

      <h2>Cost-benefit</h2>
      <ul>
        <li>F5-TTS zero-shot: 5 minutes setup, ~85% of "perfect" quality.</li>
        <li>RVC trained: 5 hours setup, ~95% of "perfect" quality.</li>
        <li>The 10% gap matters for hero content; doesn't matter for daily Reels.</li>
      </ul>

      <NoteBlock title="Phase 4 wrap-up">
        Phase 4 is done. Audio + voice tooling is in place: Stable Audio (sound design), MusicGen
        (music), F5-TTS (voice clone narration), RVC (max-fidelity voice). Phase 5 — Avatars,
        Clones, Digital Twin — is next.
      </NoteBlock>
    </>
  )
}

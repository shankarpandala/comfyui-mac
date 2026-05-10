import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Recording() {
  return (
    <>
      <p>
        For RVC training (or any voice work where quality matters), recording discipline matters
        more than gear. Bad recordings + great mic = bad clone. Decent recordings + cheap mic =
        good clone.
      </p>

      <h2>The setup</h2>
      <ul>
        <li><strong>Mic</strong>: USB cardioid condenser ($100-$200 range works well — Audio-Technica AT2020USB+, Blue Yeti, RØDE NT-USB).</li>
        <li><strong>Distance</strong>: 6-12 inches from mouth, slightly off-axis to reduce plosives.</li>
        <li><strong>Pop filter</strong>: yes. Critical.</li>
        <li><strong>Room</strong>: quiet, soft surfaces (a closet with clothes works great).</li>
      </ul>

      <h2>Recording targets</h2>
      <table>
        <thead><tr><th>Use</th><th>Recording length</th><th>Variety needed</th></tr></thead>
        <tbody>
          <tr><td>F5-TTS reference</td><td>10-30 s</td><td>Single calm reading</td></tr>
          <tr><td>RVC training</td><td>10-30 min</td><td>Varied: questions, statements, emotions</td></tr>
          <tr><td>F5-TTS reference set (multi)</td><td>3 × 30 s clips</td><td>Different tones</td></tr>
        </tbody>
      </table>

      <h2>What to record (RVC training)</h2>
      <ul>
        <li>Read 10 minutes of varied news / Wikipedia articles.</li>
        <li>5 minutes of conversational improv ("describe your morning").</li>
        <li>5 minutes of varied emotion ("what excites you", "what frustrates you").</li>
        <li>Total: 20 minutes diverse.</li>
      </ul>

      <h2>Format</h2>
      <ul>
        <li>WAV, 44.1 kHz or 48 kHz, 16-bit PCM minimum.</li>
        <li>Don't compress to MP3 — RVC training needs clean source.</li>
      </ul>

      <NoteBlock title="The 'consistency over perfection' rule">
        Better to have 20 minutes of consistent decent-quality audio than 5 minutes of perfect
        audio mixed with 15 minutes of varied quality. RVC and F5-TTS pick up on average
        characteristics; varying quality confuses both.
      </NoteBlock>
    </>
  )
}

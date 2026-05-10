import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Hallo() {
  return (
    <>
      <p>
        Hallo (2024-2025) is a series of audio-driven portrait models. Multiple iterations: Hallo,
        Hallo2, Hallo3. Each adds capabilities — Hallo3 supports longer outputs and more emotive
        delivery.
      </p>

      <h2>Hallo / Hallo2 / Hallo3</h2>
      <table>
        <thead><tr><th>Version</th><th>Notable</th></tr></thead>
        <tbody>
          <tr><td>Hallo</td><td>Original; ~6 second outputs</td></tr>
          <tr><td>Hallo2</td><td>Better expression; 4K output capable</td></tr>
          <tr><td>Hallo3</td><td>Longer outputs; better identity preservation</td></tr>
        </tbody>
      </table>

      <h2>Recipe (Hallo3)</h2>
      <ol>
        <li><code>HalloModelLoader</code> → loads Hallo3 weights.</li>
        <li><code>LoadImage</code> → portrait still.</li>
        <li><code>LoadAudio</code> → speech audio.</li>
        <li><code>HalloSampler</code> → 50 steps, cfg 3.5.</li>
        <li><code>VHS_VideoCombine</code>.</li>
      </ol>

      <h2>Mac performance</h2>
      <p>Hallo3: ~10-15 min per 10-second clip on M5 Pro. Slower than Sonic but higher quality.</p>

      <h2>Sonic vs Hallo3</h2>
      <ul>
        <li><strong>Sonic</strong>: faster, ~3.5s outputs, SVD-based.</li>
        <li><strong>Hallo3</strong>: slower, longer outputs, higher quality.</li>
        <li>For Reels (short clips): Sonic.</li>
        <li>For longer talking-head segments: Hallo3.</li>
      </ul>

      <NoteBlock title="The Mac talking-head ladder">
        Sonic for short clips, Hallo3 for longer / higher quality, LivePortrait + Sonic combo
        (next chapters) for full expression control.
      </NoteBlock>
    </>
  )
}

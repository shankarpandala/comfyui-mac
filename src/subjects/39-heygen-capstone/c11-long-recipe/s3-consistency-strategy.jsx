import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3ConsistencyStrategy() {
  return (
    <>
      <p>Consistency strategy for &gt; 30-minute videos. The full Subject 27f recipe applied at scale.</p>

      <h2>The combined strategies (recap)</h2>
      <ul>
        <li>Self-LoRA injection in every scene (Strategy 1).</li>
        <li>PuLID re-anchor with reference photo (Strategy 2).</li>
        <li>Single canonical "talking-head still" reused across all talking-head scenes.</li>
        <li>IP-Adapter / FLUX Redux per shot for visual consistency in B-roll (Strategy 4).</li>
        <li>Fixed seed (Strategy 6).</li>
      </ul>

      <h2>For 30-min long-form on Mac</h2>
      <ul>
        <li>~50 talking-head segments × ~7 min Sonic = ~6 hours.</li>
        <li>~40 B-roll clips × ~3 min LTX = ~2 hours.</li>
        <li>~50 audio segments F5-TTS = ~30 minutes.</li>
        <li>Compose / captions / etc = ~30 minutes.</li>
        <li>Total: ~9-10 hours wall time.</li>
      </ul>

      <h2>The overnight schedule</h2>
      <ul>
        <li>Saturday afternoon: research + script + script approval.</li>
        <li>Saturday evening: kick off pipeline.</li>
        <li>Sunday morning: review finished video.</li>
        <li>Sunday afternoon: post-production tweaks if needed.</li>
      </ul>

      <NoteBlock title="The 'long-form is a weekend project'">
        30-min AI clone videos on Mac are weekend projects. Faster machines (M5 Max / clusters)
        compress this; on a single MacBook Pro it's an overnight render.
      </NoteBlock>
    </>
  )
}

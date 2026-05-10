import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Kokoro() {
  return (
    <>
      <p>
        Kokoro-TTS (2024) is an 82 M-parameter TTS. Tiny by comparison, very fast on Mac, multiple
        preset voices. No voice cloning — you pick from a fixed library of voices.
      </p>

      <h2>Model</h2>
      <ul>
        <li><code>hexgrad/Kokoro-82M</code> on HuggingFace, ~330 MB.</li>
        <li>Multiple voice presets (af_heart, am_michael, etc.)</li>
      </ul>

      <h2>Mac wall time</h2>
      <p>Real-time-or-faster on M5 Pro — ~5 s for 30 s of output. Fastest of the four TTS options.</p>

      <h2>When Kokoro wins</h2>
      <ul>
        <li>Drafting / quick previews.</li>
        <li>You don't need voice cloning — preset voices are enough.</li>
        <li>You need many small clips (system voice, notification sounds).</li>
      </ul>

      <h2>When Kokoro doesn't fit</h2>
      <ul>
        <li>Voice cloning / "sound like me" — Kokoro can't.</li>
        <li>Multilingual beyond a few presets.</li>
        <li>Hero quality narration — F5-TTS sounds more natural.</li>
      </ul>

      <NoteBlock title="The Mac TTS hierarchy">
        Kokoro for drafting. F5-TTS for cloned voiceover. ChatTTS for conversational. XTTS-v2 for
        multilingual. Pick by use case.
      </NoteBlock>
    </>
  )
}

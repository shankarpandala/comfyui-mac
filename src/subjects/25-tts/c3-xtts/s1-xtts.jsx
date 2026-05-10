import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Xtts() {
  return (
    <>
      <p>
        XTTS-v2 (Coqui, 2023) is a multilingual zero-shot voice cloning TTS. Supports 16 languages.
        Larger than F5-TTS; better for non-English work. License is restrictive (non-commercial in
        most cases).
      </p>

      <h2>Model</h2>
      <ul>
        <li><code>coqui/XTTS-v2</code> on HuggingFace, ~2 GB.</li>
      </ul>

      <h2>Languages</h2>
      <ul>
        <li>English, Spanish, French, German, Italian, Portuguese, Dutch, Polish, Turkish, Russian, Czech, Arabic, Chinese, Japanese, Korean, Hungarian.</li>
        <li>Voice cloning works across languages — clone English voice, generate Spanish in same voice.</li>
      </ul>

      <h2>Mac wall time</h2>
      <p>~10-15 s per 30-second output. Comparable to ChatTTS.</p>

      <h2>License caveat</h2>
      <p>
        Coqui's license is restrictive — non-commercial use only without explicit Coqui commercial
        agreement. For commercial AI Reels work, F5-TTS (more permissive) is the safer pick if
        English-only suffices.
      </p>

      <NoteBlock title="When to choose XTTS-v2">
        Multilingual content production. F5-TTS doesn't speak Spanish reliably; XTTS-v2 does.
      </NoteBlock>
    </>
  )
}

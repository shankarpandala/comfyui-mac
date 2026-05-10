import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1RvcPipeline() {
  return (
    <>
      <p>
        RVC (Retrieval-based Voice Conversion) is the technique that takes an existing audio
        recording (someone speaking) and replaces the voice with a target voice — without changing
        what's said. Different from TTS — TTS generates from text; RVC converts existing audio.
      </p>

      <h2>The pipeline</h2>
      <ol>
        <li>Train an RVC model on 10-30 minutes of target voice recordings.</li>
        <li>At inference: provide a source audio (any speaker, any speech).</li>
        <li>RVC extracts pitch + content from source.</li>
        <li>RVC re-synthesizes audio with target voice's timbre.</li>
        <li>Output: same words, same intonation, target voice.</li>
      </ol>

      <h2>Use cases</h2>
      <ul>
        <li><strong>Singing in your voice</strong> — record yourself talking; convert someone else's singing to your voice.</li>
        <li><strong>Dub characters</strong> — original actor's voice → your voice across all dialog.</li>
        <li><strong>Re-do TTS</strong> — generate with any TTS, convert to your voice via RVC.</li>
      </ul>

      <h2>RVC vs F5-TTS</h2>
      <ul>
        <li>F5-TTS: text → speech. No source audio needed.</li>
        <li>RVC: speech → speech. Source audio's timing/intonation preserved exactly.</li>
        <li>For singing: RVC wins (pitch preservation).</li>
        <li>For narration: F5-TTS wins (no source audio needed; more flexible).</li>
      </ul>

      <NoteBlock title="The RVC ecosystem">
        RVC has its own training-and-inference toolchain (RVC v2 WebUI). ComfyUI integration is
        via custom nodes that wrap the RVC inference pipeline. We cover training in section 2.
      </NoteBlock>
    </>
  )
}

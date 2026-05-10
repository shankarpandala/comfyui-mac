import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Chattts() {
  return (
    <>
      <p>
        ChatTTS (2024) is an emotive English+Chinese TTS. Strong on conversational delivery —
        natural pauses, varied prosody, laughter, sighs. Less identity-focused than F5-TTS;
        better for "make this sound like a real conversation."
      </p>

      <h2>Model</h2>
      <ul>
        <li><code>2Noise/ChatTTS</code> on HuggingFace, ~1 GB.</li>
      </ul>

      <h2>Distinctive features</h2>
      <ul>
        <li>Inline pause tokens (<code>[uv_break]</code>, <code>[lbreak]</code>)</li>
        <li>Emotion control via prompts</li>
        <li>Laughter / breath / sigh insertion</li>
      </ul>

      <h2>Use cases</h2>
      <ul>
        <li>Casual / conversational voiceovers.</li>
        <li>Multi-character dialog.</li>
        <li>Bilingual content (English-Chinese mix).</li>
      </ul>

      <h2>Mac wall time</h2>
      <p>~10-15 s for 30 s output. Slightly slower than F5-TTS.</p>

      <NoteBlock title="ChatTTS vs F5-TTS">
        F5-TTS for "sound like a specific person." ChatTTS for "sound like natural speech." For the
        capstone where voice cloning matters, F5-TTS wins. For non-cloned narration, both work.
      </NoteBlock>
    </>
  )
}

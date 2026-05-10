import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Rvc() {
  return (
    <>
      <p>
        RVC voice clone — the higher-quality alternative to F5-TTS. Worth the setup investment if
        you'll be producing a lot of content where voice fidelity matters.
      </p>

      <h2>Setup (5-7 hours one-time)</h2>
      <ol>
        <li>Record 20 minutes of varied speech (Subject 26 / Chapter 4).</li>
        <li>Denoise + Audio-Slicer + Whisper transcribe.</li>
        <li>Train RVC model overnight on M5 Pro (~5 hours).</li>
        <li>Validate output quality.</li>
      </ol>

      <h2>Per-script generation</h2>
      <p>
        With RVC, you don't generate from text directly — RVC converts existing audio to your voice.
        Pipeline:
      </p>
      <ol>
        <li>Generate "reference" audio with any TTS (Kokoro is fast).</li>
        <li>RVC converts that audio to your voice.</li>
        <li>Use as final audio.</li>
      </ol>

      <h2>F5-TTS vs RVC for the capstone</h2>
      <table>
        <thead><tr><th>Aspect</th><th>F5-TTS</th><th>RVC</th></tr></thead>
        <tbody>
          <tr><td>Setup</td><td>5 min</td><td>5-7 hours</td></tr>
          <tr><td>Per-segment time</td><td>~20s for 30s output</td><td>Kokoro ~5s + RVC ~10s</td></tr>
          <tr><td>Voice quality</td><td>Good</td><td>Better</td></tr>
          <tr><td>Singing</td><td>Limited</td><td>Excellent</td></tr>
          <tr><td>Emotion control</td><td>Limited</td><td>Limited</td></tr>
        </tbody>
      </table>

      <h2>The hybrid approach</h2>
      <p>
        Use F5-TTS for narrative voiceovers (most content). Use RVC for dramatic moments,
        emphasis, or singing parts that need extra fidelity.
      </p>

      <NoteBlock title="The 'F5 first' principle">
        Start with F5-TTS. Only invest in RVC training if F5-TTS quality is insufficient for your
        specific use. For ~85% of capstone content, F5-TTS is enough.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1F5Tts() {
  return (
    <>
      <p>
        F5-TTS (2024) is currently the best open-source zero-shot voice cloning TTS. Provide a
        10-second reference audio clip; F5 generates new speech in that voice. Mac-friendly via
        PyTorch MPS.
      </p>

      <h2>Files</h2>
      <ul>
        <li><code>F5TTS_Base/model_1200000.safetensors</code> — main TTS model</li>
        <li><code>vocos-mel-24khz</code> — vocoder for waveform generation</li>
        <li>~1.2 GB total</li>
      </ul>

      <h2>Custom node</h2>
      <p><code>ComfyUI-F5-TTS</code> by niknah — install via Manager.</p>

      <h2>Recipe</h2>
      <ol>
        <li><code>F5TTSLoader</code> → load model + vocoder.</li>
        <li><code>LoadAudio</code> → reference audio clip (10-30 s of clear speech).</li>
        <li><code>F5TTSGenerate</code> → wires model + reference + target text.</li>
        <li><code>SaveAudio</code> → wav output.</li>
      </ol>

      <h2>Reference audio requirements</h2>
      <ul>
        <li>10-30 seconds long (longer doesn't help).</li>
        <li>Clean (no music, no echo, minimal background noise).</li>
        <li>Single speaker.</li>
        <li>Sample rate 24 kHz or higher.</li>
      </ul>

      <h2>Quality</h2>
      <ul>
        <li>Voice resemblance: very strong — often hard to distinguish from real reference.</li>
        <li>Prosody: natural; matches reference pacing/intonation.</li>
        <li>Failure modes: occasional mispronunciation of unusual words.</li>
      </ul>

      <h2>Mac wall time</h2>
      <p>~6-8 seconds for 10 seconds of generated speech.</p>

      <NoteBlock title="The voice clone path">
        F5-TTS is the simplest path to clone your own voice (Subject 26). Record yourself reading
        ~30 seconds of varied text, drop in as reference, generate any speech in your voice. No
        training needed.
      </NoteBlock>
    </>
  )
}

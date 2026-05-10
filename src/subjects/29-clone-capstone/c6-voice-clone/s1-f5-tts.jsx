import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1F5TtsClone() {
  return (
    <>
      <p>
        F5-TTS is the recommended Mac default for voice cloning in the capstone. Quick setup, good
        quality, simple integration.
      </p>

      <h2>Setup (5 minutes one-time)</h2>
      <ol>
        <li>Record yourself reading 30 seconds of varied text in normal voice.</li>
        <li>Adobe Enhance Speech (free) on the recording — clean background.</li>
        <li>Save as <code>my-voice-reference.wav</code>.</li>
        <li>Place in <code>input/</code> folder.</li>
      </ol>

      <h2>Per-script generation</h2>
      <ol>
        <li><code>F5TTSLoader</code> → load model.</li>
        <li><code>LoadAudio</code> → my-voice-reference.wav.</li>
        <li><code>F5TTSGenerate</code> → target text from your script segment.</li>
        <li><code>SaveAudio</code> → segment-N.wav.</li>
      </ol>

      <h2>Per-segment vs per-script</h2>
      <p>
        Generate audio per script segment (10-15 seconds each). Concatenate later via ffmpeg. This
        keeps individual segments tight and fixable; one failed segment doesn't waste a 60-second
        render.
      </p>

      <h2>Audio cleanup post-F5</h2>
      <p>
        F5-TTS outputs are usually clean but occasional artifacts (small clicks, slightly off
        cadence) appear. Listen to each segment; regenerate if necessary.
      </p>

      <NoteBlock title="The 30-second reference is enough">
        Don't over-engineer the reference recording. 30 seconds of yourself speaking normally is
        sufficient. Longer reference doesn't help.
      </NoteBlock>
    </>
  )
}

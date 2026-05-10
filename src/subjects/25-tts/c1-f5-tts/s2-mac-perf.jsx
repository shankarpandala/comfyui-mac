import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2MacPerf() {
  return (
    <>
      <p>F5-TTS Mac performance numbers and the launch flags that matter.</p>

      <h2>Wall time on M5 Pro</h2>
      <table>
        <thead><tr><th>Output length</th><th>Wall time</th></tr></thead>
        <tbody>
          <tr><td>10 seconds</td><td>~6-8 s</td></tr>
          <tr><td>30 seconds</td><td>~18-25 s</td></tr>
          <tr><td>60 seconds</td><td>~40-55 s</td></tr>
          <tr><td>2 minutes</td><td>~80-110 s</td></tr>
        </tbody>
      </table>

      <h2>Memory</h2>
      <p>~3 GB during generation. Comfortable.</p>

      <h2>Sample rate</h2>
      <p>F5-TTS outputs 24 kHz. Upsample to 48 kHz with ffmpeg if needed:</p>
      <pre>{`ffmpeg -i out.wav -ar 48000 out_48.wav`}</pre>

      <h2>Speed-vs-quality knobs</h2>
      <ul>
        <li><strong>nfe_step</strong>: number of flow-matching steps. 32 default; 16 for ~2× speed at slight quality cost.</li>
        <li><strong>cfg_strength</strong>: 2.0 default; 1.0 for less voice adherence.</li>
        <li><strong>speed</strong>: post-process speed multiplier (1.0 default).</li>
      </ul>

      <NoteBlock title="The Phase 7 capstone integration">
        For the agentic capstone (Subject 39), F5-TTS runs as a server alongside ComfyUI. The
        capstone pipeline calls it with script chunks, gets back voice-cloned audio. ~real-time
        playback rate on M5 Pro.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3SceneBreakdown() {
  return (
    <>
      <p>Scene breakdown JSON — the structured handoff from script agent to visual / video stages. Every beat becomes a scene with explicit visual requirements.</p>

      <h2>The JSON schema</h2>
      <pre>{`{
  "title": "Mac FLUX Speed Tricks",
  "duration_sec": 60,
  "scenes": [
    {
      "id": 1,
      "type": "talking-head",
      "start": 0,
      "end": 3,
      "narration": "I cut FLUX render time on Mac by 80% with one trick.",
      "visual_prompt": "A confident person in a home office, soft natural light, 9:16 portrait",
      "expression": "energetic, slight smile"
    },
    {
      "id": 2,
      "type": "b-roll",
      "start": 3,
      "end": 10,
      "narration": "Show vanilla FLUX taking 60 seconds per image.",
      "visual_prompt": "Close-up of MacBook screen showing ComfyUI progress bar at slow pace, dramatic time-lapse, 9:16 portrait",
      "audio_track": "narration"
    },
    ...
  ],
  "music_prompt": "upbeat electronic, energetic, 120 BPM",
  "caption_style": "white_yellow_outline"
}`}</pre>

      <h2>Per-scene fields</h2>
      <ul>
        <li><strong>type</strong>: talking-head, b-roll, title-card, end-card.</li>
        <li><strong>start/end</strong>: timestamps for ffmpeg assembly.</li>
        <li><strong>narration</strong>: text → F5-TTS for audio.</li>
        <li><strong>visual_prompt</strong>: text → FLUX/SDXL for still, then video model for motion.</li>
        <li><strong>expression</strong>: feeds talking-head model (Sonic).</li>
      </ul>

      <NoteBlock title="The orchestrator's blueprint">
        This JSON is what Subject 38's orchestrator consumes. Each scene is a tool-call sequence:
        generate still → animate → render audio → composite. The script agent's output IS the
        production plan.
      </NoteBlock>
    </>
  )
}

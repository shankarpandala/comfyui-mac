import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1QueueTactics() {
  return (
    <>
      <p>
        For producing many AI clone Reels efficiently on Mac, batch-queue tactics matter. The right
        queue ordering can cut your daily render time in half.
      </p>

      <h2>The queue strategy</h2>
      <ol>
        <li><strong>Batch by model</strong> — render all SDXL outputs first, then all FLUX, then video. Keeps the right model in MPS cache.</li>
        <li><strong>Batch by phase</strong> — generate all stills before any animation. Stills inform what animations are worth making.</li>
        <li><strong>Use Auto Queue</strong> for variations of one prompt — leave running, walk away.</li>
        <li><strong>Use save-image with timestamps</strong> — output filenames include datetime, easier to pick winners later.</li>
      </ol>

      <h2>The 1-week production cadence</h2>
      <ul>
        <li><strong>Sunday</strong>: write scripts for the week's content.</li>
        <li><strong>Monday morning</strong>: generate all stills (FLUX). 10 stills × 50s ≈ 8 min.</li>
        <li><strong>Monday afternoon</strong>: voice-clone all narrations (F5-TTS).</li>
        <li><strong>Monday evening</strong>: queue Sonic talking-head renders. Run overnight.</li>
        <li><strong>Tuesday morning</strong>: assemble Reels in ffmpeg, post.</li>
        <li><strong>Repeat</strong>.</li>
      </ul>

      <h2>Mac thermal management for long batches</h2>
      <ul>
        <li>Plug in.</li>
        <li>Use a laptop riser / stand for airflow.</li>
        <li>Close other apps for the duration.</li>
        <li>Expect 10-15% slowdown after 1-hour sustained render due to throttling.</li>
      </ul>

      <NoteBlock title="The 'overnight Sonic' pattern">
        Sonic is the long pole at 5-8 min per 10s clip. Queue all your talking-head renders before
        bed. Wake up to a folder of finished segments.
      </NoteBlock>
    </>
  )
}

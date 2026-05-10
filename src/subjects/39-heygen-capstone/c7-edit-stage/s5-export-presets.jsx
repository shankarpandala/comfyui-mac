import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S5ExportPresets() {
  return (
    <>
      <p>Export presets per platform. Subject 30 / Chapter 1 covered aspect ratios; this section is the per-platform encoding setting bundle.</p>

      <h2>Reels (Instagram / TikTok / YouTube Shorts)</h2>
      <pre>{`ffmpeg -i master.mp4 \\
  -c:v libx264 -preset slow -crf 22 \\
  -c:a aac -b:a 192k \\
  -movflags +faststart \\
  -vf "scale=1080:1920" \\
  -r 30 \\
  final/reel.mp4`}</pre>

      <h2>YouTube long-form (16:9 1080p)</h2>
      <pre>{`ffmpeg -i master.mp4 \\
  -c:v libx264 -preset slow -crf 20 \\
  -c:a aac -b:a 192k \\
  -movflags +faststart \\
  -vf "scale=1920:1080" \\
  -r 30 \\
  final/youtube.mp4`}</pre>

      <h2>X (Twitter)</h2>
      <pre>{`ffmpeg -i master.mp4 \\
  -c:v libx264 -preset medium -crf 23 -maxrate 5000k -bufsize 10000k \\
  -c:a aac -b:a 128k \\
  -movflags +faststart \\
  -vf "scale=1280:720" \\
  -r 30 \\
  final/twitter.mp4`}</pre>

      <h2>The one-master, many-exports pattern</h2>
      <p>Generate the master at 1080p (or higher); each platform export is a re-encode from master. Saves regenerating per platform.</p>

      <NoteBlock title="The 'export at end of pipeline' stage">
        Last orchestrator stage emits all platform variants. Caller picks which to publish where.
      </NoteBlock>
    </>
  )
}

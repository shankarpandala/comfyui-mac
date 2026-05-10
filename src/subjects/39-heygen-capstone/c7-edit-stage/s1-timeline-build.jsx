import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1TimelineBuild() {
  return (
    <>
      <p>Timeline build — ffmpeg concat + audio merge + per-scene overlay. Final assembly stage.</p>

      <h2>The concat</h2>
      <pre>{`# concat.txt (ffmpeg concat demuxer format)
file 'visuals/scene-1-clip.mp4'
file 'visuals/scene-2-clip.mp4'
file 'visuals/scene-3-clip.mp4'
file 'visuals/scene-4-clip.mp4'`}</pre>
      <pre>{`ffmpeg -f concat -safe 0 -i concat.txt -c copy intermediate/no-audio.mp4`}</pre>

      <h2>Audio merge</h2>
      <p>Concatenate all per-scene .wav files into one continuous track:</p>
      <pre>{`ffmpeg -i "concat:audio/scene-1.wav|audio/scene-2.wav|..." -c copy intermediate/audio.wav`}</pre>

      <h2>Combine</h2>
      <pre>{`ffmpeg -i intermediate/no-audio.mp4 -i intermediate/audio.wav -c:v copy -c:a aac -shortest intermediate/timeline.mp4`}</pre>

      <h2>Per-scene timing</h2>
      <p>
        Each scene's video clip should match its narration audio duration. If video is shorter,
        pad with last-frame still. If longer, trim. The script agent's duration_sec drives both.
      </p>

      <NoteBlock title="The 'timeline first, polish second' workflow">
        Get the bare timeline working before adding music, captions, watermarks. Each polish layer
        is a separate ffmpeg pass.
      </NoteBlock>
    </>
  )
}

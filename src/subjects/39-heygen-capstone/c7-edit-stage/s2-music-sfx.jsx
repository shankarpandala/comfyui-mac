import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2MusicSfx() {
  return (
    <>
      <p>Background music + SFX. Adds energy and brand feel.</p>

      <h2>Music generation</h2>
      <p>
        From the script's <code>music_prompt</code> field: MusicGen or Stable Audio Open generates
        a track matching duration.
      </p>
      <pre>{`# Use Stable Audio Open for ~60s of music
generate_music(
    prompt=script["music_prompt"],
    duration=60,
    output_path="audio/bgm.wav"
)`}</pre>

      <h2>Mixing</h2>
      <pre>{`# Lower BGM volume so narration cuts through:
ffmpeg -i intermediate/timeline.mp4 -i audio/bgm.wav \\
  -filter_complex "[1:a]volume=0.2[bgm];[0:a][bgm]amix=inputs=2:duration=first[a]" \\
  -map 0:v -map "[a]" intermediate/with-music.mp4`}</pre>

      <h2>SFX</h2>
      <p>Optional: per-scene-transition SFX (whoosh, ding). From Stable Audio Open or sourced from free libraries.</p>

      <h2>Brand sound design</h2>
      <p>
        Maintain a library of branded sounds: intro sting, lower-third pop, transition whoosh.
        Reuse across Reels for audio brand recognition.
      </p>

      <NoteBlock title="The 'BGM at 20%' rule">
        Background music at 20% volume relative to narration. Higher and viewers can't hear words.
        Lower and you might as well skip BGM.
      </NoteBlock>
    </>
  )
}

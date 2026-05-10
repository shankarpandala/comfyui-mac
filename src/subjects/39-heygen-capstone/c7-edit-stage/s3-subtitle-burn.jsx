import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3SubtitleBurn() {
  return (
    <>
      <p>Subtitle burn-in — Whisper transcribes; ffmpeg burns. Subject 30 / Chapter 3 covered the basics.</p>

      <h2>Pipeline integration</h2>
      <pre>{`def burn_captions(video_path, audio_path, output_path):
    # 1. Transcribe with MLX Whisper
    srt_path = video_path.replace(".mp4", ".srt")
    mlx_whisper_to_srt(audio_path, srt_path)

    # 2. Burn into video
    style = "FontName=Inter,FontSize=24,PrimaryColour=&H00FFFFFF,OutlineColour=&H00000000,Outline=3,Alignment=2,MarginV=120"
    cmd = f"""ffmpeg -i {video_path} -vf "subtitles={srt_path}:force_style='{style}'" -c:a copy {output_path}"""
    run(cmd)`}</pre>

      <h2>Style consistency</h2>
      <p>Same caption style across all your AI clone Reels. Centralize in one config; reuse.</p>

      <h2>Word-level vs segment-level</h2>
      <p>
        Whisper's default SRT is sentence-level. For viral Reels, word-level reveal looks better —
        use captacity or similar tools to convert to word-by-word animated captions.
      </p>

      <NoteBlock title="The 'always burn' rule">
        85% of Reel viewers watch muted. No-caption Reels lose them. Burn captions on every output.
      </NoteBlock>
    </>
  )
}

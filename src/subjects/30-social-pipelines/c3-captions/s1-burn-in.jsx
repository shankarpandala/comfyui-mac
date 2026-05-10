import CommandBlock from '../../../components/content/CommandBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1BurnIn() {
  return (
    <>
      <p>
        Subtitles burned into the video improve accessibility and engagement (most social-media
        viewers watch muted). Auto-generate captions from your script + Whisper, burn into video
        with ffmpeg.
      </p>

      <h2>The pipeline</h2>
      <ol>
        <li>Generate audio with F5-TTS (already have).</li>
        <li>Run Whisper on the audio → SRT timecoded captions (or use your script + manual timing).</li>
        <li>Style the SRT with ffmpeg's subtitle filter.</li>
        <li>Burn into video.</li>
      </ol>

      <h2>Whisper to SRT</h2>
      <CommandBlock command="mlx_whisper audio.wav --output-format srt --output captions.srt" label="MLX Whisper produces SRT" />

      <h2>Burn-in with style</h2>
      <CommandBlock command={`ffmpeg -i in.mp4 -vf "subtitles=captions.srt:force_style='FontName=Inter,FontSize=18,PrimaryColour=&H00FFFFFF,OutlineColour=&H00000000,Outline=2,BackColour=&H80000000,BorderStyle=1,Alignment=2,MarginV=80'" out.mp4`} label="Center-bottom captions, white text, black outline" />

      <h2>Style for Reels</h2>
      <ul>
        <li>Big text (FontSize 22-28) — readable on small phone screens.</li>
        <li>Bold or extra-bold weight.</li>
        <li>Strong outline (Outline 3+).</li>
        <li>Optional: drop shadow / background box for high-contrast over busy backgrounds.</li>
      </ul>

      <h2>Word-level karaoke captions</h2>
      <p>
        For "viral Reel" style where words highlight in sync, use <code>captacity</code> or similar
        tools that produce word-level animated captions. More effort; higher engagement.
      </p>

      <NoteBlock title="Always burn captions for social">
        ~85% of social-media viewers watch with sound off. No-caption Reels lose them. Burn captions
        even on talking-head content where the speaker is visible.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'
import CommandBlock from '../../../components/content/CommandBlock.jsx'

export default function S29_16Export() {
  return (
    <>
      <p>
        9:16 vertical export for Reels / Shorts / TikTok. The most common social-media aspect ratio
        and what your AI clone videos will primarily target.
      </p>

      <h2>Aspect ratio fitting</h2>
      <p>
        Sonic and LivePortrait usually output square or 16:9. For 9:16:
      </p>
      <ul>
        <li><strong>Crop</strong>: tight crop to face/upper body. Loses background detail.</li>
        <li><strong>Pad</strong>: black or blurred-bg padding on sides. Preserves output as-is.</li>
        <li><strong>Generate native</strong>: AI clone still at 9:16 (768×1344 in FLUX), then animate. Best quality but more memory during animation.</li>
      </ul>

      <h2>The blurred-pad pattern (recommended)</h2>
      <p>Pad the talking-head to 9:16 by adding a blurred copy of itself as background:</p>
      <CommandBlock command={`ffmpeg -i in.mp4 -vf "[0:v]split=2[bg][fg];[bg]scale=1080:1920:force_original_aspect_ratio=increase,boxblur=50,crop=1080:1920[bg];[fg]scale=-1:1080[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2" -c:a copy out_9_16.mp4`} label="Blurred-pad to 9:16 1080x1920" />

      <h2>Final export settings (Reels-friendly)</h2>
      <CommandBlock command={`ffmpeg -i in.mp4 -c:v libx264 -preset slow -crf 22 -c:a aac -b:a 192k -movflags +faststart -vf "scale=1080:1920" out_reel.mp4`} label="H.264 + AAC, 1080x1920, web-optimized" />

      <h2>Multi-platform exports</h2>
      <table>
        <thead><tr><th>Platform</th><th>Aspect</th><th>Resolution</th><th>Max length</th></tr></thead>
        <tbody>
          <tr><td>Instagram Reels</td><td>9:16</td><td>1080×1920</td><td>90 s</td></tr>
          <tr><td>TikTok</td><td>9:16</td><td>1080×1920</td><td>10 min</td></tr>
          <tr><td>YouTube Shorts</td><td>9:16</td><td>1080×1920</td><td>60 s</td></tr>
          <tr><td>LinkedIn</td><td>1:1 or 16:9</td><td>1080×1080 or 1920×1080</td><td>10 min</td></tr>
          <tr><td>X (Twitter)</td><td>16:9 preferred</td><td>1920×1080</td><td>2:20</td></tr>
        </tbody>
      </table>

      <NoteBlock title="The 'one master, multiple exports' workflow">
        Generate at 9:16 1080×1920 once. ffmpeg-export to other ratios for other platforms. Keep
        the 9:16 master as your "source of truth"; never re-render to change platform.
      </NoteBlock>
    </>
  )
}

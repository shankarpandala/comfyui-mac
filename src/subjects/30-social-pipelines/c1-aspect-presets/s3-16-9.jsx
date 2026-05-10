import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S316_9() {
  return (
    <>
      <p>
        16:9 horizontal (1920×1080) for YouTube long-form, X/Twitter, LinkedIn. Less common for
        Reels-style content but essential for cross-platform distribution.
      </p>

      <h2>Generation</h2>
      <ul>
        <li>SDXL: 1344×768.</li>
        <li>FLUX: 1344×768.</li>
        <li>LTX-Video: 1280×720 native.</li>
        <li>HunyuanVideo: 960×544.</li>
      </ul>

      <h2>From 9:16 master</h2>
      <p>9:16 → 16:9 requires either:</p>
      <ul>
        <li><strong>Crop</strong> to face-centered 16:9 within the 9:16 frame — loses vertical content.</li>
        <li><strong>Pad</strong> with blurred background to fill 16:9.</li>
      </ul>

      <pre>{`# Pad 9:16 to 16:9 with blurred bg
ffmpeg -i in_9_16.mp4 -vf "[0:v]split=2[bg][fg];[bg]scale=1920:1080:force_original_aspect_ratio=increase,boxblur=50,crop=1920:1080[bg];[fg]scale=-1:1080[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2" out_16_9.mp4`}</pre>

      <h2>Long-form on YouTube</h2>
      <p>
        For long-form (5+ min) AI clone content, generate at 16:9 native rather than padding from
        9:16. Better quality. Use Hunyuan/Wan for video, FLUX for stills, longer talking-head segments
        chained via Sonic.
      </p>

      <NoteBlock title="The platform-format mapping">
        Reels/Shorts/TikTok = 9:16. YouTube/X/LinkedIn-feed = 16:9. Instagram main = 1:1 or 4:5.
        Pick your primary distribution platform first; design around its native ratio.
      </NoteBlock>
    </>
  )
}

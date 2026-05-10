import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S19_16() {
  return (
    <>
      <p>
        9:16 vertical (1080×1920) is the dominant social-media aspect ratio. Reels, Shorts,
        TikTok, Snapchat all use it. Your AI clone content's primary target.
      </p>

      <h2>The two paths to 9:16</h2>
      <ol>
        <li><strong>Generate native 9:16</strong> — set FLUX/SDXL/LTX/Hunyuan resolution to 768×1344 or 1080×1920. Best quality but heavier memory.</li>
        <li><strong>Generate landscape, crop to 9:16</strong> — generate at 16:9 or 1:1, ffmpeg crop. Loses pixels but enables more aspect-ratio-flexible workflows.</li>
      </ol>

      <h2>Recommended generation resolutions for 9:16 output</h2>
      <table>
        <thead><tr><th>Model</th><th>Native 9:16</th><th>Wall time</th></tr></thead>
        <tbody>
          <tr><td>SDXL</td><td>768×1344</td><td>~17 s</td></tr>
          <tr><td>FLUX</td><td>768×1344</td><td>~50 s</td></tr>
          <tr><td>LTX-Video</td><td>768×1344 (or 1080×1920 for HD)</td><td>~3-5 min for 4-second clip</td></tr>
          <tr><td>HunyuanVideo</td><td>544×960 (then upscale)</td><td>~12 min</td></tr>
        </tbody>
      </table>

      <h2>Common content templates</h2>
      <ul>
        <li><strong>Talking head Reel</strong>: AI clone face center frame, blurred-pad bg, 60 s.</li>
        <li><strong>B-roll Reel</strong>: LTX-generated scene, 4 s clips concatenated to 30 s.</li>
        <li><strong>Mixed Reel</strong>: Talking head 0-30s, B-roll 30-60s, voiceover continuous.</li>
      </ul>

      <NoteBlock title="The 'always render 9:16 first' rule">
        For Mac content production, default to 9:16. Other ratios (16:9, 1:1) are derived from 9:16
        master. This single decision simplifies your model selection and aspect-ratio logic.
      </NoteBlock>
    </>
  )
}

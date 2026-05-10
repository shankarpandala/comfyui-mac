import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2768x512Native() {
  return (
    <>
      <p>
        LTX is trained at 768×512 (3:2 landscape) but is flexible across aspect ratios. Knowing
        which ratios work well saves wasted renders.
      </p>

      <h2>Recommended LTX resolutions on M5 Pro</h2>
      <table>
        <thead><tr><th>Resolution</th><th>Use</th><th>Wall time per 97 frames</th></tr></thead>
        <tbody>
          <tr><td>768 × 512</td><td>Native — best quality</td><td>~1.5 min</td></tr>
          <tr><td>512 × 768</td><td>Portrait</td><td>~1.5 min</td></tr>
          <tr><td>1024 × 576</td><td>16:9 HD-ish</td><td>~3 min</td></tr>
          <tr><td>768 × 1344</td><td>9:16 (Reels)</td><td>~3.5 min</td></tr>
          <tr><td>1280 × 720</td><td>16:9 HD</td><td>~5 min</td></tr>
        </tbody>
      </table>

      <h2>The "stay near native" rule</h2>
      <p>Going far from 768×512 increases memory and time disproportionately. For Mac iteration, default to native; only push higher resolution for final renders.</p>

      <h2>Resolution dimensions must be valid</h2>
      <p>
        Multiples of 32 in each dimension. ComfyUI nodes will round; better to pick valid
        dimensions explicitly.
      </p>

      <h2>9:16 portrait for Reels</h2>
      <p>
        768×1344 (9:16) is LTX's best Reels-format output. Slightly slower than native landscape
        but produces good quality. For social-media work in Phase 5b / Subject 30, this is your
        default LTX resolution.
      </p>

      <NoteBlock title="The 'render at native, crop in post' alternative">
        For very tight memory: render at native 768×512, crop to 9:16 in ffmpeg post-processing.
        Loses some content but uses ~50% less memory than direct 768×1344 render.
      </NoteBlock>
    </>
  )
}

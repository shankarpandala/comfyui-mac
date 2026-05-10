import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1WhenToUseEach() {
  return (
    <>
      <p>
        Decision matrix for picking among Mac video models in 2026.
      </p>

      <h2>The full matrix</h2>
      <table>
        <thead>
          <tr><th>Model</th><th>Best for</th><th>Mac wall time</th></tr>
        </thead>
        <tbody>
          <tr><td>AnimateDiff Lightning</td><td>2-second teasers, fastest iteration</td><td>~30 s</td></tr>
          <tr><td>SVD-XT</td><td>Image-to-3.5s-video baseline</td><td>~3-5 min</td></tr>
          <tr><td>LTX-Video 2B</td><td>Daily t2v + i2v on Mac</td><td>~1.5–3 min</td></tr>
          <tr><td>LTX-Video 13B</td><td>Better LTX quality at slower speed</td><td>~5-7 min</td></tr>
          <tr><td>Wan 2.2 5B</td><td>Quality bump over LTX, still fast-ish</td><td>~6-8 min</td></tr>
          <tr><td>Wan 14B I2V</td><td>Best image-to-video on Mac</td><td>~15-25 min</td></tr>
          <tr><td>Wan VACE</td><td>Vid2vid editing</td><td>~25-35 min</td></tr>
          <tr><td>HunyuanVideo Q4_K_S</td><td>Cinematic hero shots</td><td>~10-15 min</td></tr>
          <tr><td>FastHunyuan Q4_K_S</td><td>Hunyuan iteration loop</td><td>~3-5 min</td></tr>
          <tr><td>CogVideoX-5B</td><td>Niche; specific outputs you prefer</td><td>~8-12 min</td></tr>
          <tr><td>Mochi</td><td>Realistic motion physics</td><td>~10-15 min</td></tr>
        </tbody>
      </table>

      <h2>The Mac video stack recommendation</h2>
      <ul>
        <li><strong>Always installed</strong>: LTX 2B, Wan 2.2 5B, AnimateDiff SDXL Lightning.</li>
        <li><strong>For quality work</strong>: HunyuanVideo Q4_K_S, Wan 14B I2V Q4_K_S.</li>
        <li><strong>For editing</strong>: Wan VACE Q4_K_S.</li>
        <li><strong>Optional</strong>: SVD-XT, FastHunyuan, the rest.</li>
      </ul>

      <NoteBlock title="The 'three is enough' principle">
        Three video models cover ~95% of needs: LTX 2B (fast t2v/i2v), Wan 14B I2V Q4_K_S (best
        image animation), Wan VACE Q4_K_S (vid2vid). Don't try to install everything; you'll waste
        ~50 GB of disk on models you'll rarely use.
      </NoteBlock>
    </>
  )
}

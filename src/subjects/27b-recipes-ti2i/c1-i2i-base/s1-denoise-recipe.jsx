import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1DenoiseRecipe() {
  return (
    <>
      <p>Standard image-to-image (img2img) baseline. Take an input image, regenerate it with prompt-guided changes.</p>

      <h2>Recipe (SDXL)</h2>
      <ol>
        <li>Standard SDXL load.</li>
        <li><code>LoadImage</code> → input image.</li>
        <li><code>VAEEncode</code> → encode to latent.</li>
        <li>CLIPTextEncode positive + negative as usual.</li>
        <li><code>KSampler</code>: 25 steps, cfg 6.5, dpmpp_2m, karras, <strong>denoise 0.5–0.7</strong>.</li>
        <li>VAEDecode + SaveImage.</li>
      </ol>

      <h2>Denoise tuning</h2>
      <table>
        <thead><tr><th>Denoise</th><th>Behavior</th></tr></thead>
        <tbody>
          <tr><td>0.3</td><td>Light touch-up; mostly original</td></tr>
          <tr><td>0.5</td><td>Balanced; recognizable but creatively reinterpreted</td></tr>
          <tr><td>0.7</td><td>Strong reinterpretation; composition preserved</td></tr>
          <tr><td>0.9</td><td>Almost full regeneration; original is a hint</td></tr>
        </tbody>
      </table>

      <h2>Wall time</h2>
      <p>~10 seconds at denoise 0.5 (proportionally less than 17s baseline because effective steps = 0.5 × 25 = 12).</p>

      <NoteBlock title="The 'sample-and-pick' iteration">
        With denoise 0.5, every queue produces a variation of the same composition. Auto Queue +
        randomize seed = a folder of variants to pick from.
      </NoteBlock>
    </>
  )
}

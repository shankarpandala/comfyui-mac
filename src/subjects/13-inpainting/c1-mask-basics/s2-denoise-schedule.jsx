import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2DenoiseSchedule() {
  return (
    <>
      <p>
        Inpaint denoise strength controls how much the masked region changes from the original. Low
        denoise preserves the original; high denoise generates fresh content.
      </p>

      <h2>Denoise levels</h2>
      <table>
        <thead><tr><th>Denoise</th><th>Effect</th></tr></thead>
        <tbody>
          <tr><td>0.2</td><td>Subtle touch-up; mostly original</td></tr>
          <tr><td>0.4</td><td>Moderate change; recognizably the same content but enhanced</td></tr>
          <tr><td>0.6</td><td>Substantial change; new content but composition preserved</td></tr>
          <tr><td>0.8</td><td>Heavy regeneration; original is a hint</td></tr>
          <tr><td>1.0</td><td>Full regeneration; original is just a noise seed</td></tr>
        </tbody>
      </table>

      <h2>The two inpaint regimes</h2>
      <ul>
        <li><strong>Touch-up / detail</strong>: denoise 0.2–0.5. Use when the masked region has the right content but needs sharpening or correcting.</li>
        <li><strong>Object swap / addition</strong>: denoise 0.7–1.0. Use when you want fundamentally different content in the masked region.</li>
      </ul>

      <h2>SetLatentNoiseMask vs InpaintModelConditioning</h2>
      <p>Two ways to wire a mask into the sampler:</p>
      <ul>
        <li><strong>SetLatentNoiseMask</strong> — lightweight; works with any base model. Just adds noise to masked latent regions and runs the sampler. Less seamless.</li>
        <li><strong>InpaintModelConditioning</strong> — designed for inpaint-specific models (SDXL inpaint, FLUX Fill). Uses the model's special inpaint inputs. Cleaner seams.</li>
      </ul>

      <h2>For Mac workflows</h2>
      <ul>
        <li>Touch-up tasks → SetLatentNoiseMask + base SDXL/FLUX, denoise 0.4.</li>
        <li>Major edits → InpaintModelConditioning + FLUX Fill or SDXL Inpaint model, denoise 1.0.</li>
      </ul>

      <NoteBlock title="The denoise + steps relationship">
        At denoise 0.5 with 25 steps, only 12 effective steps run (50% × 25). For partial-denoise
        inpaints, bump steps to 30–35 to maintain effective sample quality.
      </NoteBlock>
    </>
  )
}

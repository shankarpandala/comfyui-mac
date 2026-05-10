import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Samplers() {
  return (
    <>
      <p>
        FLUX is a flow-matching model (Subject 03 / Chapter 7), so the right samplers and schedulers
        are different from SDXL's. The wrong choice produces noticeably worse output.
      </p>

      <h2>Recommended sampler/scheduler pairs</h2>
      <table>
        <thead><tr><th>Use case</th><th>Sampler</th><th>Scheduler</th></tr></thead>
        <tbody>
          <tr><td>FLUX Dev default</td><td><code>euler</code></td><td><code>simple</code></td></tr>
          <tr><td>FLUX Dev alternative</td><td><code>euler</code></td><td><code>sgm_uniform</code></td></tr>
          <tr><td>FLUX Schnell default</td><td><code>euler</code></td><td><code>sgm_uniform</code></td></tr>
          <tr><td>FLUX Schnell alternative</td><td><code>euler</code></td><td><code>simple</code></td></tr>
        </tbody>
      </table>

      <h2>What to avoid</h2>
      <ul>
        <li><strong><code>dpmpp_2m / 3m / sde</code></strong> — derived for the diffusion ODE, not flow-matching. Produces minor texture artifacts on FLUX.</li>
        <li><strong><code>karras</code> scheduler</strong> — assumes variance-exploding diffusion. Less correct for FLUX than <code>simple</code>.</li>
        <li><strong><code>euler_ancestral</code></strong> — adds noise per step, destabilizes flow models. Avoid.</li>
        <li><strong><code>ddim</code></strong> — works but produces softer outputs than <code>euler</code> on FLUX.</li>
      </ul>

      <h2>Why euler + simple</h2>
      <p>
        Flow matching trains a velocity field whose trajectories are close to straight lines. Euler
        is a first-order ODE solver — it works exceptionally well when trajectories are straight
        (the "rectified" property). Higher-order solvers (DPM++) help when trajectories curve a lot,
        which they don't for flow models.
      </p>
      <p>
        <code>simple</code> scheduler gives uniform spacing in the flow time variable, matching how
        FLUX was trained.
      </p>

      <h2>SamplerCustomAdvanced for FLUX</h2>
      <p>
        Some advanced FLUX workflows use <code>SamplerCustomAdvanced</code> with a <code>BasicScheduler</code>{' '}
        node for explicit sigma control. For most users, the standard KSampler with euler+simple is
        fine.
      </p>

      <NoteBlock title="The decision is binary">
        FLUX wants euler. Don't experiment with samplers on FLUX the way you might on SDXL — the
        flow-matching math constrains the answer pretty tightly. Spend your tuning budget on prompts
        and guidance instead.
      </NoteBlock>
    </>
  )
}

import { BlockMath, InlineMath } from 'react-katex'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2ExpSgm() {
  return (
    <>
      <p>
        Beyond Karras, ComfyUI exposes several schedulers with different theoretical bases. Each
        has a model family it pairs with best.
      </p>

      <h2>The Exponential schedule</h2>
      <BlockMath math="\sigma_i = \sigma_\text{max} \cdot \left(\frac{\sigma_\text{min}}{\sigma_\text{max}}\right)^{i/(N-1)}" />
      <p>
        Equal log-spacing in noise. Simple, well-behaved. Slightly different feel than Karras —
        sometimes preferred for very stylized SDXL prompts.
      </p>

      <h2>SGM Uniform (also "EDM uniform")</h2>
      <p>
        SGM ("score-based generative modeling") uniform schedule places steps uniformly on the
        appropriate transformation of the noise variable. Works particularly well with{' '}
        <code>euler</code> on SDXL and on flow-matching models like FLUX.
      </p>
      <p>
        For FLUX Schnell on Mac, <code>sgm_uniform</code> is a recommended choice and what Subject 8's
        recipe will use.
      </p>

      <h2>Normal (cosine-derived)</h2>
      <p>
        The default for many SD1.5 workflows. Maps timesteps directly from the cosine{' '}
        <InlineMath math="\bar{\alpha}_t" /> schedule used at training. Inferior to Karras for SDXL
        but the right choice for SD1.5 if you want to mirror what training used.
      </p>

      <h2>Simple</h2>
      <p>
        Linear spacing in noise. Used by FLUX Dev's published reference workflow. Pairs with
        <code>euler</code>.
      </p>

      <h2>DDIM Uniform</h2>
      <p>Equal-step subset of the original 1000-step DDPM schedule. Used with the <code>ddim</code> sampler.</p>

      <h2>Beta</h2>
      <p>
        Newer; uses a Beta-distribution-based step density. Good for low step counts on SDXL. A
        common pairing: <code>beta</code> + <code>dpmpp_2m</code> at 12 steps.
      </p>

      <h2>The pairing matrix</h2>
      <table>
        <thead><tr><th>Model</th><th>Sampler</th><th>Scheduler</th></tr></thead>
        <tbody>
          <tr><td>SD 1.5</td><td><code>dpmpp_2m</code></td><td><code>karras</code> or <code>normal</code></td></tr>
          <tr><td>SDXL base</td><td><code>dpmpp_2m</code></td><td><code>karras</code></td></tr>
          <tr><td>SDXL low-step (Lightning)</td><td><code>euler</code></td><td><code>sgm_uniform</code></td></tr>
          <tr><td>SD3 / SD3.5</td><td><code>dpmpp_2m</code></td><td><code>sgm_uniform</code></td></tr>
          <tr><td>FLUX Dev</td><td><code>euler</code></td><td><code>simple</code> or <code>sgm_uniform</code></td></tr>
          <tr><td>FLUX Schnell</td><td><code>euler</code></td><td><code>sgm_uniform</code></td></tr>
          <tr><td>HunyuanVideo</td><td><code>euler</code></td><td><code>simple</code></td></tr>
          <tr><td>Wan 2.x</td><td><code>uni_pc</code> or <code>euler</code></td><td><code>simple</code></td></tr>
        </tbody>
      </table>

      <NoteBlock title="The pragmatic stance">
        For most workflows, the published recipe tells you the sampler+scheduler. Mind the model
        family more than micro-optimizing the scheduler — the difference between Karras and SGM
        Uniform on SDXL is usually within noise. The flow-matching models care more about scheduler
        choice than score-based models do.
      </NoteBlock>
    </>
  )
}

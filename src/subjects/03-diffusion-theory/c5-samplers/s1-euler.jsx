import { BlockMath, InlineMath } from 'react-katex'
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Euler() {
  return (
    <>
      <p>
        We've established that sampling is solving a probability-flow ODE. Different samplers are
        different numerical solvers. We start with the simplest — Euler — because every other
        sampler in ComfyUI is a refinement of it.
      </p>

      <DefinitionBlock title="Euler step">
        Given current state <InlineMath math="x_t" /> at noise level <InlineMath math="\sigma_t" />,
        the model gives a denoiser <InlineMath math="D_\theta(x_t, \sigma_t)" /> (an estimate of{' '}
        <InlineMath math="x_0" />). The Euler step from <InlineMath math="\sigma_t" /> to{' '}
        <InlineMath math="\sigma_{t-1}" /> is:
        <BlockMath math="x_{t-1} = x_t + (\sigma_{t-1} - \sigma_t) \cdot \frac{x_t - D_\theta(x_t, \sigma_t)}{\sigma_t}" />
        First-order; one model evaluation per step.
      </DefinitionBlock>

      <h2>Why Euler is a sensible baseline</h2>
      <ul>
        <li>One UNet call per step — no waste.</li>
        <li>Easy to reason about — the formula is linear in the model output.</li>
        <li>Numerically stable provided the step sizes <InlineMath math="(\sigma_{t-1} - \sigma_t)" /> aren't too large.</li>
      </ul>

      <h2>The price of first-order</h2>
      <p>
        Euler accumulates error like <InlineMath math="O(h)" /> per step, where{' '}
        <InlineMath math="h" /> is the step size. For 50 steps it's fine; for 4 steps the error
        compounds and outputs look noisy/incorrect. Higher-order solvers (DPM++ 2M, 3M; UniPC
        2M, 3M) drop to <InlineMath math="O(h^2)" /> or <InlineMath math="O(h^3)" /> at the cost of
        re-using cached previous-step model outputs.
      </p>

      <h2>Euler ancestral</h2>
      <p>
        The "a" in <code>euler_ancestral</code> stands for ancestral sampling: instead of taking the
        deterministic ODE step, inject a small amount of fresh noise at each step. This corresponds
        to solving the SDE form rather than the ODE. Behaviorally:
      </p>
      <ul>
        <li><strong>Stochastic</strong> — same seed gives different images at different step counts.</li>
        <li><strong>More creative</strong> — the noise injections explore latent regions vanilla Euler doesn't reach.</li>
        <li><strong>Less reproducible</strong> — re-running with the same step count gives the same output, but bumping steps by 1 changes everything.</li>
      </ul>

      <h2>When to use which</h2>
      <ul>
        <li><strong>euler</strong> — clean, predictable, fine for ≥ 20 steps. Excellent for FLUX (which expects ODE samplers).</li>
        <li><strong>euler_ancestral</strong> — slightly more painterly outputs on SD1.5/SDXL. Avoid on flow-matching models (FLUX, SD3) where the ancestral step destabilizes.</li>
      </ul>

      <NoteBlock title="ComfyUI sampler names">
        In ComfyUI's KSampler dropdown: <code>euler</code>, <code>euler_ancestral</code>,{' '}
        <code>euler_cfg_pp</code>. The <code>_cfg_pp</code> variant uses an alternate CFG
        formulation that pairs better with PAG / dynamic thresholding.
      </NoteBlock>
    </>
  )
}

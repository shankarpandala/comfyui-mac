import { BlockMath, InlineMath } from 'react-katex'
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Karras() {
  return (
    <>
      <p>
        Schedulers decide which noise levels the sampler visits. The number of steps you pick (say,
        25) is one knob; the spacing of those 25 steps along the noise curve is the scheduler's
        job. Karras et al. 2022 showed that step spacing matters as much as step count.
      </p>

      <DefinitionBlock title="Sigma schedule">
        A scheduler maps step indices <InlineMath math="i \in \{0, 1, \ldots, N\}" /> to noise
        levels <InlineMath math="\sigma_i" /> with <InlineMath math="\sigma_0 = \sigma_\text{max}" />{' '}
        and <InlineMath math="\sigma_N = 0" />. The sampler walks down the schedule, calling the
        denoiser at each <InlineMath math="\sigma_i" />.
      </DefinitionBlock>

      <h2>Why Karras spacing wins</h2>
      <p>
        Karras showed that the optimal schedule is <strong>not</strong> linear in noise level — the
        sampler benefits from spending more steps in the middle of the denoising trajectory (where
        the local error of an ODE solver peaks). His proposed schedule:
      </p>
      <BlockMath math="\sigma_i = \left(\sigma_\text{max}^{1/\rho} + \frac{i}{N-1}\,(\sigma_\text{min}^{1/\rho} - \sigma_\text{max}^{1/\rho})\right)^\rho" />
      <p>
        with <InlineMath math="\rho = 7" /> empirically. The <InlineMath math="\rho" />{' '}
        parameter compresses steps near the high-noise and low-noise ends, putting more density in
        the middle where the model output is changing fastest.
      </p>

      <h2>Visualization</h2>
      <p>For 20 steps, sigma_max=14.6, sigma_min=0.029:</p>
      <ul>
        <li><strong>Linear schedule</strong> — sigma drops by ~0.73 per step, uniformly. Wastes steps at extreme noise levels where the denoiser is doing "easy" work.</li>
        <li><strong>Karras schedule</strong> — sigma drops fast at first, then slowly through the middle. Concentrates steps where they matter.</li>
      </ul>

      <h2>Pairing with samplers</h2>
      <ul>
        <li><strong>DPM++ 2M / 3M / SDE</strong> — Karras is the canonical pairing.</li>
        <li><strong>Euler / UniPC</strong> — Karras works well; sometimes <code>sgm_uniform</code> is a slight notch better.</li>
        <li><strong>Few-step distilled (Lightning, LCM)</strong> — Karras is fine, but <code>sgm_uniform</code> or <code>simple</code> are usually preferred (chapter 6 / section 2).</li>
      </ul>

      <h2>Why not always Karras?</h2>
      <p>
        Karras was derived assuming a particular noise distribution (EDM / variance-exploding). Some
        models, particularly flow-matching FLUX/SD3, were trained on different noise distributions
        where Karras spacing is suboptimal. The next sections cover the alternatives.
      </p>

      <NoteBlock title="Default for SDXL">
        <code>karras</code> + <code>dpmpp_2m</code> at 25 steps is the most-recommended SDXL config
        for a reason. It's been A/B-tested against everything else and tends to win on quality at
        the cost of nothing extra.
      </NoteBlock>
    </>
  )
}

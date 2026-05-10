import { BlockMath, InlineMath } from 'react-katex'
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3Ddim() {
  return (
    <>
      <p>
        DDPM works but is expensive — 1000 forward passes per image. <strong>DDIM</strong> (Song et
        al. 2021) shows you can sample with 20–50 steps and lose little quality. The trick: skip
        timesteps deterministically.
      </p>

      <h2>The DDIM update rule</h2>
      <p>
        DDIM derives a non-Markovian forward process that has the same marginals as DDPM (so it
        works with any DDPM-trained model, no retraining) but allows you to predict{' '}
        <InlineMath math="x_{t-k}" /> from <InlineMath math="x_t" /> in one shot.
      </p>
      <BlockMath math="x_{t-k} = \sqrt{\bar{\alpha}_{t-k}}\,\hat{x}_0 + \sqrt{1 - \bar{\alpha}_{t-k} - \sigma_t^2}\,\epsilon_\theta(x_t, t) + \sigma_t\,z" />
      <p>where <InlineMath math="\hat{x}_0" /> is the model's estimate of the clean image:</p>
      <BlockMath math="\hat{x}_0 = \frac{x_t - \sqrt{1 - \bar{\alpha}_t}\,\epsilon_\theta(x_t, t)}{\sqrt{\bar{\alpha}_t}}" />

      <h2>Two parameters that matter</h2>
      <ul>
        <li><InlineMath math="k" /> — how many original timesteps to skip per step. <InlineMath math="k=1" /> recovers DDPM; <InlineMath math="k=20-50" /> is typical.</li>
        <li><InlineMath math="\sigma_t" /> — noise injection per step. <InlineMath math="\sigma_t = 0" /> gives a fully deterministic ODE-like sampler; <InlineMath math="\sigma_t > 0" /> retains stochasticity.</li>
      </ul>

      <h2>The deterministic regime — diffusion as an ODE</h2>
      <DefinitionBlock title="ODE limit">
        With <InlineMath math="\sigma_t = 0" /> (deterministic DDIM) and{' '}
        <InlineMath math="k \to 0" /> (continuous time), DDIM converges to the <strong>probability-flow
        ODE</strong>: a deterministic differential equation whose flow maps noise to data. This
        framing is the basis of all modern fast samplers.
      </DefinitionBlock>
      <BlockMath math="\frac{d x_t}{dt} = f(x_t, t) - \frac{1}{2} g(t)^2 \nabla_{x_t} \log q(x_t)" />
      <p>
        The score <InlineMath math="\nabla_{x_t} \log q(x_t)" /> is supplied by the network (via the
        ε-to-score equivalence from the previous section).
      </p>

      <h2>Why deterministic helps</h2>
      <ol>
        <li><strong>Reproducibility.</strong> Same seed + same model + same prompt = bit-identical image. Stochastic DDPM has run-to-run variation even at fixed seed.</li>
        <li><strong>Higher-order solvers.</strong> Once you frame sampling as solving an ODE, you can apply 2nd, 3rd, 4th-order solvers (DPM++ 2M, 3M, etc.) that take fewer model calls per unit of error.</li>
        <li><strong>Distillation.</strong> Deterministic ODE flow is the target of distillation methods (LCM, TCD, Lightning) that compress 50 steps into 4.</li>
      </ol>

      <h2>What DDIM looks like in ComfyUI</h2>
      <p>
        The <code>ddim</code> sampler in ComfyUI's KSampler dropdown implements deterministic DDIM
        with default <InlineMath math="\sigma_t = 0" />. Most people pick <code>dpmpp_2m</code> or{' '}
        <code>euler</code> instead today, but DDIM remains a useful baseline — its outputs are
        smooth and predictable.
      </p>

      <NoteBlock title="What we'll build on">
        From this section forward, treat sampling as "solve a differential equation that flows
        noise to data." The next chapter is about what the network is really estimating (score, ε,
        v) and the chapter after that is about samplers as numerical ODE/SDE solvers.
      </NoteBlock>
    </>
  )
}

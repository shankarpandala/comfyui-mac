import { BlockMath, InlineMath } from 'react-katex'
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2ReverseProcess() {
  return (
    <>
      <p>
        At inference we start from random noise and want to undo the forward chain step by step. We
        cannot compute <InlineMath math="q(x_{t-1} \mid x_t)" /> exactly because it depends on the
        unknown <InlineMath math="x_0" />. But we can <em>approximate</em> it with a learned
        Gaussian, and that approximation is exactly what KSampler runs.
      </p>

      <DefinitionBlock title="The reverse transition">
        <BlockMath math="p_\theta(x_{t-1} \mid x_t) = \mathcal{N}\left(x_{t-1};\, \mu_\theta(x_t, t),\, \Sigma_\theta(x_t, t)\right)" />
        with mean and (often fixed) covariance produced by the network.
      </DefinitionBlock>

      <h2>Re-parameterizing the mean as ε-prediction</h2>
      <p>
        Ho et al. derived a clean form: if the network predicts the noise{' '}
        <InlineMath math="\epsilon_\theta(x_t, t)" />, the optimal mean is
      </p>
      <BlockMath math="\mu_\theta(x_t, t) = \frac{1}{\sqrt{\alpha_t}}\left(x_t - \frac{\beta_t}{\sqrt{1 - \bar{\alpha}_t}}\,\epsilon_\theta(x_t, t)\right)" />
      <p>
        With this form, the sampler just takes a step toward <InlineMath math="\mu_\theta" /> and
        adds a controlled noise term. That's the whole DDPM sampler.
      </p>

      <h2>The DDPM sampling algorithm</h2>
      <p>Pseudocode for one full reverse pass:</p>
      <pre>{`Sample x_T ~ N(0, I)
for t = T, T-1, ..., 1:
    eps = epsilon_theta(x_t, t)              # the UNet forward pass
    mu  = (1/sqrt(alpha_t)) * (x_t - (beta_t / sqrt(1 - alpha_bar_t)) * eps)
    if t > 1:
        z = N(0, I)
        x_{t-1} = mu + sigma_t * z
    else:
        x_{t-1} = mu
return x_0`}</pre>

      <p>
        Each iteration of the loop is one "step" you see counted by KSampler. The expensive part is
        the UNet forward pass; the rest is element-wise math.
      </p>

      <h2>Why it works</h2>
      <p>
        Two nice properties combine. First, the forward chain is Gaussian, so the optimal reverse
        step is approximately Gaussian (provided <InlineMath math="\beta_t" /> is small). Second,
        knowing how to remove a small amount of noise — a denoiser — is enough to bootstrap the
        whole process: we apply the denoiser <InlineMath math="T" /> times.
      </p>

      <h2>Score interpretation (preview)</h2>
      <p>
        There's a beautiful equivalence: the noise estimate{' '}
        <InlineMath math="\epsilon_\theta" /> is, up to scaling, a learned estimate of the score of
        the data distribution at noise level <InlineMath math="t" />:
      </p>
      <BlockMath math="\nabla_{x_t} \log q(x_t) \approx -\frac{\epsilon_\theta(x_t, t)}{\sqrt{1 - \bar{\alpha}_t}}" />
      <p>
        This connects DDPM to the score-matching literature (Song &amp; Ermon 2019), and gives the
        SDE/ODE-flow framing we'll use to derive faster samplers in chapter 5. We unpack scores in
        the next chapter.
      </p>

      <NoteBlock title="The big number of steps">
        DDPM as written needs many iterations — typically 1000 — to produce good images. That's why
        every modern sampler (DDIM, DPM++, UniPC, LCM) is a way to get the same quality with far
        fewer UNet calls. The next two sections set up the geometric trick that makes the speedup
        possible.
      </NoteBlock>
    </>
  )
}

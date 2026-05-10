import { BlockMath, InlineMath } from 'react-katex'
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Ddpm() {
  return (
    <>
      <p>
        We've been pressing Queue Prompt and watching it/s tick down for two subjects. Time to open
        the box. The KSampler is implementing a Markov chain whose transitions slowly remove noise
        from a tensor. The model architecture (UNet, DiT) and the sampler algorithm (DDPM, DDIM,
        DPM++) are all variations on this single idea. We start with the original formulation —{' '}
        <strong>DDPM</strong>, Denoising Diffusion Probabilistic Models, Ho et al. 2020.
      </p>

      <h2>The forward (noising) process</h2>
      <p>
        Take an image <InlineMath math="x_0" />. Define a sequence of progressively noisier versions{' '}
        <InlineMath math="x_1, x_2, \ldots, x_T" /> by adding a small amount of Gaussian noise at
        each step. Mathematically:
      </p>
      <BlockMath math="q(x_t \mid x_{t-1}) = \mathcal{N}\left(x_t;\, \sqrt{1 - \beta_t}\,x_{t-1},\, \beta_t I\right)" />
      <p>
        where <InlineMath math="\beta_t \in (0, 1)" /> is a small variance schedule. Each step
        slightly shrinks the previous tensor by <InlineMath math="\sqrt{1 - \beta_t}" /> and adds
        noise of variance <InlineMath math="\beta_t" />. After enough steps,{' '}
        <InlineMath math="x_T" /> is indistinguishable from pure standard-normal noise.
      </p>

      <DefinitionBlock title="The forward process is fixed">
        Crucially, the forward process has no learned parameters. The schedule{' '}
        <InlineMath math="\beta_1, \ldots, \beta_T" /> is chosen by hand (linear, cosine, sigmoid)
        and the noising is just sampling Gaussians. We never actually run the forward process at
        inference — we only use it conceptually to derive the reverse.
      </DefinitionBlock>

      <h2>The closed-form jump</h2>
      <p>
        A useful identity: because each step is Gaussian, you can jump from{' '}
        <InlineMath math="x_0" /> directly to any <InlineMath math="x_t" /> in one shot.
      </p>
      <BlockMath math="q(x_t \mid x_0) = \mathcal{N}\left(x_t;\, \sqrt{\bar{\alpha}_t}\,x_0,\, (1 - \bar{\alpha}_t) I\right)" />
      <p>
        where <InlineMath math="\alpha_t = 1 - \beta_t" /> and{' '}
        <InlineMath math="\bar{\alpha}_t = \prod_{s=1}^{t} \alpha_s" />. Equivalently, with{' '}
        <InlineMath math="\epsilon \sim \mathcal{N}(0, I)" />:
      </p>
      <BlockMath math="x_t = \sqrt{\bar{\alpha}_t}\,x_0 + \sqrt{1 - \bar{\alpha}_t}\,\epsilon" />

      <p>
        This identity is what makes diffusion training tractable. To train, we don't have to run a
        long Markov chain — we sample a random <InlineMath math="t" />, compute{' '}
        <InlineMath math="x_t" /> in one line, and ask the model to predict{' '}
        <InlineMath math="\epsilon" />.
      </p>

      <h2>What the schedule looks like</h2>
      <p>
        Different choices of <InlineMath math="\{\beta_t\}" /> produce different mixing trajectories.
        Two common schedules:
      </p>
      <ul>
        <li><strong>Linear</strong> — <InlineMath math="\beta_t = \beta_{\min} + \frac{t-1}{T-1}(\beta_{\max} - \beta_{\min})" />. Simple; over-noises early.</li>
        <li><strong>Cosine</strong> — defined via <InlineMath math="\bar{\alpha}_t" /> directly: <InlineMath math="\bar{\alpha}_t = \cos^2\left(\frac{t/T + s}{1 + s} \cdot \frac{\pi}{2}\right)" />. Smoother; what later models prefer.</li>
      </ul>

      <h2>What gets trained</h2>
      <p>
        The neural network — your UNet, your DiT — learns to predict the noise{' '}
        <InlineMath math="\epsilon" /> given a noisy <InlineMath math="x_t" /> and timestep{' '}
        <InlineMath math="t" />. The training loss is just mean squared error:
      </p>
      <BlockMath math="\mathcal{L} = \mathbb{E}_{x_0, \epsilon, t} \left\| \epsilon - \epsilon_\theta(x_t, t) \right\|^2" />
      <p>
        Three quantities — input image, noise sample, timestep — drawn at random per training step.
        That's it. No adversarial loss, no perceptual loss, no special tricks. The simplicity is
        why diffusion took over.
      </p>

      <NoteBlock title="At inference, we don't have x_0">
        At sampling time we only have the final noisy tensor <InlineMath math="x_T" /> and want to
        produce <InlineMath math="x_0" />. That's the reverse process — next section.
      </NoteBlock>
    </>
  )
}

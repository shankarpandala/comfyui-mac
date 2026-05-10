import { BlockMath, InlineMath } from 'react-katex'
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1ScoreMatching() {
  return (
    <>
      <p>
        DDPM and score-based models look superficially different. They are the same theory in
        different dress. This section bridges them and explains what "score" actually means in
        practice.
      </p>

      <DefinitionBlock title="The score">
        The score of a probability density <InlineMath math="p(x)" /> is the gradient of its
        log-density:
        <BlockMath math="s(x) = \nabla_x \log p(x)" />
        It points in the direction of locally-higher-probability data — toward "more image-like"
        regions of pixel space.
      </DefinitionBlock>

      <h2>Why scores are useful for sampling</h2>
      <p>
        If we knew the score of the data distribution, we could climb it via Langevin dynamics:
        starting from random noise, add a small step in the direction of the score plus a little
        Gaussian noise. After enough steps, the iterate <InlineMath math="x" /> is approximately
        distributed according to <InlineMath math="p(x)" />. We've sampled from the data
        distribution by repeatedly stepping uphill.
      </p>
      <BlockMath math="x \leftarrow x + \tau\, s(x) + \sqrt{2\tau}\,\eta,\quad \eta \sim \mathcal{N}(0, I)" />

      <h2>The problem: the data score is unknowable</h2>
      <p>
        Real image distributions live on a low-dimensional manifold inside a high-dimensional pixel
        space. The score is undefined off-manifold and explodes near it. A neural network can't
        learn it directly.
      </p>
      <p>
        The fix (Song &amp; Ermon 2019): perturb the data with Gaussian noise at increasing scales,
        and learn the score at each scale separately. Off-manifold weirdness disappears; the smooth
        noisy distributions are learnable.
      </p>

      <h2>Connection to ε-prediction</h2>
      <p>
        Let <InlineMath math="x_t = \sqrt{\bar{\alpha}_t}\,x_0 + \sqrt{1 - \bar{\alpha}_t}\,\epsilon" />.
        Then it's a clean exercise in conditional Gaussians:
      </p>
      <BlockMath math="\nabla_{x_t} \log q(x_t) = -\frac{\epsilon}{\sqrt{1 - \bar{\alpha}_t}}" />
      <p>
        The ε-prediction network <InlineMath math="\epsilon_\theta(x_t, t)" /> is, up to a constant
        scaling, a neural-network estimate of the score at noise level <InlineMath math="t" />.{' '}
        <strong>DDPM and score-matching are the same thing, parameterized differently.</strong>
      </p>

      <h2>Why we usually parameterize as ε</h2>
      <ul>
        <li>The target <InlineMath math="\epsilon" /> has unit variance regardless of noise level — the network doesn't have to handle wildly different scales of output.</li>
        <li>The training loss is plain MSE on a unit-variance target.</li>
        <li>Empirically, ε-prediction trains faster and produces sharper samples than direct score parameterization.</li>
      </ul>

      <h2>Why some models use v-prediction instead</h2>
      <p>
        Salimans &amp; Ho (2022) showed that <strong>v-prediction</strong> — predicting{' '}
        <InlineMath math="v_t = \sqrt{\bar{\alpha}_t}\,\epsilon - \sqrt{1 - \bar{\alpha}_t}\,x_0" />{' '}
        — is even better for very few-step sampling and stable training. The next section dives in.
      </p>

      <NoteBlock title="What this means in ComfyUI">
        When a checkpoint is described as "v-prediction" (e.g., SD 2.1 768, some niche SDXL
        finetunes), the sampler needs to know that — using the wrong assumption produces noisy
        garbage. ComfyUI's <code>ModelSamplingDiscrete</code> node has a <code>sampling</code>{' '}
        switch (<code>eps</code>, <code>v</code>, <code>x0</code>); ComfyUI auto-detects from the
        checkpoint metadata, but if you ever import a custom model that wasn't auto-tagged, this
        node is the rescue.
      </NoteBlock>
    </>
  )
}

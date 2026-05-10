import { BlockMath, InlineMath } from 'react-katex'
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1FlowVsDdpm() {
  return (
    <>
      <p>
        DDPM and the score-based view we built up are one paradigm. <strong>Flow Matching</strong> is
        a different (newer) paradigm that produces equivalent results with cleaner training and
        sometimes better behavior. FLUX, SD3, Wan, and LTX are all flow-matching models. This
        section explains the difference.
      </p>

      <DefinitionBlock title="Flow Matching (Lipman et al. 2023)">
        Instead of learning to denoise via a stochastic noising process, learn a deterministic{' '}
        <em>velocity field</em> <InlineMath math="v_\theta(x_t, t)" /> such that integrating
        <BlockMath math="\frac{d x_t}{dt} = v_\theta(x_t, t)" />
        from <InlineMath math="t=1" /> (noise) to <InlineMath math="t=0" /> (data) maps a noise
        sample to a data sample.
      </DefinitionBlock>

      <h2>The training signal</h2>
      <p>
        For each training pair (noise <InlineMath math="x_1" />, data <InlineMath math="x_0" />),
        define a straight-line interpolation:
      </p>
      <BlockMath math="x_t = (1 - t) x_0 + t x_1,\quad t \in [0, 1]" />
      <p>The "ground truth" velocity along this line is constant:</p>
      <BlockMath math="v^*(x_t, t) = x_1 - x_0" />
      <p>The loss is a regression on this velocity:</p>
      <BlockMath math="\mathcal{L}_\text{FM} = \mathbb{E}_{x_0, x_1, t} \left\| v_\theta(x_t, t) - (x_1 - x_0) \right\|^2" />
      <p>
        Note: there is no Gaussian noise process, no <InlineMath math="\sqrt{\bar{\alpha}_t}" />, no
        score. Just "predict the displacement at this point."
      </p>

      <h2>Why flow matching wins for FLUX-class models</h2>
      <ol>
        <li><strong>Straight trajectories.</strong> The optimal velocity field has straight lines connecting noise to data, which means an Euler ODE solver can take large steps with low error. ~20 steps for high-quality FLUX vs ~50 for high-quality SDXL.</li>
        <li><strong>Cleaner conditioning.</strong> Time <InlineMath math="t \in [0, 1]" /> is uniformly distributed in training; no schedule warping needed.</li>
        <li><strong>Better few-step distillation.</strong> Rectified flow (next section) is a self-distillation method specific to flow models that outperforms DDPM-era distillations.</li>
      </ol>

      <h2>Equivalence with diffusion</h2>
      <p>
        Mathematically, flow matching and score-based diffusion describe the same family of
        probability flows from different starting points. The probability-flow ODE we derived in
        chapter 1 is a specific flow-matching velocity field whose ground truth depends on a
        (Gaussian) noise schedule. Flow matching is a generalization: any noise → data
        interpolation works, not just the variance-preserving Gaussian one.
      </p>
      <p>
        The practical consequence: FLUX's UNet outputs a velocity, not an ε. The KSampler treats it
        as such (the ComfyUI runtime adapts automatically based on the checkpoint metadata).
      </p>

      <h2>What this changes about your workflows</h2>
      <ul>
        <li><strong>Sampler choice</strong> — prefer <code>euler</code> (which is straight-line ODE-friendly). DPM-Solver assumes the diffusion ODE structure and gives slightly worse output on FLUX.</li>
        <li><strong>Scheduler</strong> — <code>simple</code> (linear in <InlineMath math="t" />) or <code>sgm_uniform</code>. Karras assumes the variance-exploding diffusion structure.</li>
        <li><strong>CFG</strong> — FLUX uses a "guidance" scalar baked into the model, not classical CFG. Subject 08 covers it.</li>
      </ul>

      <NoteBlock title="The mental shift">
        Stop thinking "remove noise step by step." Start thinking "follow a velocity field from
        noise to data." Same destination, different mathematical clothing. For a Mac user, the
        practical takeaway is: pick the right sampler + scheduler for the family.
      </NoteBlock>
    </>
  )
}

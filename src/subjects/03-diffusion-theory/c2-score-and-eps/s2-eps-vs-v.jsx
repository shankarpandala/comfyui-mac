import { BlockMath, InlineMath } from 'react-katex'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2EpsVsV() {
  return (
    <>
      <p>
        ε-prediction and v-prediction are two different choices for what the network outputs. Both
        are equivalent in the limit of perfect training; they differ in numerical conditioning and
        in how well they extrapolate to fast samplers.
      </p>

      <h2>The three common parameterizations</h2>
      <table>
        <thead><tr><th>Name</th><th>Network output</th><th>Use</th></tr></thead>
        <tbody>
          <tr><td><strong>ε</strong></td><td><InlineMath math="\epsilon_\theta(x_t, t) \approx \epsilon" /></td><td>SD 1.5, SDXL, most checkpoints</td></tr>
          <tr><td><strong>v</strong></td><td><InlineMath math="v_\theta(x_t, t) \approx v_t" /></td><td>SD 2.x, some SDXL finetunes, AnimateDiff Lightning</td></tr>
          <tr><td><strong>x_0</strong></td><td><InlineMath math="x_0^\theta(x_t, t) \approx x_0" /></td><td>Some FLUX-trained models, ablations</td></tr>
        </tbody>
      </table>

      <h2>Definitions</h2>
      <BlockMath math="v_t \;=\; \sqrt{\bar{\alpha}_t}\,\epsilon \;-\; \sqrt{1 - \bar{\alpha}_t}\,x_0" />
      <p>
        At <InlineMath math="t = 0" /> (no noise), <InlineMath math="v \approx -x_0" />. At{' '}
        <InlineMath math="t = T" /> (pure noise), <InlineMath math="v \approx \epsilon" />. So{' '}
        <InlineMath math="v" /> smoothly interpolates between the two extremes.
      </p>

      <h2>Why v is better for few-step samplers</h2>
      <ol>
        <li><strong>Bounded output magnitude.</strong> ε has unit variance regardless of <InlineMath math="t" />, but the implied <InlineMath math="x_0" /> reconstruction explodes for large <InlineMath math="t" />. v stays roughly unit-variance at <em>both</em> ends, making the mapping easier to learn.</li>
        <li><strong>Smooth across timesteps.</strong> Because <InlineMath math="v" /> blends ε and <InlineMath math="x_0" />, it's continuous in <InlineMath math="t" /> in a way that makes higher-order ODE solvers more stable.</li>
        <li><strong>Distillation friendly.</strong> Methods like Lightning, Hyper-SD, and TCD that compress 50 steps to 4 train more easily on v-parameterized teachers.</li>
      </ol>

      <h2>Converting between parameterizations</h2>
      <p>If you have ε-prediction but the sampler wants <InlineMath math="x_0" />:</p>
      <BlockMath math="\hat{x}_0 = \frac{x_t - \sqrt{1 - \bar{\alpha}_t}\,\epsilon_\theta(x_t, t)}{\sqrt{\bar{\alpha}_t}}" />
      <p>If v-prediction:</p>
      <BlockMath math="\hat{x}_0 = \sqrt{\bar{\alpha}_t}\,x_t - \sqrt{1 - \bar{\alpha}_t}\,v_\theta(x_t, t)" />
      <p>
        ComfyUI's samplers handle these conversions automatically based on the model's metadata.
        You usually never see them, but knowing they exist demystifies <em>why</em> the same sampler
        sometimes produces grayish or oversaturated outputs when you accidentally switch
        parameterizations on it.
      </p>

      <h2>How to tell what your checkpoint uses</h2>
      <ul>
        <li><strong>SD 1.5 / SDXL base, most community SDXL</strong> → ε.</li>
        <li><strong>SD 2.0 768, SD 2.1 768</strong> → v.</li>
        <li><strong>SDXL Lightning, Hyper-SDXL, AnimateDiff Lightning</strong> → v (the distillation makes v much easier).</li>
        <li><strong>SD3 / SD3.5</strong> → flow matching, a different framework (chapter 7).</li>
        <li><strong>FLUX</strong> → flow matching as well.</li>
      </ul>

      <NoteBlock title="When you load a model that comes out gray">
        It's almost always a parameterization mismatch. Apply <code>ModelSamplingDiscrete</code>{' '}
        with the right <code>sampling</code> setting and try again. Most modern checkpoints
        auto-tag, so you'll only hit this with rare CivitAI uploads.
      </NoteBlock>
    </>
  )
}

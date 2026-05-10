import { BlockMath, InlineMath } from 'react-katex'
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'

export default function S1CfgEquation() {
  return (
    <>
      <p>
        Classifier-Free Guidance (CFG) is the reason your prompt actually steers the image. Set
        <InlineMath math="\text{cfg}=1" /> and the prompt has minimal effect; set{' '}
        <InlineMath math="\text{cfg}=7" /> and the model strongly follows your text. This section
        derives why.
      </p>

      <DefinitionBlock title="Classifier-Free Guidance (Ho &amp; Salimans 2022)">
        The model is trained to handle two modes: <em>conditional</em> ε-prediction{' '}
        <InlineMath math="\epsilon_\theta(x_t, t, c)" /> given prompt <InlineMath math="c" />, and{' '}
        <em>unconditional</em> <InlineMath math="\epsilon_\theta(x_t, t, \emptyset)" /> with the
        prompt dropped (a fraction of training samples set <InlineMath math="c = \emptyset" />). At
        inference, we mix:
        <BlockMath math="\tilde{\epsilon} \;=\; \epsilon_\theta(x_t, t, \emptyset) \;+\; w \cdot \big(\epsilon_\theta(x_t, t, c) - \epsilon_\theta(x_t, t, \emptyset)\big)" />
        where <InlineMath math="w" /> is the CFG scale (the <code>cfg</code> widget in KSampler).
      </DefinitionBlock>

      <h2>What the formula does intuitively</h2>
      <p>
        The bracket <InlineMath math="(\epsilon_\text{cond} - \epsilon_\text{uncond})" /> is the
        "direction toward the prompt" — how much the prediction changes when you add the prompt.
        Multiplying by <InlineMath math="w > 1" /> exaggerates that direction:
      </p>
      <ul>
        <li><InlineMath math="w = 0" /> — pure unconditional. The prompt is ignored.</li>
        <li><InlineMath math="w = 1" /> — pure conditional. The prompt is followed but not exaggerated.</li>
        <li><InlineMath math="w = 7" /> — the typical SDXL default. Strongly biased toward the prompt; can clip values.</li>
        <li><InlineMath math="w \gg 10" /> — over-saturated, often worse quality.</li>
      </ul>

      <h2>The negative prompt</h2>
      <p>
        ComfyUI's KSampler accepts both positive <em>and</em> negative conditionings. The full
        formula:
      </p>
      <BlockMath math="\tilde{\epsilon} \;=\; \epsilon_\theta(x_t, t, c_-) \;+\; w \cdot \big(\epsilon_\theta(x_t, t, c_+) - \epsilon_\theta(x_t, t, c_-)\big)" />
      <p>
        The negative <InlineMath math="c_-" /> takes the role of the unconditional. Subtracting
        <InlineMath math="\epsilon_\theta(\ldots, c_-)" /> pushes the prediction <em>away</em> from
        whatever <InlineMath math="c_-" /> describes. That's why "blurry, low quality" works as a
        negative prompt — it shifts the trajectory away from blurry-looking modes.
      </p>

      <h2>Per-step cost of CFG</h2>
      <p>
        At each sampling step, both <InlineMath math="\epsilon_\theta(\ldots, c_+)" /> and{' '}
        <InlineMath math="\epsilon_\theta(\ldots, c_-)" /> have to be computed. ComfyUI batches them
        in a single UNet forward (concatenating positive and negative batch dims), so the cost is
        ~2× a single forward pass. CFG &gt; 1 always doubles your compute.
      </p>

      <h2>"CFG = 1" doesn't mean "no guidance"</h2>
      <p>
        With <InlineMath math="w = 1" /> the bracket simplifies to{' '}
        <InlineMath math="\tilde{\epsilon} = \epsilon_\theta(x_t, t, c_+)" /> — pure conditional. No
        negative conditioning is applied. ComfyUI optimizes this case to a single forward pass per
        step, which is why CFG=1 generations are roughly 2× faster than CFG=7. Distilled models
        (Lightning, Hyper-SD, FLUX Schnell) are designed to work at CFG=1, exploiting that speedup.
      </p>

      <h2>Recommended CFG ranges</h2>
      <table>
        <thead><tr><th>Model</th><th>Typical cfg</th></tr></thead>
        <tbody>
          <tr><td>SD 1.5</td><td>5–9</td></tr>
          <tr><td>SDXL base</td><td>5–8</td></tr>
          <tr><td>SDXL Lightning / Turbo / Hyper</td><td>1–2</td></tr>
          <tr><td>SD 3 / 3.5</td><td>4–6</td></tr>
          <tr><td>FLUX Dev</td><td>3.5 (it accepts a separate <code>guidance</code> input, not classical cfg)</td></tr>
          <tr><td>FLUX Schnell</td><td>1 (distilled)</td></tr>
        </tbody>
      </table>
    </>
  )
}

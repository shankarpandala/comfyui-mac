import { BlockMath, InlineMath } from 'react-katex'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2CfgTuning() {
  return (
    <>
      <p>
        Vanilla CFG has a known failure mode: at high values it produces saturated, contrast-y,
        slightly fried images. Several refinements address this. ComfyUI exposes them as nodes you
        can sprinkle into a workflow. This section is the menu.
      </p>

      <h2>CFG rescale (Lin et al. 2024)</h2>
      <p>
        At high <InlineMath math="w" />, <InlineMath math="\tilde{\epsilon}" /> can grow much
        larger than <InlineMath math="\epsilon_\theta(x_t, t, c_+)" /> alone, pushing samples
        off-distribution. CFG rescale brings the magnitude back:
      </p>
      <BlockMath math="\tilde{\epsilon}_\text{rescaled} = \tilde{\epsilon} \cdot \frac{\|\epsilon_\theta(x_t, t, c_+)\|}{\|\tilde{\epsilon}\|}" />
      <p>
        Then mixed with <InlineMath math="\tilde{\epsilon}" /> by a strength <InlineMath math="\phi \in [0,1]" />.
        ComfyUI: <code>RescaleCFG</code> node, <code>multiplier</code> = 0.7 is a good default.
      </p>

      <h2>Dynamic thresholding (Imagen)</h2>
      <p>
        Clip the predicted <InlineMath math="\hat{x}_0" /> to a percentile of its own absolute
        values, preventing overshoot when CFG is high. ComfyUI: <code>DynamicThresholdingFull</code>{' '}
        from the dynamic-thresholding custom node, or built-in alternatives. Typical percentile:
        99–99.5%.
      </p>

      <h2>Automatic CFG / NormalizedAttentionGuidance</h2>
      <p>
        Make <InlineMath math="w" /> a function of the step rather than a constant. Higher CFG early
        in sampling (when overall composition is being formed), lower later (when detail is being
        rendered). ComfyUI: <code>AutomaticCFG</code> node from various custom-node packs.
      </p>

      <h2>PAG / SEG / SAG (chapter-level)</h2>
      <p>
        These are alternatives to CFG that perturb the model's <em>internal attention</em> instead
        of its prompt embedding to derive a guidance signal:
      </p>
      <ul>
        <li><strong>PAG (Perturbed Attention Guidance)</strong> — replace self-attention's softmax with identity in one branch; subtract that branch as the "negative".</li>
        <li><strong>SEG (Smoothed Energy Guidance)</strong> — softer perturbation; less aggressive.</li>
        <li><strong>SAG (Self-Attention Guidance)</strong> — earlier method; uses attention mask blur.</li>
      </ul>
      <p>
        PAG and SEG can be combined with classic CFG and stack additively. They're covered with
        their respective nodes in Subject 15 (Advanced Sampling).
      </p>

      <h2>FLUX's "guidance" is not classical CFG</h2>
      <p>
        FLUX uses a single forward pass per step with a separate <code>guidance</code> scalar that
        is fed as an additional model input. There's no negative conditioning, no CFG-style
        bracket. <code>guidance = 3.5</code> is the published Dev default; values up to ~7 work but
        change feel. We'll come back to this in Subject 08.
      </p>

      <h2>Practical CFG tuning recipe</h2>
      <ol>
        <li>Start at the model's default (5–7 for SDXL, 3.5 for FLUX, 1 for distilled).</li>
        <li>If outputs are too tame: bump CFG by 1–2.</li>
        <li>If outputs look fried/over-saturated: drop CFG, or add <code>RescaleCFG</code> at multiplier 0.5–0.7.</li>
        <li>If you want to follow prompts very strictly without over-cooking: try CFG higher with rescale + dynamic thresholding.</li>
      </ol>

      <NoteBlock title="The Subject 15 promise">
        Subject 15 is where we go deep on PAG/SEG/SAG, custom sigma schedules, and the modern
        "rescale + dynamic threshold + step-skip" stacks. For Phase 2 image work, the basics here
        plus <code>RescaleCFG</code> handle 90% of cases.
      </NoteBlock>
    </>
  )
}

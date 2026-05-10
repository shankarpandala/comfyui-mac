import { BlockMath } from 'react-katex'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Rescale() {
  return (
    <>
      <p>
        We covered CFG Rescale in Subject 03 / Chapter 4. This chapter goes deeper — when to use it,
        the math, and how it composes with PAG and dynamic thresholding.
      </p>

      <h2>The math (recap)</h2>
      <BlockMath math="\tilde{\epsilon}_\text{rescaled} = \tilde{\epsilon} \cdot \frac{\|\epsilon_\text{cond}\|}{\|\tilde{\epsilon}\|}" />
      <p>Then mixed with the original CFG output by a strength φ:</p>
      <BlockMath math="\epsilon_\text{out} = \phi \cdot \tilde{\epsilon}_\text{rescaled} + (1-\phi) \cdot \tilde{\epsilon}" />

      <h2>The ComfyUI node</h2>
      <p>
        <code>RescaleCFG</code> from base ComfyUI or the SDXL Resolution Conditioning custom-node
        pack. Inputs: MODEL + multiplier (φ).
      </p>

      <h2>When to use it</h2>
      <ul>
        <li>SDXL with CFG &gt; 7.</li>
        <li>Outputs look "fried" — oversaturated, plastic, contrast-clipped.</li>
        <li>Stylized prompts that push the model into edge regions of its distribution.</li>
      </ul>

      <h2>Multiplier values</h2>
      <ul>
        <li>0.5 — moderate rescale; often the sweet spot.</li>
        <li>0.7 — strong rescale; more conservative output.</li>
        <li>1.0 — full rescale; can flatten outputs.</li>
      </ul>

      <h2>When NOT to use</h2>
      <ul>
        <li>FLUX — uses its own guidance scalar; rescale isn't needed.</li>
        <li>SDXL at CFG 5 or less — already conservative.</li>
        <li>Lightning / Hyper-SD — these use CFG=1 and rescale isn't applicable.</li>
      </ul>

      <NoteBlock title="The 'add when needed' habit">
        Don't put RescaleCFG in every workflow. Add it when you see the symptom (fried outputs at
        high CFG). For most SDXL runs at CFG 6-7, it's not needed.
      </NoteBlock>
    </>
  )
}

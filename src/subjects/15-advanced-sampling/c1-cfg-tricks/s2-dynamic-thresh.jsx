import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2DynamicThresh() {
  return (
    <>
      <p>
        Dynamic thresholding clips the model's predicted x_0 to a percentile of its own values at
        each step. Prevents the sampler from drifting into out-of-distribution extreme values when
        CFG is high.
      </p>

      <h2>The technique</h2>
      <ol>
        <li>At each sampler step, compute predicted x_0 from the ε prediction.</li>
        <li>Find the Pth percentile of |x_0| (e.g., P=99 → 99th percentile of absolute values).</li>
        <li>Clip x_0 to ±that percentile value.</li>
        <li>Continue sampling with the clipped x_0.</li>
      </ol>

      <h2>The custom node</h2>
      <p><code>DynamicThresholdingFull</code> from <code>sd-dynamic-thresholding</code> custom-node pack.</p>

      <h2>Parameters</h2>
      <ul>
        <li><strong>mimic_scale</strong>: target CFG to "mimic" — the threshold is set to what this CFG would naturally produce.</li>
        <li><strong>threshold_percentile</strong>: 99 typical; 99.5 stricter; 95 looser.</li>
        <li><strong>mimic_mode</strong>: how to compute the mimic baseline. <code>Cosine Up</code> is a common choice.</li>
        <li><strong>cfg_mode</strong>: same options for the actual CFG side.</li>
      </ul>

      <h2>Use cases</h2>
      <ul>
        <li>SDXL at CFG 10+ for prompt strictness without saturation.</li>
        <li>Pony / Illustrious anime bases where high CFG breaks fast.</li>
        <li>Combining with strong negative embeddings.</li>
      </ul>

      <h2>Composition with RescaleCFG</h2>
      <p>
        Both prevent saturation but via different mechanisms. RescaleCFG normalizes magnitude;
        Dynamic Thresholding clips. They can be combined — use both when the symptom is severe.
      </p>

      <NoteBlock title="The 'when CFG is too high' rescue">
        If you must use CFG 10+ (because prompts demand strict adherence), Dynamic Thresholding +
        RescaleCFG together let you keep usable outputs. Either alone is often enough.
      </NoteBlock>
    </>
  )
}

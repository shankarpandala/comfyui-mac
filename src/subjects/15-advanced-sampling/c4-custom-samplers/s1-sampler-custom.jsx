import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1SamplerCustom() {
  return (
    <>
      <p>
        ComfyUI's <code>SamplerCustom</code> and <code>SamplerCustomAdvanced</code> nodes expose
        the sampler internals — pick the noise schedule, sampler algorithm, and noise injection
        independently. For workflows where the standard KSampler doesn't have enough control.
      </p>

      <h2>The decomposition</h2>
      <p>Standard KSampler bundles three things: noise schedule, sampler algorithm, and CFG
      handling. SamplerCustom unbundles them:</p>
      <ul>
        <li><strong>SAMPLER</strong> input — comes from <code>KSamplerSelect</code> (pick algorithm: euler, dpmpp_2m, etc.)</li>
        <li><strong>SIGMAS</strong> input — comes from <code>BasicScheduler</code> or custom sigma generators</li>
        <li><strong>noise</strong> input — comes from <code>RandomNoise</code> or other noise sources</li>
        <li><strong>guider</strong> input — comes from <code>BasicGuider</code> or <code>CFGGuider</code></li>
      </ul>

      <h2>Typical advanced workflow</h2>
      <pre>{`KSamplerSelect (euler) → SAMPLER ┐
BasicScheduler (karras) → SIGMAS ┤→ SamplerCustomAdvanced
RandomNoise (seed) → noise       ┤
CFGGuider (cond, neg, cfg) → guider ┘`}</pre>
      <p>Equivalent to standard KSampler but exposed for tweaking individual pieces.</p>

      <h2>What you can do with this</h2>
      <ul>
        <li><strong>Custom sigma sequences</strong> — generate sigmas via <code>SDTurboScheduler</code> or write your own array.</li>
        <li><strong>Multi-stage sampling</strong> — different sampler / sigmas for different step ranges.</li>
        <li><strong>Inject noise mid-sampling</strong> — between SamplerCustomAdvanced calls.</li>
        <li><strong>Compose guiders</strong> — DualCFGGuider for multi-prompt blending.</li>
      </ul>

      <NoteBlock title="The right time to use it">
        Standard KSampler covers ~95% of needs. Reach for SamplerCustomAdvanced when you have a
        specific need standard doesn't meet — usually for FLUX advanced sigma control or research
        experiments.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2FromScratchSigmas() {
  return (
    <>
      <p>
        Build your own sigma schedule. Useful for fine-tuned step-density control beyond what
        Karras / SGM Uniform / Beta provide.
      </p>

      <h2>The sigma sequence</h2>
      <p>
        A sigma schedule is a decreasing sequence of noise levels: <code>[sigma_max, ..., sigma_min, 0]</code>.
        Length = number of sampler steps + 1. The sampler walks through these.
      </p>

      <h2>Building one manually</h2>
      <p>
        ComfyUI's <code>SplitSigmas</code> + <code>FlipSigmas</code> + math nodes can construct
        sequences. Most users instead use <code>BasicScheduler</code> with a chosen scheduler name
        and step count.
      </p>

      <h2>Compose two schedulers</h2>
      <p>Want Karras spacing for the first 70% of steps and tight uniform spacing for the last 30%? Concatenate two BasicScheduler outputs:</p>
      <pre>{`BasicScheduler (karras, 17 steps) → SplitSigmas (split at 12) → SIGMAS_first
BasicScheduler (sgm_uniform, 8 steps) → SplitSigmas → SIGMAS_second
ConcatSigmas (SIGMAS_first[:12] + SIGMAS_second) → final SIGMAS → SamplerCustomAdvanced`}</pre>

      <h2>The "denoise less near the end" trick</h2>
      <p>
        Cap the final sigma at e.g. 0.05 instead of 0 — leaves a tiny amount of noise for the VAE
        decoder to "shape into" detail. Sometimes produces sharper outputs.
      </p>

      <h2>This is power-user territory</h2>
      <p>
        Most workflows don't need custom sigmas. The named schedulers (Karras / SGM Uniform / Simple
        / Beta) cover the well-validated cases. Custom sigmas are for research and very specific
        production tuning.
      </p>

      <NoteBlock title="The Phase 5b connection">
        Some Phase 5b advanced recipes (long-video character consistency) use custom sigma schedules
        to get specific noise dynamics. We'll link back to this section there.
      </NoteBlock>
    </>
  )
}

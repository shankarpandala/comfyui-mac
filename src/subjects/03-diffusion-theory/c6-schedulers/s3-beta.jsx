import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3Beta() {
  return (
    <>
      <p>
        Beta scheduling is one of the more recent additions to ComfyUI. It uses a Beta distribution
        to control step density and is particularly effective for very low step counts on SDXL.
      </p>

      <h2>The intuition</h2>
      <p>
        A Beta distribution can be tuned to concentrate density anywhere in <code>[0, 1]</code>.
        Beta scheduling maps step indices through the Beta CDF to noise levels, giving a tunable
        density curve that can be tuned per-model. The defaults in ComfyUI work well; advanced
        users can tweak shape parameters via custom nodes.
      </p>

      <h2>When Beta is the right choice</h2>
      <ul>
        <li><strong>Very low step counts (8–15)</strong> on SDXL — Beta often edges Karras here.</li>
        <li><strong>Low-CFG distilled models</strong> — Beta + <code>dpmpp_2m</code> at 12 steps is a viable Lightning alternative for some content.</li>
      </ul>

      <h2>When to skip Beta</h2>
      <ul>
        <li>20+ step runs — Karras and Beta are within noise of each other; Karras has more community history.</li>
        <li>Flow-matching models (FLUX, SD3) — Beta is score-model-derived; SGM Uniform / Simple are better.</li>
      </ul>

      <h2>Custom sigma schedules</h2>
      <p>
        Once you know how schedulers work, you can build your own. ComfyUI's{' '}
        <code>SamplerCustom</code> and <code>SamplerCustomAdvanced</code> nodes accept arbitrary
        sigma sequences, computed by nodes like <code>BasicScheduler</code>,{' '}
        <code>SDTurboScheduler</code>, and various community sigma-curve generators.
      </p>
      <p>
        Practical use: take Karras, then steepen the last few steps to push more compute into final
        detail. Or interleave higher-noise revisits to introduce variety. We dig into custom sigma
        schedules in Subject 15.
      </p>

      <h2>Putting it all together</h2>
      <p>
        Schedulers, samplers, and CFG are three independent dials. For most users, the formula is:
      </p>
      <ol>
        <li>Pick a model family. That fixes most of the choice.</li>
        <li>Use the recommended sampler+scheduler from that model's published reference.</li>
        <li>Tune CFG for taste.</li>
        <li>Only then explore alternatives if you have a specific complaint about output.</li>
      </ol>

      <NoteBlock title="Sampler+scheduler is the secondary concern">
        Step count and CFG matter more than which specific sampler you pick within a reasonable
        family. Don't chase the long tail of sampler combinations on your first day with a model;
        get a known-good config working, then experiment one variable at a time.
      </NoteBlock>
    </>
  )
}

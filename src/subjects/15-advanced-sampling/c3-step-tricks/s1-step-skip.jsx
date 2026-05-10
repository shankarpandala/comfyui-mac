import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1StepSkip() {
  return (
    <>
      <p>
        Step skipping skips the model evaluation on certain sampler steps and reuses the previous
        prediction. Saves compute at the cost of slight quality reduction. Useful when you want
        more steps for stability without paying for all of them.
      </p>

      <h2>How it works</h2>
      <p>
        Standard sampling: each step requires one (or two for CFG) model forward passes. Step
        skipping: every Nth step, skip the model and apply Euler with the cached previous gradient.
        The sampler effectively runs at fewer "real" steps with extra cheap interpolation steps.
      </p>

      <h2>Custom node</h2>
      <p>Various names — <code>SkipStep</code>, <code>StepSkipping</code>, etc. Search for "skip" in node search.</p>

      <h2>When useful</h2>
      <ul>
        <li>SDXL at 30 steps where you want sub-25-second wall time.</li>
        <li>Iteration where you accept slight quality cost for speed.</li>
      </ul>

      <h2>When not useful</h2>
      <ul>
        <li>Already few-step samplers (Lightning, Hyper-SD) — they're maxed out on compression.</li>
        <li>Final hero renders — quality cost matters more than speed.</li>
      </ul>

      <NoteBlock title="The pragmatic alternative">
        For Mac speed, the simpler win is using a distillation (Lightning, Hyper-SD) instead of
        step-skipping a normal sampler. Same effective speedup, better trained-in quality.
      </NoteBlock>
    </>
  )
}

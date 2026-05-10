import { InlineMath } from 'react-katex'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3UniPc() {
  return (
    <>
      <p>
        UniPC (Unified Predictor-Corrector) is a relatively recent sampler family that's especially
        useful when you want very few steps (8–15) at quality close to higher-step DPM++.
      </p>

      <h2>The predictor-corrector idea</h2>
      <p>
        Most ODE solvers split each step into:
      </p>
      <ol>
        <li><strong>Predictor</strong> — a quick estimate of the next state (e.g., Euler).</li>
        <li><strong>Corrector</strong> — a refinement using the predicted state to improve accuracy.</li>
      </ol>
      <p>
        Done naively, this doubles model evals per step. UniPC's contribution is a unified
        formulation that re-uses cached previous-step outputs in the corrector — getting predictor-corrector
        accuracy at near-1 model eval per step.
      </p>

      <h2>UniPC variants in ComfyUI</h2>
      <ul>
        <li><code>uni_pc</code> — bh1 variant, conservative.</li>
        <li><code>uni_pc_bh2</code> — bh2 variant, slightly more aggressive correction.</li>
      </ul>
      <p>
        Both pair well with <code>karras</code> or <code>sgm_uniform</code> schedulers.
      </p>

      <h2>When to reach for UniPC</h2>
      <ul>
        <li><strong>Very low step counts (8–12).</strong> UniPC pulls more quality out of these than DPM++ 2M.</li>
        <li><strong>Iteration / preview.</strong> When you're scrubbing a prompt and want fast feedback.</li>
        <li><strong>Memory-tight runs.</strong> Lower steps = less wall time = less time pinning the model in MPS.</li>
      </ul>

      <h2>When not to use UniPC</h2>
      <ul>
        <li>Final renders where you want the absolute best output — DPM++ 3M SDE at 30 steps usually edges UniPC.</li>
        <li>Flow-matching models (FLUX, SD3) — UniPC is ODE-specific and less optimized for the rectified-flow trajectory.</li>
        <li>Distilled few-step models (Lightning, Hyper-SD) — they have their own trained sampler and don't need UniPC's correction.</li>
      </ul>

      <h2>Practical config</h2>
      <table>
        <thead><tr><th>Use case</th><th>Sampler</th><th>Scheduler</th><th>Steps</th></tr></thead>
        <tbody>
          <tr><td>SDXL preview pass</td><td><code>uni_pc</code></td><td><code>karras</code></td><td>10</td></tr>
          <tr><td>SDXL low-step final</td><td><code>uni_pc_bh2</code></td><td><code>karras</code></td><td>15</td></tr>
          <tr><td>SD 1.5 low-step</td><td><code>uni_pc</code></td><td><code>normal</code></td><td>10</td></tr>
        </tbody>
      </table>

      <NoteBlock title="Why most tutorials still default to DPM++">
        UniPC is newer and slightly less battle-tested in the community. DPM++ 2M Karras has a
        decade of tutorials backing it. Both are fine choices for SDXL; UniPC is your "I want fewer
        steps" option, DPM++ your "I want maximum reliability" option.
      </NoteBlock>
    </>
  )
}

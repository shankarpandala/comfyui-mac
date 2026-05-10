import { BlockMath, InlineMath } from 'react-katex'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Dpm() {
  return (
    <>
      <p>
        DPM-Solver and DPM++ are the most widely used samplers for diffusion. They are higher-order
        ODE solvers tailored to the structure of the probability flow. DPM++ 2M Karras is, for many
        practitioners, the default knob.
      </p>

      <h2>The DPM++ family</h2>
      <table>
        <thead><tr><th>Sampler</th><th>Order</th><th>Cost per step</th><th>Steps for good quality</th></tr></thead>
        <tbody>
          <tr><td><code>dpmpp_2m</code></td><td>2nd</td><td>1 model eval (cached prev)</td><td>20–30</td></tr>
          <tr><td><code>dpmpp_2m_sde</code></td><td>2nd, stochastic</td><td>1 model eval</td><td>20–30</td></tr>
          <tr><td><code>dpmpp_3m_sde</code></td><td>3rd, stochastic</td><td>1 model eval</td><td>20–30</td></tr>
          <tr><td><code>dpmpp_sde</code></td><td>2nd singlestep</td><td>2 model evals</td><td>15–25</td></tr>
        </tbody>
      </table>

      <h2>What "multistep" means</h2>
      <p>
        Multistep solvers (the <code>_2m</code>, <code>_3m</code> variants) take a Linear Multistep
        approach: the next step combines the current model output with the cached output from the
        previous step (and the one before that, for 3m). This gives higher-order accuracy without
        extra model evaluations per step — you re-use what you already computed.
      </p>
      <BlockMath math="x_{t-1} = x_t + h_t \cdot \big(c_1 \cdot D_t + c_2 \cdot D_{t-1}\big)" />
      <p>where <InlineMath math="D_t" /> is the model's denoiser at step <InlineMath math="t" /> and the coefficients <InlineMath math="c_1, c_2" /> are determined by the local step size.</p>

      <h2>Singlestep vs multistep</h2>
      <ul>
        <li><strong>Singlestep</strong> (<code>dpmpp_sde</code> without <code>_2m</code>) — uses 2 model evals per step (Heun-like predictor-corrector). Better quality at low step counts (10–15) but doubles the cost.</li>
        <li><strong>Multistep</strong> (<code>dpmpp_2m</code>, <code>_3m</code>) — 1 model eval per step. The "free higher-order accuracy" choice for 20+ step runs.</li>
      </ul>

      <h2>SDE vs ODE</h2>
      <p>
        The <code>_sde</code> suffix injects fresh noise per step (ancestral sampling). It explores
        more of the distribution and is sometimes preferred for highly stylized outputs. For
        reproducibility, prefer ODE.
      </p>

      <h2>Recommended pairings</h2>
      <table>
        <thead><tr><th>Goal</th><th>Sampler</th><th>Steps</th></tr></thead>
        <tbody>
          <tr><td>SDXL fast and clean</td><td><code>dpmpp_2m</code> + <code>karras</code></td><td>25</td></tr>
          <tr><td>SDXL stylized / painterly</td><td><code>dpmpp_2m_sde</code> + <code>karras</code></td><td>25</td></tr>
          <tr><td>SDXL maximum quality</td><td><code>dpmpp_3m_sde</code> + <code>karras</code></td><td>30</td></tr>
          <tr><td>FLUX Dev (flow matching)</td><td><code>euler</code> + <code>simple</code></td><td>20</td></tr>
          <tr><td>SD3.5</td><td><code>dpmpp_2m</code> + <code>sgm_uniform</code></td><td>28</td></tr>
        </tbody>
      </table>

      <NoteBlock title="Why FLUX uses Euler instead">
        FLUX is a flow-matching model (chapter 7). DPM-Solver is derived for the score-based ODE,
        which differs slightly from the rectified-flow ODE FLUX is trained on. Empirically, Euler
        works better for FLUX; DPM++ produces minor artifacts.
      </NoteBlock>
    </>
  )
}

import { InlineMath } from 'react-katex'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3ShortcutModels() {
  return (
    <>
      <p>
        Shortcut models (Frans et al. 2024) are a recent step beyond rectified flow. The idea:
        train a single model that handles both fine-grained 50-step inference and coarse 1-step
        inference, with the user picking the step count at sampling time. We close the chapter with
        a brief look — they're not yet in the popular ComfyUI workflows but represent where the
        field is heading.
      </p>

      <h2>The setup</h2>
      <p>
        A standard flow-matching model takes <InlineMath math="(x_t, t)" /> and outputs a velocity.
        A shortcut model takes <InlineMath math="(x_t, t, \Delta t)" /> and outputs the velocity
        such that one step of size <InlineMath math="\Delta t" /> is approximately optimal.
      </p>
      <p>
        Trained jointly with a self-distillation loss: the 1-step prediction should equal two 0.5-step
        predictions from the same model. This forces the model to be consistent across step sizes.
      </p>

      <h2>What this could unlock</h2>
      <ul>
        <li><strong>Unified models.</strong> No more "Dev for quality, Schnell for speed" — one model, dial the steps.</li>
        <li><strong>Adaptive sampling.</strong> The agentic capstone in Phase 7 could sample fast for ideation and switch to high-quality for hero shots without changing models.</li>
        <li><strong>Cleaner training.</strong> No separate distillation step.</li>
      </ul>

      <h2>Where this stands today</h2>
      <p>
        Shortcut models exist as research checkpoints; no major production model (FLUX, SD3) ships
        as a shortcut yet. We mention them so you'll recognize the term as it inevitably appears in
        2026 model releases.
      </p>

      <h2>What you've learned in Subject 03</h2>
      <ol>
        <li>Diffusion = noise + denoise; the network learns to predict noise (or velocity).</li>
        <li>DDIM showed sampling is solving an ODE; this is why fewer steps work.</li>
        <li>Latent diffusion runs the whole game in a compressed VAE space.</li>
        <li>CFG gives the prompt its bite. Modern variants (Rescale, PAG, SEG) refine it.</li>
        <li>Samplers are ODE solvers; schedulers control step spacing. Pair them by model family.</li>
        <li>Flow matching reframes diffusion; FLUX/SD3/Wan are flow-matching models.</li>
        <li>Rectified flow / shortcut models are the current frontier of "few-step quality".</li>
      </ol>

      <NoteBlock title="What's next">
        Subject 04 codifies model formats and quantization — the practical complement to all this
        theory. After that we go back to the canvas and start building Phase 2 image workflows
        (Subject 05 onward), each grounded in what you now know about samplers, schedulers, and
        flow matching.
      </NoteBlock>
    </>
  )
}

import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S4KSampler() {
  return (
    <>
      <p>
        KSampler is the heart of every ComfyUI workflow. Take MODEL, positive CONDITIONING, negative
        CONDITIONING, and a noisy LATENT — produce a denoised LATENT. Everything we'll learn in this
        curriculum is, at the end of the day, a way to feed KSampler better inputs.
      </p>

      <DefinitionBlock title="KSampler">
        Iteratively denoises a LATENT for <code>steps</code> iterations using the chosen sampler and
        scheduler, guided by classifier-free guidance scale <code>cfg</code>. Optionally applies a
        partial denoise (for img2img / refinement).
      </DefinitionBlock>

      <h2>Add the node</h2>
      <p>Double-click → search "KSampler" → pick <strong>KSampler</strong>. Wire it up:</p>
      <ul>
        <li>CheckpointLoader's <strong>MODEL</strong> → KSampler's <strong>model</strong></li>
        <li>"Positive Prompt"'s <strong>CONDITIONING</strong> → KSampler's <strong>positive</strong></li>
        <li>"Negative Prompt"'s <strong>CONDITIONING</strong> → KSampler's <strong>negative</strong></li>
        <li>EmptyLatentImage's <strong>LATENT</strong> → KSampler's <strong>latent_image</strong></li>
      </ul>

      <h2>Settings for our first run</h2>
      <table>
        <thead><tr><th>Widget</th><th>Value</th><th>Why</th></tr></thead>
        <tbody>
          <tr><td><code>seed</code></td><td>any</td><td>Determinism — same seed + same graph = same image</td></tr>
          <tr><td><code>control_after_generate</code></td><td>randomize</td><td>Fresh seed each queue (for now)</td></tr>
          <tr><td><code>steps</code></td><td>20</td><td>SD1.5 sweet spot — 20 with good sampler is plenty</td></tr>
          <tr><td><code>cfg</code></td><td>7.0</td><td>SD1.5 default; subject 05 explains why CFG &gt; 1</td></tr>
          <tr><td><code>sampler_name</code></td><td><code>dpmpp_2m</code></td><td>Fast, high quality on SD1.5</td></tr>
          <tr><td><code>scheduler</code></td><td><code>karras</code></td><td>Pairs with dpm++ samplers</td></tr>
          <tr><td><code>denoise</code></td><td>1.0</td><td>Full denoise — we start from pure noise</td></tr>
        </tbody>
      </table>

      <h2>What "denoise" means at 1.0 vs 0.5</h2>
      <p>
        <code>denoise = 1.0</code> means start from full noise and run all <code>steps</code>{' '}
        iterations. For img2img you'd start from an encoded image plus a partial noise injection;{' '}
        <code>denoise = 0.5</code> would inject half-strength noise and run half the steps. We'll use
        partial denoise extensively in chapter 6 (saving/loading) and Subject 13 (inpainting).
      </p>

      <h2>Sampler &amp; scheduler — a one-paragraph cheat sheet</h2>
      <p>
        For SD1.5: <code>dpmpp_2m</code> + <code>karras</code> at 20 steps is a defensible default
        and our pick for this workflow. <code>euler_ancestral</code> + <code>normal</code> at 25 steps
        is a stylistic alternative — slightly more "creative" outputs. Subject 03 / Chapter 5 covers
        the math; Subject 15 covers the advanced options.
      </p>

      <NoteBlock title="When KSampler runs">
        On your first Queue Prompt the model loads (~2 GB into MPS), CLIP encodes both prompts, the
        sampler runs 20 iterations on a 64×64×4 latent. On M5 Pro this whole pipeline takes 4–8
        seconds for SD1.5 at 512×512.
      </NoteBlock>
    </>
  )
}

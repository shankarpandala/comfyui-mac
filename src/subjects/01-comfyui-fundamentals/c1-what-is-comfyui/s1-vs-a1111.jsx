import NoteBlock from '../../../components/content/NoteBlock.jsx'
import MacGotchaBlock from '../../../components/content/MacGotchaBlock.jsx'

export default function S1VsA1111() {
  return (
    <>
      <p>
        Three tools dominate local Stable Diffusion on macOS: <strong>Automatic1111</strong> (a.k.a.
        A1111 / stable-diffusion-webui), <strong>Forge</strong> (a performance-tuned A1111 fork), and{' '}
        <strong>ComfyUI</strong>. They produce the same kinds of images, but they expose the pipeline
        very differently — and that difference is the whole reason we are studying ComfyUI.
      </p>

      <h2>The short answer</h2>
      <ul>
        <li><strong>A1111</strong> hides the pipeline behind tabs and form fields. Quickest to start, hardest to extend.</li>
        <li><strong>Forge</strong> is A1111 with the engine swapped for a faster scheduler/memory manager. Same UI shape.</li>
        <li><strong>ComfyUI</strong> exposes the pipeline as a node graph. Steeper learning curve, then unbounded.</li>
      </ul>

      <h2>Side-by-side</h2>
      <table>
        <thead>
          <tr>
            <th>Dimension</th>
            <th>A1111 / Forge</th>
            <th>ComfyUI</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Mental model</td><td>Form &amp; tabs</td><td>Directed graph of tensors</td></tr>
          <tr><td>Time to first image</td><td>5 minutes</td><td>15 minutes</td></tr>
          <tr><td>Reproducibility</td><td>UI state + seed</td><td>The graph IS the recipe (a JSON)</td></tr>
          <tr><td>Branching / multi-step</td><td>Awkward (scripts, extensions)</td><td>Native</td></tr>
          <tr><td>Custom nodes</td><td>Extensions (heavier)</td><td>Drop-in Python files</td></tr>
          <tr><td>Memory control on Mac</td><td>Implicit</td><td>Explicit per-node</td></tr>
          <tr><td>Cutting-edge models</td><td>Lags by weeks</td><td>Often day-one</td></tr>
        </tbody>
      </table>

      <h2>Why ComfyUI usually wins on Mac</h2>
      <p>
        On a 24 GB Mac, two ComfyUI advantages matter most. First, the graph lets you compose memory:
        you can decide which nodes load, when, and where (CPU vs GPU), instead of trusting an opaque
        runtime. Second, new models — especially the bleeding-edge ones we will use later (FLUX,
        HunyuanVideo, Wan, LTX) — usually ship with ComfyUI nodes first; A1111/Forge support arrives later or never.
      </p>

      <MacGotchaBlock title="A1111 / Forge plugin gaps">
        A non-trivial number of A1111 / Forge extensions assume CUDA kernels (xformers, certain
        attention implementations, fp8 weights). On Apple Silicon they silently fall back to slower
        paths or fail outright. ComfyUI's node ecosystem has the same hazard but at least each node is
        an isolated unit you can swap.
      </MacGotchaBlock>

      <h2>When A1111 is still fine</h2>
      <ul>
        <li>You only generate single images with a fixed pipeline (prompt → SDXL → save).</li>
        <li>You do not need cross-modal flows (image → video, audio → talking head).</li>
        <li>You want a photo-app feel, not a code-app feel.</li>
      </ul>

      <NoteBlock title="Forge on Mac">
        Forge runs on Mac but its memory advantages are largely tuned for NVIDIA. On Apple Silicon
        you'll see modest gains over A1111 and almost always lose to a well-built ComfyUI graph for
        anything beyond plain t2i.
      </NoteBlock>

      <h2>What we are committing to</h2>
      <p>
        For the rest of this curriculum, ComfyUI is our single execution layer. Everything we build —
        from your first SDXL image to the HeyGen-class agentic capstone — lives inside one ComfyUI
        installation, one models folder, one set of custom nodes. That uniformity is the payoff.
      </p>
    </>
  )
}

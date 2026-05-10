import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1MultiPass() {
  return (
    <>
      <p>
        Iterative SD upscale runs multiple sampler passes at increasing resolution. Each pass adds
        detail. A simpler, slower alternative to tiled diffusion when you don't want to manage tiles.
      </p>

      <h2>The pattern</h2>
      <pre>{`Pass 1: 1024×1024 generation (native)
Pass 2: ESRGAN to 2048 → SDXL refine at 2048, denoise 0.4, 15 steps
Pass 3: ESRGAN to 4096 → SDXL refine at 4096, denoise 0.3, 15 steps`}</pre>

      <h2>Why it works</h2>
      <ul>
        <li>Pass 2's denoise 0.4 fixes ESRGAN's over-sharpened or smoothed details.</li>
        <li>Pass 3 adds another round of detail.</li>
        <li>Each pass benefits from the previous pass's coherent base.</li>
      </ul>

      <h2>Memory considerations</h2>
      <ul>
        <li>Pass 1 at 1024 → ~10 GB peak.</li>
        <li>Pass 2 at 2048 → ~16 GB peak (activations grow with resolution).</li>
        <li>Pass 3 at 4096 → ~25 GB peak. Won't fit on 24 GB without tiled VAE.</li>
      </ul>
      <p>
        For Mac, this approach works up to 2048. For 4096, switch to tiled diffusion or pure ESRGAN.
      </p>

      <h2>Custom node</h2>
      <p>
        <code>SDUltimateUpscale</code> wraps this multi-pass pattern with auto-tiling. Recommended
        if you want a one-node setup instead of wiring three KSampler chains.
      </p>

      <h2>The simpler "just ESRGAN" alternative</h2>
      <p>For most cases, plain ESRGAN x4 produces good-enough output in 5 seconds. Iterative refinement is for "quality matters more than speed" scenarios.</p>

      <NoteBlock title="The Mac upscale decision tree">
        2K output: ESRGAN. 2K hero: ESRGAN + iterative refine pass at 2048. 4K output: ESRGAN + maybe tiled
        diffusion. 4K hero: SUPIR. 8K: tiled diffusion. Match the tool to the goal.
      </NoteBlock>
    </>
  )
}

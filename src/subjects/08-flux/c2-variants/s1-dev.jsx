import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Dev() {
  return (
    <>
      <p>
        FLUX Dev is the un-distilled, full-quality variant. 20–50 sampler steps, classical CFG-style
        guidance via the <code>guidance</code> scalar input. Highest quality FLUX you can run locally.
      </p>

      <h2>License</h2>
      <p>
        FLUX Dev is non-commercial. Black Forest Labs's Dev license restricts you to research,
        personal use, and certain non-commercial creative work. For commercial output, use FLUX
        Schnell (Apache 2.0) or pay for FLUX Pro API.
      </p>

      <h2>Recommended settings on Mac</h2>
      <ul>
        <li><strong>UNet</strong>: <code>flux1-dev-Q5_K_S.gguf</code> via <code>UnetLoaderGGUF</code></li>
        <li><strong>CLIP-L + T5</strong>: <code>DualCLIPLoaderGGUF</code> with <code>type=flux</code>, T5 as Q5_K_M GGUF</li>
        <li><strong>VAE</strong>: <code>ae.safetensors</code> bf16</li>
        <li><strong>steps</strong>: 20</li>
        <li><strong>guidance</strong>: 3.5 (FLUX-specific scalar; not classical CFG)</li>
        <li><strong>cfg</strong>: 1.0 (always 1 for FLUX — the guidance scalar replaces CFG)</li>
        <li><strong>sampler</strong>: <code>euler</code></li>
        <li><strong>scheduler</strong>: <code>simple</code></li>
      </ul>

      <h2>Why guidance, not CFG</h2>
      <p>
        Classical CFG runs the UNet twice per step (positive + negative). FLUX bakes the guidance
        signal in: a single forward pass with the guidance scalar as an input feature. Result: 1×
        compute per step instead of 2×. That's also why FLUX Dev at 20 steps is comparable in
        wall-time to SDXL at 25 steps despite being 2× larger.
      </p>

      <h2>Wall time on M5 Pro</h2>
      <p>1024×1024, GGUF Q5_K_S, 20 steps: ~45 seconds per image. Q4_K_S is ~36 seconds.</p>

      <NoteBlock title="The FLUX Dev sweet spot">
        20 steps + guidance 3.5 + GGUF Q5_K_S is the recommended Mac default. Fewer steps loses
        quality; more rarely helps. Guidance 5+ over-cooks; below 3 underdetermines outputs.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Schnell() {
  return (
    <>
      <p>
        FLUX Schnell ("fast" in German) is the 4-step distilled variant. Same architecture, same
        12 B params, but trained with adversarial distillation + rectified flow so 4 Euler steps
        produce nearly Dev-quality output. License is Apache 2.0 — commercial use OK.
      </p>

      <h2>Recommended settings on Mac</h2>
      <ul>
        <li><strong>UNet</strong>: <code>flux1-schnell-Q5_K_S.gguf</code></li>
        <li><strong>CLIP-L + T5</strong>: same as Dev — DualCLIPLoaderGGUF</li>
        <li><strong>VAE</strong>: <code>ae.safetensors</code></li>
        <li><strong>steps</strong>: 4</li>
        <li><strong>guidance</strong>: 0 (Schnell is distilled to ignore guidance)</li>
        <li><strong>cfg</strong>: 1.0</li>
        <li><strong>sampler</strong>: <code>euler</code></li>
        <li><strong>scheduler</strong>: <code>sgm_uniform</code> or <code>simple</code></li>
      </ul>

      <h2>Wall time on M5 Pro</h2>
      <p>1024×1024, GGUF Q5_K_S, 4 steps: ~8 seconds per image. About 5× faster than Dev.</p>

      <h2>Quality vs Dev</h2>
      <ul>
        <li>~90% of Dev quality on most prompts.</li>
        <li>Slightly weaker on fine text and small details.</li>
        <li>Composition and anatomy on par with Dev.</li>
        <li>License is the bigger differentiator — commercial OK.</li>
      </ul>

      <h2>The two-step pattern (Mac iteration loop)</h2>
      <ol>
        <li>Iterate prompts in Schnell at 4 steps (~8 s each).</li>
        <li>Once happy, swap to Dev at 20 steps (~45 s) for the final hero render.</li>
      </ol>
      <p>
        Both variants share the same workflow except UNet name and steps/guidance. Build one master
        FLUX workflow with <code>SaveImage</code> at the end; clone it for Schnell vs Dev.
      </p>

      <NoteBlock title="Don't confuse with FLUX Pro">
        FLUX Pro is API-only, closed weights. Schnell is the open commercial FLUX. If a recipe
        references "FLUX Pro" outputs, you can usually approximate them with Dev locally.
      </NoteBlock>
    </>
  )
}

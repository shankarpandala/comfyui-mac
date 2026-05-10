import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3TextConditioning() {
  return (
    <>
      <p>
        FLUX uses two text encoders: T5-XXL (the heavy lifter) and CLIP-L (a small auxiliary).
        Together they provide both detailed natural-language understanding and a quick "concept
        anchor."
      </p>

      <h2>T5's role</h2>
      <ul>
        <li>~5 B params; encodes prompts up to 256 or 512 tokens.</li>
        <li>Trained on natural language; understands sentences, clauses, modifiers.</li>
        <li>Output: per-token embeddings fed to FLUX's joint attention.</li>
      </ul>

      <h2>CLIP-L's role</h2>
      <ul>
        <li>~250 MB; small.</li>
        <li>Provides a single pooled embedding that conditions every block (modulation).</li>
        <li>Carries the "vibe" — overall style, mood, subject category.</li>
      </ul>

      <h2>Why both</h2>
      <p>
        T5 alone would work but lacks CLIP's compact "global" embedding. The combination gives
        FLUX both detailed prompt-following (T5) and consistent style coherence across blocks
        (CLIP-L pooled). The two encoders have different prompt sensitivities — most workflows
        feed both the same prompt and rely on FLUX to merge them.
      </p>

      <h2>Token budgets</h2>
      <ul>
        <li>T5: 256 tokens (FLUX default) — long descriptive prompts work.</li>
        <li>CLIP-L: 77 tokens — same as SDXL, gets truncated for long prompts.</li>
      </ul>

      <h2>The DualCLIPLoader pattern in ComfyUI</h2>
      <p>
        FLUX needs both encoders loaded together. <code>DualCLIPLoader</code> (or{' '}
        <code>DualCLIPLoaderGGUF</code> for the Mac GGUF T5 path) takes both filenames and a{' '}
        <code>type=flux</code> selector. Outputs a single CLIP that wraps both internally.
      </p>

      <NoteBlock title="The Mac dual-loader recipe">
        Always use <code>DualCLIPLoaderGGUF</code> on Mac with one .safetensors (CLIP-L) and one
        .gguf (T5). Saves ~6 GB compared to fp16 T5. Subject 04 / Chapter 4 has the click-by-click
        walkthrough.
      </NoteBlock>
    </>
  )
}

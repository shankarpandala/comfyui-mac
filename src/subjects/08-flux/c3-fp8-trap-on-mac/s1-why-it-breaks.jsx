import MacGotchaBlock from '../../../components/content/MacGotchaBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1WhyItBreaks() {
  return (
    <>
      <p>
        99% of FLUX tutorials and community workflows use fp8 weights because that's what fits on
        an NVIDIA 24 GB card. On Mac, those workflows fail at the load step with a cryptic error.
        This chapter is the survival guide.
      </p>

      <h2>The error you'll see</h2>
      <pre>{`RuntimeError: MPS backend doesn't support float8_e4m3fn dtype.`}</pre>
      <p>Or, with PYTORCH_ENABLE_MPS_FALLBACK=1:</p>
      <pre>{`<silent CPU fallback — sampler runs at 1/100th speed for hours>`}</pre>

      <h2>The files that trigger it</h2>
      <ul>
        <li><code>flux1-dev-fp8.safetensors</code> — the main one most tutorials reference.</li>
        <li><code>flux1-schnell-fp8.safetensors</code></li>
        <li><code>t5xxl_fp8_e4m3fn.safetensors</code> — the T5 variant.</li>
        <li>Any file with <code>fp8</code> in the name.</li>
      </ul>

      <MacGotchaBlock title="Read filenames before downloading">
        Whenever you save a community FLUX workflow JSON, scan the loader nodes' filenames for
        "fp8". If present, replace before downloading anything. The next section is the substitution
        recipe.
      </MacGotchaBlock>

      <h2>Why the error is unfixable on Apple Silicon</h2>
      <p>
        We covered this in Subject 02 / Chapter 3: fp8 e4m3fn requires hardware multiply-accumulate
        units that exist on Hopper / Ada NVIDIA GPUs and don't exist on Apple's GPU. PyTorch's MPS
        backend can't allocate fp8 tensors because Metal Shading Language has no fp8 type. There's
        no patch coming; the constraint is silicon-level.
      </p>

      <h2>The misleading "works on Mac" promises</h2>
      <p>
        Some tutorials claim FLUX fp8 "works on Mac with [special launch flag X]". They're wrong —
        the flag either errors immediately or causes silent CPU fallback. Don't waste time chasing
        these promises. The GGUF path is the actual answer.
      </p>

      <NoteBlock title="The mental shift">
        When you see "FLUX fp8" in a workflow → mentally translate to "FLUX GGUF Q5_K_S on Mac".
        Same speed-class result, different file. Internalize this and most FLUX tutorials become
        translatable.
      </NoteBlock>
    </>
  )
}

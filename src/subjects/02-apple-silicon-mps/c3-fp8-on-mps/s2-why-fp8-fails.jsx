import MacGotchaBlock from '../../../components/content/MacGotchaBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2WhyFp8Fails() {
  return (
    <>
      <p>
        Now we get specific: what exactly happens when you load an fp8 model on Mac, what the error
        looks like, and why the answer cannot be "patch PyTorch to support fp8 on MPS." The
        constraint is hardware-level.
      </p>

      <h2>The two fp8 formats</h2>
      <ul>
        <li><strong>e4m3fn</strong> — 4 exponent bits, 3 mantissa bits, "fn" = no infinities, no NaN. Used for activations and most weights. The format you'll see on FLUX checkpoints.</li>
        <li><strong>e5m2</strong> — 5 exponent bits, 2 mantissa bits. Wider range, less precision. Used for gradients in fp8 training.</li>
      </ul>

      <h2>Why these formats exist on NVIDIA</h2>
      <p>
        NVIDIA's H100 and RTX 4000-series introduced fp8 hardware: dedicated tensor cores that
        multiply fp8 × fp8 → fp16 accumulator at 2× the throughput of fp16 × fp16 → fp16. For
        large transformer training, this is a real win. For inference, fp8 cuts model size in half
        with quality close to fp16. Both win with one caveat: <em>the silicon must implement it</em>.
      </p>

      <h2>What Apple Silicon's GPU implements</h2>
      <p>
        The M-series GPU's compute units have native fp32, fp16, bf16, and int8 paths. There is no
        fp8 multiply-accumulate hardware. Even if PyTorch wanted to allocate an fp8 tensor and run
        kernels on it, there's no kernel to run — Metal Shading Language has no fp8 type.
      </p>

      <h2>What you'll see when you try</h2>
      <p>Loading a checkpoint advertised as <em>FLUX Dev fp8_e4m3fn</em> with the standard <code>CheckpointLoaderSimple</code>:</p>
      <pre>{`RuntimeError: MPS backend doesn't support float8_e4m3fn dtype.`}</pre>
      <p>Or — depending on PyTorch version — a more cryptic version:</p>
      <pre>{`NotImplementedError: Could not run 'aten::empty.memory_format'
with arguments from the 'MPS' backend. ... 'aten::empty.memory_format'
is only available for these backends: [CPU, Meta, ...]`}</pre>
      <p>Or worst of all, with <code>PYTORCH_ENABLE_MPS_FALLBACK=1</code>:</p>
      <pre>{`<silently runs at 1/100th speed for hours, falling back to CPU on every fp8 op>`}</pre>

      <MacGotchaBlock title="Why this trips so many Mac users">
        Most ComfyUI tutorials on YouTube/Reddit/Discord are made on NVIDIA. They post FLUX workflows
        in fp8 because that's what fits in 24 GB on a 4090. Those workflows look harmless — same
        nodes, same wires — but the checkpoint they reference is fp8. On Mac, that's a wall.
      </MacGotchaBlock>

      <h2>The three things you must NOT try</h2>
      <ol>
        <li><strong>Don't "force" fp8 with <code>--fp8_e4m3fn-unet</code> on Mac.</strong> ComfyUI has these flags. They're ignored or break on MPS.</li>
        <li><strong>Don't install a "patched" PyTorch that claims fp8 on MPS.</strong> No such patch can produce correct math without hardware support; you'll get fp16 silently or wrong values.</li>
        <li><strong>Don't run the fp8 model through CPU fallback.</strong> The fallback path will technically execute (CPU has emulated fp8), but a single 50-step FLUX run takes hours.</li>
      </ol>

      <h2>The path that works (preview)</h2>
      <p>The next section is the substitution table. The two viable Mac paths are:</p>
      <ol>
        <li><strong>Use an fp16 / bf16 version of the model</strong> — usually larger on disk and in memory, but works at native speed. Fits if memory permits.</li>
        <li><strong>Use a GGUF Q4–Q5 version of the model</strong> — same on-disk size as fp8, ~same memory footprint, dequantized to fp16/bf16 at compute time. The pragmatic Mac choice for big models.</li>
      </ol>

      <NoteBlock title="What about Apple's own fp8?">
        Apple's MLX framework (chapter 7) has experimental fp8 support for some quantized LLM
        inference paths. The MLX-fp8 implementation appears to use bit-packed int8 storage with on-the-fly
        conversion — so it's clever, but it's MLX-only. It does not help PyTorch / ComfyUI.
      </NoteBlock>
    </>
  )
}

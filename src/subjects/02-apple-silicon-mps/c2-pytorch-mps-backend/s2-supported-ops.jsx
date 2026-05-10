import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2SupportedOps() {
  return (
    <>
      <p>
        PyTorch's MPS backend implements most of <code>torch.nn</code> and most tensor ops. The gaps
        are narrow but specific, and they bite diffusion workloads in predictable places. This
        section is the map.
      </p>

      <h2>Well-supported, fast on MPS</h2>
      <ul>
        <li>Linear layers, all matrix multiplies (the bulk of diffusion compute).</li>
        <li>2D and 3D convolutions (UNet residual blocks).</li>
        <li>LayerNorm, GroupNorm, RMSNorm, BatchNorm.</li>
        <li>SiLU / GELU / Swish / ReLU activations.</li>
        <li>Softmax, log-softmax.</li>
        <li>Dropout, embedding lookup.</li>
        <li>Element-wise arithmetic, indexing, gather/scatter, masking.</li>
        <li><strong>Scaled dot-product attention</strong> — the SDPA primitive that replaces FlashAttention/xformers on Mac. Performance is decent.</li>
        <li>FFTs (used by some upscalers), interpolation, image resize.</li>
      </ul>

      <h2>Supported, but slower than CUDA equivalent</h2>
      <ul>
        <li>Some convolution shapes where Apple's MPS picks a less-optimal kernel.</li>
        <li>Reductions over very large tensors with awkward shapes.</li>
        <li>Cumulative ops (<code>cumsum</code>, <code>cumprod</code>) that fall through MPS Graph less efficiently.</li>
      </ul>

      <h2>Not yet implemented (CPU fallback or error)</h2>
      <p>This list shrinks every PyTorch release. As of PyTorch 2.5+, the still-missing items most likely to bite a diffusion workflow:</p>
      <ul>
        <li><strong>fp8 (e4m3fn, e5m2) tensors</strong> — not allocatable at all. Chapter 3 is about exactly this.</li>
        <li>A few older custom CUDA kernels that custom nodes import unconditionally (xformers, Triton, sageattention).</li>
        <li>Some uncommon spectral ops in seldom-used models.</li>
      </ul>

      <h2>How to know when something is unsupported</h2>
      <p>You'll see one of three signals:</p>
      <ol>
        <li><strong>Loud error</strong> — <code>NotImplementedError: The operator 'aten::&lt;X&gt;' is not currently implemented for the MPS device.</code> Easy to spot; we discuss the fix in section 3.</li>
        <li><strong>Wrong dtype error</strong> — fp8 attempts hit <code>RuntimeError: MPS backend doesn't support &lt;dtype&gt;.</code></li>
        <li><strong>Silent CPU fallback</strong> — sampler runs but an order of magnitude slower than expected. Symptoms: 10× longer step times, low GPU utilization in asitop. Diagnose with the techniques in chapter 6.</li>
      </ol>

      <h2>Coverage tracking</h2>
      <p>Apple maintains a public op-coverage list. Search "PyTorch MPS supported operators" and you'll find the official issue tracker. It updates per release.</p>

      <NoteBlock title="The pragmatic stance">
        For this curriculum's purposes, assume MPS supports everything <em>except</em> fp8 and any
        op that explicitly imports a CUDA-only library. When something fails, the failure message is
        usually loud enough to point you at the workaround.
      </NoteBlock>
    </>
  )
}

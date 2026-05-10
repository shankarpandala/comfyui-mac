import MacGotchaBlock from '../../../components/content/MacGotchaBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1CudaOnlyKernels() {
  return (
    <>
      <p>
        Attention is the per-step bottleneck of every diffusion model. Several specialized libraries
        accelerate it on NVIDIA — and most of them are CUDA-exclusive. This section names them so you
        recognize the wall when you hit it.
      </p>

      <h2>The CUDA-only attention libraries</h2>

      <h3>xformers</h3>
      <p>
        Meta's memory-efficient attention library. Predates Flash-Attention. Provides <code>memory_efficient_attention</code>{' '}
        which became the default-fast path for Stable Diffusion in 2022–2023.
      </p>
      <p>Mac status: <strong>not supported.</strong> The package will pip-install (somewhat — the wheel build sometimes fails on arm64) but every kernel inside is CUDA. Imports succeed, calls fail.</p>

      <h3>Flash-Attention 2/3</h3>
      <p>
        Tri Dao's algorithmic improvement: tiling the attention matrix to keep it in SRAM, never
        materializing the full QK^T. 2–4× faster than vanilla.
      </p>
      <p>Mac status: <strong>not supported.</strong> CUDA only. There's no Metal port.</p>

      <h3>Sage-Attention</h3>
      <p>
        Newer (2024). Quantized attention with int8/fp8 paths, fused scaling. Significant speedup on
        Hopper/Ada. Often referenced in modern community workflows.
      </p>
      <p>Mac status: <strong>not supported.</strong> CUDA / fp8 hardware required.</p>

      <h3>FlexAttention</h3>
      <p>PyTorch native, programmable attention. Compiles via Triton (CUDA).</p>
      <p>Mac status: <strong>not supported</strong> on MPS (Triton has no Mac backend).</p>

      <h2>What this means for community workflows</h2>
      <MacGotchaBlock title="--use-xformers and --use-sage-attention silently break">
        ComfyUI's launch flags <code>--use-xformers</code>, <code>--use-sage-attention</code>, and{' '}
        <code>--use-flash-attention</code> exist for NVIDIA users. On Mac they either error at startup
        ("module not found") or silently fall back to a slower path. Don't pass them.
      </MacGotchaBlock>

      <h2>Custom nodes that hard-import a CUDA kernel</h2>
      <p>
        Some custom-node packages naively <code>import xformers</code> at module top level. When the
        import fails on Mac, ComfyUI logs a load error for the entire package and the nodes appear as
        red "missing" placeholders.
      </p>
      <p>Ways this manifests:</p>
      <ul>
        <li>The node loaded fine yesterday (different package version), now fails — usually a maintainer added a CUDA dependency.</li>
        <li>The node fails on Mac but works on the author's NVIDIA machine — not malice, just untested.</li>
      </ul>

      <NoteBlock title="The Mac fix">
        Open the failing custom-node's <code>__init__.py</code>. Find the <code>import xformers</code>{' '}
        (or sageattention, or flash_attn). Wrap it in a try/except, set the unavailable flag, fall
        back to PyTorch SDPA. Submit the patch upstream — the maintainer will usually accept it.
      </NoteBlock>

      <p>The next section covers what does work on Mac: PyTorch's own scaled dot-product attention.</p>
    </>
  )
}

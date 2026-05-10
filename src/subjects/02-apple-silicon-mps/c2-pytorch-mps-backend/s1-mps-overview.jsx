import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import CommandBlock from '../../../components/content/CommandBlock.jsx'

export default function S1MpsOverview() {
  return (
    <>
      <p>
        MPS — Metal Performance Shaders — is PyTorch's backend for Apple GPUs. It is the abstraction
        layer between <code>torch.Tensor</code> and the Metal compute kernels Apple exposes. When
        you write <code>x.to('mps')</code>, you are asking PyTorch to allocate that tensor on the
        Apple GPU and dispatch all operations on it through MPS.
      </p>

      <DefinitionBlock title="Three MPS layers">
        <ul>
          <li><strong>Apple's MPS framework</strong> — Metal-Performance-Shaders, a high-level Apple library of GPU kernels for image / linalg / NN ops. Exists since 2015.</li>
          <li><strong>Apple's MPS Graph framework</strong> — a graph-based compiler that fuses MPS kernels. Newer; faster for batched workloads.</li>
          <li><strong>PyTorch's <code>mps</code> backend</strong> — the bridge. Translates PyTorch ops into MPS / MPS Graph calls. Maintained by Apple + Meta. The thing you actually interact with.</li>
        </ul>
      </DefinitionBlock>

      <h2>Device names</h2>
      <p>
        In PyTorch you write <code>device='mps'</code> or <code>device='mps:0'</code>. There is no
        multi-GPU on Mac; the index is always 0. Tensors created without a device live on{' '}
        <code>cpu</code> by default, and you must explicitly move them with <code>.to('mps')</code> or{' '}
        <code>.cuda()</code>... wait, not <code>.cuda()</code>. Always <code>.to('mps')</code>.
      </p>

      <h2>What makes MPS different from CUDA</h2>
      <ul>
        <li><strong>Unified memory.</strong> Already covered. <code>tensor.to('cpu')</code> doesn't copy bytes; only marks ownership. CUDA would DMA over PCIe.</li>
        <li><strong>Async by default, but fewer streams.</strong> MPS uses one default stream per process. PyTorch's <code>torch.cuda.synchronize()</code> equivalent on MPS is <code>torch.mps.synchronize()</code>.</li>
        <li><strong>Op coverage gap.</strong> Not every PyTorch op has an MPS implementation. Coverage is &gt; 95% for common workloads but 100%-coverage takes the CPU fallback we'll cover in section 3.</li>
        <li><strong>No CUDA libraries.</strong> Anything that depends on cuDNN, cuBLAS, NCCL, NVRTC, Triton — does not exist on Mac. Custom kernels written in Triton silently break.</li>
      </ul>

      <h2>The PyTorch versions that matter</h2>
      <p>
        MPS quality has improved dramatically since PyTorch 2.0. We require <strong>PyTorch ≥ 2.5</strong>{' '}
        for this curriculum because:
      </p>
      <ul>
        <li>Several SD/SDXL ops were buggy on 2.0–2.2 (incorrect outputs vs CUDA).</li>
        <li>2.3 added bf16 support on MPS — which matters in chapter 3.</li>
        <li>2.4+ improved memory allocation behavior under pressure.</li>
        <li>2.5+ added native support for several diffusion-relevant ops that used to fall back.</li>
      </ul>
      <CommandBlock command={`python -c "import torch; print(torch.__version__)"`} />
      <p>If you see anything below 2.5, upgrade.</p>

      <h2>Smoke test from chapter 2 of Subject 01</h2>
      <CommandBlock
        command={`python -c "import torch; x=torch.randn(2048,2048,device='mps'); print((x@x).device, (x@x).dtype)"`}
        label="Two-step verification"
      />
      <p>You want <code>mps:0 torch.float32</code>. If you see CPU, your install needs work — see Subject 01 / Chapter 2 / Section 3.</p>
    </>
  )
}

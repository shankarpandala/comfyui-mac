import NoteBlock from '../../../components/content/NoteBlock.jsx'
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'

export default function S1M5ProOverview() {
  return (
    <>
      <p>
        To predict what will and won't work in ComfyUI on a MacBook Pro M5 Pro, you need a small but
        accurate mental model of the chip itself. This section is the model: three compute engines,
        one memory pool, one architectural fact (no fp8) that drives most of this curriculum's
        Mac-specific advice.
      </p>

      <h2>The three compute engines</h2>
      <DefinitionBlock title="M5 Pro compute resources">
        <ul>
          <li><strong>CPU</strong> — performance cores + efficiency cores. Runs Python, controls the graph, computes anything PyTorch falls back from MPS for.</li>
          <li><strong>GPU</strong> — Apple-designed, runs Metal shaders. PyTorch's MPS backend targets these cores. This is where 95% of diffusion compute lands.</li>
          <li><strong>Neural Engine (ANE)</strong> — fixed-function NN accelerator. Optimized for int8/fp16 matmuls in CoreML graphs. Largely untouchable from PyTorch.</li>
        </ul>
      </DefinitionBlock>

      <p>
        For ComfyUI, only the GPU matters in practice. The ANE accepts Apple's CoreML graphs but does
        not accept arbitrary PyTorch tensors. We touch ANE-via-MLX in chapter 7; throughout the rest
        of this curriculum, "Mac GPU" = the Metal-programmable Apple GPU cores.
      </p>

      <h2>Unified memory</h2>
      <p>
        Unlike NVIDIA, the M5 Pro has <strong>one</strong> physical memory pool shared by CPU, GPU,
        and ANE — 24 GB on the configuration this curriculum targets. There is no PCIe transfer when
        a tensor moves from <code>cpu</code> to <code>mps</code>; the data stays put, only the
        ownership pointer changes. Two consequences:
      </p>
      <ol>
        <li><strong>CPU↔GPU transfer is essentially free.</strong> ComfyUI's <code>--cpu-vae</code> trick exploits this — keeping the VAE on CPU costs almost nothing because there's no copy.</li>
        <li><strong>"VRAM" includes everything else running.</strong> Safari, Slack, Xcode, the OS, your IDE — they all share the 24 GB. Realistic working budget for ComfyUI is more like 16–18 GB.</li>
      </ol>

      <h2>Memory bandwidth on M5 Pro</h2>
      <p>
        M5 Pro's unified memory bandwidth is in the 200–300 GB/s range (depending on exact SKU
        binning). For comparison: a desktop RTX 4090 has ~1 TB/s VRAM bandwidth. This is the single
        biggest reason ComfyUI on Mac is slower than on NVIDIA per-step — the diffusion UNet is
        bandwidth-bound, and Apple has 3× less of it.
      </p>
      <p>
        The flip side: 24 GB of unified memory is plenty to fit models that won't fit on a 16 GB
        4090 Ti. We trade per-step speed for the ability to hold larger models / videos / batches.
      </p>

      <h2>Compute throughput</h2>
      <p>
        For dense fp16 matmuls — the dominant operation in diffusion — M5 Pro lands somewhere around
        a desktop RTX 3060 in raw FLOPs. Step-time numbers in chapter 9 of this subject pin this
        down per model.
      </p>

      <h2>The dtype landscape (preview)</h2>
      <p>
        The Apple GPU supports fp32, fp16, bf16, and int8 well. It does <strong>not</strong> support
        the e4m3fn / e5m2 fp8 formats that NVIDIA H100/RTX 4090 introduced. PyTorch's MPS backend
        cannot allocate fp8 tensors at all. This is the single fact that drives the most pain in
        chapters 3 and 4.
      </p>

      <NoteBlock title="Why Apple skipped fp8">
        Apple's ANE was designed around int8, and the GPU's float pipeline was tuned for fp16 / bf16.
        fp8 is a relatively recent invention (Hopper/Ada-era) optimized for transformer training on
        NVIDIA. There's no fundamental reason fp8 couldn't ship on a future Apple GPU; today it
        doesn't, and we plan around that.
      </NoteBlock>

      <h2>Practical takeaways</h2>
      <ul>
        <li><strong>Budget ~16–18 GB</strong> of the 24 GB for ComfyUI. The OS and other apps want the rest.</li>
        <li><strong>Bandwidth, not capacity, is the per-step ceiling</strong> on Mac. Smaller fits in memory; larger doesn't get faster than the bandwidth allows.</li>
        <li><strong>Forget fp8.</strong> Every recipe in this curriculum substitutes fp16 / bf16 / GGUF Q4–Q8 for fp8. Chapter 3 details the swap.</li>
      </ul>
    </>
  )
}

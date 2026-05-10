import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Gguf() {
  return (
    <>
      <p>
        GGUF is the format that turns FLUX, HunyuanVideo, and Wan from "won't fit on Mac" into "fits
        comfortably." Originally designed for LLM inference in <code>llama.cpp</code>, it was
        adapted to diffusion models by the open-source community.
      </p>

      <DefinitionBlock title="GGUF">
        Single-file format containing quantized tensors plus metadata (architecture name, tensor
        layout, quantization scheme per tensor). Designed to be memory-mappable, fast to load, and
        forward-compatible: a GGUF written today should still be readable in five years.
      </DefinitionBlock>

      <h2>What's inside</h2>
      <ol>
        <li>Magic bytes <code>GGUF</code> + version.</li>
        <li>Key-value metadata (architecture, quant config, vocabulary for LLMs).</li>
        <li>Tensor info table — names, shapes, dtypes, offsets.</li>
        <li>Tensor data blob — quantized payloads.</li>
      </ol>

      <h2>Block-quantized storage</h2>
      <p>
        Where safetensors stores raw fp16 / bf16 tensors, GGUF stores them in fixed-size blocks (32
        or 256 elements per block, depending on quant), each block compressed to 4–8 bits with one
        or two scaling factors. At load time, the model is dequantized on the fly to fp16 / bf16
        for compute. The disk and memory footprint stay small; the matmul still happens in 16-bit.
      </p>

      <h2>Why GGUF instead of "just save fp8"</h2>
      <ul>
        <li><strong>Native to non-NVIDIA hardware.</strong> CPU-friendly via SIMD, MPS-friendly via dequant kernels written by the ComfyUI-GGUF authors. fp8 needs Hopper-class hardware.</li>
        <li><strong>Multiple quant levels in one ecosystem.</strong> Q2 to Q8 with predictable memory and quality trade-offs. fp8 is just two formats (e4m3fn, e5m2).</li>
        <li><strong>Per-tensor quantization choice.</strong> A GGUF file can leave critical layers (input embeddings, layer norms) at higher precision while quantizing bulk weights.</li>
        <li><strong>Mature tooling.</strong> Years of llama.cpp invested in efficient Q-format kernels.</li>
      </ul>

      <h2>The diffusion adoption story</h2>
      <p>
        The <code>city96/ComfyUI-GGUF</code> custom-node project (2024) ported llama.cpp's quant
        kernels to ComfyUI's PyTorch backend. UnetLoaderGGUF accepts a <code>.gguf</code> file
        produced by city96's conversion scripts; loading is mmap → quantization-aware dequant
        kernels at compute time.
      </p>

      <h2>The GGUF you'll meet on Mac</h2>
      <ul>
        <li><code>flux1-dev-Q5_K_S.gguf</code> — FLUX Dev at quant level Q5 (~8 GB). Mac default.</li>
        <li><code>hunyuan-video-Q4_K_S.gguf</code> — Hunyuan Video at Q4 (~7 GB).</li>
        <li><code>wan2.1-14b-Q4_K_S.gguf</code> — Wan 14B at Q4.</li>
        <li><code>t5-v1_1-xxl-encoder-Q5_K_M.gguf</code> — T5-XXL text encoder GGUF.</li>
      </ul>

      <NoteBlock title="GGUF != ggml">
        You may see <code>.ggml</code> in older repos. GGML was the predecessor format, replaced
        by GGUF in 2023. They're not interchangeable; pick GGUF.
      </NoteBlock>
    </>
  )
}

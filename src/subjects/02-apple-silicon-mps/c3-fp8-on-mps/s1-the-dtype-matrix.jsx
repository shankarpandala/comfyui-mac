import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1TheDtypeMatrix() {
  return (
    <>
      <p>
        Before we can substitute fp8 with something workable, we need a precise mental map of what
        each dtype is, what it costs, and which backends support it. This is that map.
      </p>

      <h2>The dtypes you'll actually encounter</h2>
      <table>
        <thead>
          <tr>
            <th>Dtype</th>
            <th>Bits</th>
            <th>Range / precision</th>
            <th>Bytes per param</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>fp32</code></td><td>32</td><td>Standard IEEE float; very wide range, ~7 sig digits</td><td>4</td></tr>
          <tr><td><code>fp16</code> (a.k.a. half)</td><td>16</td><td>Narrow range (±65,504), ~3 sig digits</td><td>2</td></tr>
          <tr><td><code>bf16</code> (bfloat16)</td><td>16</td><td>fp32-equivalent range, only ~2 sig digits</td><td>2</td></tr>
          <tr><td><code>fp8 e4m3fn</code></td><td>8</td><td>±448, very limited precision; for inference</td><td>1</td></tr>
          <tr><td><code>fp8 e5m2</code></td><td>8</td><td>Wider range than e4m3fn, even less precision</td><td>1</td></tr>
          <tr><td><code>int8</code></td><td>8</td><td>Integer; needs scale + zero-point in NN use</td><td>1</td></tr>
          <tr><td>GGUF Q8_0</td><td>~9 effective</td><td>int8 + per-32-element scale</td><td>~1.1</td></tr>
          <tr><td>GGUF Q5_K_M</td><td>~5–6 effective</td><td>5-bit + super-block quantization</td><td>~0.7</td></tr>
          <tr><td>GGUF Q4_K_S</td><td>~4–5 effective</td><td>4-bit + super-block</td><td>~0.55</td></tr>
        </tbody>
      </table>

      <h2>Backend support matrix</h2>
      <DefinitionBlock title="What each backend can allocate">
        Below: ✅ supported, ⚠️ supported but slow / via emulation, ❌ not supported.
      </DefinitionBlock>
      <table>
        <thead>
          <tr><th>Dtype</th><th>CUDA (Hopper / Ada)</th><th>CUDA (Ampere)</th><th>MPS (M5 Pro)</th><th>CPU</th></tr>
        </thead>
        <tbody>
          <tr><td><code>fp32</code></td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr>
          <tr><td><code>fp16</code></td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr>
          <tr><td><code>bf16</code></td><td>✅</td><td>✅</td><td>✅ (PyTorch ≥ 2.3)</td><td>✅</td></tr>
          <tr><td><code>fp8 e4m3fn</code></td><td>✅</td><td>⚠️ emulated</td><td><strong>❌</strong></td><td>⚠️</td></tr>
          <tr><td><code>fp8 e5m2</code></td><td>✅</td><td>⚠️ emulated</td><td><strong>❌</strong></td><td>⚠️</td></tr>
          <tr><td><code>int8</code></td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr>
          <tr><td>GGUF (any)</td><td>✅ via llama.cpp / ComfyUI-GGUF</td><td>✅</td><td>✅</td><td>✅</td></tr>
        </tbody>
      </table>

      <h2>The bf16 vs fp16 distinction</h2>
      <p>
        Both are 16-bit floats, but they trade precision for range differently. <code>fp16</code> has
        more mantissa bits, so it represents nearby values more precisely; <code>bf16</code> has more
        exponent bits, so it can represent the same range as fp32. Modern diffusion models (FLUX,
        SD3) train in <code>bf16</code> because attention scores can blow past fp16's range.
        <strong>Loading a bf16-trained model in fp16 can produce NaNs.</strong>
      </p>

      <h2>The fp8 line</h2>
      <p>
        Look at the matrix. fp8 is the <em>only</em> dtype with a hard ❌ for MPS. Nothing else is
        truly missing — bf16 was added in PyTorch 2.3, every other dtype is fully supported. fp8 is
        the wall. If a workflow says "load weights as fp8 e4m3fn", it cannot run unmodified on Mac.
      </p>

      <h2>What "GGUF Q4" really is</h2>
      <p>
        GGUF quantization is a different beast from fp8. It is a <em>compression</em> scheme — model
        weights are stored quantized on disk, but at compute time they are dequantized to fp16/bf16
        for the actual matmul. So GGUF Q4 needs ~½ the memory of fp16 but doesn't accelerate compute
        the way native fp8 would on Hopper. On Mac, GGUF Q4 is the practical equivalent of "what fp8
        would have given you" in the only metric that matters here: model fits in your 24 GB.
      </p>

      <NoteBlock title="GGUF is named after llama.cpp">
        Originally for LLMs in <code>llama.cpp</code>, the GGUF format and its quantization were
        adapted for diffusion models by the <code>city96/ComfyUI-GGUF</code> custom-node project.
        That node is the bridge between Mac users and FLUX / Hunyuan / Wan, and we install it in
        Subject 01 / Chapter 7. We dig into specific quants in Subject 04.
      </NoteBlock>
    </>
  )
}

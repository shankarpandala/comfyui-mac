import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1QuantNaming() {
  return (
    <>
      <p>
        GGUF filenames look like <code>flux1-dev-Q4_K_S.gguf</code>. The cryptic letter-number-letter
        suffix encodes the quantization scheme. Once you can read these, you can pick a model variant
        without trial and error.
      </p>

      <DefinitionBlock title="The naming pattern">
        <code>Q&lt;bits&gt;_&lt;variant&gt;</code>, where:
        <ul>
          <li><strong>bits</strong> — the number of bits per weight in the bulk of the tensor (2, 3, 4, 5, 6, 8).</li>
          <li><strong>variant</strong> — the quantization scheme: <code>0</code>, <code>1</code>, <code>K</code>, <code>K_S</code>, <code>K_M</code>, <code>K_L</code>.</li>
        </ul>
      </DefinitionBlock>

      <h2>The variants explained</h2>

      <h3>Q&lt;bits&gt;_0 — "type 0"</h3>
      <p>
        Original llama.cpp quantization. One scaling factor per 32-element block, plus the bits
        themselves. Simple, fast, decent quality. <code>Q4_0</code>, <code>Q5_0</code>, <code>Q8_0</code> all
        exist. Q8_0 is still common; Q4_0 has been largely replaced by K-variants.
      </p>

      <h3>Q&lt;bits&gt;_1 — "type 1"</h3>
      <p>
        Adds a per-block zero-point in addition to the scale. Slightly better quality than _0 at the
        same bit count, but heavier per-block overhead. Less common today.
      </p>

      <h3>K — "K-quants" (super-block)</h3>
      <p>
        A 256-element super-block contains 16 sub-blocks of 16 elements. Each super-block has fp16
        scales, and each sub-block has its own 6-bit min and 6-bit scale derived from the
        super-block. The result: better quality at the same bit count than _0 / _1.
      </p>
      <p>
        K-quants come in three sizes per bit width:
      </p>
      <ul>
        <li><strong>K_S</strong> ("small") — leaner overhead, smaller file.</li>
        <li><strong>K_M</strong> ("medium") — intermediate. Often the recommended default for LLMs.</li>
        <li><strong>K_L</strong> ("large") — most overhead, highest quality of the K-variants.</li>
      </ul>

      <h2>The size ordering</h2>
      <p>From smallest file to largest, fixed bit count:</p>
      <pre>{`K_S < K_M < K_L`}</pre>
      <p>From smallest to largest at fixed variant:</p>
      <pre>{`Q2 < Q3 < Q4 < Q5 < Q6 < Q8 < bf16/fp16 < fp32`}</pre>

      <h2>The diffusion-recommended subset</h2>
      <p>
        Not every quant level makes sense for diffusion. The community-tested subset:
      </p>
      <table>
        <thead><tr><th>Quant</th><th>Use</th></tr></thead>
        <tbody>
          <tr><td>Q8_0</td><td>"Highest quality GGUF". Use when fp16 doesn't fit but you want minimal degradation.</td></tr>
          <tr><td>Q6_K</td><td>Good balance; harder to find for diffusion (less common upload).</td></tr>
          <tr><td>Q5_K_M</td><td>The slightly-bigger K5 variant. ~5% larger than K_S, marginally better quality.</td></tr>
          <tr><td>Q5_K_S</td><td><strong>Mac default for FLUX / SD3.5 Large.</strong></td></tr>
          <tr><td>Q4_K_M</td><td>Most common LLM quant; for diffusion, Q4_K_S is preferred (smaller, similar quality).</td></tr>
          <tr><td>Q4_K_S</td><td><strong>Mac tight-budget default for HunyuanVideo / Wan 14B.</strong></td></tr>
          <tr><td>Q3_K_M / Q3_K_L</td><td>Quality drop too high for diffusion; LLM-only territory.</td></tr>
          <tr><td>Q2_K</td><td>Avoid for diffusion.</td></tr>
        </tbody>
      </table>

      <h2>Disambiguating filenames</h2>
      <p>Concrete examples you'll see on HuggingFace:</p>
      <ul>
        <li><code>flux1-dev-Q4_K_S.gguf</code> — FLUX Dev, 4-bit K-quant, small variant. ~6.6 GB.</li>
        <li><code>flux1-dev-Q8_0.gguf</code> — FLUX Dev, 8-bit type-0. ~12 GB.</li>
        <li><code>HunyuanVideo-Q4_K_S.gguf</code> — Hunyuan, 4-bit K-quant, small. ~7 GB.</li>
        <li><code>Wan2.1-T2V-14B-Q4_K_S.gguf</code> — Wan 2.1 t2v, 14B params, Q4_K_S. ~7.5 GB.</li>
      </ul>

      <NoteBlock title="When in doubt, K_S">
        The K_S variant at any given bit width is the Mac sweet spot — smallest disk footprint, all
        the K-quant quality benefits, fastest dequant on MPS. Default to it unless a specific recipe
        recommends otherwise.
      </NoteBlock>
    </>
  )
}

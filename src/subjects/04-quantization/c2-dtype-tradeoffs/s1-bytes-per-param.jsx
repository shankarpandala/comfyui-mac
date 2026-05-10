import { InlineMath } from 'react-katex'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1BytesPerParam() {
  return (
    <>
      <p>
        Every model size you read about is parameter count. To compute its memory footprint, multiply
        by bytes per parameter for the dtype you're loading. Three significant figures of mental
        math will save you a lot of OOM debugging.
      </p>

      <h2>Bytes per parameter</h2>
      <table>
        <thead><tr><th>Dtype</th><th>Bytes per param</th><th>Example: 12 B param model</th></tr></thead>
        <tbody>
          <tr><td>fp32</td><td>4</td><td>48 GB</td></tr>
          <tr><td>fp16 / bf16</td><td>2</td><td>24 GB</td></tr>
          <tr><td>fp8 e4m3fn / e5m2</td><td>1</td><td>12 GB</td></tr>
          <tr><td>int8</td><td>1</td><td>12 GB</td></tr>
          <tr><td>GGUF Q8_0</td><td>~1.06</td><td>~12.7 GB</td></tr>
          <tr><td>GGUF Q6_K</td><td>~0.81</td><td>~9.7 GB</td></tr>
          <tr><td>GGUF Q5_K_M</td><td>~0.69</td><td>~8.3 GB</td></tr>
          <tr><td>GGUF Q5_K_S</td><td>~0.65</td><td>~7.8 GB</td></tr>
          <tr><td>GGUF Q4_K_M</td><td>~0.58</td><td>~7.0 GB</td></tr>
          <tr><td>GGUF Q4_K_S</td><td>~0.55</td><td>~6.6 GB</td></tr>
          <tr><td>GGUF Q3_K_M</td><td>~0.46</td><td>~5.5 GB</td></tr>
          <tr><td>GGUF Q2_K</td><td>~0.37</td><td>~4.4 GB</td></tr>
        </tbody>
      </table>

      <p>
        GGUF rates are slightly above the bit count divided by 8 because each block carries one or
        two scaling factors (in fp16) per N elements. Q4 isn't 0.5 bytes/param exactly — it's 0.55
        once you account for super-block overhead.
      </p>

      <h2>Sizing common models</h2>
      <table>
        <thead>
          <tr><th>Model</th><th>Param count</th><th>fp16 size</th><th>Mac-recommended</th></tr>
        </thead>
        <tbody>
          <tr><td>SD 1.5 UNet</td><td>~860 M</td><td>~1.7 GB</td><td>fp16</td></tr>
          <tr><td>SDXL UNet</td><td>~3.5 B</td><td>~6.7 GB</td><td>fp16</td></tr>
          <tr><td>SD 3.5 Medium UNet</td><td>~2.5 B</td><td>~5 GB</td><td>bf16</td></tr>
          <tr><td>SD 3.5 Large UNet</td><td>~8 B</td><td>~16 GB</td><td>bf16 (borderline)</td></tr>
          <tr><td>FLUX Dev UNet</td><td>~12 B</td><td>~23 GB</td><td>GGUF Q5_K_S (~8 GB) or Q4_K_S (~6.5 GB)</td></tr>
          <tr><td>HunyuanVideo UNet</td><td>~13 B</td><td>~26 GB</td><td>GGUF Q4_K_S (~7 GB)</td></tr>
          <tr><td>Wan 2.1 14B</td><td>~14 B</td><td>~28 GB</td><td>GGUF Q4_K_S (~7.5 GB)</td></tr>
          <tr><td>T5-XXL text encoder</td><td>~4.7 B</td><td>~9.5 GB</td><td>GGUF Q5_K_M (~3.5 GB)</td></tr>
        </tbody>
      </table>

      <h2>The "model fits in 24 GB" mental model</h2>
      <p>Quick estimate to check if a model will run on your M5 Pro:</p>
      <ol>
        <li>Find the model's parameter count.</li>
        <li>Multiply by your candidate dtype's bytes-per-param.</li>
        <li>Add ~30% for activations, KSampler temporaries, encoder/VAE overhead.</li>
        <li>Compare against ~16 GB working budget (after OS overhead).</li>
      </ol>

      <p>For example, FLUX Dev:</p>
      <ul>
        <li>12 B params × 0.55 (Q4_K_S) = 6.6 GB</li>
        <li>+ 30% = ~8.6 GB</li>
        <li>+ T5 GGUF (~3.5 GB) + CLIP-L (~250 MB) + VAE (~170 MB) = ~12.5 GB total</li>
        <li>16 GB budget &gt; 12.5 GB → fits with headroom ✓</li>
      </ul>

      <NoteBlock title="The 30% activation rule">
        Diffusion activations are model-shape-dependent. 30% is a rough heuristic. Video models
        balloon higher (50–70%); SD1.5 is more like 15%. When in doubt, leave a 20% margin and
        watch Activity Monitor on your first run.
      </NoteBlock>
    </>
  )
}

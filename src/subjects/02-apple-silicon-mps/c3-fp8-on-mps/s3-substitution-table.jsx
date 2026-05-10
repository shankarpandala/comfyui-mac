import NoteBlock from '../../../components/content/NoteBlock.jsx'
import MacGotchaBlock from '../../../components/content/MacGotchaBlock.jsx'
import VRAMBudgetBlock from '../../../components/content/VRAMBudgetBlock.jsx'

export default function S3SubstitutionTable() {
  return (
    <>
      <p>
        The headline section. When you find an fp8 workflow you want to run on Mac, this is the
        lookup table. Each row tells you what file to download and which loader node to use instead.
      </p>

      <h2>The substitution rule</h2>
      <p><strong>fp8 on disk → GGUF Q4_K_S or Q5_K_S on disk + UnetLoaderGGUF / DualCLIPLoaderGGUF</strong> for the loader.</p>
      <p>If memory budget allows, you can alternatively use <strong>fp16 / bf16 + the standard CheckpointLoader</strong>. That gives slightly higher quality at higher memory cost.</p>

      <h2>Per-model substitutions</h2>
      <table>
        <thead>
          <tr>
            <th>Original (NVIDIA workflow)</th>
            <th>Mac substitute</th>
            <th>Source repo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>flux1-dev-fp8.safetensors</code></td>
            <td><code>flux1-dev-Q5_K_S.gguf</code> (or Q4_K_S)</td>
            <td>HuggingFace: <code>city96/FLUX.1-dev-gguf</code></td>
          </tr>
          <tr>
            <td><code>flux1-schnell-fp8.safetensors</code></td>
            <td><code>flux1-schnell-Q5_K_S.gguf</code></td>
            <td><code>city96/FLUX.1-schnell-gguf</code></td>
          </tr>
          <tr>
            <td><code>t5xxl_fp8_e4m3fn.safetensors</code></td>
            <td><code>t5-v1_1-xxl-encoder-Q5_K_M.gguf</code> or fp16 t5</td>
            <td><code>city96/t5-v1_1-xxl-encoder-gguf</code></td>
          </tr>
          <tr>
            <td><code>hunyuan-video-fp8.safetensors</code></td>
            <td><code>hunyuan-video-Q4_K_S.gguf</code></td>
            <td><code>city96/HunyuanVideo-gguf</code></td>
          </tr>
          <tr>
            <td><code>wan2.1-14b-fp8.safetensors</code></td>
            <td><code>wan2.1-14b-Q4_K_S.gguf</code></td>
            <td><code>city96/Wan2.1-T2V-14B-gguf</code> and the I2V variants</td>
          </tr>
          <tr>
            <td><code>sd3.5_large_fp8.safetensors</code></td>
            <td>SD3.5 Medium fp16, or SD3.5 Large bf16</td>
            <td><code>stabilityai/stable-diffusion-3.5-medium</code></td>
          </tr>
        </tbody>
      </table>

      <h2>Loader substitution</h2>
      <table>
        <thead>
          <tr><th>NVIDIA workflow uses</th><th>Mac workflow uses</th></tr>
        </thead>
        <tbody>
          <tr><td><code>CheckpointLoaderSimple</code> + fp8 .safetensors</td><td><code>UnetLoaderGGUF</code> + .gguf</td></tr>
          <tr><td><code>CLIPLoader</code> + fp8 t5</td><td><code>CLIPLoaderGGUF</code> or <code>DualCLIPLoaderGGUF</code> + .gguf</td></tr>
          <tr><td><code>VAELoader</code> + .safetensors</td><td>Same — VAEs are small enough to keep in fp16/bf16</td></tr>
        </tbody>
      </table>

      <h2>Memory comparison: FLUX Dev</h2>
      <p>How the substitution actually plays out for the most common FLUX workflow:</p>

      <VRAMBudgetBlock
        target="24 GB unified (M5 Pro)"
        rows={[
          { component: 'FLUX Dev UNet', dtype: 'fp16 (NVIDIA cache)', size: '~23 GB', notes: "Won't fit on 24 GB Mac" },
          { component: 'FLUX Dev UNet', dtype: 'fp8_e4m3fn', size: '~12 GB', notes: 'Mac: not allocatable. Hard ❌.' },
          { component: 'FLUX Dev UNet', dtype: 'GGUF Q8_0', size: '~12 GB', notes: 'Mac: works. Closest to fp8 quality.' },
          { component: 'FLUX Dev UNet', dtype: 'GGUF Q5_K_S', size: '~8 GB', notes: 'Mac: recommended balance.' },
          { component: 'FLUX Dev UNet', dtype: 'GGUF Q4_K_S', size: '~6.5 GB', notes: 'Mac: tightest budget; minor quality cost.' },
          { component: 'T5-XXL', dtype: 'fp8_e4m3fn', size: '~5 GB', notes: 'Substitute with GGUF Q5_K (~3.5 GB) or fp16 (~9.5 GB).' },
          { component: 'CLIP-L', dtype: 'fp16', size: '~250 MB', notes: 'Always fp16; tiny.' },
          { component: 'FLUX VAE', dtype: 'bf16', size: '~170 MB', notes: 'Always bf16; tiny.' },
        ]}
      />

      <p>
        Reading this table: <strong>FLUX Dev with GGUF Q5_K_S UNet + GGUF Q5_K T5 + fp16 CLIP-L +
        bf16 VAE</strong> totals ~12 GB of model weights, leaving 4–6 GB headroom for activations
        and KSampler temporaries. That's the recipe for FLUX Dev on a 24 GB Mac, and it's the same
        recipe Subject 08 will codify with a downloadable workflow.
      </p>

      <h2>What about quality?</h2>
      <p>Side-by-side image quality on FLUX Dev:</p>
      <ul>
        <li><strong>fp16</strong> — the reference. (Won't fit on 24 GB Mac, but listed as truth.)</li>
        <li><strong>fp8_e4m3fn</strong> — visually indistinguishable from fp16 in the vast majority of generations. ~1% objectively measurable degradation on benchmarks.</li>
        <li><strong>GGUF Q8_0</strong> — also visually indistinguishable. Same ballpark as fp8.</li>
        <li><strong>GGUF Q5_K_S</strong> — small visible degradation on edge cases (text, fingers, very fine textures). Recommended Mac default.</li>
        <li><strong>GGUF Q4_K_S</strong> — visible quality cost (more text errors, less fine detail). Use when memory is desperate.</li>
        <li><strong>GGUF Q3 and below</strong> — noticeable degradation. Don't bother for diffusion (LLMs tolerate it better).</li>
      </ul>

      <MacGotchaBlock title="Read the workflow's loader nodes carefully">
        When you import a community workflow, look at the loader nodes before pressing Queue. If you
        see <code>CheckpointLoaderSimple</code> pointed at a file with "fp8" in the name, you must
        swap both the file and the loader. ComfyUI Manager → Install Models can fetch the GGUF
        equivalents directly.
      </MacGotchaBlock>

      <NoteBlock title="Subject 04 and Subject 08">
        Subject 04 covers GGUF in detail (what each Q-letter means, how dequantization works).
        Subject 08 has the specific FLUX-on-Mac workflow this section describes, fully buildable.
      </NoteBlock>
    </>
  )
}

import MacGotchaBlock from '../../../components/content/MacGotchaBlock.jsx'

export default function S2T5Fp16OnMac() {
  return (
    <>
      <p>
        Community SD3 workflows on NVIDIA often use <code>t5xxl_fp8_e4m3fn.safetensors</code> for
        T5 to save memory. On Mac that file won't load (Subject 02 / Chapter 3). The substitution
        is GGUF.
      </p>

      <MacGotchaBlock title="Don't import the fp8 T5 on Mac">
        Loading <code>t5xxl_fp8_e4m3fn.safetensors</code> via <code>CLIPLoader</code> errors with
        "MPS backend doesn't support float8_e4m3fn". The error message points at T5; the fix is to
        download the GGUF replacement.
      </MacGotchaBlock>

      <h2>The Mac substitution</h2>
      <table>
        <thead><tr><th>NVIDIA workflow</th><th>Mac substitute</th><th>Memory</th></tr></thead>
        <tbody>
          <tr><td><code>t5xxl_fp16.safetensors</code></td><td>same — works on Mac</td><td>~9.5 GB</td></tr>
          <tr><td><code>t5xxl_fp8_e4m3fn.safetensors</code></td><td><code>t5-v1_1-xxl-encoder-Q5_K_M.gguf</code></td><td>~3.5 GB</td></tr>
        </tbody>
      </table>

      <h2>Loading the GGUF T5</h2>
      <p>
        SD3 expects three encoders (CLIP-L + CLIP-G + T5). ComfyUI's stock <code>TripleCLIPLoader</code>
        only handles three .safetensors files. To use GGUF T5:
      </p>
      <ol>
        <li>Use <code>DualCLIPLoaderGGUF</code> with <code>type=sd3</code> for CLIP-L + T5 (one fp16, one GGUF).</li>
        <li>Use <code>CLIPLoader</code> for CLIP-G separately.</li>
        <li>Combine with <code>CLIPMergeAdd</code> or use a workflow node that accepts multiple CLIPs.</li>
      </ol>

      <h2>The simpler path</h2>
      <p>
        For most Mac SD3 workflows, the practical approach is: use SD3.5 Medium with the bundled
        fp16 encoders. Total ~14 GB. Fits on M5 Pro without GGUF gymnastics. Only step into GGUF
        territory if you need SD3.5 Large or want to layer many ControlNets.
      </p>

      <h2>SD3.5 Large on Mac</h2>
      <p>
        SD3.5 Large UNet is ~16 GB at bf16. Add fp16 T5 (~9.5 GB) and you're already over 24 GB.
        Mandatory swap: GGUF T5 (3.5 GB) brings the total to ~20 GB — workable with{' '}
        <code>--lowvram</code>. SD3.5 Large Turbo same memory profile.
      </p>
    </>
  )
}

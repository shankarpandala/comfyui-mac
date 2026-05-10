import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3VaeAndClip() {
  return (
    <>
      <p>
        We've covered UNet GGUF loading. Two related decisions remain: which VAE to use with each
        family, and the CLIP / T5 details that differ across model families.
      </p>

      <h2>VAE choice per family</h2>
      <table>
        <thead><tr><th>Model family</th><th>VAE file</th><th>Notes</th></tr></thead>
        <tbody>
          <tr><td>SD 1.5</td><td><code>vae-ft-mse-840000-ema-pruned.safetensors</code></td><td>Community VAE; better than original</td></tr>
          <tr><td>SDXL base</td><td><code>sdxl_vae.safetensors</code></td><td>Or use the bundled VAE in the checkpoint</td></tr>
          <tr><td>SDXL Lightning / Turbo / Hyper</td><td>same as base</td><td>VAEs are family-not-variant-specific</td></tr>
          <tr><td>SD3 / SD3.5</td><td><code>sd3_vae.safetensors</code></td><td>16-channel</td></tr>
          <tr><td>FLUX (Dev / Schnell)</td><td><code>ae.safetensors</code></td><td>From Black Forest Labs repo</td></tr>
          <tr><td>HunyuanVideo</td><td><code>hunyuan_video_vae_bf16.safetensors</code></td><td>3D causal</td></tr>
          <tr><td>Wan 2.1 / 2.2</td><td><code>wan_2.1_vae.safetensors</code></td><td>3D causal</td></tr>
          <tr><td>LTX-Video</td><td><code>ltx-vae.safetensors</code></td><td>Bundled in checkpoint</td></tr>
        </tbody>
      </table>

      <h2>VAE dtype</h2>
      <p>
        Most VAEs ship as bf16 or fp16. On Mac, bf16 VAEs need <code>--bf16-vae</code> at launch
        (or the per-loader override). FLUX VAE is bf16-trained and produces NaN if forced to fp16
        on certain inputs — keep bf16.
      </p>

      <h2>Triple text encoders (SD3, SD3.5)</h2>
      <p>
        SD3-family models use <em>three</em> text encoders: clip-l, clip-g, t5-xxl. ComfyUI's{' '}
        <strong>TripleCLIPLoader</strong> handles them. The GGUF variant doesn't yet exist as a
        single Triple node, so the standard pattern on Mac:
      </p>
      <ul>
        <li>clip-l: fp16 .safetensors → standard <code>CLIPLoader</code></li>
        <li>clip-g: fp16 .safetensors → standard <code>CLIPLoader</code></li>
        <li>t5-xxl: GGUF Q5_K_M → use the standalone <code>CLIPLoaderGGUF</code> and merge with the others using <code>CLIPMergeAdd</code> or workflow nodes that accept multiple CLIP inputs</li>
      </ul>
      <p>
        For most SD3.5 workflows, the simpler path is loading all three from the bundled
        SD3.5-Medium .safetensors (which packages all encoders) — only step out to GGUF if memory
        forces it.
      </p>

      <h2>FLUX's two encoders</h2>
      <p>
        FLUX uses CLIP-L + T5-XXL. <code>DualCLIPLoaderGGUF</code> with <code>type=flux</code>{' '}
        wires them correctly. CLIP-L stays small (.safetensors fp16); T5 is the one to GGUF.
      </p>

      <h2>HunyuanVideo's two encoders</h2>
      <p>
        Hunyuan uses LLAMA-style + CLIP. <code>DualCLIPLoaderGGUF</code> with{' '}
        <code>type=hunyuan_video</code> handles it. The LLAMA-style encoder is the bulky one;
        prefer GGUF Q5 for it.
      </p>

      <h2>Wan's text encoders</h2>
      <p>
        Wan uses umT5-XXL plus CLIP. The Wan repo ships these as fp16 .safetensors; GGUF for Wan's
        text encoders exists but is less common. Standard <code>CLIPLoader</code> works here.
      </p>

      <NoteBlock title="The encoder is often forgotten">
        OOM at "loading text encoder" is a classic Mac mistake — you fit the UNet but forgot the
        T5 is 9.5 GB at fp16. Always GGUF the T5 on Mac.
      </NoteBlock>
    </>
  )
}

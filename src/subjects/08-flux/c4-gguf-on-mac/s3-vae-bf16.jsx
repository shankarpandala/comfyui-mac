import MacGotchaBlock from '../../../components/content/MacGotchaBlock.jsx'

export default function S3VaeBf16() {
  return (
    <>
      <p>
        FLUX's VAE is bf16-trained. Loading it as fp16 produces NaN on certain inputs (sky textures,
        large bright regions). Always pair with the right launch flag.
      </p>

      <h2>The launch flag</h2>
      <p>Add <code>--bf16-vae</code> to your start.sh:</p>
      <pre>{`PYTORCH_ENABLE_MPS_FALLBACK=1 \\
PYTORCH_MPS_HIGH_WATERMARK_RATIO=0.0 \\
python main.py --force-fp16 --bf16-unet --bf16-vae`}</pre>
      <p>
        Combined with <code>--bf16-unet</code>, this signals ComfyUI to use bf16 for both the FLUX
        UNet's dequantized output and the VAE encode/decode.
      </p>

      <h2>The NaN symptom</h2>
      <p>If you forget --bf16-vae, you'll see one of:</p>
      <ul>
        <li>Output image is fully black or fully white.</li>
        <li>Output image has bright pink/cyan blobs in sky areas.</li>
        <li>VAEDecode logs <code>NaN detected</code>.</li>
      </ul>

      <MacGotchaBlock title="The bf16/fp16 trap">
        FLUX VAE training assumed bf16's exponent range. fp16's narrower range overflows on bright
        pixel regions. There's no workaround other than --bf16-vae. The flag is free; just set it
        for any FLUX workflow.
      </MacGotchaBlock>

      <h2>Per-node override</h2>
      <p>
        If you don't want to set the flag globally (e.g., you switch between SDXL and FLUX in the
        same session), use the <code>VAELoader</code>'s <code>weight_dtype</code> dropdown — set to
        <code>bf16</code> for FLUX, <code>fp16</code> for SDXL.
      </p>

      <h2>--cpu-vae interaction</h2>
      <p>
        On Mac unified memory, <code>--cpu-vae</code> has no real penalty. Combined with --bf16-vae
        it puts a bf16 VAE on CPU — frees ~200 MB of GPU memory (small but helpful when stacking
        many ControlNets with FLUX).
      </p>
    </>
  )
}

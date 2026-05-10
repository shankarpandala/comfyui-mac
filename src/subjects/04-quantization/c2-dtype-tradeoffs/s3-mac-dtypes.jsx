import MacGotchaBlock from '../../../components/content/MacGotchaBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3MacDtypes() {
  return (
    <>
      <p>
        We covered "what runs on MPS" in Subject 02 / Chapter 3. This section is the practical
        consequence: which dtype to actually pick when downloading a model.
      </p>

      <h2>The Mac dtype priority</h2>
      <ol>
        <li><strong>fp16</strong> — first choice for anything that fits.</li>
        <li><strong>bf16</strong> — required for FLUX/SD3/Hunyuan/Wan UNets to avoid NaN. Always pair with <code>--bf16-unet</code>.</li>
        <li><strong>GGUF Q5_K_S</strong> — when fp16/bf16 doesn't fit. Mac default for FLUX, Hunyuan, Wan.</li>
        <li><strong>GGUF Q4_K_S</strong> — when Q5 still doesn't fit (HunyuanVideo at higher resolution, Wan 14B with LoRAs).</li>
      </ol>

      <h2>What to never download on Mac</h2>
      <ul>
        <li><strong>fp8_e4m3fn / fp8_e5m2 .safetensors</strong> — won't load on MPS (Subject 02 / Chapter 3).</li>
        <li><strong>Q3 and below GGUF for diffusion</strong> — quality drops too much.</li>
        <li><strong>fp32 weights</strong> — wasted disk and memory; nothing you'd run actually wants fp32.</li>
      </ul>

      <h2>The "in fp16 vs out fp16" distinction</h2>
      <MacGotchaBlock title="Two different fp16s">
        On Mac with <code>--force-fp16</code>, ComfyUI loads models in fp16 even if the file is fp32
        on disk. That's a one-way conversion at load time; it does not reach back and re-train. It
        also does not magically make an fp8 file load — fp8 has to be readable by MPS first, which
        it isn't.
      </MacGotchaBlock>

      <h2>How loaders treat dtype</h2>
      <ul>
        <li><strong>CheckpointLoaderSimple</strong> + .safetensors — uses the dtype in the file unless overridden by launch flags.</li>
        <li><strong>UnetLoaderGGUF</strong> + .gguf — has a dtype dropdown for the dequantized output: fp16 / bf16 / default. Mac default: bf16 for FLUX, fp16 for SD-family.</li>
        <li><strong>DualCLIPLoaderGGUF</strong> — same dtype dropdown.</li>
        <li><strong>VAELoader</strong> — accepts fp16 / bf16 VAE files; automatic.</li>
      </ul>

      <h2>Mixed-precision recipes</h2>
      <p>For FLUX Dev on Mac:</p>
      <ul>
        <li><strong>UNet</strong> — GGUF Q5_K_S, dequant to bf16</li>
        <li><strong>T5</strong> — GGUF Q5_K_M, dequant to fp16</li>
        <li><strong>CLIP-L</strong> — fp16 .safetensors</li>
        <li><strong>VAE</strong> — bf16 .safetensors</li>
      </ul>
      <p>
        Mixing precisions like this is a Mac thing — the goal is to keep the most numerically
        sensitive layers (T5 attention, FLUX VAE) at higher precision while heavily quantizing the
        UNet bulk weights.
      </p>

      <h2>How you check what you have</h2>
      <p>
        ComfyUI's startup log prints the dtype it loaded each component as. Search for "Using
        accelerator type" and "Loaded UNet" lines. They'll say things like:
      </p>
      <pre>{`Loaded UNet (gguf): flux1-dev-Q5_K_S.gguf, dtype: torch.bfloat16
Loaded CLIP: t5-v1_1-xxl-encoder-Q5_K_M.gguf, dtype: torch.float16
Loaded VAE: ae.safetensors, dtype: torch.bfloat16`}</pre>

      <NoteBlock title="The boring truth">
        On Mac, almost every working setup uses the same dtype profile: bf16 for big modern UNets,
        fp16 for smaller older UNets and CLIP, GGUF Q5/Q4 for anything that doesn't fit at 16-bit.
        Internalize this and most "what dtype do I use" questions answer themselves.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3Vae() {
  return (
    <>
      <p>
        SD 1.5's VAE compresses 512×512×3 pixels into 64×64×4 latents — a ~48× compression. It's
        small (~90 MB at fp16) but historically the weakest link of the pipeline. The community has
        produced replacement VAEs that significantly improve output quality.
      </p>

      <h2>The original VAE's weakness</h2>
      <p>
        The original Stability VAE produces visible artifacts on faces and text. The encoder-decoder
        round trip is lossy enough to wash out fine detail. You can see it: encode an image, decode
        it without diffusion, compare — the output is noticeably softer.
      </p>

      <h2>The community VAE</h2>
      <p>
        <code>vae-ft-mse-840000-ema-pruned.safetensors</code> is a community fine-tune that fixed
        most of the face artifacts. It's a drop-in replacement — same architecture, same shape,
        better weights. Recommended for any SD 1.5 workflow.
      </p>

      <h2>How to use a separate VAE in ComfyUI</h2>
      <ol>
        <li>Place the .safetensors in <code>models/vae/</code>.</li>
        <li>Add a <code>VAELoader</code> node and select the file.</li>
        <li>Wire its VAE output to <code>VAEDecode</code>'s vae input — replacing the VAE that came out of CheckpointLoader.</li>
      </ol>

      <h2>The "baked-in" VAE pattern</h2>
      <p>
        Many community SD 1.5 finetunes (DreamShaper, Realistic Vision) bake the improved VAE into
        the checkpoint. CheckpointLoader emits the bundled VAE, which is already the good one. You
        only need a separate VAELoader if you want to override.
      </p>

      <NoteBlock title="On Mac">
        The SD 1.5 VAE is so small that <code>--cpu-vae</code> isn't worth it. Keep the VAE on GPU.
        The <code>--cpu-vae</code> trick matters for SDXL and beyond, where the VAE is bigger.
      </NoteBlock>
    </>
  )
}

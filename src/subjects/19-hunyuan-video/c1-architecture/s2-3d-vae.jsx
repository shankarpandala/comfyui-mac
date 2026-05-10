import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S23dVae() {
  return (
    <>
      <p>
        Hunyuan's 3D VAE is the heaviest part of the pipeline after the UNet. Spatial 1/8,
        temporal 1/4 compression, 16-channel latents.
      </p>

      <h2>The file</h2>
      <ul>
        <li><code>hunyuan_video_vae_bf16.safetensors</code> — ~430 MB. Bigger than image VAEs but small relative to the UNet.</li>
        <li>From <code>tencent/HunyuanVideo</code> on HuggingFace.</li>
      </ul>

      <h2>Memory during decode</h2>
      <p>
        Decoding 121 frames produces a (121, 720, 1280, 3) image tensor — ~330 MB just for the
        decoded output. Decode activations add another ~3 GB.
      </p>

      <h2>--cpu-vae for tight budgets</h2>
      <p>
        On Mac unified memory, <code>--cpu-vae</code> moves VAE decode to CPU. For Hunyuan with
        Q4_K_S UNet on 24 GB, this is the difference between OOM and successful render. ~50 s extra
        decode time on CPU; worth it.
      </p>

      <h2>Tiled VAE decode</h2>
      <p>
        For very high resolution (1280×720+), use <code>VAEDecodeTiled</code> instead of plain
        <code>VAEDecode</code>. Splits the latent into spatial tiles for decoding. Tile size 256
        and 32 overlap is a safe default.
      </p>

      <NoteBlock title="The decode is the OOM danger">
        Sampler runs OK, then OOM at the very end on VAEDecode. To avoid: use --cpu-vae, or use
        VAEDecodeTiled, or render at lower resolution. All three are valid mitigations depending
        on what's tight.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2DevQ4ks() {
  return (
    <>
      <p>FLUX Dev GGUF Q4_K_S — tight-budget hero shots. ~36 seconds per image at near-full FLUX quality.</p>

      <h2>Files</h2>
      <ul>
        <li><code>flux1-dev-Q4_K_S.gguf</code> (~6.6 GB)</li>
        <li>Same T5 GGUF + CLIP-L + VAE as Schnell recipe</li>
      </ul>

      <h2>Settings</h2>
      <ul>
        <li>UnetLoaderGGUF + DualCLIPLoaderGGUF (type=flux) + VAELoader</li>
        <li>Steps: 20 · cfg: 1.0 · guidance: 3.5</li>
        <li>Sampler: <code>euler</code> · Scheduler: <code>simple</code></li>
        <li>Launch flags: <code>--bf16-unet --bf16-vae</code></li>
      </ul>

      <h2>Wall time</h2>
      <p>~36 seconds per 1024×1024 image on M5 Pro.</p>

      <h2>Q4_K_S vs Q5_K_S</h2>
      <ul>
        <li>Q4_K_S: ~6.6 GB on disk, ~36 s wall time, ~93% of fp16 quality.</li>
        <li>Q5_K_S: ~7.8 GB on disk, ~45 s wall time, ~97% of fp16 quality. Recommended Mac default.</li>
      </ul>

      <NoteBlock title="Pick Q5 for hero, Q4 for budget">
        Q5_K_S is the Mac default. Q4_K_S is for when you're stacking many adapters (PuLID +
        ControlNet + LoRA) and need every spare GB.
      </NoteBlock>
    </>
  )
}

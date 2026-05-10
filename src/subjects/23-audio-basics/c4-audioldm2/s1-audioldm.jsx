import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Audioldm() {
  return (
    <>
      <p>
        AudioLDM 2 (Liu et al. 2023) is a latent diffusion model for audio. Predates Stable Audio
        Open. Less popular today but still in some workflows.
      </p>

      <h2>Architecture</h2>
      <ul>
        <li>UNet operating on mel-spectrogram latents.</li>
        <li>Conditioned by CLAP text/audio encoder (multimodal — accepts text or audio reference).</li>
        <li>HiFi-GAN vocoder converts mel back to audio.</li>
      </ul>

      <h2>Use cases</h2>
      <ul>
        <li>Sound design — environmental sounds, foley.</li>
        <li>Audio inpainting (filling gaps).</li>
        <li>Audio variation (similar but different from input).</li>
      </ul>

      <h2>Status</h2>
      <p>Largely superseded by Stable Audio Open for most cases. Worth knowing about if a recipe references it.</p>

      <NoteBlock title="The Mac choice">
        Default to Stable Audio Open. AudioLDM 2 only if a specific tutorial requires it.
      </NoteBlock>
    </>
  )
}

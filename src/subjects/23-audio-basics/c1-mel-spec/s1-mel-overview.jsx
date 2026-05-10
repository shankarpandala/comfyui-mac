import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1MelOverview() {
  return (
    <>
      <p>
        Audio diffusion models can't operate on raw waveforms directly — too many samples (44.1
        kHz × 30 s = 1.3 M samples). They work on compressed spectrogram or codec representations
        instead. This section is the audio-side equivalent of "what's a latent."
      </p>

      <DefinitionBlock title="Mel-spectrogram">
        A 2D representation of audio: frequency bins (mapped to the perceptual mel scale) on one
        axis, time windows on the other. Pixel values = log-amplitude. Audio diffusion models that
        use spectrograms are essentially image diffusion on these grayscale "audio images."
      </DefinitionBlock>

      <h2>Why mel-spectrograms work for diffusion</h2>
      <ul>
        <li>Compact — 30 s of 44.1 kHz audio compresses to ~1500 × 80 mel pixels.</li>
        <li>Perceptually meaningful — mel scale matches human hearing.</li>
        <li>Image-diffusion architectures transfer naturally — UNets, attention, all work.</li>
      </ul>

      <h2>The vocoder problem</h2>
      <p>
        Mel-spectrograms can be inverted to audio via Griffin-Lim (basic) or learned vocoders
        (HiFi-GAN, BigVGAN). Quality of the final audio depends on both the diffusion model and
        the vocoder.
      </p>

      <h2>Modern alternative: neural codecs</h2>
      <p>
        Newer audio models (Stable Audio, Encodec-based) skip mel-spectrograms entirely — they use
        learned neural codecs (Encodec, DAC) that compress audio to discrete tokens, then run
        transformer or diffusion models on the tokens. Cleaner pipeline; better quality; what
        Subject 23 / Chapter 2 covers.
      </p>

      <NoteBlock title="The image-diffusion analogy">
        Audio diffusion is image diffusion in a different latent space. Most concepts transfer:
        sampling, conditioning, CFG, LoRAs. The differences are in the encoders/decoders (mel +
        vocoder vs neural codec) and what conditioning means (prompts describe sound, not images).
      </NoteBlock>
    </>
  )
}

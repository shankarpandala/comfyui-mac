import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Unet() {
  return (
    <>
      <p>
        SD 1.5's UNet is the original Stable Diffusion architecture, trained in 2022 and still in use
        because it's small, fast, and the most heavily-finetuned base in existence. Knowing its shape
        helps you understand every later model — they're variations on the same plan.
      </p>

      <DefinitionBlock title="UNet">
        Encoder-decoder convolutional network with skip connections between matching encoder and
        decoder levels, conditioned on a noise level (timestep) and text embeddings via cross-attention.
        Operates on 4-channel latents at 1/8 the resolution of the source image.
      </DefinitionBlock>

      <h2>Anatomy</h2>
      <ul>
        <li><strong>Down blocks (encoder)</strong> — successive ResNet + cross-attention pairs that downsample 64→32→16→8.</li>
        <li><strong>Mid block</strong> — bottleneck with full self-attention.</li>
        <li><strong>Up blocks (decoder)</strong> — symmetric upsampling 8→16→32→64, taking skip connections from the encoder.</li>
        <li><strong>Cross-attention</strong> at every spatial scale — that's where prompt conditioning enters.</li>
      </ul>

      <h2>Numbers</h2>
      <ul>
        <li>~860 M parameters</li>
        <li>fp16 weights: ~1.7 GB</li>
        <li>Per-step compute: ~2 GFLOPs at 64×64 latent (for 512×512 image)</li>
      </ul>

      <h2>Why SD 1.5 still matters</h2>
      <ul>
        <li>The largest LoRA / ControlNet / IP-Adapter ecosystem of any base.</li>
        <li>Tiny enough to run in a few hundred MB of VRAM.</li>
        <li>Specific photoreal finetunes (RealisticVision, Juggernaut SD1.5) still hold their own.</li>
        <li>Fastest iteration loop for prompt experimentation (~3 s per 512 image on M5 Pro).</li>
      </ul>

      <NoteBlock title="When to use SD 1.5 in 2026">
        For specific styles (anime, NSFW community art, a niche character LoRA), SD 1.5's ecosystem
        is still richer than SDXL's. For new general-purpose work, default to SDXL or FLUX.
      </NoteBlock>
    </>
  )
}

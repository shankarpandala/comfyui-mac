import { InlineMath } from 'react-katex'
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1WhyVae() {
  return (
    <>
      <p>
        Stable Diffusion is a <em>latent</em> diffusion model. The UNet doesn't denoise pixels — it
        denoises a much smaller compressed representation. A VAE shuttles tensors back and forth
        between pixel space and latent space. This section is the why and the how.
      </p>

      <DefinitionBlock title="Latent Diffusion (Rombach et al. 2022)">
        Train a VAE that compresses images by ~8× spatially and possibly more in channels. Run the
        diffusion process entirely in this small latent space. Decode only at the end. The benefit:
        all those forward/reverse passes operate on tensors with ~64× fewer pixels, so each step is
        ~64× cheaper.
      </DefinitionBlock>

      <h2>Concrete numbers</h2>
      <table>
        <thead><tr><th>Model</th><th>Image size</th><th>Latent size</th><th>Latent channels</th><th>Compression</th></tr></thead>
        <tbody>
          <tr><td>SD 1.5</td><td>512×512×3 = 786 K</td><td>64×64×4 = 16 K</td><td>4</td><td>~48×</td></tr>
          <tr><td>SDXL</td><td>1024×1024×3 = 3.1 M</td><td>128×128×4 = 65 K</td><td>4</td><td>~48×</td></tr>
          <tr><td>SD3 / FLUX</td><td>1024×1024×3 = 3.1 M</td><td>128×128×16 = 262 K</td><td>16</td><td>~12×</td></tr>
          <tr><td>HunyuanVideo</td><td>5 s × 720p</td><td>1/8 spatial × 1/4 temporal</td><td>16</td><td>~50×</td></tr>
        </tbody>
      </table>

      <p>
        SD3 and FLUX use 16-channel latents (vs SD's 4) for higher fidelity at the same spatial
        compression. Video models add a temporal compression factor on top.
      </p>

      <h2>The VAE's actual job</h2>
      <p>The VAE is a pair of networks trained jointly:</p>
      <ul>
        <li><strong>Encoder</strong> <InlineMath math="\mathcal{E}: \text{image} \to \text{latent}" /> — squashes pixels to the compressed representation.</li>
        <li><strong>Decoder</strong> <InlineMath math="\mathcal{D}: \text{latent} \to \text{image}" /> — reconstructs pixels from the latent.</li>
      </ul>
      <p>
        Trained with reconstruction loss + perceptual loss + a small KL regularization so the latent
        distribution is well-conditioned. We never train the VAE while training the UNet — the VAE
        is fixed.
      </p>

      <h2>Why a VAE specifically</h2>
      <p>
        We could imagine a simpler autoencoder. Why the V (variational)? Three properties matter:
      </p>
      <ol>
        <li><strong>Smooth latent space.</strong> Nearby pixel-space images map to nearby latents. Diffusion in latent space then produces sensible pixel outputs.</li>
        <li><strong>Compact distribution.</strong> The KL regularization keeps latents from drifting to extreme values; the diffusion model trains well on tensors with bounded magnitude.</li>
        <li><strong>Decoder that hallucinates well.</strong> A VAE decoder can fill in plausible high-frequency detail the encoder threw away — small text, fine textures.</li>
      </ol>

      <h2>The VAE quality ceiling</h2>
      <p>
        The decoder is a hard upper bound on output quality. Even a perfect denoiser cannot produce
        details the VAE can't reconstruct. This is why "improved VAEs" matter:
      </p>
      <ul>
        <li>SD 1.5's original VAE had bad face artifacts; the community VAE <code>vae-ft-mse-840000</code> is a drop-in replacement and the de-facto standard.</li>
        <li>SDXL has its own VAE (<code>sdxl_vae.safetensors</code>) with better detail.</li>
        <li>SD3 / FLUX use a 16-channel VAE, dramatically better at fine text.</li>
      </ul>

      <NoteBlock title="What about pixel-space diffusion?">
        It exists — early SD experiments and some research papers (e.g., simple diffusion at 256
        pixels) skip the VAE. Quality at high resolution is bad and compute is prohibitive, which is
        why every shipping model uses latent diffusion.
      </NoteBlock>
    </>
  )
}

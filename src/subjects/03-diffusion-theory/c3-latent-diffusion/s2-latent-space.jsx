import { InlineMath } from 'react-katex'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2LatentSpace() {
  return (
    <>
      <p>
        We've established the VAE shape. This section is about what's actually inside that
        <InlineMath math="64\times 64\times 4" /> tensor for SD1.5, and how the structure of the
        latent space drives several recipes you'll use.
      </p>

      <h2>Latents are not human-interpretable</h2>
      <p>
        The four channels of an SD1.5 latent are not "RGB and alpha". They're four learned features.
        Visualizing channel 0 as grayscale produces something that looks like a noisy edge map.
        Channel 1 might encode local color saturation. The encoder is free to use the channels for
        whatever the reconstruction loss favors — there's no semantic guarantee.
      </p>
      <p>
        16-channel latents (SD3, FLUX) are even less interpretable per-channel but reconstruct text
        and fine details much better than 4-channel.
      </p>

      <h2>Spatial structure is preserved</h2>
      <p>
        The encoder is convolutional, so the (x, y) location in the latent corresponds to roughly
        the same (8x, 8y) region in the image. This is why ControlNet works: a depth map at image
        resolution gets concatenated with the latent at every UNet residual block, and the spatial
        alignment carries through.
      </p>

      <h2>Concrete consequences for ComfyUI workflows</h2>

      <h3>1. Latent upscaling vs pixel upscaling</h3>
      <p>
        <strong>Latent upscale</strong> — bilinear or nearest-neighbor resize the latent tensor,
        then continue sampling. Cheap, but the result is "fake high-res": you get a 2× larger image
        that has the same effective detail as the original. Useful as a hi-res-fix bridge.
      </p>
      <p>
        <strong>Pixel upscale</strong> — VAE-decode to image, run an ESRGAN upscaler, optionally
        VAE-encode back into a latent for further sampling. Slower but higher detail.
      </p>

      <h3>2. img2img is "encode + partial denoise"</h3>
      <p>
        VAE-encode the input image to a latent, add noise to a partial timestep{' '}
        <InlineMath math="t < T" />, run the sampler from there. <code>denoise = 0.5</code> in
        KSampler means "start from <InlineMath math="t = 0.5T" />" — i.e., halfway through the
        chain.
      </p>

      <h3>3. Inpainting masks the latent</h3>
      <p>
        SetLatentNoiseMask wires a (downsampled) mask into the sampler. Where the mask is 1, the
        sampler updates the latent freely; where it's 0, it locks the latent to the encoded
        original. The seam between regions is in latent space, then decoded together — that's why
        inpainting boundaries can be slightly soft.
      </p>

      <h3>4. ControlNet / IP-Adapter</h3>
      <p>
        Both inject <em>residuals</em> into UNet blocks at specific spatial scales. Because latent
        spatial structure mirrors pixel spatial structure, the conditioning is geometrically valid.
        We unpack the math in Subject 09 and 10.
      </p>

      <h2>Cross-VAE compatibility (or lack thereof)</h2>
      <ul>
        <li>SD 1.5 and SD 1.5 community VAE (vae-ft-mse-840000) are interchangeable — same shape, similar statistics.</li>
        <li>SD 1.5 latent ↔ SDXL latent: <strong>not interchangeable</strong> — different VAEs, different statistics.</li>
        <li>SDXL latent ↔ SD3 latent: <strong>not interchangeable</strong> — different channel count.</li>
        <li>FLUX VAE produces 16-channel latents at <InlineMath math="\frac{1}{8}" /> spatial scale; HunyuanVideo VAE produces 16-channel at <InlineMath math="\frac{1}{8}" /> spatial × <InlineMath math="\frac{1}{4}" /> temporal. <strong>Not interchangeable.</strong></li>
      </ul>

      <NoteBlock title="The matching rule">
        Always pair a model with a VAE from the same family. ComfyUI's CheckpointLoaderSimple emits
        a VAE bundled with the checkpoint, so you usually don't have to think about it — but when
        you load a UNet via <code>UnetLoaderGGUF</code>, you must explicitly load a matching VAE
        with <code>VAELoader</code>.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'

export default function S3DataTypes() {
  return (
    <>
      <p>
        We met the seven core types in chapter 1 / section 3. This section gets concrete about what
        each one actually is at the tensor level — useful when you start writing custom nodes in
        Subject 31, and useful right now because every error message references these types.
      </p>

      <h2>MODEL</h2>
      <DefinitionBlock title="MODEL">
        A wrapped diffusion model — the UNet (or DiT) plus configuration about its sampling behavior.
        It is <em>not</em> a raw <code>nn.Module</code>; ComfyUI wraps it in a <code>ModelPatcher</code>{' '}
        that supports LoRA injection, weight offloading, and dtype switching.
      </DefinitionBlock>
      <p>Common producers: CheckpointLoader, UnetLoaderGGUF, LoraLoader (modifies and re-emits MODEL).</p>
      <p>Common consumers: KSampler, ControlNet apply nodes, FreeU, model patches.</p>

      <h2>CLIP</h2>
      <p>
        The text-encoding side of the model. Modern models stack multiple encoders (SDXL: clip-l +
        clip-g; SD3: clip-l + clip-g + t5; FLUX: clip-l + t5). The CLIP type is a wrapper that hides
        which encoders are present.
      </p>
      <p>Producers: CheckpointLoader, DualCLIPLoader, TripleCLIPLoader, LoraLoader (modifies CLIP too).</p>
      <p>Consumer: CLIPTextEncode and its variants.</p>

      <h2>VAE</h2>
      <p>The autoencoder mapping pixel space ↔ latent space. Each model family has its own VAE; SDXL VAE differs from SD3 VAE differs from FLUX VAE.</p>
      <p>Producers: CheckpointLoader, VAELoader.</p>
      <p>Consumers: VAEDecode (LATENT → IMAGE), VAEEncode (IMAGE → LATENT), VAEEncodeForInpaint.</p>

      <h2>LATENT</h2>
      <p>
        A dictionary in Python: <code>{'{"samples": tensor[B, C, H, W]}'}</code>. C (channels) varies
        per model family — 4 for SDXL, 16 for SD3, 16 for FLUX, 4 for AnimateDiff. Spatial dims are
        1/8 of pixel dims for most VAEs (so 1024×1024 image ↔ 128×128 latent).
      </p>
      <p>Producers: EmptyLatentImage (random noise), VAEEncode, KSampler.</p>
      <p>Consumers: KSampler, VAEDecode, LatentUpscale.</p>

      <h2>IMAGE</h2>
      <p>A tensor of shape <code>[B, H, W, 3]</code> with values in <code>[0, 1]</code>, dtype float32. Note: <strong>HWC, not CHW</strong> — this trips up new custom-node authors.</p>
      <p>Producers: VAEDecode, LoadImage, image-processing nodes.</p>
      <p>Consumers: SaveImage, PreviewImage, VAEEncode, ControlNet preprocessors.</p>

      <h2>MASK</h2>
      <p>Tensor <code>[B, H, W]</code>, single channel, float in [0, 1]. 1 = keep, 0 = ignore (or vice-versa depending on the operation).</p>
      <p>Producers: LoadImage (alpha channel), SAM segmentation nodes, mask painters.</p>
      <p>Consumers: VAEEncodeForInpaint, KSampler (when wired through SetLatentNoiseMask).</p>

      <h2>CONDITIONING</h2>
      <p>
        A list of <code>(embedding_tensor, dict_of_extras)</code> pairs. The embedding is the encoded
        prompt; the extras dict carries control hints (ControlNet residuals, IP-Adapter image
        embeddings, area-conditioning regions). Most of the magic of advanced workflows happens here.
      </p>
      <p>Producers: CLIPTextEncode, ConditioningSetArea, ControlNet apply, IPAdapter apply.</p>
      <p>Consumer: KSampler (positive and negative).</p>

      <h2>The numeric types: INT, FLOAT, STRING, BOOLEAN</h2>
      <p>
        These can flow through links too — primitive value pipes. A typical use is sharing a seed
        across multiple KSamplers via a single PrimitiveNode of type INT.
      </p>

      <NoteBlock title="When the link won't latch">
        If a link refuses to connect, the type doesn't match. Check that LATENT goes only to LATENT,
        IMAGE only to IMAGE, etc. The most common confusion is trying to wire LATENT into a node that
        expects IMAGE — you need a VAEDecode in between.
      </NoteBlock>
    </>
  )
}

import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3MentalModel() {
  return (
    <>
      <p>
        The single fastest way to become productive in ComfyUI is to internalize one sentence:{' '}
        <strong>tensors flow through nodes, and the graph is the recipe.</strong> Everything else —
        the cute UI quirks, the menu organization, the custom-node ecosystem — is a consequence.
      </p>

      <DefinitionBlock title="The tensor-flow mental model">
        Each node consumes typed tensors at its input sockets, performs a deterministic computation,
        and emits typed tensors at its output sockets. There is no global state. There are no hidden
        side effects (with rare exceptions like file I/O). What you see on the canvas is everything
        that runs.
      </DefinitionBlock>

      <h2>The seven core types you must learn</h2>
      <table>
        <thead>
          <tr><th>Type</th><th>Meaning</th><th>Where it appears</th></tr>
        </thead>
        <tbody>
          <tr><td><code>MODEL</code></td><td>The diffusion UNet (or DiT) weights, ready to denoise</td><td>Output of CheckpointLoader; input to KSampler</td></tr>
          <tr><td><code>CLIP</code></td><td>The text encoder(s)</td><td>Output of CheckpointLoader; input to CLIPTextEncode</td></tr>
          <tr><td><code>VAE</code></td><td>The autoencoder that maps latent ↔ pixels</td><td>Output of CheckpointLoader / VAELoader; input to VAEDecode/Encode</td></tr>
          <tr><td><code>LATENT</code></td><td>The compressed image space the UNet works in</td><td>Output of EmptyLatentImage / KSampler; input to VAEDecode</td></tr>
          <tr><td><code>IMAGE</code></td><td>RGB pixels, shape [B, H, W, 3], values 0–1</td><td>Output of VAEDecode / LoadImage; input to SaveImage</td></tr>
          <tr><td><code>MASK</code></td><td>Single-channel float mask</td><td>Inpainting, segmentation, attention</td></tr>
          <tr><td><code>CONDITIONING</code></td><td>Encoded prompt + pooled embeddings + control hints</td><td>Output of CLIPTextEncode (and its augmenters); input to KSampler</td></tr>
        </tbody>
      </table>

      <h2>The four-stage anatomy of every basic workflow</h2>
      <ol>
        <li><strong>Load.</strong> CheckpointLoader / LoraLoader / VAELoader produce <code>MODEL</code>, <code>CLIP</code>, <code>VAE</code>.</li>
        <li><strong>Encode.</strong> CLIPTextEncode turns prompt text into <code>CONDITIONING</code>. EmptyLatentImage produces a noise <code>LATENT</code>.</li>
        <li><strong>Sample.</strong> KSampler consumes <code>MODEL</code>, positive/negative <code>CONDITIONING</code>, and <code>LATENT</code> to produce a denoised <code>LATENT</code>.</li>
        <li><strong>Decode &amp; save.</strong> VAEDecode turns <code>LATENT</code> into <code>IMAGE</code>, then SaveImage writes pixels to disk.</li>
      </ol>

      <p>
        Every recipe in this curriculum, no matter how elaborate — multi-LoRA stacks, video diffusion,
        agentic pipelines — is a variation on these four stages. We add nodes <em>between</em> stages
        (a LoRA between Load and Encode, a ControlNet between Encode and Sample, an upscaler after
        Decode), but the spine doesn't change.
      </p>

      <h2>What the runtime actually does</h2>
      <p>When you press <strong>Queue Prompt</strong>, ComfyUI:</p>
      <ol>
        <li>Serializes the canvas into a JSON description.</li>
        <li>Topologically sorts the nodes.</li>
        <li>Walks the graph, computing a hash of each node's inputs.</li>
        <li>Skips any node whose hash is unchanged from the previous run (re-uses cached output).</li>
        <li>Executes only the dirty nodes, in order.</li>
        <li>Pipes outputs into downstream nodes' inputs.</li>
      </ol>

      <NoteBlock title="The cache is your friend">
        Caching is why iterating on prompts in ComfyUI is so fast. The expensive nodes (CheckpointLoader,
        ControlNet apply) cache their outputs; only KSampler and downstream re-run when you tweak a
        sampler setting. Once you internalize this, you start designing workflows so the heaviest
        nodes are upstream of the things you want to iterate on.
      </NoteBlock>

      <h2>Common newcomer misconception</h2>
      <p>
        Newcomers often assume each node is a separate process or runs eagerly when added. Neither is
        true. Adding a node only mutates the canvas description — nothing runs until you queue. And the
        whole graph runs in one Python process, sharing one MPS device, one allocation pool. That is
        why memory budgets are global on Mac, and why thinking about which nodes are alive at once is
        going to matter when we hit the 24 GB ceiling.
      </p>
    </>
  )
}

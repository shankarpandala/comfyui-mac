import NoteBlock from '../../../components/content/NoteBlock.jsx'
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'

export default function S2ClipTextEncode() {
  return (
    <>
      <p>
        We have a MODEL, a CLIP, and a VAE. The next step is turning words into something the UNet
        can understand. That's CLIPTextEncode.
      </p>

      <DefinitionBlock title="CONDITIONING — the encoded prompt">
        CLIPTextEncode takes a STRING (your prompt) and a CLIP (the encoder), runs the tokenizer,
        runs the transformer, and emits a CONDITIONING — a list of (embedding_tensor, extras_dict)
        pairs that the sampler will use to steer denoising.
      </DefinitionBlock>

      <h2>Add two encoders</h2>
      <p>
        Stable Diffusion is a <em>classifier-free-guided</em> model: at each denoising step the UNet
        sees both a positive and a negative conditioning, and the sampler interpolates between them.
        So we need two CLIPTextEncode nodes.
      </p>
      <ol>
        <li>Drag from the CheckpointLoader's CLIP output → release on empty canvas → pick <strong>CLIPTextEncode (Prompt)</strong>. The drag-from-socket trick we learned in chapter 3.</li>
        <li>Repeat for the negative encoder.</li>
        <li>Rename them by double-clicking the title: "Positive Prompt" and "Negative Prompt".</li>
      </ol>

      <h2>Write a positive prompt</h2>
      <p>For SD1.5, simple noun-phrase prompts work best. Try:</p>
      <pre>{`a photo of a golden retriever puppy on a beach at sunset, soft light, sharp focus, 35mm`}</pre>

      <h2>Write a negative prompt</h2>
      <p>The negative tells the sampler what to push <em>away</em> from. A safe SD1.5 starter:</p>
      <pre>{`blurry, low quality, deformed, watermark, text`}</pre>

      <h2>What just got computed</h2>
      <p>
        Each CLIPTextEncode node produces a CONDITIONING you can think of as "this prompt as a
        77-token tensor that the cross-attention layers in the UNet will attend to." The negative
        encoder produces a conditioning of equal shape but opposite intent. Both flow into KSampler
        in the next section.
      </p>

      <NoteBlock title="Token budget">
        SD1.5's CLIP truncates after 77 tokens. ComfyUI's encoder handles longer prompts by chunking
        and concatenating, but the per-chunk attention is still 77 tokens. Subject 05 covers prompt
        scheduling (BREAK and chunk control) — for now keep prompts under one or two sentences.
      </NoteBlock>
    </>
  )
}

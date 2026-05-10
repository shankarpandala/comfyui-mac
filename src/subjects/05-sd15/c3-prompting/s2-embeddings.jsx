import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Embeddings() {
  return (
    <>
      <p>
        Textual Inversion ("embeddings") lets you train a single new "word" that the CLIP encoder
        recognizes — a compact way to teach a style or concept without finetuning the whole UNet.
      </p>

      <h2>How embeddings work</h2>
      <ol>
        <li>Pick a token name like <code>my-style</code>.</li>
        <li>Train a 768-dim vector to represent that token in CLIP's embedding space.</li>
        <li>At inference, mention <code>my-style</code> in your prompt — CLIPTextEncode substitutes the trained vector instead of CLIP's normal encoding.</li>
      </ol>

      <h2>Sizes</h2>
      <ul>
        <li>One embedding ≈ 1–4 KB (just a few vectors).</li>
        <li>Vastly smaller than LoRAs (50–500 MB).</li>
      </ul>

      <h2>Folder placement and use in ComfyUI</h2>
      <ol>
        <li>Place <code>my-style.pt</code> or <code>my-style.safetensors</code> in <code>models/embeddings/</code>.</li>
        <li>Restart ComfyUI or press <code>R</code>.</li>
        <li>Reference in any prompt: <code>portrait of a person, embedding:my-style</code></li>
      </ol>
      <p>
        Some custom nodes (Custom-Scripts pythongosssss) provide autocomplete that surfaces installed
        embeddings in a dropdown as you type.
      </p>

      <h2>Negative embeddings</h2>
      <p>
        The most popular use of embeddings today is the "quality booster" negative — embeddings
        trained on bad anatomy, blurry images, watermarks. Famous examples: <code>EasyNegative</code>,{' '}
        <code>BadDream</code>, <code>UnrealisticDream</code>, <code>FastNegativeV2</code>.
      </p>
      <p>Add them to your negative prompt and they push the sampler away from broken outputs without you having to enumerate failure modes by hand.</p>

      <NoteBlock title="Embeddings vs LoRAs">
        Embeddings are tiny (KB) and only modify text encoding. LoRAs are larger (MB) and modify the
        UNet itself, so they can teach concepts that don't fit in a single token vector. Use
        embeddings for negatives and concept-anchors; LoRAs for characters, styles, and visual identities.
      </NoteBlock>
    </>
  )
}

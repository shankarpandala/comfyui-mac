import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Clip() {
  return (
    <>
      <p>
        SD 1.5's text encoder is OpenAI's <strong>CLIP ViT-L/14</strong> — the "L" version with 14×14
        patches. This single-encoder design is why SD 1.5 prompts feel different from SDXL's
        dual-encoder prompts.
      </p>

      <h2>Numbers</h2>
      <ul>
        <li>~63 M parameters in the text-side transformer</li>
        <li>~250 MB at fp16</li>
        <li>768-dim embedding output</li>
        <li>77-token context window (hard limit per chunk)</li>
      </ul>

      <h2>How prompts are tokenized</h2>
      <ol>
        <li>Tokenize prompt into BPE tokens.</li>
        <li>Pad/truncate to 77 tokens.</li>
        <li>Run through 12-layer transformer.</li>
        <li>Output: 77×768 tensor (one embedding per token).</li>
        <li>Plus a "pooled" embedding (the CLS-like vector).</li>
      </ol>

      <h2>The 77-token limit and how ComfyUI handles longer prompts</h2>
      <p>
        ComfyUI's CLIPTextEncode node accepts arbitrary-length prompts. Behind the scenes it splits
        into 77-token chunks, encodes each, and concatenates. Each chunk has its own attention
        context — words in chunk 1 cannot attend to words in chunk 2. Use the <code>BREAK</code>{' '}
        keyword to control where the split happens.
      </p>

      <h2>Why SD 1.5 prompts feel "tag-like"</h2>
      <p>
        CLIP-L was trained on image-caption pairs scraped from the web. The captions were short and
        often noun-phrase-heavy — "a photo of a cat," "an oil painting of a forest." Models trained
        on top inherit this bias. Long sentences with verbs and clauses work less well than short
        comma-separated noun phrases.
      </p>

      <NoteBlock title="The contrast with FLUX/SD3">
        FLUX and SD3 add a T5-XXL encoder (~5 B params) alongside CLIP. T5 was trained on natural
        language and follows long sentences much better. That's why FLUX prompts read like English
        and SD 1.5 prompts read like Booru tags.
      </NoteBlock>
    </>
  )
}

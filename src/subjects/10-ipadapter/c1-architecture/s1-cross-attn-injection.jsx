import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1CrossAttnInjection() {
  return (
    <>
      <p>
        IP-Adapter (Tencent, 2023) lets you use an <em>image</em> as a prompt. Feed it a reference
        photo; the UNet generates outputs influenced by that image's content, style, or identity.
        The mechanism: an image-encoder produces a token sequence that's injected into the UNet's
        cross-attention alongside (or instead of) the text tokens.
      </p>

      <DefinitionBlock title="IP-Adapter">
        A small adapter (image projector + lightweight cross-attention) that takes CLIP-Vision
        embeddings of a reference image and injects them into the UNet's cross-attention layers.
        The base UNet weights stay frozen; only the adapter is trained per (model family, adapter
        version) pair.
      </DefinitionBlock>

      <h2>The data flow</h2>
      <ol>
        <li>Reference image → CLIP-Vision encoder → image embeddings.</li>
        <li>IP-Adapter projector → a small sequence of "image tokens" in CLIP-text-embedding space.</li>
        <li>These tokens are added as additional cross-attention context alongside the text tokens.</li>
        <li>UNet attends to text + image tokens jointly during sampling.</li>
      </ol>

      <h2>Why this is powerful</h2>
      <ul>
        <li>Reference images can convey what text struggles to (specific style, exact face, exact composition).</li>
        <li>Stacks with text — "this person, in [text-described scene]".</li>
        <li>Stacks with ControlNet — image content + spatial control.</li>
        <li>Stacks with itself — multiple reference images blended.</li>
      </ul>

      <h2>The variants we'll cover</h2>
      <ul>
        <li><strong>Plus</strong> — the workhorse general image-prompt adapter.</li>
        <li><strong>FaceID / FaceID Plus v2</strong> — identity-preserving for faces.</li>
        <li><strong>FaceID Portrait</strong> — strongest identity adapter.</li>
        <li><strong>InstantID</strong> — alternative identity approach with ControlNet integration.</li>
        <li><strong>PuLID</strong> — newest, best Mac performance for identity preservation.</li>
      </ul>

      <NoteBlock title="The Phase 5b connection">
        IP-Adapter is the foundation for "AI clone of yourself" workflows. PuLID, InstantID, and
        FaceID are all variants targeting that use case. Subject 27 details the identity stack;
        this subject is the prerequisite theory.
      </NoteBlock>
    </>
  )
}

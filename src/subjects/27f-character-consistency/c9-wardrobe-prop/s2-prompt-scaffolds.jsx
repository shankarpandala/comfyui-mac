import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2PromptScaffolds() {
  return (
    <>
      <p>Prompt scaffolds: identical descriptive language across all segments to anchor wardrobe and visual details.</p>

      <h2>The technique</h2>
      <p>
        Define a "character description" template once. Use it as a prefix in every segment's
        prompt:
      </p>
      <pre>{`[trigger-word], wearing dark blue button-up shirt and gray jeans,
medium-length brown hair styled neatly, professional appearance,
[scene-specific description here]`}</pre>

      <h2>Why this helps</h2>
      <ul>
        <li>Same descriptive tokens → same CLIP embeddings → similar visual emphasis.</li>
        <li>Wardrobe stays consistent because the prompt repeats the description.</li>
        <li>Free; no model load cost.</li>
      </ul>

      <h2>Combine with character LoRA</h2>
      <p>
        Prompt scaffolds + character LoRA + outfit LoRA = three-layer wardrobe locking. Each
        catches what the others miss.
      </p>

      <h2>The "long master prompt" trick</h2>
      <p>
        Some workflows use a 50-word "always-on" character description copy-pasted into every prompt.
        Adds tokens but anchors heavily. Pair with FLUX (which handles long prompts well) for best
        result.
      </p>

      <NoteBlock title="The cheap consistency trick">
        Before training outfit LoRAs, try prompt scaffolds. They're free and cover ~70% of the
        wardrobe-consistency benefit. LoRAs handle the last 30% if it matters.
      </NoteBlock>
    </>
  )
}

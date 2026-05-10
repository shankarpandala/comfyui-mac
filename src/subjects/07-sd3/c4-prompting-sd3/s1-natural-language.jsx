import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1NaturalLanguage() {
  return (
    <>
      <p>
        Because SD3 has T5 alongside CLIP, you can write longer descriptive prompts and the model
        will follow them. This is a real change from SDXL/SD1.5's tag-style preference.
      </p>

      <h2>Tag style (still works but doesn't shine)</h2>
      <pre>{`a girl, long hair, blue eyes, white dress, garden background,
sunset lighting, photorealistic, sharp focus`}</pre>

      <h2>Natural language style (T5's strength)</h2>
      <pre>{`A young woman with long flowing brown hair and bright blue eyes
stands in a sunlit garden, wearing a flowing white dress that catches
the warm light of late afternoon. The composition is a three-quarter
portrait with shallow depth of field. Photorealistic, sharp focus.`}</pre>

      <h2>Why this works</h2>
      <ul>
        <li>T5 was trained on natural language and follows long sentences with verbs and clauses.</li>
        <li>MMDiT's joint attention preserves the structure of the prompt across all UNet blocks.</li>
        <li>SD3's training data captions were curated to be more descriptive than SD1.5's web-scraped captions.</li>
      </ul>

      <h2>What still helps</h2>
      <ul>
        <li><strong>Quality phrases at the end</strong>: "photorealistic, sharp focus, professional lighting" — still useful.</li>
        <li><strong>Negative prompts</strong>: same patterns as SDXL.</li>
        <li><strong>Reasonable length</strong>: 2–4 sentences. Don't write a novel — too much detail competes for attention.</li>
      </ul>

      <h2>Text in image</h2>
      <p>
        SD3 actually renders text. Quote your text in the prompt:
      </p>
      <pre>{`A storefront window with a neon sign that reads "OPEN 24 HOURS"
in bright pink letters. Night street, rain, cinematic.`}</pre>
      <p>
        SD3 will render the text correctly most of the time. SDXL would garble it. This single
        capability is the biggest functional advantage of SD3-family.
      </p>

      <NoteBlock title="The transition skill">
        Coming from SDXL, the muscle memory is "noun phrases, comma separated." Train yourself to
        write actual sentences for SD3. Long descriptions land. The tag-style instinct holds you
        back.
      </NoteBlock>
    </>
  )
}

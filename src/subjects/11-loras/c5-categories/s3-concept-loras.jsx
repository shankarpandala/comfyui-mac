import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3ConceptLoras() {
  return (
    <>
      <p>
        Concept LoRAs teach narrow visual concepts that aren't characters or full styles — specific
        outfits, poses, lighting setups, materials, weather effects.
      </p>

      <h2>Examples</h2>
      <ul>
        <li>"Detailed lace clothing" — outfit-detail LoRA.</li>
        <li>"Dramatic backlighting" — lighting style LoRA.</li>
        <li>"Watercolor splash effects" — material/effect LoRA.</li>
        <li>"Detailed hands" — anatomy correction LoRA.</li>
        <li>"Old film grain" — visual effect LoRA.</li>
      </ul>

      <h2>Strength range</h2>
      <p>
        Concept LoRAs typically need lower strength than character or style LoRAs because they're
        narrow:
      </p>
      <ul>
        <li><strong>0.3–0.5</strong> — typical sweet spot.</li>
        <li><strong>0.5–0.7</strong> — emphatic concept.</li>
        <li><strong>1.0+</strong> — usually breaks (the concept dominates so much it warps everything).</li>
      </ul>

      <h2>Concept LoRAs in stacks</h2>
      <p>
        These are designed to layer with character/style LoRAs. The total strength budget rule from
        chapter 2 still applies — adding concept LoRAs lowers everyone's strength.
      </p>

      <h2>The "negative concept" trick</h2>
      <p>
        Some concept LoRAs are trained on undesired things ("bad anatomy", "blurry"). Apply at
        <strong> negative strength</strong> (e.g., -0.5) to push the model away from the concept.
        Equivalent in spirit to a strong negative prompt but more targeted.
      </p>

      <h2>Detailer LoRAs</h2>
      <p>
        A specific concept-LoRA category: "add more detail" LoRAs. Apply globally at low strength
        to enhance image fidelity. <code>add_detail.safetensors</code> for SDXL is a popular one.
        Pair with <code>RescaleCFG</code> to avoid over-saturation.
      </p>

      <NoteBlock title="The 'right tool for the job'">
        For "I want this character" → character LoRA. For "I want this aesthetic" → style LoRA.
        For "I want this specific visual element" → concept LoRA. Don't use one type when another
        is correct — fewer LoRAs at the right type beats more LoRAs at the wrong type.
      </NoteBlock>
    </>
  )
}

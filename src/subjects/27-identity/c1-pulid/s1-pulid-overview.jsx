import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1PulidOverview() {
  return (
    <>
      <p>
        PuLID (Pure and Lightning ID Customization, ByteDance 2024) is the recommended Mac
        identity-preserving adapter for FLUX. Stronger identity than IP-Adapter FaceID, lower
        memory than InstantID, FLUX-native.
      </p>

      <DefinitionBlock title="PuLID">
        Identity adapter that injects face embeddings (from EVA-CLIP-L + InsightFace) into the
        UNet's cross-attention. Trained with a contrastive identity loss + an identity-direction
        objective so the face embedding doesn't drift across sampling steps.
      </DefinitionBlock>

      <h2>Why PuLID wins on Mac</h2>
      <ul>
        <li><strong>Strongest identity</strong> for FLUX — visibly more faithful than FaceID Plus v2.</li>
        <li><strong>Lighter than InstantID</strong> — no separate ControlNet branch.</li>
        <li><strong>Stacks cleanly</strong> with character LoRAs.</li>
        <li><strong>Mac-friendly</strong> — runs on MPS without CUDA-only kernels.</li>
      </ul>

      <h2>Architecture</h2>
      <p>
        PuLID has two paths: an "identity" path that's strict, and a "lightning" path that gets
        baked in to the cross-attention via the same trick as ID-aware text encoders. The double
        path is what gives it strong identity without breaking text adherence.
      </p>

      <h2>Variants</h2>
      <ul>
        <li><strong>PuLID FLUX</strong> — recommended Mac default.</li>
        <li><strong>PuLID SDXL</strong> — for SDXL workflows that need identity preservation.</li>
      </ul>

      <NoteBlock title="The Mac default">
        For any Mac workflow that needs "this specific person" generation: PuLID FLUX. We cover
        the recipe in section 2 and the Mac-specific tuning.
      </NoteBlock>
    </>
  )
}

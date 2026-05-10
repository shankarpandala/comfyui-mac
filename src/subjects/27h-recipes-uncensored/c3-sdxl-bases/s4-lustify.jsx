import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S4Lustify() {
  return (
    <>
      <p>Lustify SDXL — photoreal uncensored SDXL finetune. For adult content creators wanting realism over anime.</p>

      <h2>Status</h2>
      <ul>
        <li>SDXL-derivative; works with standard SDXL workflows.</li>
        <li>From CivitAI; multiple community photoreal-uncensored alternatives also exist.</li>
        <li>Mac compatibility: same as any SDXL base — straight CheckpointLoaderSimple.</li>
      </ul>

      <h2>Recipe</h2>
      <ul>
        <li>Standard SDXL workflow.</li>
        <li>cfg 5.0-6.0; sampler dpmpp_2m_sde + karras.</li>
        <li>Photoreal-leaning prompts.</li>
      </ul>

      <NoteBlock title="Photoreal alternatives">
        For photoreal uncensored on Mac: Lustify, NTRMix, Dreamshaper-XL-NSFW, others. Survey
        CivitAI's "photoreal" + "NSFW" filter; pick by output samples.
      </NoteBlock>
    </>
  )
}

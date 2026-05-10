import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Pony() {
  return (
    <>
      <p>Pony Diffusion v6 XL — most-used uncensored SDXL base for character art. Pony's training data was unfiltered; no built-in moderation.</p>

      <h2>Files</h2>
      <ul>
        <li><code>ponyDiffusionV6XL_v6StartWithThisOne.safetensors</code> (~6.7 GB)</li>
        <li>From CivitAI's Pony page or community mirrors.</li>
      </ul>

      <h2>Mac usage</h2>
      <p>Standard SDXL workflow (Subject 27a / Chapter 1). Pony-specific prompt prefix:</p>
      <pre>{`score_9, score_8_up, score_7_up, source_anime,
[your subject prompt here]`}</pre>

      <h2>License</h2>
      <p>Pony has its own license — check the CivitAI page. Permits non-commercial use; commercial requires conditions.</p>

      <h2>Use cases</h2>
      <ul>
        <li>Character art with mature themes.</li>
        <li>Adult-content creators using own likeness or consensual subjects.</li>
        <li>Strong on action / dynamic poses that hosted services tone down.</li>
      </ul>

      <NoteBlock title="The community ecosystem">
        Pony has the largest LoRA ecosystem of any uncensored base. Character / outfit / action /
        scene LoRAs all stack on top. Subject 11 covers LoRA stacking.
      </NoteBlock>
    </>
  )
}

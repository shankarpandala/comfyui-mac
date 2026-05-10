import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2PoseCharacter() {
  return (
    <>
      <p>OpenPose ControlNet + character LoRA — your specific character in the exact pose from a reference.</p>

      <h2>Recipe</h2>
      <ol>
        <li>SDXL load (matching the LoRA's base, e.g., Pony if Pony LoRA).</li>
        <li><code>LoraLoader</code> → character LoRA, strength 0.85.</li>
        <li><code>LoadImage</code> → pose reference photo.</li>
        <li><code>DWPreprocessor</code> → pose skeleton.</li>
        <li><code>ControlNetLoader</code> → SDXL Union, type=openpose.</li>
        <li><code>ControlNetApplyAdvanced</code> → strength 0.8.</li>
        <li>CLIPTextEncode → trigger word + scene description.</li>
        <li>KSampler.</li>
      </ol>

      <h2>Wall time</h2>
      <p>~22 seconds per image on M5 Pro.</p>

      <h2>Use cases</h2>
      <ul>
        <li>Character poster set — same character, varied poses from reference photos.</li>
        <li>Action sequences — extract poses from action shots, restage with your character.</li>
        <li>Reference-driven illustration.</li>
      </ul>

      <NoteBlock title="The character + pose stack">
        Character LoRA (identity) + OpenPose ControlNet (pose) is one of the most-used 2-input
        recipes in character art. Pony / Illustrious community workflows lean heavily on this
        pattern.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3StrengthTuning() {
  return (
    <>
      <p>
        Tuning LoRA strengths is a learnable skill. Symptoms tell you which way to push; this
        section is the diagnostic guide.
      </p>

      <h2>Symptoms and fixes</h2>

      <h3>"My character LoRA isn't producing the character"</h3>
      <ul>
        <li>Did you include the trigger word? Check the LoRA's CivitAI page.</li>
        <li>Try strength 1.2 (slightly over).</li>
        <li>Try strength_clip ↑ to 1.0 even if you'd otherwise lower it.</li>
        <li>Does the LoRA require a specific base model (e.g., Pony-trained character LoRAs need a Pony-derived base)?</li>
      </ul>

      <h3>"My output looks fried / oversaturated"</h3>
      <ul>
        <li>Total LoRA strength too high — drop each by 0.2.</li>
        <li>Drop CFG by 1–2.</li>
        <li>Conflict between LoRAs — try removing one to see which is the culprit.</li>
      </ul>

      <h3>"Style LoRA is changing the character's identity"</h3>
      <ul>
        <li>Drop style LoRA's strength_clip to 0.5 — style usually doesn't need text-encoder influence.</li>
        <li>Reorder: character LoRA after style LoRA in the chain.</li>
      </ul>

      <h3>"Lightning + character LoRA produces weird poses"</h3>
      <ul>
        <li>Lightning is sensitive — drop character LoRA strength to 0.6.</li>
        <li>Increase steps from 4 to 6 or 8.</li>
        <li>Try Hyper-SD-CFG instead of Lightning (more forgiving with stacks).</li>
      </ul>

      <h2>The "halve and bisect" tuning method</h2>
      <p>When a LoRA is too strong:</p>
      <ol>
        <li>Halve the strength (1.0 → 0.5).</li>
        <li>If too weak now, try 0.75.</li>
        <li>If still too weak, try 0.85.</li>
        <li>Bisect until you find the sweet spot.</li>
      </ol>
      <p>Faster than guessing 0.7, then 0.6, then 0.65.</p>

      <NoteBlock title="The honesty about LoRAs">
        LoRAs vary wildly in quality. A well-trained LoRA works at 1.0; a poorly-trained one needs
        delicate strength tuning to not break things. If you spend more than 5 minutes tuning, the
        LoRA might just be bad — try a different one.
      </NoteBlock>
    </>
  )
}

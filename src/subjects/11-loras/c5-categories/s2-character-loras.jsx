import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2CharacterLoras() {
  return (
    <>
      <p>
        Character LoRAs teach the model what a specific person/character/creature looks like. The
        most popular LoRA category by far. Includes anime characters, real celebrities, original
        characters, and (Phase 5b territory) you yourself.
      </p>

      <h2>Examples</h2>
      <ul>
        <li>Anime characters (Pony / Illustrious LoRAs)</li>
        <li>Realistic celebrities (CivitAI; check legal status before commercial use)</li>
        <li>Game characters</li>
        <li>Original characters (often community OCs)</li>
        <li>Personal LoRAs of yourself (Subject 12)</li>
      </ul>

      <h2>Recipe</h2>
      <ol>
        <li>Standard load (matching base — Pony LoRA on Pony, Illustrious LoRA on Illustrious, etc.)</li>
        <li>LoraLoader at strength 0.7–1.0.</li>
        <li>Prompt includes the character's trigger word(s).</li>
        <li>Standard sampling.</li>
      </ol>

      <h2>The base-matching rule</h2>
      <p>
        Character LoRAs are trained against a specific base. Using the wrong base produces washed-out
        or off-model results.
      </p>
      <ul>
        <li>Pony LoRAs → use a Pony-derived base.</li>
        <li>Illustrious LoRAs → use Illustrious or Illustrious-derived.</li>
        <li>SDXL base LoRAs (rare for characters today) → use SDXL base or Juggernaut.</li>
        <li>FLUX LoRAs → use FLUX Dev or Schnell.</li>
      </ul>

      <h2>Character + style stack</h2>
      <p>
        Character LoRA + style LoRA = your character in that style. Strength 0.8 character + 0.5
        style is typical. Style LoRA can pull character appearance toward its training data — adjust
        strengths to balance.
      </p>

      <h2>Multi-character compositions</h2>
      <p>
        Two character LoRAs in the same image is hard. Without regional prompting (Subject 32),
        characters tend to bleed together (one face, mixed features). Use regional prompting +
        per-region LoRAs for multi-character scenes — much more reliable.
      </p>

      <NoteBlock title="The self-LoRA path">
        Subject 12 details how to train a LoRA of yourself for the Phase 5 capstone. The same recipe
        works for OC's, custom characters, anyone you have ~30 photos of.
      </NoteBlock>
    </>
  )
}

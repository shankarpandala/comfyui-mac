import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1WardrobeLoras() {
  return (
    <>
      <p>Wardrobe consistency: train small LoRAs for specific outfits. Stack with character LoRA so outfit stays the same across long videos.</p>

      <h2>The pattern</h2>
      <ul>
        <li>Take 5-10 photos of yourself in a specific outfit.</li>
        <li>Train a small (rank 4-8) outfit LoRA at low learning rate.</li>
        <li>Stack with character LoRA: character (0.7) + outfit (0.4).</li>
        <li>Apply across all segments where that outfit should appear.</li>
      </ul>

      <h2>Outfit LoRA training</h2>
      <ul>
        <li>Caption: "wearing [outfit-trigger], shirt color X, pants color Y" + your character trigger.</li>
        <li>Training time on M5 Pro: ~1 hour for a small outfit LoRA.</li>
        <li>Don't go big — outfit LoRAs are simpler than character LoRAs.</li>
      </ul>

      <h2>For multi-outfit content</h2>
      <p>
        Train one outfit LoRA per signature look. For an AI clone Reel where you "change clothes",
        swap outfit LoRAs at scene cuts. Same character, multiple outfits.
      </p>

      <h2>Wardrobe vs prompt control</h2>
      <p>
        For one-time outfits, prompt alone often works ("wearing a red dress"). Outfit LoRAs are
        for outfits you'll re-use, where consistency across many clips matters.
      </p>

      <NoteBlock title="The series-of-Reels approach">
        For a brand identity built on AI clone content, train 3-5 outfit LoRAs for your signature
        looks. Always use the same trigger words. Audience starts recognizing your "look".
      </NoteBlock>
    </>
  )
}

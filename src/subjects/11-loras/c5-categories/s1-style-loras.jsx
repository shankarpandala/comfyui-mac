import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1StyleLoras() {
  return (
    <>
      <p>
        Style LoRAs change how the model renders — color palette, brushwork, texture, lighting feel.
        They don't change <em>what</em> the model generates, just how it looks.
      </p>

      <h2>Examples</h2>
      <ul>
        <li>"Studio Ghibli style" — soft watercolor, warm palette.</li>
        <li>"Cyberpunk 2077 style" — neon palette, rain, holograms.</li>
        <li>"1980s film grain" — color-graded retro look.</li>
        <li>"Oil painting" — visible brushstrokes, painted texture.</li>
        <li>"Cinematic" — anamorphic feel, film-like grading.</li>
      </ul>

      <h2>Recipe</h2>
      <ol>
        <li>Standard SDXL or FLUX load.</li>
        <li>LoraLoader for the style LoRA, strength 0.5–0.8.</li>
        <li>Prompt describes subject; LoRA's trigger word may need to be included (check CivitAI page).</li>
        <li>KSampler.</li>
      </ol>

      <h2>Strength tuning for style</h2>
      <ul>
        <li><strong>0.4</strong> — subtle stylistic flavor.</li>
        <li><strong>0.6</strong> — clearly the style; flexible content.</li>
        <li><strong>0.8</strong> — strongly the style; less prompt freedom.</li>
        <li><strong>1.0</strong> — over-style; outputs may all look the same.</li>
      </ul>

      <h2>Stacking style LoRAs</h2>
      <p>
        Two style LoRAs at moderate strength (0.5 each) can blend interestingly: "Ghibli + cyberpunk
        = neon fairytale". Three or more usually muddles into a generic mess.
      </p>

      <h2>Style LoRA + character LoRA</h2>
      <p>The classic combo. Character LoRA at 0.8, style LoRA at 0.6, output blends both. Watch for the style overriding the character's appearance — drop style strength if so.</p>

      <NoteBlock title="The Mac default style LoRAs">
        For Phase 5 capstone work: keep one or two style LoRAs you like for the base aesthetic of
        your channel. Build a personal style by training a small (rank 8) LoRA on 30–50 images of
        your aesthetic preference. Subject 12 covers the training.
      </NoteBlock>
    </>
  )
}

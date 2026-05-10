import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1AnySetting() {
  return (
    <>
      <p>Self-clone t2i: yourself in any setting from a text prompt.</p>

      <h2>Recipe</h2>
      <ol>
        <li>Identity stack (Subject 27g / Chapter 5).</li>
        <li>Prompt: "[trigger] [setting]" e.g., "ohwx man standing in a Tokyo street at night, neon lights, cyberpunk".</li>
        <li>KSampler, 20 steps.</li>
      </ol>

      <h2>Prompt patterns</h2>
      <ul>
        <li>"[trigger] in a coffee shop, working on laptop, soft window light"</li>
        <li>"[trigger] hiking in mountains, golden hour, dramatic landscape"</li>
        <li>"[trigger] giving a presentation in a conference room, business attire"</li>
        <li>"[trigger] cooking in modern kitchen, casual outfit"</li>
      </ul>

      <h2>Wall time</h2>
      <p>~70-80 s per FLUX Q5_K_S image with full identity stack.</p>

      <h2>For social media</h2>
      <p>
        Generate at 768×1344 (9:16) for Reels. Or 1024×1024 square for Instagram main feed. The same
        prompt across aspect ratios produces "you in setting X" suitable for the platform.
      </p>

      <NoteBlock title="The new content mode">
        With this recipe, "post a photo of myself somewhere" no longer requires being there. Travel
        Reels, lifestyle content, brand placements — all generated locally on Mac.
      </NoteBlock>
    </>
  )
}

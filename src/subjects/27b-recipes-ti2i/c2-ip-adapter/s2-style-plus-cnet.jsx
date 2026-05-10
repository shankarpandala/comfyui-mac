import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2StylePlusCnet() {
  return (
    <>
      <p>IP-Adapter style + ControlNet Canny — preserve composition from one reference, style from another.</p>

      <h2>Recipe</h2>
      <ol>
        <li>Standard SDXL load.</li>
        <li>IPAdapter STANDARD → style reference image, strength 0.6, weight_type <code>style transfer</code>.</li>
        <li>ControlNet Union (Canny) → composition reference image (Canny preprocess), strength 0.7.</li>
        <li>CLIPTextEncode → subject description.</li>
        <li>KSampler.</li>
      </ol>

      <h2>The three independent inputs</h2>
      <ul>
        <li><strong>Text prompt</strong> — what subject</li>
        <li><strong>IP-Adapter image</strong> — what style</li>
        <li><strong>ControlNet image</strong> — what composition</li>
      </ul>

      <h2>Memory</h2>
      <p>SDXL + Union ControlNet + IP-Adapter Plus + CLIP-Vision-G ≈ 16 GB. Tight but workable.</p>

      <h2>Wall time</h2>
      <p>~22 seconds per image on M5 Pro.</p>

      <NoteBlock title="The 'compositional control' workflow">
        This 3-input pattern is the workhorse for branded content production. Same composition
        across many shots (Canny refs); same brand style across all (IP-Adapter ref); varying
        subjects (text prompt). Subject 30 covers the production cadence.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Lighting() {
  return (
    <>
      <p>
        Lighting matters as much as composition. Bad lighting → LoRA learns weird shadows. Good
        lighting → LoRA generalizes to any scene.
      </p>

      <h2>The lighting plan</h2>

      <h3>1. Bright, diffuse, indoor (10-15 photos)</h3>
      <ul>
        <li>Near a large window during midday.</li>
        <li>Even illumination on face.</li>
        <li>Slight shadow on one side gives depth without heavy contrast.</li>
      </ul>

      <h3>2. Soft warm indoor (10-15 photos)</h3>
      <ul>
        <li>Late afternoon, slight golden cast.</li>
        <li>Warm color temperature (3500-4500K).</li>
      </ul>

      <h3>3. Cool overhead (5-10 photos)</h3>
      <ul>
        <li>Office / kitchen ceiling lights.</li>
        <li>Cool white (5000-6500K).</li>
      </ul>

      <h3>4. Outdoor varied (10-15 photos)</h3>
      <ul>
        <li>Open shade (no direct sun on face).</li>
        <li>Golden hour (last hour of sun).</li>
        <li>Avoid harsh midday direct sun — too contrasty.</li>
      </ul>

      <h2>What to avoid</h2>
      <ul>
        <li>Single light source casting hard shadows.</li>
        <li>Mixed color temperature in same shot (warm lamp + cool window).</li>
        <li>Underexposure (too dark) — model learns shadow as feature.</li>
        <li>Overexposure / blowout — features lost.</li>
      </ul>

      <h2>The diffusion model bias</h2>
      <p>
        Diffusion models are trained on web photos — meaning they "expect" natural-light portraits.
        Your dataset should match. Heavy studio strobes (LinkedIn-headshot-style) work but can make
        outputs look stilted.
      </p>

      <NoteBlock title="The 'natural light' default">
        Default to natural-window-lit shots. They generalize best because the model has seen the
        most photos lit this way. Reserve studio / dramatic lighting for specific scene-appropriate
        outputs.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1DepthRelight() {
  return (
    <>
      <p>Depth ControlNet for relight — preserve a scene's geometry, change the lighting/mood.</p>

      <h2>Recipe</h2>
      <ol>
        <li>Standard SDXL load.</li>
        <li><code>LoadImage</code> → input scene.</li>
        <li><code>DepthAnythingV2Preprocessor</code> → depth map.</li>
        <li><code>ControlNetLoader</code> → SDXL Union, set type=depth.</li>
        <li><code>ControlNetApplyAdvanced</code> → strength 0.8.</li>
        <li>CLIPTextEncode → describe new lighting / mood / style. ("dramatic golden hour", "moody blue night", "overcast soft afternoon")</li>
        <li>KSampler with denoise 1.0 (full regen, controlled by depth).</li>
      </ol>

      <h2>Use cases</h2>
      <ul>
        <li>"Same room, different time of day"</li>
        <li>"Same product photo, different lighting"</li>
        <li>"Same architectural shot, different season"</li>
      </ul>

      <h2>Why depth wins for relight</h2>
      <p>
        Depth preserves 3D structure (geometry). Lighting depends on geometry but not on existing
        texture/color. So the model can paint new lighting onto the geometry without the original's
        color cast confusing it.
      </p>

      <NoteBlock title="Stack with IP-Adapter for color reference">
        Want specific color palette for the relight? Add IP-Adapter style transfer with a
        reference image whose palette you want. Result: geometry from input, lighting from prompt,
        palette from IP-Adapter ref.
      </NoteBlock>
    </>
  )
}

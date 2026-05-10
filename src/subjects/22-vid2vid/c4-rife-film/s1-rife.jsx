import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Rife() {
  return (
    <>
      <p>
        RIFE (Real-time Intermediate Flow Estimation) generates intermediate frames between video
        frames. Doubles or quadruples your frame rate for free — no diffusion needed.
      </p>

      <h2>Why interpolation matters</h2>
      <ul>
        <li>Most diffusion video models output 8–24 fps.</li>
        <li>Smooth playback wants 24–60 fps.</li>
        <li>Generating more frames in the diffuser = expensive.</li>
        <li>Interpolating with RIFE between sparse frames = cheap.</li>
      </ul>

      <h2>The model</h2>
      <ul>
        <li><code>rife49.pth</code> — current standard. ~30 MB.</li>
        <li>Newer versions exist; 49 is well-tested.</li>
      </ul>

      <h2>Custom node</h2>
      <p><code>ComfyUI-Frame-Interpolation</code> by Fannovel16. Provides <code>RIFE VFI</code> node.</p>

      <h2>Recipe</h2>
      <ol>
        <li>Generate video at native fps (e.g., LTX 24 fps × 97 frames = 4-second clip).</li>
        <li><code>RIFE VFI</code> → multiplier 2 → output at 48 fps × 193 frames.</li>
        <li><code>VHS_VideoCombine</code> at 48 fps.</li>
      </ol>

      <h2>Mac performance</h2>
      <p>RIFE on M5 Pro: ~3 ms per interpolated frame at 1024 resolution. 100 frames doubles to 200 in ~1 second.</p>

      <h2>Quality</h2>
      <ul>
        <li>RIFE at 2× — usually invisible. Smooth.</li>
        <li>RIFE at 4× — sometimes visible artifacts in fast motion.</li>
        <li>RIFE at 8×+ — for slow-motion effect; artifacts more visible.</li>
      </ul>

      <NoteBlock title="The standard pipeline addition">
        For any video output going to social media: RIFE 2× pass at the end. Doubles smoothness.
        Costs 1 second. No reason to skip.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1LtxStg() {
  return (
    <>
      <p>LTX vid2vid + STG (Spatio-Temporal Guidance) — middle-ground vid2vid. Faster than Wan VACE, higher quality than AnimateDiff.</p>

      <h2>Recipe</h2>
      <ol>
        <li>LTX load.</li>
        <li>VHS_LoadVideo → input clip (downsample to 768×512 or matching).</li>
        <li>VAEEncode → batch latent.</li>
        <li>CLIPTextEncode → desired style.</li>
        <li><code>STGGuidance</code> wraps the model with stg_scale 2.0, perturb_mode=temporal.</li>
        <li>KSampler at denoise 0.4-0.6 (preserve input motion).</li>
        <li>VAEDecode + VHS_VideoCombine.</li>
      </ol>

      <h2>Wall time</h2>
      <p>~5-8 min for 4-second clip on M5 Pro.</p>

      <h2>STG's role</h2>
      <p>
        STG (Subject 18 / Chapter 6) improves temporal coherence for vid2vid specifically. Without
        it, frames drift; with it, output stays consistent with input motion.
      </p>

      <NoteBlock title="The mid-tier vid2vid">
        LTX + STG is the Mac middle-ground for vid2vid. Use when AnimateDiff is too short / low
        quality and Wan VACE is too slow.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1IpPerFrame() {
  return (
    <>
      <p>Per-frame IP-Adapter style transfer — apply IP-Adapter to each video frame for style transfer. Lightweight; less coherent than VACE.</p>

      <h2>Recipe</h2>
      <ol>
        <li>VHS_LoadVideo → input batch.</li>
        <li>SDXL load + AnimateDiff (for temporal continuity).</li>
        <li>IP-Adapter Plus loader.</li>
        <li>LoadImage → style reference.</li>
        <li>IPAdapter applied with style_transfer weight type, strength 0.6.</li>
        <li>KSampler with denoise 0.5 (preserve input).</li>
      </ol>

      <h2>Wall time</h2>
      <p>~3 min for 16-frame clip.</p>

      <h2>Limitation</h2>
      <p>
        IP-Adapter is per-frame; without AnimateDiff providing temporal coherence, output flickers.
        AnimateDiff handles coherence; IP-Adapter applies style. Combined: passable; not as
        coherent as VACE.
      </p>

      <NoteBlock title="The 'fast style transfer' option">
        For Reels-quality style-transfer (60 s clips, multiple AnimateDiff segments concat), this
        recipe is faster than VACE. For hero edits, use VACE.
      </NoteBlock>
    </>
  )
}

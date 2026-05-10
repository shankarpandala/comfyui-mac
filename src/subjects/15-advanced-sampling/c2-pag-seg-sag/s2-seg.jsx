import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Seg() {
  return (
    <>
      <p>
        Smoothed Energy Guidance (SEG, Hong et al. 2024) is a softer alternative to PAG. Instead of
        replacing softmax with identity (which is harsh), SEG smooths the attention scores
        (Gaussian blur on the attention map) for a gentler perturbation.
      </p>

      <h2>How it differs from PAG</h2>
      <ul>
        <li><strong>PAG</strong>: complete attention disruption.</li>
        <li><strong>SEG</strong>: graduated attention smoothing.</li>
        <li>SEG is tunable by smoothing radius.</li>
      </ul>

      <h2>Parameters</h2>
      <ul>
        <li><strong>scale</strong>: 1.0–3.0.</li>
        <li><strong>blur_sigma</strong>: how much to smooth (1–10 typical).</li>
        <li><strong>start_at, end_at</strong>: same as PAG.</li>
      </ul>

      <h2>SEG vs PAG vs CFG</h2>
      <table>
        <thead><tr><th>Method</th><th>Strength character</th><th>Speed cost</th></tr></thead>
        <tbody>
          <tr><td>CFG</td><td>Sharp, requires negative prompt</td><td>2× per step</td></tr>
          <tr><td>PAG</td><td>Strong, no negative needed</td><td>1.3× per step</td></tr>
          <tr><td>SEG</td><td>Soft, tunable, no negative needed</td><td>1.3× per step</td></tr>
        </tbody>
      </table>

      <h2>Stacking</h2>
      <p>
        CFG + PAG + SEG can all be stacked. Total compute cost ~2.5× per step but quality benefits
        compound on hard prompts. For most workflows, CFG + PAG is the sweet spot.
      </p>

      <NoteBlock title="The tier-3 polish">
        SEG is third-tier polish. CFG is mandatory; PAG is a strong second; SEG is for the last 5%
        of quality on the hardest prompts. For Mac iteration speed, default to CFG only; add
        PAG/SEG only for hero shots.
      </NoteBlock>
    </>
  )
}

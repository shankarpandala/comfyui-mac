import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1StepsGuidance() {
  return (
    <>
      <p>
        FLUX has two main quality knobs: <code>steps</code> and <code>guidance</code>. They interact
        differently from SDXL's steps + CFG. This section is the empirically-derived sweet spots.
      </p>

      <h2>Steps for FLUX Dev</h2>
      <table>
        <thead><tr><th>Steps</th><th>Quality</th><th>Wall time on M5 Pro (Q5_K_S, 1024)</th></tr></thead>
        <tbody>
          <tr><td>10</td><td>Visible quality loss; rough edges</td><td>~25 s</td></tr>
          <tr><td>15</td><td>Acceptable; slight detail softness</td><td>~35 s</td></tr>
          <tr><td>20</td><td>Sweet spot. Use as default.</td><td>~45 s</td></tr>
          <tr><td>30</td><td>Marginally better detail</td><td>~65 s</td></tr>
          <tr><td>50</td><td>Diminishing returns; rarely worth it</td><td>~110 s</td></tr>
        </tbody>
      </table>

      <h2>Steps for FLUX Schnell</h2>
      <p>Schnell is distilled to 4 steps. Going lower (1, 2) loses too much; going higher rarely helps.</p>
      <table>
        <thead><tr><th>Steps</th><th>Quality</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Sketch only</td></tr>
          <tr><td>2</td><td>Compositions OK, details poor</td></tr>
          <tr><td>4</td><td>Sweet spot. The trained target.</td></tr>
          <tr><td>8</td><td>Diminishing — Schnell wasn't trained for it</td></tr>
        </tbody>
      </table>

      <h2>Guidance scalar for FLUX Dev</h2>
      <table>
        <thead><tr><th>guidance</th><th>Behavior</th></tr></thead>
        <tbody>
          <tr><td>1.5</td><td>Loose adherence; very creative</td></tr>
          <tr><td>2.5</td><td>Soft adherence</td></tr>
          <tr><td>3.5</td><td>Black Forest's published default. Recommended.</td></tr>
          <tr><td>5.0</td><td>Strong adherence; can over-saturate</td></tr>
          <tr><td>7.0+</td><td>Too strong; outputs lose variety</td></tr>
        </tbody>
      </table>

      <h2>Guidance for Schnell</h2>
      <p>Always 0. Schnell was distilled to ignore guidance — non-zero values produce worse outputs.</p>

      <NoteBlock title="The 'don't tune past defaults' principle">
        FLUX's default settings (Dev: 20 steps, guidance 3.5; Schnell: 4 steps, guidance 0) are the
        result of careful Black Forest research. Beginners frequently want to tweak; the tweaks
        usually make things worse. Tune only when you have a specific complaint about the default.
      </NoteBlock>
    </>
  )
}

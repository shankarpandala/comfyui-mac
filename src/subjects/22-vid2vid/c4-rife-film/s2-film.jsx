import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Film() {
  return (
    <>
      <p>
        FILM (Frame Interpolation for Large Motion, Google 2022) is an alternative to RIFE.
        Slightly higher quality on large-motion scenes; slower than RIFE.
      </p>

      <h2>The model</h2>
      <ul>
        <li><code>film_net_fp32.pt</code> — Google's release. ~120 MB.</li>
      </ul>

      <h2>Custom node</h2>
      <p>Same <code>ComfyUI-Frame-Interpolation</code> pack provides <code>FILM VFI</code> alongside RIFE.</p>

      <h2>Recipe</h2>
      <p>Identical wiring to RIFE — just swap the node.</p>

      <h2>RIFE vs FILM</h2>
      <table>
        <thead><tr><th>Aspect</th><th>RIFE</th><th>FILM</th></tr></thead>
        <tbody>
          <tr><td>Speed</td><td>~3 ms/frame</td><td>~30 ms/frame</td></tr>
          <tr><td>Quality (small motion)</td><td>Excellent</td><td>Excellent</td></tr>
          <tr><td>Quality (large motion)</td><td>Good</td><td>Better</td></tr>
          <tr><td>Mac compatibility</td><td>MPS</td><td>MPS</td></tr>
        </tbody>
      </table>

      <h2>Picking</h2>
      <ul>
        <li>Default to RIFE for speed.</li>
        <li>Switch to FILM if RIFE artifacts are visible (action scenes, fast camera moves).</li>
      </ul>

      <NoteBlock title="The 'add interpolation last' rule">
        Interpolation is a final-pass step. Don't interpolate then re-process — interpolated frames
        are slightly less accurate than diffused frames; further processing amplifies artifacts.
      </NoteBlock>
    </>
  )
}

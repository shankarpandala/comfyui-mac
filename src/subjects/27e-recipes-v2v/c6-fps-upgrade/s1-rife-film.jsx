import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1RifeFilm() {
  return (
    <>
      <p>FPS upgrade pass — RIFE/FILM frame interpolation as the final step in any video workflow.</p>

      <h2>Recipe</h2>
      <ol>
        <li>Generate at native fps (LTX 24 fps, AnimateDiff 8 fps, etc.).</li>
        <li><code>RIFE VFI</code> or <code>FILM VFI</code> with multiplier 2 or 3.</li>
        <li>VHS_VideoCombine at target fps.</li>
      </ol>

      <h2>Multiplier picks</h2>
      <table>
        <thead><tr><th>Source</th><th>Target</th><th>Multiplier</th></tr></thead>
        <tbody>
          <tr><td>AnimateDiff 8 fps</td><td>24 fps</td><td>×3</td></tr>
          <tr><td>SVD 7 fps</td><td>24 fps</td><td>×3 (drop a frame)</td></tr>
          <tr><td>LTX 24 fps</td><td>48 fps (slow-mo)</td><td>×2</td></tr>
          <tr><td>Wan 16 fps</td><td>30 fps</td><td>~×2</td></tr>
        </tbody>
      </table>

      <h2>Mac performance</h2>
      <p>RIFE: ~3 ms per interpolated frame. FILM: ~30 ms per frame. Negligible relative to diffusion sample times.</p>

      <NoteBlock title="The mandatory final step">
        Apply RIFE x2 to ALL video output going to social media. Cheap, makes content visibly
        smoother. No reason to skip.
      </NoteBlock>
    </>
  )
}

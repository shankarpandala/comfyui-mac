import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S214bVs5b() {
  return (
    <>
      <p>
        Concrete comparison: when 14B is worth it vs when 5B is enough on Mac.
      </p>

      <h2>Side-by-side</h2>
      <table>
        <thead>
          <tr><th>Aspect</th><th>Wan 5B</th><th>Wan 14B Q4_K_S</th></tr>
        </thead>
        <tbody>
          <tr><td>UNet size</td><td>~10 GB fp16, ~3.5 GB GGUF Q5</td><td>~8 GB GGUF Q4_K_S</td></tr>
          <tr><td>Mac memory total</td><td>~12 GB</td><td>~18 GB (tight)</td></tr>
          <tr><td>Wall time per 81 frames</td><td>~6–8 min</td><td>~15–25 min</td></tr>
          <tr><td>Quality</td><td>Strong; matches LTX 2B</td><td>Best Mac video quality</td></tr>
          <tr><td>Prompt adherence</td><td>Good</td><td>Excellent</td></tr>
          <tr><td>Long-shot consistency</td><td>Decent</td><td>Better</td></tr>
        </tbody>
      </table>

      <h2>When 5B is enough</h2>
      <ul>
        <li>B-roll / social media clips.</li>
        <li>Iteration / prompt exploration.</li>
        <li>When LTX is too low-quality but Hunyuan / 14B too slow.</li>
        <li>Tight memory (running browser or other apps alongside).</li>
      </ul>

      <h2>When 14B is worth the wait</h2>
      <ul>
        <li>Hero shots.</li>
        <li>Complex multi-element compositions.</li>
        <li>Long-shot character consistency (5B drifts more).</li>
        <li>I2V where input image fidelity matters most.</li>
      </ul>

      <h2>Wan 2.2 5B vs 14B trade-off</h2>
      <p>
        Wan 2.2 closes the quality gap somewhat — 2.2 5B is closer to 2.1 14B than 2.1 5B was. For
        most Mac users, Wan 2.2 5B is now the daily-driver Wan choice, with 2.1/2.2 14B Q4_K_S
        reserved for hero shots.
      </p>

      <NoteBlock title="The 'pick by use' approach">
        Wan 2.2 5B for daily video. Wan 14B I2V for animating AI clone stills (Subject 27g). Wan
        VACE for editing existing clips. Don't try to use one variant for all three.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S213b() {
  return (
    <>
      <p>
        LTX 13B is the larger sibling. Better quality, ~5× larger, slower. Workable on M5 Pro with
        GGUF.
      </p>

      <h2>Sizes</h2>
      <ul>
        <li>fp16: ~26 GB — won't fit on 24 GB Mac.</li>
        <li>GGUF Q5_K_S: ~13 GB — fits with discipline.</li>
        <li>GGUF Q4_K_S: ~10 GB — comfortable.</li>
      </ul>

      <h2>Where to get GGUF</h2>
      <p>City96's GGUF conversions show up shortly after each LTX release: <code>city96/LTX-Video-gguf</code>.</p>

      <h2>When 13B is worth it</h2>
      <ul>
        <li>Hero shots where quality matters more than time.</li>
        <li>Complex prompts that 2B doesn't follow well.</li>
        <li>Final renders for client / portfolio work.</li>
      </ul>

      <h2>When to stick with 2B</h2>
      <ul>
        <li>Iteration / ideation.</li>
        <li>B-roll where speed matters.</li>
        <li>Most Phase 5 capstone use cases (2B + LoRA + PuLID is enough).</li>
      </ul>

      <h2>Wall time on M5 Pro</h2>
      <table>
        <thead><tr><th>Model</th><th>Wall time per 97 frames @ 768×512</th></tr></thead>
        <tbody>
          <tr><td>LTX 2B fp16</td><td>~1.5–3 min</td></tr>
          <tr><td>LTX 13B Q5_K_S</td><td>~5–7 min</td></tr>
          <tr><td>LTX 13B Q4_K_S</td><td>~4–6 min</td></tr>
        </tbody>
      </table>

      <NoteBlock title="The Mac default">
        For most users on M5 Pro: stick with LTX 2B v0.9.7. Try 13B GGUF for hero shots when you've
        already locked in a prompt with 2B and want to elevate quality.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2QualityCost() {
  return (
    <>
      <p>
        Smaller dtypes save memory but can degrade outputs. The trade-off is non-linear: the first
        2× compression (fp16 → fp8 / Q8) is almost free; the last few bits are expensive.
      </p>

      <h2>Quality bands (subjective, but well-validated)</h2>

      <h3>Indistinguishable from reference</h3>
      <ul>
        <li><strong>fp16 / bf16</strong> — the reference quality. Everything trained recently.</li>
        <li><strong>fp8 e4m3fn</strong> — &lt; 1% measurable degradation on benchmarks.</li>
        <li><strong>GGUF Q8_0</strong> — same ballpark as fp8.</li>
      </ul>

      <h3>Tiny but visible degradation</h3>
      <ul>
        <li><strong>GGUF Q6_K</strong> — minor softening on fine textures.</li>
        <li><strong>GGUF Q5_K_M / Q5_K_S</strong> — visible if you A/B closely; usable for almost everything. Recommended Mac balance.</li>
      </ul>

      <h3>Noticeable but acceptable</h3>
      <ul>
        <li><strong>GGUF Q4_K_M / Q4_K_S</strong> — slight loss of small text fidelity, occasional finger artifacts. Fine for ideation; use Q5+ for hero shots.</li>
      </ul>

      <h3>Avoid for diffusion</h3>
      <ul>
        <li><strong>GGUF Q3_K_M and below</strong> — visible quality drop, especially in faces and text. LLMs tolerate Q3 OK; diffusion does not.</li>
        <li><strong>GGUF Q2_K</strong> — emergency only.</li>
      </ul>

      <h2>Where quality breaks down</h2>
      <p>Quantization stress-tests:</p>
      <ul>
        <li><strong>Small text in images.</strong> Q5 OK, Q4 starts smudging, Q3 breaks.</li>
        <li><strong>Hands and fingers.</strong> Q5 ≈ fp16, Q4 a bit more frequent flaws.</li>
        <li><strong>Fine fabric textures.</strong> Q4 starts looking smoother / less detailed.</li>
        <li><strong>Logos / brand marks.</strong> Q5 OK, Q4 garbled on small instances.</li>
      </ul>

      <h2>What quantization doesn't affect</h2>
      <ul>
        <li>Composition, color palette, overall style — quantization rarely changes these.</li>
        <li>Pose adherence with ControlNet — fine through Q4.</li>
        <li>Identity preservation with PuLID/InstantID — actually surprisingly robust through Q4.</li>
      </ul>

      <h2>The CFG interaction</h2>
      <p>
        Higher quantization levels (Q4) handle high CFG worse — they're more likely to "break" into
        oversaturated regions. With Q4 models, lower your CFG by 0.5–1.0 from the published default.
      </p>

      <h2>The recommended Mac defaults</h2>
      <table>
        <thead><tr><th>Use case</th><th>Quant</th></tr></thead>
        <tbody>
          <tr><td>Hero shot / final render / text-heavy</td><td>Q8_0 or Q6_K</td></tr>
          <tr><td>Daily creative work</td><td>Q5_K_S</td></tr>
          <tr><td>Tight memory (HunyuanVideo + LoRAs + CN)</td><td>Q4_K_S</td></tr>
          <tr><td>Iteration / preview</td><td>Q4_K_S</td></tr>
        </tbody>
      </table>

      <NoteBlock title="The placebo zone">
        People often A/B Q5 vs Q8 and report "I think Q8 is sharper." Side-by-side blind tests
        usually shows the difference is below the noise floor. Don't pay 50% more memory for an
        imagined gain. Save Q8 for the things that actually need it.
      </NoteBlock>
    </>
  )
}

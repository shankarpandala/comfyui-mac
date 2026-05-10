import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1QuantQuality() {
  return (
    <>
      <p>
        Concrete A/B comparison of FLUX Dev quants on M5 Pro. Helps you pick the right Q-level for
        your use case.
      </p>

      <h2>The blind-test result</h2>
      <p>Run the same prompt + seed at each quant. Generations differ in subtle but consistent ways:</p>

      <table>
        <thead>
          <tr>
            <th>Quant</th>
            <th>Size</th>
            <th>Wall time</th>
            <th>Quality</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>fp16 reference</td><td>~23 GB</td><td>N/A (won't fit)</td><td>Reference</td></tr>
          <tr><td>Q8_0</td><td>~12 GB</td><td>~70 s (tight memory)</td><td>~99% of reference</td></tr>
          <tr><td>Q6_K</td><td>~9.7 GB</td><td>~55 s</td><td>~98%</td></tr>
          <tr><td>Q5_K_M</td><td>~8.3 GB</td><td>~48 s</td><td>~97%</td></tr>
          <tr><td>Q5_K_S</td><td>~7.8 GB</td><td>~45 s</td><td>~97%. Mac default.</td></tr>
          <tr><td>Q4_K_M</td><td>~7.0 GB</td><td>~40 s</td><td>~94%</td></tr>
          <tr><td>Q4_K_S</td><td>~6.6 GB</td><td>~36 s</td><td>~93%</td></tr>
          <tr><td>Q3_K_M</td><td>~5.5 GB</td><td>~32 s</td><td>~85% — visible degradation</td></tr>
        </tbody>
      </table>

      <h2>What degrades at lower quants</h2>
      <ul>
        <li><strong>Text in image</strong> — Q4 garbles small text Q5 renders fine.</li>
        <li><strong>Fingers and small anatomy</strong> — Q4 has ~1.5× more finger errors than Q5.</li>
        <li><strong>Brand logos and intricate symbols</strong> — degrade noticeably below Q5.</li>
        <li><strong>Background fine detail</strong> — Q4 smooths out textures Q5 keeps.</li>
      </ul>

      <h2>What stays robust</h2>
      <ul>
        <li>Composition, color palette, scene layout — invariant Q4 to fp16.</li>
        <li>Pose adherence with ControlNet — fine through Q4.</li>
        <li>Identity preservation with PuLID — stable through Q4.</li>
      </ul>

      <NoteBlock title="The Mac default for Phase 5 capstone">
        For the final HeyGen-class agentic capstone (Phase 7), use FLUX Dev Q5_K_S for hero shots and
        Schnell Q5_K_S for B-roll. Q4_K_S only when budget forces it (multi-LoRA + ControlNet stacks).
      </NoteBlock>
    </>
  )
}

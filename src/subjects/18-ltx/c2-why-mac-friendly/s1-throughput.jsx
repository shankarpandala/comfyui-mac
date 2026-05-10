import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Throughput() {
  return (
    <>
      <p>
        Concrete throughput numbers showing why LTX is the Mac video sweet spot. Compare against
        Hunyuan and Wan from Subject 16 / Chapter 4.
      </p>

      <h2>Per-step time on M5 Pro</h2>
      <table>
        <thead><tr><th>Model</th><th>Resolution</th><th>Frames</th><th>Per-step time</th></tr></thead>
        <tbody>
          <tr><td>LTX 2B</td><td>768×512</td><td>97</td><td>~2.5 s</td></tr>
          <tr><td>HunyuanVideo Q4_K_S</td><td>544×960</td><td>121</td><td>~25 s</td></tr>
          <tr><td>Wan 14B I2V Q4_K_S</td><td>720×480</td><td>81</td><td>~30 s</td></tr>
          <tr><td>Wan 5B (2.2)</td><td>720×480</td><td>81</td><td>~12 s</td></tr>
        </tbody>
      </table>

      <h2>Total wall time for typical clips</h2>
      <table>
        <thead><tr><th>Model</th><th>Steps</th><th>Total</th></tr></thead>
        <tbody>
          <tr><td>LTX 2B (40 steps)</td><td>40</td><td>~1.5–3 min</td></tr>
          <tr><td>HunyuanVideo Q4_K_S (30 steps)</td><td>30</td><td>~10–15 min</td></tr>
          <tr><td>Wan 14B I2V Q4_K_S (30 steps)</td><td>30</td><td>~15–25 min</td></tr>
          <tr><td>Wan 5B (30 steps)</td><td>30</td><td>~6–8 min</td></tr>
        </tbody>
      </table>

      <h2>Quality comparison</h2>
      <p>
        LTX 2B isn't as visually rich as Hunyuan or Wan 14B at the same resolution — but for
        social-media B-roll / text-to-video at moderate quality, it's hard to beat the speed.
      </p>

      <h2>The Mac iteration loop</h2>
      <p>
        Use LTX for ideating prompts (~2 min per try). Use Hunyuan or Wan when you've locked in a
        prompt and want max quality (~10-25 min per render).
      </p>

      <NoteBlock title="Why Mac users start with LTX">
        It's the only video model where iterating prompts is fast enough to be productive. A
        2-minute clip-to-clip cycle keeps you in flow. Other models force you to commit and wait,
        which kills creative exploration.
      </NoteBlock>
    </>
  )
}

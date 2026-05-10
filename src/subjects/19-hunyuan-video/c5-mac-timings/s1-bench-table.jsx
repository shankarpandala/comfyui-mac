import BenchmarkChart from '../../../components/content/BenchmarkChart.jsx'

export default function S1BenchTable() {
  return (
    <>
      <p>Concrete Hunyuan timing on M5 Pro for planning purposes.</p>

      <h2>Wall time table</h2>
      <table>
        <thead>
          <tr><th>Configuration</th><th>Wall time</th></tr>
        </thead>
        <tbody>
          <tr><td>Hunyuan Q4_K_S, 544×960, 121 frames, 30 steps</td><td>~12 min</td></tr>
          <tr><td>Hunyuan Q4_K_S, 720×720, 121 frames, 30 steps</td><td>~14 min</td></tr>
          <tr><td>Hunyuan Q4_K_S, 960×544, 121 frames, 30 steps</td><td>~12 min</td></tr>
          <tr><td>Hunyuan Q4_K_S, 1280×720, 121 frames, 30 steps</td><td>~22 min</td></tr>
          <tr><td>Hunyuan Q5_K_S, 544×960, 121 frames, 30 steps</td><td>~14 min</td></tr>
          <tr><td>FastHunyuan Q4_K_S, 544×960, 121 frames, 10 steps</td><td>~4 min</td></tr>
          <tr><td>Hunyuan Q4_K_S, 544×960, 65 frames (~3s), 30 steps</td><td>~7 min</td></tr>
          <tr><td>Hunyuan I2V Q4_K_S, 544×960, 121 frames, 30 steps</td><td>~14-16 min</td></tr>
        </tbody>
      </table>

      <BenchmarkChart
        title="Hunyuan timings on M5 Pro 24 GB (minutes per clip)"
        yLabel="minutes"
        data={[
          { label: 'Q4 544×960', value: 12 },
          { label: 'Q4 720×720', value: 14 },
          { label: 'Q4 1280×720', value: 22 },
          { label: 'Q5 544×960', value: 14 },
          { label: 'Fast Q4 10s', value: 4 },
          { label: 'Q4 65fr (3s)', value: 7 },
          { label: 'I2V Q4 544×960', value: 15 },
        ]}
      />

      <h2>The Mac Hunyuan workflow ladder</h2>
      <ol>
        <li><strong>Iteration</strong>: FastHunyuan Q4_K_S, 544×960, 65 frames, 6 steps (~2 min)</li>
        <li><strong>Daily render</strong>: Hunyuan Q4_K_S, 544×960, 121 frames, 30 steps (~12 min)</li>
        <li><strong>Hero render</strong>: Hunyuan Q5_K_S, 720×720, 121 frames, 30 steps (~16 min)</li>
        <li><strong>HD final</strong>: Hunyuan Q4_K_S, 1280×720, 121 frames, 30 steps (~22 min)</li>
      </ol>
    </>
  )
}

import BenchmarkChart from '../../../components/content/BenchmarkChart.jsx'

export default function S1Matrix() {
  return (
    <>
      <p>Direct comparison of Mac TTS options.</p>

      <h2>Comparison matrix</h2>
      <table>
        <thead>
          <tr>
            <th>TTS</th>
            <th>Voice clone</th>
            <th>Languages</th>
            <th>Mac wall time (30s)</th>
            <th>License</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>F5-TTS</td><td>Zero-shot</td><td>English (best); some others</td><td>~18-25 s</td><td>MIT</td></tr>
          <tr><td>ChatTTS</td><td>No</td><td>English + Chinese</td><td>~10-15 s</td><td>CC-NC</td></tr>
          <tr><td>XTTS-v2</td><td>Zero-shot</td><td>16 languages</td><td>~10-15 s</td><td>Coqui non-commercial</td></tr>
          <tr><td>Kokoro-TTS</td><td>No (preset voices)</td><td>English + small set</td><td>~5 s</td><td>Apache</td></tr>
        </tbody>
      </table>

      <BenchmarkChart
        title="Mac TTS speed (seconds per 30s output)"
        yLabel="seconds"
        data={[
          { label: 'Kokoro 82M', value: 5 },
          { label: 'ChatTTS', value: 12 },
          { label: 'XTTS-v2', value: 12 },
          { label: 'F5-TTS', value: 21 },
        ]}
      />

      <h2>The Mac default for the capstone</h2>
      <ul>
        <li><strong>Voice cloning your own voice</strong>: F5-TTS</li>
        <li><strong>Quick neutral narration</strong>: Kokoro</li>
        <li><strong>Spanish/French/etc</strong>: XTTS-v2 (if license permits) or F5-TTS multilingual variants</li>
        <li><strong>Conversational dialogue</strong>: ChatTTS</li>
      </ul>
    </>
  )
}

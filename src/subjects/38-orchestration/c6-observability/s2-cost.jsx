import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Cost() {
  return (
    <>
      <p>Cost / time accounting — even local-only Mac pipelines have cost: wall time, electricity, your attention. Track to optimize.</p>

      <h2>What to track per Reel</h2>
      <ul>
        <li>Wall time per stage (research, script, visuals, audio, compose).</li>
        <li>Total wall time end-to-end.</li>
        <li>LLM tokens consumed.</li>
        <li>Number of retries / failures.</li>
        <li>Number of human gate interventions.</li>
      </ul>

      <h2>Why care on Mac (no API costs)</h2>
      <ul>
        <li>Wall time is your scarcest resource.</li>
        <li>Identifying slow stages tells you where to optimize.</li>
        <li>Retry counts surface unstable components.</li>
        <li>Human gate frequency surfaces quality issues.</li>
      </ul>

      <h2>Reporting</h2>
      <p>End of each run, print summary:</p>
      <pre>{`Pipeline complete: reel-2026-05-10-1
- Research: 3m 15s, 2 LLM calls
- Script: 1m 40s, 5 LLM calls (1 retry)
- Visuals: 12m 30s, 6 stills + 6 i2v clips (1 fallback)
- Audio: 2m 15s, 6 F5-TTS calls
- Compose: 45s, ffmpeg
Total: 20m 25s. 1 human approval gate.`}</pre>

      <NoteBlock title="The 'measure to improve' principle">
        Per-stage timing reveals where to focus optimization. If visuals dominate, that's where
        switching from Wan to LTX matters. If LLM iterations dominate, simpler prompts.
      </NoteBlock>
    </>
  )
}

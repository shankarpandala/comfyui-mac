import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Pipeline() {
  return (
    <>
      <p>Linear pipeline — the simplest orchestration pattern. Output of stage N feeds input of stage N+1.</p>

      <h2>The shape</h2>
      <pre>{`research_agent(topic)
  → script_agent(research_output)
  → visual_agent(script_output)
  → tts_agent(script_output)
  → orchestrator(visuals + tts)
  → final_video.mp4`}</pre>

      <h2>When linear works</h2>
      <ul>
        <li>Each stage's output is fully needed by the next.</li>
        <li>No conditionals / branches.</li>
        <li>Simple to debug — failures are localized to a specific stage.</li>
      </ul>

      <h2>Implementation (Python)</h2>
      <pre>{`def heygen_class_pipeline(topic):
    research = research_agent(topic)
    script = script_agent(research)
    visuals = [generate_visual(s) for s in script.scenes]
    audio = tts_agent(script)
    return composite(visuals, audio, script)`}</pre>

      <NoteBlock title="The 'start linear' principle">
        For Subject 39's HeyGen-class capstone, start with linear pipeline. Add complexity only
        when needed.
      </NoteBlock>
    </>
  )
}

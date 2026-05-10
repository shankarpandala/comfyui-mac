import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3Supervisor() {
  return (
    <>
      <p>Supervisor / sub-agents pattern — a top-level agent coordinates multiple specialized sub-agents. Each sub-agent has its own context and tools.</p>

      <h2>The shape</h2>
      <pre>{`Supervisor:
├── Researcher (web search tools)
├── Writer (script generation, voice doc)
├── Visualizer (FLUX prompts, ComfyUI submission)
├── TTS Agent (F5-TTS calls)
└── Editor (ffmpeg composition)`}</pre>

      <h2>Why sub-agents</h2>
      <ul>
        <li>Each agent has narrow context — better at its job.</li>
        <li>Cleaner debugging — issue is localized.</li>
        <li>Easier to swap implementations (try different model per agent).</li>
      </ul>

      <h2>Communication</h2>
      <p>
        Supervisor sends task → sub-agent returns result. Either via in-process function calls or
        via a queue / message bus for distributed execution.
      </p>

      <h2>Trade-off</h2>
      <ul>
        <li>Complexity overhead vs simple pipeline.</li>
        <li>Each agent needs its own LLM call — more tokens, slower.</li>
        <li>Worth it for production-grade pipelines (Subject 39's capstone).</li>
      </ul>

      <NoteBlock title="The 'supervisor for production' pattern">
        Sub-agent supervisor pattern is the foundation of LangGraph and similar frameworks. Subject
        39's capstone is built around it.
      </NoteBlock>
    </>
  )
}

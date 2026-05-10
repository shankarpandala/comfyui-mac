import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S4Graph() {
  return (
    <>
      <p>Graph (LangGraph-style) — agents and tools as nodes; explicit edges with conditional routing. Most powerful pattern for complex agentic workflows.</p>

      <h2>What LangGraph adds</h2>
      <ul>
        <li>State machine model — explicit state passed between nodes.</li>
        <li>Conditional edges — "if research_score &gt; 8, go to writer; else loop research".</li>
        <li>Persistence — pause / resume long-running pipelines.</li>
        <li>Streaming — emit partial results as they're ready.</li>
      </ul>

      <h2>For the capstone</h2>
      <ul>
        <li>Research → Writer → Critic → (loop if score low) → Visualizer → TTS → Editor → Publish.</li>
        <li>Each transition can have conditions, retries, fallbacks.</li>
      </ul>

      <h2>Mac compatibility</h2>
      <p>LangGraph is pure Python; runs anywhere. Combined with Ollama for local LLM, fully Mac-native.</p>

      <h2>The complexity tax</h2>
      <p>LangGraph adds significant code complexity. For one-off pipelines, simple Python orchestration is easier. For production (run daily, error-recover), LangGraph pays off.</p>

      <NoteBlock title="When to graduate to graphs">
        Start with linear pipeline. Add router for branching. Add supervisor for sub-agents. Adopt
        LangGraph when you need state persistence + complex conditionals. Don't skip ahead.
      </NoteBlock>
    </>
  )
}

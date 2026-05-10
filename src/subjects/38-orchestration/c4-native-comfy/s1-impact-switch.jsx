import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1ImpactSwitch() {
  return (
    <>
      <p>Native ComfyUI orchestration patterns — Impact-Pack switches + LLM nodes for in-graph branching.</p>

      <h2>The pattern</h2>
      <p>
        Inside ComfyUI: an LLM node decides a branch; ImpactSwitch dispatches to the right
        sub-workflow. No external Python orchestrator.
      </p>

      <h2>Use case</h2>
      <ul>
        <li>"Generate image with FLUX or SDXL based on prompt complexity"</li>
        <li>"Route to anime base or photoreal base based on prompt content"</li>
        <li>"Apply heavy detailer or skip based on output type"</li>
      </ul>

      <h2>Pros</h2>
      <ul>
        <li>Self-contained — workflow JSON IS the orchestration.</li>
        <li>No separate Python script.</li>
        <li>Visual; easy to inspect and modify.</li>
      </ul>

      <h2>Cons</h2>
      <ul>
        <li>Limited to what ComfyUI's graph can express.</li>
        <li>Both branches still load (Subject 32 / Chapter 3).</li>
        <li>State management is awkward.</li>
      </ul>

      <NoteBlock title="The 'simple branches in ComfyUI, complex flow in Python' rule">
        For 1-2 conditional branches, native ComfyUI is fine. For multi-stage agentic flow with
        retries / persistence / parallelism, escape to LangGraph + ComfyUI API.
      </NoteBlock>
    </>
  )
}

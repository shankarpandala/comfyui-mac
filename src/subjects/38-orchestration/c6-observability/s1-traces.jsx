import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Traces() {
  return (
    <>
      <p>Tracing — log every agent step + tool call + LLM input/output. When pipelines fail or produce weird output, traces explain what happened.</p>

      <h2>What to log per step</h2>
      <ul>
        <li>Timestamp.</li>
        <li>Node name.</li>
        <li>Inputs (full state dict).</li>
        <li>LLM prompt + response (full text).</li>
        <li>Tool calls + results.</li>
        <li>Output state.</li>
        <li>Time taken.</li>
        <li>Token count (cost tracking).</li>
      </ul>

      <h2>Tools</h2>
      <ul>
        <li><strong>LangSmith</strong> (LangChain's official) — cloud; commercial.</li>
        <li><strong>Phoenix (Arize)</strong> — open-source; self-hosted; recommended for Mac local.</li>
        <li><strong>Custom JSON logging</strong> — simplest; one log file per run; grep when needed.</li>
      </ul>

      <h2>Custom logger pattern</h2>
      <pre>{`import json, time

def log_node(node_name, state, output, llm_calls, duration):
    entry = {
        "ts": time.time(),
        "node": node_name,
        "state_in_keys": list(state.keys()),
        "output_keys": list(output.keys()),
        "llm_calls": llm_calls,
        "duration_sec": duration,
    }
    with open(f"runs/{run_id}/trace.jsonl", "a") as f:
        f.write(json.dumps(entry) + "\\n")`}</pre>

      <NoteBlock title="The 'trace from day one' rule">
        Don't add tracing later. Build it from the first version of your pipeline. When debugging
        in week 2, you'll thank week-1 you.
      </NoteBlock>
    </>
  )
}

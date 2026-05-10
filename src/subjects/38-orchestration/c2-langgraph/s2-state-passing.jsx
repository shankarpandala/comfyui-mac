import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2StatePassing() {
  return (
    <>
      <p>State passing in LangGraph — the dict that flows between nodes. Defines what each node sees and produces.</p>

      <h2>Designing state</h2>
      <ul>
        <li>Include everything any downstream node might need.</li>
        <li>Don't include secrets / API keys (use env vars).</li>
        <li>Use simple types — dicts, lists, strings, numbers — for serialization.</li>
        <li>Versioning: include a "stage" field so you can resume from where you left off.</li>
      </ul>

      <h2>State persistence</h2>
      <p>
        LangGraph supports checkpointing. Save state to disk after each node; resume on next run.
        For long pipelines (10+ minutes), this is critical — power outage / crash doesn't redo everything.
      </p>

      <pre>{`from langgraph.checkpoint.sqlite import SqliteSaver

memory = SqliteSaver.from_conn_string(":memory:")
app = graph.compile(checkpointer=memory)

# Run with thread_id
result = app.invoke(
    {"topic": "..."},
    config={"configurable": {"thread_id": "reel-2026-05-10-1"}}
)`}</pre>

      <h2>Resume</h2>
      <p>If a node fails, you can re-invoke with the same thread_id and LangGraph picks up where it left off.</p>

      <NoteBlock title="The 'resumable pipeline' principle">
        For Mac AI clone production where any single render takes 30+ minutes, never lose work to
        a crash. Checkpoint everything. Worth the slight code complexity.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2StateMachine() {
  return (
    <>
      <p>State machine + resume — the capstone runs for ~30-60 minutes. Don't lose work to a crash.</p>

      <h2>Checkpointing</h2>
      <p>LangGraph checkpoints state after every node. SQLite-backed; persistent across runs.</p>

      <h2>Resume on failure</h2>
      <pre>{`# After a crash, re-invoke with same thread_id
result = app.invoke(
    None,  # no new input; resume from checkpoint
    config={"configurable": {"thread_id": "reel-2026-05-10-1"}}
)`}</pre>

      <h2>State design for resume</h2>
      <ul>
        <li>Each node's output is idempotent — re-running with same input produces same output (or close).</li>
        <li>File paths in state, not file contents — checkpoint stays small.</li>
        <li>External resources (Ollama, ComfyUI) handled gracefully on resume.</li>
      </ul>

      <h2>Manual resume mid-stage</h2>
      <p>
        If a specific node failed (say, Sonic OOM'd on scene 3 of 5), edit the checkpoint state to
        mark scenes 1-2 done; re-run the visual node which skips done scenes.
      </p>

      <NoteBlock title="The 'checkpoint everywhere' philosophy">
        Cheap to checkpoint after every node. Saves you from redoing 30 minutes of work when scene
        4's render fails. Always-on checkpointing is the production discipline.
      </NoteBlock>
    </>
  )
}

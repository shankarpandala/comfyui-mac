import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3HumanInLoop() {
  return (
    <>
      <p>Human-in-the-loop approval gates — pause the pipeline at key checkpoints, send to user for review, resume after approval.</p>

      <h2>Where to pause</h2>
      <ul>
        <li>After research summary — "Is this the right angle?"</li>
        <li>After script first draft — "Approve / revise?"</li>
        <li>After visual prompts generated — "Use as-is?"</li>
        <li>Before final publish.</li>
      </ul>

      <h2>Pattern (LangGraph)</h2>
      <pre>{`# Use LangGraph's interrupt feature
graph = StateGraph(State)
# ... add nodes ...
graph.add_node("script", script_node)
graph.add_node("approve_script", approve_node)
graph.add_edge("script", "approve_script")

# approve_node uses interrupt_before to pause
# external system polls for state and presents to user`}</pre>

      <h2>Notification</h2>
      <ul>
        <li>Email / Slack / Telegram on pause.</li>
        <li>Local web UI showing current state + approve/revise buttons.</li>
        <li>CLI prompt for solo usage.</li>
      </ul>

      <h2>For Mac solo creators</h2>
      <p>
        Simplest: terminal prompt. "Script ready, view at out/script-2026-05-10.json. Approve?
        (y/n/revise):"
      </p>

      <NoteBlock title="The 'gate at expensive stages' principle">
        Place gates BEFORE expensive stages (video render). Catching errors before a 30-min Wan I2V
        render saves a lot of compute. Don't gate cheap stages — friction.
      </NoteBlock>
    </>
  )
}

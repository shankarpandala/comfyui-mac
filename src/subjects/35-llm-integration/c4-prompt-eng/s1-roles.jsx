import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Roles() {
  return (
    <>
      <p>System / user / tool roles — the structure of an LLM conversation.</p>

      <h2>The roles</h2>
      <ul>
        <li><strong>system</strong>: persistent instructions. Set once at start.</li>
        <li><strong>user</strong>: input from human (or upstream agent).</li>
        <li><strong>assistant</strong>: model's output. Can include tool calls.</li>
        <li><strong>tool</strong>: result of a tool call, fed back to model.</li>
      </ul>

      <h2>Multi-turn conversation</h2>
      <pre>{`messages = [
    {"role": "system", "content": "You are a script writer."},
    {"role": "user", "content": "Write a 60s Reel script about climate"},
    {"role": "assistant", "content": "..."},  # script v1
    {"role": "user", "content": "Make it punchier, hook in 5 seconds"},
    {"role": "assistant", "content": "..."},  # script v2
]`}</pre>

      <h2>For agentic capstone</h2>
      <ul>
        <li>Each agent maintains its own message history.</li>
        <li>System prompts define the agent's role (researcher, writer, critic, orchestrator).</li>
        <li>Assistant + tool calls form the action loop.</li>
      </ul>

      <NoteBlock title="The 'log the conversation' habit">
        Save every agent's full message history per run. When something goes wrong, the log
        explains what the model thought it was doing. Invaluable for debugging.
      </NoteBlock>
    </>
  )
}

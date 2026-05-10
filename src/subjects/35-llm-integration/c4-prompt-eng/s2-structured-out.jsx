import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2StructuredOut() {
  return (
    <>
      <p>Structured output — JSON schema or Pydantic. Make the LLM's response parseable, not just human-readable.</p>

      <h2>JSON mode</h2>
      <p>Most modern APIs (OpenAI-compatible, including Ollama) support response_format JSON:</p>
      <pre>{`response = client.chat.completions.create(
    model="qwen2.5:14b",
    messages=[...],
    response_format={"type": "json_object"}
)
data = json.loads(response.choices[0].message.content)`}</pre>

      <h2>JSON Schema enforcement</h2>
      <p>Some servers (newer Ollama) support strict JSON Schema:</p>
      <pre>{`schema = {
    "type": "object",
    "properties": {
        "title": {"type": "string"},
        "duration_sec": {"type": "integer"},
        "scenes": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "type": {"enum": ["talking-head", "b-roll"]},
                    "prompt": {"type": "string"},
                    "duration": {"type": "integer"}
                }
            }
        }
    }
}`}</pre>

      <h2>Why structured output matters for capstone</h2>
      <ul>
        <li>Script → list of scene objects → mechanical loop generates each scene.</li>
        <li>Plan → list of tool calls → orchestrator dispatches.</li>
        <li>Critique → structured score breakdown → automated decisions.</li>
      </ul>

      <NoteBlock title="The 'always JSON for agent communication' rule">
        Free-text agent output is hard to parse, error-prone, brittle. JSON output with schemas is
        reliable. Pay the small token overhead; gain orders-of-magnitude reliability.
      </NoteBlock>
    </>
  )
}

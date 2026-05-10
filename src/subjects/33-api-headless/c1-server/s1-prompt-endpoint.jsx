import CommandBlock from '../../../components/content/CommandBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1PromptEndpoint() {
  return (
    <>
      <p>ComfyUI's HTTP API. Submit workflows; poll for results. Foundation for headless / agentic / scheduled production.</p>

      <h2>Launching as a server</h2>
      <CommandBlock command="~/AI/ComfyUI/start.sh --listen 0.0.0.0 --port 8188" />

      <h2>The endpoints</h2>
      <table>
        <thead><tr><th>Endpoint</th><th>Method</th><th>Purpose</th></tr></thead>
        <tbody>
          <tr><td><code>/prompt</code></td><td>POST</td><td>Submit a workflow (API JSON format)</td></tr>
          <tr><td><code>/queue</code></td><td>GET</td><td>Inspect current queue</td></tr>
          <tr><td><code>/history</code></td><td>GET</td><td>Past prompts and outputs</td></tr>
          <tr><td><code>/history/{`{prompt_id}`}</code></td><td>GET</td><td>Specific prompt result</td></tr>
          <tr><td><code>/view</code></td><td>GET</td><td>Fetch a generated image</td></tr>
          <tr><td><code>/upload/image</code></td><td>POST</td><td>Upload input images</td></tr>
        </tbody>
      </table>

      <h2>Submit a workflow</h2>
      <CommandBlock command={`curl -X POST http://localhost:8188/prompt -H "Content-Type: application/json" -d '{"prompt": <api_format_workflow>, "client_id": "myapp"}'`} label="Returns prompt_id" />

      <h2>API JSON format</h2>
      <p>
        Different from standard workflow JSON. Get it: in ComfyUI, enable Dev Mode in Settings,
        then File → Save (API Format).
      </p>

      <h2>Poll for completion</h2>
      <CommandBlock command="curl http://localhost:8188/history/<prompt_id>" />

      <h2>Mac specifics</h2>
      <p>Server runs on MPS the same as the GUI. No special config beyond <code>--listen 0.0.0.0</code> if accessing from another machine on your network.</p>

      <NoteBlock title="The agentic capstone foundation">
        Phase 7's agentic orchestration drives ComfyUI through this API. Every workflow stage in
        Subject 39's pipeline is a /prompt submission with API JSON.
      </NoteBlock>
    </>
  )
}

import CommandBlock from '../../../components/content/CommandBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Api() {
  return (
    <>
      <p>
        ComfyUI runs as a server. The <code>/prompt</code> endpoint accepts API-format JSON and
        runs workflows headless. For batch / scheduled / agentic production, this is how you
        avoid clicking Queue manually.
      </p>

      <h2>Launching as a server</h2>
      <CommandBlock command="~/Documents/ComfyUI/start.sh --listen 0.0.0.0 --port 8188" />

      <h2>The /prompt endpoint</h2>
      <CommandBlock command={`curl -X POST http://localhost:8188/prompt -H "Content-Type: application/json" -d @workflow_api.json`} label="Submit a workflow" />

      <h2>API-format JSON</h2>
      <p>
        Different from the standard workflow JSON. Get it: in ComfyUI, enable Dev Mode in
        settings, then File → Save (API Format). The API format is the executable graph without
        the visual layout.
      </p>

      <h2>Python client</h2>
      <p>
        Most production code uses a Python client that submits jobs and polls for completion. See
        Subject 33 / Chapter 2 for the full pattern.
      </p>

      <h2>The Phase 7 connection</h2>
      <p>
        The agentic capstone (Subject 39) drives ComfyUI via this API. The orchestrator submits
        each pipeline stage as a separate /prompt call, polls for completion, chains outputs.
        Phase 6 / Subject 33 covers the API patterns in depth.
      </p>

      <NoteBlock title="The 'GUI for design, API for production' pattern">
        Build workflows in the GUI. Once stable, save as API JSON and call from your production
        scripts. Don't try to design new workflows via API — the GUI is much faster.
      </NoteBlock>
    </>
  )
}

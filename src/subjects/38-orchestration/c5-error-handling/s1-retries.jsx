import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Retries() {
  return (
    <>
      <p>Retries and timeouts — the agentic capstone runs for hours. Transient failures must auto-recover; permanent failures must surface clearly.</p>

      <h2>Retry pattern</h2>
      <pre>{`from tenacity import retry, stop_after_attempt, wait_exponential

@retry(
    stop=stop_after_attempt(3),
    wait=wait_exponential(min=4, max=60),
    reraise=True
)
def llm_call(prompt):
    return ollama_chat(prompt)`}</pre>

      <h2>What to retry</h2>
      <ul>
        <li>Network errors (Tavily, scraping) — yes, with backoff.</li>
        <li>LLM JSON parse failures — yes, with re-prompt.</li>
        <li>ComfyUI submission errors — yes (server might be busy).</li>
        <li>OOM errors — no (won't fix itself).</li>
        <li>File-not-found — no (config issue).</li>
      </ul>

      <h2>Timeouts</h2>
      <ul>
        <li>LLM call: 60s.</li>
        <li>Image generation: 120s for SDXL, 300s for FLUX.</li>
        <li>Video generation: 30 min for Wan / Hunyuan.</li>
        <li>Web search: 30s.</li>
      </ul>

      <h2>Logging</h2>
      <p>Log every retry. After-the-fact, you'll want to see which stages failed transiently.</p>

      <NoteBlock title="The 'fail loud, retry quiet' principle">
        Transient failures retry silently. Permanent failures (third retry exhausted) raise loud
        exceptions. Logs show the difference.
      </NoteBlock>
    </>
  )
}

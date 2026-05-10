import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Fallback() {
  return (
    <>
      <p>Fallback models — when the primary model fails, gracefully degrade to a backup. Ensures pipeline completes even when one component breaks.</p>

      <h2>Fallback chains</h2>
      <table>
        <thead><tr><th>Stage</th><th>Primary</th><th>Fallback</th></tr></thead>
        <tbody>
          <tr><td>LLM</td><td>Llama 3.1 8B (Ollama)</td><td>Llama 3.2 3B (smaller, faster)</td></tr>
          <tr><td>Image</td><td>FLUX Dev Q5_K_S</td><td>SDXL Lightning (faster fallback)</td></tr>
          <tr><td>Video</td><td>Wan I2V 14B</td><td>LTX I2V (faster fallback)</td></tr>
          <tr><td>TTS</td><td>F5-TTS voice clone</td><td>Kokoro (preset voices)</td></tr>
        </tbody>
      </table>

      <h2>Pattern</h2>
      <pre>{`def llm_with_fallback(prompt):
    try:
        return primary_llm(prompt, timeout=60)
    except Exception:
        log("primary failed, falling back")
        return fallback_llm(prompt)`}</pre>

      <h2>Quality vs reliability trade-off</h2>
      <p>
        Fallbacks usually mean lower quality. For non-hero content (B-roll, drafts), this is fine.
        For hero shots, raise the failure to a human gate instead of degrading silently.
      </p>

      <NoteBlock title="The 'never silent quality degradation' principle">
        Always log when a fallback happens. End-user / yourself sees "fallback used 3 times this
        run" and knows quality may be off.
      </NoteBlock>
    </>
  )
}

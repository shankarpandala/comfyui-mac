import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Qwen() {
  return (
    <>
      <p>Qwen 2.5 7B / 14B — strong alternative to Llama. Often better at structured output and longer context.</p>

      <h2>Variants</h2>
      <ul>
        <li>Qwen 2.5 7B Instruct — comparable to Llama 8B, slightly better at structured output.</li>
        <li>Qwen 2.5 14B Instruct — noticeably stronger reasoning; ~9 GB at Q4.</li>
        <li>Qwen 2.5 32B — too big for 24 GB Mac.</li>
      </ul>

      <h2>When Qwen wins</h2>
      <ul>
        <li>JSON / structured output (script parsing, plan generation).</li>
        <li>Multi-step reasoning chains.</li>
        <li>Mixed English-Chinese content.</li>
      </ul>

      <h2>When Llama wins</h2>
      <ul>
        <li>Tool-use / function calling — Llama 3 has better fine-tuned tool support.</li>
        <li>Tight memory — Llama 3.2 3B is the smallest.</li>
        <li>Speed — Llama 3 distillations run faster.</li>
      </ul>

      <h2>Recommended Mac config</h2>
      <p><code>qwen2.5:14b</code> at Q4_K_M via Ollama. ~9 GB; ~12-18 tokens/sec on M5 Pro. Use when reasoning matters more than speed.</p>

      <NoteBlock title="The 'two-LLM swap' pattern">
        For the agentic capstone: Llama 3.1 8B as default; switch to Qwen 14B for the script
        agent (Subject 37) where structured output matters. Subject 38's orchestration handles the
        per-stage model selection.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Llama38b() {
  return (
    <>
      <p>Llama 3.x 8B Instruct on Mac — recommended capstone default. Good balance of capability, speed, memory.</p>

      <h2>Variants</h2>
      <ul>
        <li>Llama 3.1 8B Instruct — the standard.</li>
        <li>Llama 3.2 3B Instruct — smaller; for tight memory or fast iteration.</li>
        <li>Llama 3.3 70B (newer) — won't fit on 24 GB Mac; cloud only.</li>
      </ul>

      <h2>Quantization</h2>
      <ul>
        <li>Q4_K_M: ~5 GB, good speed, ~95% quality.</li>
        <li>Q5_K_M: ~5.7 GB, slightly better quality.</li>
        <li>Q8_0: ~9 GB, near-fp16 quality but tight on Mac alongside ComfyUI.</li>
      </ul>

      <h2>Recommended Mac config</h2>
      <p><code>llama3.1:8b</code> at Q4_K_M via Ollama. ~5 GB; ~25-40 tokens/sec on M5 Pro.</p>

      <h2>Capability for agentic use</h2>
      <ul>
        <li>Good tool-use / function calling.</li>
        <li>Strong instruction following.</li>
        <li>Decent reasoning for short scripts.</li>
        <li>Limited context window vs Qwen at the same size — 128K tokens but works best within ~32K.</li>
      </ul>

      <NoteBlock title="The 'pull and test' approach">
        Pull Llama 3.1 8B first. If it handles your prompts well, ship. If you need stronger
        reasoning (long scripts with complex structure), try Qwen 2.5 14B (next section).
      </NoteBlock>
    </>
  )
}

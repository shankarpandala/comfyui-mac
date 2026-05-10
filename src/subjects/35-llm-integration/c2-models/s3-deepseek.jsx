import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3Deepseek() {
  return (
    <>
      <p>DeepSeek-R1 distilled models — reasoning models with chain-of-thought. Good for planning / multi-step decomposition.</p>

      <h2>Variants</h2>
      <ul>
        <li>DeepSeek-R1-Distill-Qwen-7B — reasoning distillation onto Qwen base.</li>
        <li>DeepSeek-R1-Distill-Llama-8B — reasoning distillation onto Llama base.</li>
        <li>Larger variants (32B, 70B) — won't fit on 24 GB Mac.</li>
      </ul>

      <h2>What "reasoning" means here</h2>
      <p>
        These models output explicit chain-of-thought reasoning before answering. For complex
        problems, the reasoning step improves answer quality. For simple queries, it's overhead.
      </p>

      <h2>When to use</h2>
      <ul>
        <li>Script generation with explicit "think then write" stages.</li>
        <li>Plan decomposition (break a goal into a sequence of steps).</li>
        <li>Quality control / self-critique loops.</li>
      </ul>

      <h2>When not to use</h2>
      <ul>
        <li>Simple "translate this" / "summarize this" tasks — Llama 3.x is faster.</li>
        <li>Tool-use heavy workflows — reasoning models can be inconsistent with tool calls.</li>
      </ul>

      <NoteBlock title="The Mac reasoning pick">
        DeepSeek-R1-Distill-Qwen-7B Q5 ~5.5 GB. Slow inference (~10 tok/s including reasoning) but
        produces measurably better outputs on complex tasks. Reserve for the orchestrator's
        planning calls in Subject 38.
      </NoteBlock>
    </>
  )
}

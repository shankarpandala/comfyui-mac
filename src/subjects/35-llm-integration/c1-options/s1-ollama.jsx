import CommandBlock from '../../../components/content/CommandBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Ollama() {
  return (
    <>
      <p>Ollama is the easiest way to run a local LLM on Mac. Wraps llama.cpp + GGUF models. Single command to install + pull + serve.</p>

      <h2>Install</h2>
      <CommandBlock command="brew install ollama" />
      <CommandBlock command="brew services start ollama" label="Run as background service" />

      <h2>Pull a model</h2>
      <CommandBlock command="ollama pull llama3.2" label="~5 GB download" />

      <h2>Test</h2>
      <CommandBlock command='ollama run llama3.2 "What is the capital of France?"' />

      <h2>Server endpoint</h2>
      <p>
        Ollama serves an OpenAI-compatible API at <code>http://localhost:11434/v1/chat/completions</code>.
        ComfyUI custom nodes, Python clients, anything that speaks OpenAI's API can call it.
      </p>

      <h2>Recommended Mac models</h2>
      <ul>
        <li><code>llama3.2</code> (3 B) — fast, lightweight, good for tool use.</li>
        <li><code>llama3.1:8b</code> (8 B) — better quality, ~5 GB at Q4.</li>
        <li><code>qwen2.5:14b</code> (14 B) — strong reasoning, ~9 GB at Q4.</li>
        <li><code>deepseek-r1:8b</code> (8 B) — reasoning model with chain-of-thought.</li>
      </ul>

      <h2>Memory budget</h2>
      <p>
        Llama 3.2 8B Q4 uses ~5 GB. Leaves ~11 GB working budget for ComfyUI alongside. For the
        agentic capstone (Subject 39), this co-existence is the key constraint.
      </p>

      <NoteBlock title="The Mac LLM default">
        Ollama + llama3.1:8b is the recommended Mac default for the agentic capstone. Strong
        balance of speed, capability, and Mac memory headroom alongside ComfyUI.
      </NoteBlock>
    </>
  )
}

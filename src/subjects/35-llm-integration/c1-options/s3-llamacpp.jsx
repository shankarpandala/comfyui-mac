import CommandBlock from '../../../components/content/CommandBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3Llamacpp() {
  return (
    <>
      <p>llama.cpp directly — power-user option. More control than Ollama; less convenience. Worth knowing for fine-tuning inference parameters.</p>

      <h2>Install (homebrew)</h2>
      <CommandBlock command="brew install llama.cpp" />

      <h2>Server mode</h2>
      <CommandBlock command="llama-server -m model.gguf --port 8080 --host 0.0.0.0 -c 4096" label="HTTP server with 4K context" />

      <h2>Tunable parameters</h2>
      <ul>
        <li><code>--gpu-layers N</code>: how many layers offload to GPU (Metal). All if -1.</li>
        <li><code>--ctx-size N</code>: context window size.</li>
        <li><code>--threads N</code>: CPU threads for non-offloaded ops.</li>
        <li><code>--temp 0.7 --top-p 0.9 --top-k 40</code>: sampling params.</li>
      </ul>

      <h2>When to use llama.cpp directly</h2>
      <ul>
        <li>Need specific GGUF that's not on Ollama or mlx-community.</li>
        <li>Custom sampling configs for research.</li>
        <li>Embedding API for RAG (llama.cpp has built-in <code>--embedding</code> mode).</li>
      </ul>

      <NoteBlock title="The 'Ollama by default' rule">
        For 95% of agentic capstone work, Ollama is enough. llama.cpp direct is power-user. Don't
        adopt complexity you don't need.
      </NoteBlock>
    </>
  )
}

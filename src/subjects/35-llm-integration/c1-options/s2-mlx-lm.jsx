import CommandBlock from '../../../components/content/CommandBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2MlxLm() {
  return (
    <>
      <p>MLX-LM — Apple's native LLM runner. Faster than Ollama on Mac for many models. The MLX equivalent of llama.cpp.</p>

      <h2>Install</h2>
      <CommandBlock command="pip install mlx-lm" />

      <h2>Run a model</h2>
      <CommandBlock command='mlx_lm.generate --model mlx-community/Llama-3.2-3B-Instruct-4bit --prompt "Hello"' />

      <h2>Server mode</h2>
      <CommandBlock command="mlx_lm.server --model mlx-community/Llama-3.2-3B-Instruct-4bit --port 8080" />
      <p>OpenAI-compatible API at <code>http://localhost:8080/v1/chat/completions</code>.</p>

      <h2>MLX model repository</h2>
      <p>
        <code>mlx-community</code> on HuggingFace publishes MLX-converted models. Most popular LLMs
        have MLX versions within days of release.
      </p>

      <h2>MLX vs Ollama on Mac</h2>
      <table>
        <thead><tr><th>Aspect</th><th>MLX-LM</th><th>Ollama</th></tr></thead>
        <tbody>
          <tr><td>Speed</td><td>1.5–2× faster</td><td>Baseline</td></tr>
          <tr><td>Setup</td><td>pip install</td><td>brew install</td></tr>
          <tr><td>Model availability</td><td>Growing; mlx-community</td><td>Huge; Ollama hub</td></tr>
          <tr><td>Memory</td><td>Slightly more efficient</td><td>Baseline</td></tr>
          <tr><td>Compatibility</td><td>OpenAI API server</td><td>OpenAI API server</td></tr>
        </tbody>
      </table>

      <NoteBlock title="The Mac speed pick">
        For the agentic capstone where LLM speed matters per inference, MLX-LM. For ease of
        switching models, Ollama. Both work; pick by priority.
      </NoteBlock>
    </>
  )
}

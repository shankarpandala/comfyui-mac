import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3ToolCalls() {
  return (
    <>
      <p>Tool calls / function calls — the LLM decides when to invoke external tools (web search, code execution, image generation) based on the user's request.</p>

      <h2>The pattern</h2>
      <ol>
        <li>Define tools as JSON schemas (name, description, parameters).</li>
        <li>Pass tools to LLM alongside prompt.</li>
        <li>LLM responds with either text OR a tool-call request.</li>
        <li>Your code executes the tool, sends result back as a "tool" role message.</li>
        <li>LLM continues with the result.</li>
      </ol>

      <h2>Tool examples for the capstone</h2>
      <ul>
        <li><code>web_search(query)</code> → research agent (Subject 36).</li>
        <li><code>generate_image(prompt)</code> → ComfyUI submission via API.</li>
        <li><code>generate_video(image, motion)</code> → ComfyUI video workflow.</li>
        <li><code>tts_speak(text, voice)</code> → F5-TTS server call.</li>
        <li><code>render_caption(image, audio)</code> → ffmpeg burn-in.</li>
      </ul>

      <h2>Llama 3 / Qwen 2.5 tool-use support</h2>
      <p>
        Both have native tool-use training. Provide tool schemas; they'll request calls when
        appropriate. Reliability varies — Llama 3.1 8B is decent, Qwen 14B is better.
      </p>

      <NoteBlock title="The Subject 38 connection">
        Tool calls are the orchestrator's primitive. Subject 38 covers patterns for chaining tool
        calls into multi-stage workflows.
      </NoteBlock>
    </>
  )
}

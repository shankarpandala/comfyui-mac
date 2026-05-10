import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S4VisionModels() {
  return (
    <>
      <p>Vision-language models (VLMs) — accept images as input. Used in the agentic capstone to evaluate generated outputs.</p>

      <h2>Mac-friendly VLMs</h2>
      <ul>
        <li>Llava 13B Q4 — ~7 GB. Good general vision.</li>
        <li>Qwen2-VL 7B — ~5 GB. Strong on document/chart understanding.</li>
        <li>InternVL 8B — competitive with Qwen2-VL.</li>
        <li>MoonDream — tiny (1.8 B), useful for fast tagging / captioning.</li>
      </ul>

      <h2>Use in capstone</h2>
      <ul>
        <li>"Critique this AI clone still" — VLM judges identity, composition, quality.</li>
        <li>"Caption this output" — generate alt text / hashtags for social media post.</li>
        <li>"Detect issues" — identify face artifacts, anatomy errors.</li>
        <li>"Match to brief" — verify output meets the script's intent.</li>
      </ul>

      <h2>Pull and serve</h2>
      <pre>{`ollama pull llava:13b`}</pre>
      <p>Same OpenAI-compatible API. The chat completions endpoint accepts image URLs / base64 in the messages array.</p>

      <NoteBlock title="The agentic feedback loop">
        VLMs let the agent self-critique outputs. Subject 39's quality-evaluation chapter uses
        them. Trade-off: VLM inference adds ~30 s per check; budget for this in pipeline timing.
      </NoteBlock>
    </>
  )
}

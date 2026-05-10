import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2PromptShape() {
  return (
    <>
      <p>Prompt-shape nodes — system prompt + user prompt + optional schema. Structures LLM input for reliable output.</p>

      <h2>The three roles</h2>
      <ul>
        <li><strong>System</strong>: persistent instruction ("You are an image-prompt expert. Always respond with a concise visual description.").</li>
        <li><strong>User</strong>: per-call input ("A futuristic city").</li>
        <li><strong>Optional schema</strong>: JSON schema for structured output.</li>
      </ul>

      <h2>Why structure</h2>
      <p>
        Free-form prompts produce free-form output. With explicit system role + user role +
        optional schema, you get reliable, parseable output — critical for agent orchestration.
      </p>

      <h2>Recipe</h2>
      <pre>{`SystemPromptNode → "You are an expert image describer..."
UserPromptNode → "A futuristic city"
↓ (combined)
OllamaGenerate → output: descriptive image prompt
↓
CLIPTextEncode → image generation`}</pre>

      <h2>For the capstone</h2>
      <ul>
        <li>Script agent (Subject 37) uses heavy system prompts to lock in style/persona.</li>
        <li>Each agent stage has its own system prompt template.</li>
        <li>Templates versioned in your repo.</li>
      </ul>

      <NoteBlock title="The 'system prompts are config' principle">
        System prompts are not "magic words" — they're configuration. Treat as code: version,
        review, A/B test. Bad system prompts produce inconsistent agents.
      </NoteBlock>
    </>
  )
}

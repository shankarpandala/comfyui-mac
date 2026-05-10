import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S4OpenaiApiShim() {
  return (
    <>
      <p>OpenAI-compatible API shim — Ollama, MLX-LM, and llama.cpp all expose the OpenAI Chat Completions API. Means any client SDK that speaks OpenAI works locally.</p>

      <h2>Why this matters</h2>
      <p>
        Massive ecosystem of tools (LangChain, LlamaIndex, custom-node packs) speaks OpenAI's API.
        With local servers shimming OpenAI, all of them "just work" pointing at localhost.
      </p>

      <h2>Python client (openai package)</h2>
      <pre>{`from openai import OpenAI
client = OpenAI(
    base_url="http://localhost:11434/v1",  # Ollama
    api_key="not-needed"
)
response = client.chat.completions.create(
    model="llama3.1:8b",
    messages=[{"role": "user", "content": "Hello"}]
)
print(response.choices[0].message.content)`}</pre>

      <h2>Curl</h2>
      <pre>{`curl http://localhost:11434/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "llama3.1:8b",
    "messages": [{"role": "user", "content": "Hello"}]
  }'`}</pre>

      <h2>Tool use (function calling)</h2>
      <p>Modern Llama / Qwen models support OpenAI-style tool calls. Used heavily in Subject 38's orchestration.</p>

      <NoteBlock title="The 'one API, many backends' principle">
        Write your agentic code against OpenAI's interface. Swap backends (Ollama / MLX / OpenAI
        cloud) by changing one URL. Future-proofs the agentic capstone.
      </NoteBlock>
    </>
  )
}

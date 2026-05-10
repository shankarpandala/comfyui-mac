import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1ComfyuiLlm() {
  return (
    <>
      <p>Custom-node packs that integrate LLMs into ComfyUI workflows.</p>

      <h2>Notable packs</h2>
      <ul>
        <li><code>ComfyUI-Ollama</code> — direct Ollama integration nodes.</li>
        <li><code>ComfyUI-LLM-Toolkit</code> — broader toolkit (Ollama, OpenAI, Claude, etc.).</li>
        <li><code>ComfyUI-IF_AI_tools</code> — combined tooling pack with vision support.</li>
        <li><code>comfyui-mixlab-nodes</code> — includes LLM nodes alongside other utilities.</li>
      </ul>

      <h2>What they provide</h2>
      <ul>
        <li>A node that takes a prompt + system instructions, returns text.</li>
        <li>Vision-enabled variants (image input).</li>
        <li>Tool-call / function-call nodes.</li>
        <li>Streaming output for live previews.</li>
      </ul>

      <h2>Recipe (Ollama node)</h2>
      <ol>
        <li>Install <code>ComfyUI-Ollama</code> via Manager.</li>
        <li>Run Ollama service in background.</li>
        <li>In ComfyUI: <code>OllamaGenerate</code> node → URL <code>http://localhost:11434</code> + model name + prompt.</li>
        <li>Output: STRING.</li>
        <li>Wire output into CLIPTextEncode for "LLM-generated prompt to image".</li>
      </ol>

      <h2>The "LLM in graph" pattern</h2>
      <p>
        Topic input → LLM expands into image prompt → CLIPTextEncode → KSampler → image. Good for
        "type a vague idea, get a polished generation".
      </p>

      <NoteBlock title="The Phase 7 building block">
        These LLM nodes are the foundation of every Phase 7 agentic workflow. Subject 36-39 build
        on them.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2MlxComfyBridges() {
  return (
    <>
      <p>
        Several open-source projects try to bridge ComfyUI to MLX or to MLX-backed model
        implementations. They fall into two patterns. Both are workable for adjacent tools, neither
        is mature for core diffusion.
      </p>

      <h2>Pattern 1: MLX nodes in ComfyUI's process</h2>
      <p>
        These projects ship custom nodes that import <code>mlx</code> directly inside ComfyUI's
        Python process. The node receives a PyTorch tensor, converts it to <code>mlx.array</code>,
        runs MLX compute, converts back.
      </p>
      <p>Pros: integrates with the ComfyUI canvas; you queue prompts as usual.</p>
      <p>Cons:</p>
      <ul>
        <li>Conversion adds ~10–50 ms per call.</li>
        <li>Both MLX and PyTorch want the same MPS device; they sometimes fight over allocations.</li>
        <li>Most published nodes target small models (LLMs, Whisper) where MLX shines.</li>
      </ul>

      <h2>Pattern 2: External MLX server, ComfyUI calls REST</h2>
      <p>
        The MLX-based tool runs as its own HTTP server (e.g., <code>mlx-lm server</code> exposes an
        OpenAI-compatible API). A ComfyUI node makes an HTTP request and gets a result.
      </p>
      <p>Pros:</p>
      <ul>
        <li>Clean process isolation — MLX OOM doesn't kill ComfyUI.</li>
        <li>Reuse: the same MLX server can serve a CLI script, ComfyUI, and a future Phase-7 agent.</li>
        <li>Memory budget is explicit per process.</li>
      </ul>
      <p>Cons: you have to run a second process and care about ports.</p>

      <h2>Which we use in Phase 7</h2>
      <p>Pattern 2 — external MLX server. Concretely:</p>
      <ul>
        <li><strong>Ollama</strong> running a Llama / Qwen model — exposes <code>/v1/chat/completions</code>.</li>
        <li><strong>mlx-lm.server</strong> as an alternative, especially for newer / larger LLMs.</li>
        <li><strong>F5-TTS</strong> as a server (optional MLX backend).</li>
        <li>ComfyUI nodes that call these via HTTP.</li>
      </ul>
      <p>
        The big advantage: when the agentic capstone needs the LLM, MLX, and FLUX simultaneously, we
        don't fight a single 24 GB pool of contention — each process has predictable footprint.
      </p>

      <h2>What about MLX SDXL?</h2>
      <p>
        Apple maintains <code>mlx-examples/stable_diffusion</code> with an SDXL implementation. It's
        fast and elegant. It does <em>not</em> integrate with ComfyUI — it's its own CLI / Python
        API. If you only ever generate SDXL images and never need ControlNet / LoRA stacks, it's
        worth knowing about. For this curriculum, we use ComfyUI's PyTorch SDXL path.
      </p>

      <NoteBlock title="The future">
        MLX is moving fast. By the time you read this, FLUX or Hunyuan may have MLX implementations.
        The pattern doesn't change: serve them from a separate process; call them from ComfyUI nodes.
      </NoteBlock>
    </>
  )
}

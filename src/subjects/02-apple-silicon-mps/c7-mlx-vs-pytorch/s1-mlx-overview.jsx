import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1MlxOverview() {
  return (
    <>
      <p>
        MLX is Apple's PyTorch-style ML framework, designed from scratch for Apple Silicon. It's
        relevant to this curriculum because (a) it's faster than PyTorch-MPS for several adjacent
        tasks (LLMs, Whisper, MusicGen) and (b) some experimental ComfyUI bridges use it. Knowing
        when to reach for MLX and when not to is its own skill.
      </p>

      <DefinitionBlock title="What MLX is">
        Apple's open-source array framework with a NumPy-like API and PyTorch-like neural-net layers.
        Designed around unified memory: a single <code>mlx.array</code> lives in shared memory and is
        addressable from CPU and GPU without copies. Lazy by default (graphs build up, evaluate on
        demand).
      </DefinitionBlock>

      <h2>What MLX is good at</h2>
      <ul>
        <li><strong>LLM inference.</strong> Llama-style transformers run faster in MLX than PyTorch-MPS by 1.5–2×.</li>
        <li><strong>Quantized LLMs.</strong> MLX-LM has excellent int4 / int8 / fp4 quantized model support.</li>
        <li><strong>Whisper.</strong> Apple's MLX-Whisper is the fastest local speech-to-text on Mac.</li>
        <li><strong>Some image diffusion.</strong> MLX has an SDXL implementation that's competitive with PyTorch-MPS for that one model.</li>
      </ul>

      <h2>What MLX is not good at (yet)</h2>
      <ul>
        <li><strong>The ComfyUI ecosystem.</strong> Custom nodes are PyTorch; almost nothing is MLX.</li>
        <li><strong>Cutting-edge diffusion.</strong> FLUX, Hunyuan, Wan — no MLX implementations as of writing, or only experimental ones.</li>
        <li><strong>Distributed training.</strong> Single-machine focused; no NCCL equivalent.</li>
      </ul>

      <h2>Where it fits in this curriculum</h2>
      <p>Throughout this curriculum we use MLX for three specific tasks:</p>
      <ol>
        <li><strong>Local LLM</strong> in Phase 7 (Subject 35) — the agentic capstone. MLX-LM serves Llama / Qwen / Mistral much faster than transformers-on-MPS.</li>
        <li><strong>MLX-Whisper</strong> in Subject 26 — voice-clone dataset transcription.</li>
        <li><strong>MusicGen</strong> in Subject 24 — Apple maintains a fast MLX port.</li>
      </ol>

      <p>
        For the <em>diffusion</em> half of the curriculum — image, video, controlnet, ipadapter, all
        the recipes — we stay on PyTorch-MPS inside ComfyUI. Trying to mix MLX into ComfyUI today
        means writing custom nodes that bounce tensors between frameworks, which is a research
        project rather than a productive one.
      </p>

      <h2>Installing MLX (preview)</h2>
      <p>We install MLX in Subject 35 / Chapter 1 when we set up the local LLM. Don't install it now.</p>

      <NoteBlock title="The right phrase: 'PyTorch for ComfyUI, MLX for adjacent tools'">
        Internalize this. ComfyUI = PyTorch-MPS. The agent's brain (LLM), the voice transcription,
        the music generation — those can be MLX, served behind small REST APIs. ComfyUI calls them.
        Subject 35 wires it up.
      </NoteBlock>
    </>
  )
}

import { ch, subj } from './_helpers.js'

export default subj({
  id: '35-llm-integration',
  number: 35,
  phase: 7,
  title: 'Local LLM Integration in ComfyUI',
  icon: '🧠',
  description:
    'Run a local LLM on M5 Pro and call it from ComfyUI nodes. Foundation for the agentic capstone.',
  prerequisites: ['01-comfyui-fundamentals', '04-quantization'],
  estimatedHours: 4,
  difficulty: 'intermediate',
  chapters: [
    ch('c1-options', 'Local LLM Options', [
      ['s1-ollama', 'Ollama (gguf/llama.cpp on Mac)'],
      ['s2-mlx-lm', 'MLX-LM (Apple Native)'],
      ['s3-llamacpp', 'llama.cpp Server'],
      ['s4-openai-api-shim', 'OpenAI-Compatible API Shim'],
    ], 40),
    ch('c2-models', 'Picking a Mac-Friendly LLM', [
      ['s1-llama-3-8b', 'Llama-3.x 8B Instruct (Q4/Q5 on 24 GB)'],
      ['s2-qwen', 'Qwen 2.5 7B / 14B'],
      ['s3-deepseek', 'DeepSeek-R1 Distills'],
      ['s4-vision-models', 'Vision LLMs (Llava, Qwen-VL)'],
    ], 35),
    ch('c3-comfy-nodes', 'LLM Nodes in ComfyUI', [
      ['s1-comfyui-llm', 'ComfyUI-Ollama / ComfyUI-LLM-Toolkit / ComfyUI-IF_AI'],
      ['s2-prompt-shape', 'Prompt-Shape Nodes (System / User / Schema)'],
      ['s3-tool-calls', 'Tool Calls and Structured Output'],
    ], 40),
    ch('c4-prompt-eng', 'Prompt Engineering for Agents', [
      ['s1-roles', 'System / User / Tool Roles'],
      ['s2-structured-out', 'JSON Schema / Pydantic-Style Output'],
      ['s3-fewshot', 'Few-Shot Patterns'],
    ], 35, 'advanced'),
    ch('c5-mac-budget', 'Mac VRAM Budget for LLM + Image/Video', [
      ['s1-coexistence', 'LLM + Diffusion Coexistence'],
      ['s2-handoff', 'Sequential Handoff Pattern'],
    ], 25),
  ],
})

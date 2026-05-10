import { ch, subj } from './_helpers.js'

export default subj({
  id: '04-quantization',
  number: 4,
  phase: 1,
  title: 'Model Formats & Quantization',
  icon: '🧊',
  description:
    'safetensors vs GGUF, fp16/bf16/Q4–Q8 trade-offs, and Mac-specific recommendations.',
  prerequisites: ['02-apple-silicon-mps'],
  estimatedHours: 5,
  difficulty: 'intermediate',
  chapters: [
    ch('c1-formats', 'File Formats', [
      ['s1-ckpt-vs-safetensors', '.ckpt vs .safetensors'],
      ['s2-gguf', 'GGUF: Origins and Structure'],
      ['s3-sft-and-others', '.sft, .pt, and others'],
    ], 40, 'beginner'),
    ch('c2-dtype-tradeoffs', 'Dtype Trade-offs', [
      ['s1-bytes-per-param', 'Bytes per Parameter'],
      ['s2-quality-cost', 'Quality vs Size Trade-off'],
      ['s3-mac-dtypes', 'Which Dtypes Run on MPS'],
    ], 40),
    ch('c3-gguf-quants', 'GGUF Quants Q2 → Q8', [
      ['s1-quant-naming', 'Quant Naming (K, KS, KM, 0, 1)'],
      ['s2-flux-quants', 'FLUX Q4_K_S vs Q5_K_S vs Q8_0 on Mac'],
      ['s3-hunyuan-wan', 'Hunyuan and Wan Quants'],
    ], 50),
    ch('c4-loading-gguf', 'Loading GGUF in ComfyUI', [
      ['s1-gguf-nodes', 'ComfyUI-GGUF Custom Nodes'],
      ['s2-unetloader-gguf', 'UnetLoaderGGUF, DualCLIPLoaderGGUF'],
      ['s3-vae-and-clip', 'VAE and CLIP Side'],
    ], 35),
    ch('c5-mac-recommendations', 'Mac Recommendations Cheat-Sheet', [
      ['s1-image-models', 'Image Models on 24 GB'],
      ['s2-video-models', 'Video Models on 24 GB'],
      ['s3-audio-voice', 'Audio and Voice Models'],
    ], 45),
    ch('c6-provenance', 'Provenance and Hygiene', [
      ['s1-hashes', 'Hashes and Verification'],
      ['s2-civitai-vs-hf', 'CivitAI vs HuggingFace'],
    ], 25, 'beginner'),
  ],
})

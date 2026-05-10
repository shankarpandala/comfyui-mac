import { ch, subj } from './_helpers.js'

export default subj({
  id: '08-flux',
  number: 8,
  phase: 2,
  title: 'FLUX.1 on Mac',
  icon: '⚡',
  description:
    'The most common pain point for Mac users. fp8 trap, GGUF quants, Dev/Schnell, FLUX Fill / Redux / Canny / Depth.',
  prerequisites: ['04-quantization', '07-sd3'],
  estimatedHours: 7,
  difficulty: 'advanced',
  chapters: [
    ch('c1-architecture', 'FLUX Architecture', [
      ['s1-dit-overview', 'DiT-based Architecture'],
      ['s2-double-single-stream', 'Double-Stream + Single-Stream Blocks'],
      ['s3-text-conditioning', 'T5 + CLIP Text Conditioning'],
    ], 45),
    ch('c2-variants', 'Dev vs Schnell vs Pro', [
      ['s1-dev', 'FLUX Dev'],
      ['s2-schnell', 'FLUX Schnell (4-step distill)'],
      ['s3-pro-availability', 'FLUX Pro Availability'],
    ], 30),
    ch('c3-fp8-trap-on-mac', 'The fp8 Trap on Mac', [
      ['s1-why-it-breaks', 'Why Community Workflows Break'],
      ['s2-substitution-recipe', 'Exact Substitution Recipe'],
      ['s3-validation', 'Validating the Replacement Worked'],
    ], 50, 'advanced'),
    ch('c4-gguf-on-mac', 'FLUX GGUF on Mac', [
      ['s1-quant-quality', 'Q4_K_S vs Q5_K_S vs Q8_0 Quality'],
      ['s2-loading', 'Loading with UnetLoaderGGUF + DualCLIPLoaderGGUF'],
      ['s3-vae-bf16', 'bf16 VAE Choice'],
    ], 45),
    ch('c5-tuning', 'Tuning FLUX on Mac', [
      ['s1-steps-guidance', 'Steps and Guidance for FLUX'],
      ['s2-samplers', 'Samplers Tuned for FLUX'],
      ['s3-resolutions', 'Resolutions and Aspect Ratios'],
    ], 40),
    ch('c6-control-variants', 'FLUX Control Variants', [
      ['s1-redux', 'FLUX Redux (Image Prompt)'],
      ['s2-fill', 'FLUX Fill (Inpaint)'],
      ['s3-canny-depth', 'FLUX Canny and Depth'],
    ], 50),
    ch('c7-schnell-recipes', 'Schnell 4-Step Recipes', [
      ['s1-under-12gb', 'Under-12 GB Recipe'],
      ['s2-batch-iteration', 'Batch Iteration'],
    ], 30),
  ],
})

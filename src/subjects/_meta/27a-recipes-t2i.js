import { chPub, subj } from './_helpers.js'

export default subj({
  id: '27a-recipes-t2i',
  number: 27.1,
  phase: '5b',
  title: 'Recipes — Text to Image',
  icon: '📜',
  description: 'Downloadable .json workflows for every common t2i scenario, tuned for M5 Pro.',
  prerequisites: ['08-flux'],
  estimatedHours: 4,
  difficulty: 'intermediate',
  status: 'published',
  chapters: [
    chPub('c1-baseline', 'Baselines', [
      ['s1-sdxl-canonical', 'SDXL DPM++ 2M Karras'],
      ['s2-sdxl-lightning', 'SDXL Lightning 4-Step'],
    ], 30),
    chPub('c2-flux', 'FLUX Recipes', [
      ['s1-schnell-q5', 'FLUX Schnell GGUF Q5 (4 steps)'],
      ['s2-dev-q4ks', 'FLUX Dev GGUF Q4_K_S'],
    ], 40),
    chPub('c3-sd35', 'SD3.5', [
      ['s1-large-bf16-t5', 'SD3.5 Large + bf16 T5'],
    ], 25),
    chPub('c4-niche-bases', 'Pony / Illustrious / NoobAI', [
      ['s1-pony', 'Pony Recipe'],
      ['s2-illustrious', 'Illustrious Recipe'],
      ['s3-noobai', 'NoobAI Recipe'],
    ], 35),
    chPub('c5-domains', 'Per-Domain Recipes', [
      ['s1-photoreal', 'Photoreal'],
      ['s2-product', 'Product Shots'],
      ['s3-architectural', 'Architectural'],
    ], 35),
  ],
})

import { chPub, subj } from './_helpers.js'

export default subj({
  id: '06-sdxl',
  number: 6,
  phase: 2,
  title: 'SDXL & SDXL-Turbo',
  icon: '🎨',
  description:
    'Dual-encoder DiT-style UNet. Base + refiner, Lightning/Hyper/Turbo, Pony / Illustrious / NoobAI ecosystem.',
  prerequisites: ['05-sd15'],
  estimatedHours: 5,
  difficulty: 'intermediate',
  status: 'published',
  chapters: [
    chPub('c1-architecture', 'SDXL Architecture', [
      ['s1-dual-encoders', 'Dual Text Encoders (clip-l + clip-g)'],
      ['s2-1024-native', '1024 Native Resolution'],
      ['s3-aesthetic-cond', 'Aesthetic / Crop Conditioning'],
    ], 40),
    chPub('c2-base-refiner', 'Base + Refiner Pipeline', [
      ['s1-when-to-refine', 'When the Refiner Helps'],
      ['s2-ensemble-of-experts', 'Ensemble of Experts Workflow'],
    ], 30),
    chPub('c3-fast-distillations', 'Fast Distillations', [
      ['s1-lightning', 'SDXL Lightning (1/2/4/8 step)'],
      ['s2-hyper-sd', 'Hyper-SD'],
      ['s3-turbo', 'SDXL Turbo'],
      ['s4-lcm-tcd-loras', 'LCM and TCD LoRAs'],
    ], 50),
    chPub('c4-popular-bases', 'Popular Bases', [
      ['s1-pony', 'Pony Diffusion v6'],
      ['s2-illustrious', 'Illustrious-XL'],
      ['s3-noobai', 'NoobAI-XL'],
    ], 35),
    chPub('c5-mac-budget', 'Mac VRAM Budget', [
      ['s1-fp16-budget', 'SDXL fp16 Memory Footprint'],
      ['s2-resolution-cost', 'Resolution Cost Curve'],
    ], 25),
  ],
})

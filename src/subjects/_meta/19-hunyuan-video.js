import { chPub, subj } from './_helpers.js'

export default subj({
  id: '19-hunyuan-video',
  number: 19,
  phase: 3,
  title: 'HunyuanVideo on Mac',
  icon: '🎥',
  description: 'Tencent\'s 13B DiT video model — GGUF quants, FastVideo, I2V, and realistic Mac timings.',
  prerequisites: ['18-ltx', '04-quantization'],
  estimatedHours: 5,
  difficulty: 'research',
  status: 'published',
  chapters: [
    chPub('c1-architecture', 'Hunyuan Architecture', [
      ['s1-13b-dit', '13B Dual-Stream DiT'],
      ['s2-3d-vae', '3D VAE'],
    ], 35),
    chPub('c2-gguf-on-mac', 'GGUF Quants on Mac', [
      ['s1-which-quant', 'Which Quant Fits in 24 GB'],
      ['s2-loading', 'Loading Hunyuan GGUF'],
    ], 40),
    chPub('c3-fastvideo', 'FastVideo Distillation', [
      ['s1-fastvideo', 'Step-Reduced FastVideo'],
    ], 25, 'advanced'),
    chPub('c4-i2v', 'Hunyuan I2V', [
      ['s1-i2v-recipe', 'I2V Recipe'],
    ], 25),
    chPub('c5-mac-timings', 'Realistic Mac Timings', [
      ['s1-bench-table', '5s @ 544×960 Bench Numbers'],
    ], 20),
  ],
})

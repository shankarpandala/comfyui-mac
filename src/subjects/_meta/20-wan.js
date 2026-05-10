import { ch, subj } from './_helpers.js'

export default subj({
  id: '20-wan',
  number: 20,
  phase: 3,
  title: 'Wan 2.1 / 2.2',
  icon: '🌊',
  description: 'Alibaba\'s Wan video models — 14B/5B split, GGUF, I2V, Fun-Control, VACE editing.',
  prerequisites: ['19-hunyuan-video'],
  estimatedHours: 5,
  difficulty: 'research',
  chapters: [
    ch('c1-architecture', 'Wan Architecture', [
      ['s1-overview', 'Architecture Overview'],
      ['s2-14b-vs-5b', '14B vs 5B Split'],
    ], 35),
    ch('c2-gguf-on-mac', 'GGUF on Mac', [
      ['s1-recommended', 'Recommended Quants'],
    ], 25),
    ch('c3-i2v-fun', 'I2V and Fun-Control', [
      ['s1-i2v', 'Wan I2V'],
      ['s2-fun-control', 'Fun-Control'],
    ], 35),
    ch('c4-vace', 'VACE (Video Editing)', [
      ['s1-vace-overview', 'What VACE Does'],
      ['s2-masked-edit', 'Masked Identity-Preserving Edit'],
    ], 35, 'advanced'),
    ch('c5-loras', 'Wan + LoRA', [
      ['s1-motion-loras', 'Motion LoRAs'],
      ['s2-style-loras', 'Style LoRAs'],
    ], 25),
    ch('c6-22-moe', 'Wan 2.2 MoE', [
      ['s1-22-changes', 'What Changed in 2.2'],
    ], 20),
  ],
})

import { ch, subj } from './_helpers.js'

export default subj({
  id: '07-sd3',
  number: 7,
  phase: 2,
  title: 'SD3 & SD3.5',
  icon: '🧪',
  description: 'MMDiT, T5-XXL text encoder, triple-encoder management — and avoiding fp8 on Mac.',
  prerequisites: ['06-sdxl', '02-apple-silicon-mps'],
  estimatedHours: 4,
  difficulty: 'intermediate',
  chapters: [
    ch('c1-mmdit', 'MMDiT Architecture', [
      ['s1-multi-modal-blocks', 'Multi-Modal DiT Blocks'],
      ['s2-token-fusion', 'Text/Image Token Fusion'],
    ], 35),
    ch('c2-text-encoders', 'Triple Text Encoders', [
      ['s1-clip-l-g-t5', 'CLIP-L, CLIP-G, T5-XXL'],
      ['s2-t5-fp16-on-mac', 'Loading T5 fp16 (not fp8) on Mac'],
    ], 30),
    ch('c3-sd3-medium-large', 'SD3 Medium vs Large', [
      ['s1-which-fits', 'Which Fits in 24 GB'],
      ['s2-sd35-large-turbo', 'SD3.5 Large Turbo'],
    ], 25),
    ch('c4-prompting-sd3', 'Prompting SD3', [
      ['s1-natural-language', 'Natural Language vs Tags'],
      ['s2-known-failures', 'Known Failure Modes'],
    ], 25, 'beginner'),
  ],
})

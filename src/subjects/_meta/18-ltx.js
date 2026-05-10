import { ch, subj } from './_helpers.js'

export default subj({
  id: '18-ltx',
  number: 18,
  phase: 3,
  title: 'LTX-Video',
  icon: '🚀',
  description: 'The Mac-friendliest serious video model. Real-time-ish on M5 Pro.',
  prerequisites: ['16-video-foundations'],
  estimatedHours: 4,
  difficulty: 'intermediate',
  chapters: [
    ch('c1-architecture', 'LTX Architecture', [
      ['s1-dit', 'LTX DiT'],
      ['s2-768x512-native', '768×512 Native'],
    ], 30),
    ch('c2-why-mac-friendly', 'Why LTX Is the Best on Mac', [
      ['s1-throughput', 'Throughput on M5 Pro'],
      ['s2-budget', 'Memory Budget'],
    ], 25),
    ch('c3-t2v', 'Text-to-Video Recipe', [
      ['s1-t2v-baseline', 'Baseline t2v Workflow'],
    ], 25, 'beginner'),
    ch('c4-i2v', 'Image-to-Video Recipe', [
      ['s1-i2v-baseline', 'Baseline i2v Workflow'],
    ], 25, 'beginner'),
    ch('c5-versions', 'LTX Versions', [
      ['s1-097', 'LTX 0.9.5 / 0.9.7'],
      ['s2-13b', 'LTX 13B (Mac Trade-offs)'],
    ], 25),
    ch('c6-stg', 'STG (Spatio-Temporal Guidance)', [
      ['s1-stg', 'STG Tuning'],
    ], 20, 'advanced'),
  ],
})

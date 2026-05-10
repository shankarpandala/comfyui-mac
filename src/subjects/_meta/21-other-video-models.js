import { chPub, subj } from './_helpers.js'

export default subj({
  id: '21-other-video-models',
  number: 21,
  phase: 3,
  title: 'Mochi, CogVideoX, Open-Sora',
  icon: '🍡',
  description: 'Survey: when each is preferable, Mac feasibility table.',
  prerequisites: ['16-video-foundations'],
  estimatedHours: 3,
  difficulty: 'advanced',
  status: 'published',
  chapters: [
    chPub('c1-mochi', 'Mochi', [
      ['s1-mochi-overview', 'Mochi Overview'],
      ['s2-mochi-mac', 'Mochi on Mac'],
    ], 25),
    chPub('c2-cogvideox', 'CogVideoX', [
      ['s1-5b', 'CogVideoX 5B'],
      ['s2-i2v', 'CogVideoX I2V'],
    ], 30),
    chPub('c3-open-sora', 'Open-Sora', [
      ['s1-os-overview', 'Open-Sora Overview'],
    ], 20),
    chPub('c4-comparison', 'Comparison', [
      ['s1-when-to-use-each', 'When to Use Each'],
    ], 20),
  ],
})

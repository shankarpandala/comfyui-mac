import { chPub, subj } from './_helpers.js'

export default subj({
  id: '24-music',
  number: 24,
  phase: 4,
  title: 'Music Generation',
  icon: '🎵',
  description: 'MusicGen, Stable Audio, ACE-Step.',
  prerequisites: ['23-audio-basics'],
  estimatedHours: 2,
  difficulty: 'intermediate',
  status: 'published',
  chapters: [
    chPub('c1-musicgen', 'MusicGen', [
      ['s1-musicgen-mac', 'MusicGen on Mac (MLX / transformers)'],
      ['s2-melody-cond', 'Melody Conditioning'],
    ], 30),
    chPub('c2-stable-audio', 'Stable Audio', [
      ['s1-stable-audio', 'Stable Audio Recipe'],
    ], 20),
    chPub('c3-ace-step', 'ACE-Step', [
      ['s1-ace-step', 'ACE-Step Overview'],
    ], 20),
  ],
})

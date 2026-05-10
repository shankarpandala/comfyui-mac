import { chPub, subj } from './_helpers.js'

export default subj({
  id: '23-audio-basics',
  number: 23,
  phase: 4,
  title: 'Audio Diffusion Basics',
  icon: '🔊',
  description: 'Mel-spectrograms, audio VAEs, neural codecs (Encodec, DAC).',
  prerequisites: ['03-diffusion-theory'],
  estimatedHours: 3,
  difficulty: 'intermediate',
  status: 'published',
  chapters: [
    chPub('c1-mel-spec', 'Mel-Spectrograms', [
      ['s1-mel-overview', 'Mel-Spectrogram Overview'],
    ], 20),
    chPub('c2-codecs', 'Neural Codecs', [
      ['s1-encodec', 'Encodec'],
      ['s2-dac', 'DAC'],
    ], 25),
    chPub('c3-stable-audio', 'Stable Audio Open', [
      ['s1-recipe', 'Stable Audio Open Recipe'],
    ], 25),
    chPub('c4-audioldm2', 'AudioLDM2', [
      ['s1-audioldm', 'AudioLDM2 Pipeline'],
    ], 20),
  ],
})

import { ch, subj } from './_helpers.js'

export default subj({
  id: '25-tts',
  number: 25,
  phase: 4,
  title: 'Text-to-Speech',
  icon: '🗣️',
  description: 'F5-TTS, ChatTTS, XTTS-v2, Kokoro — Mac comparison.',
  prerequisites: ['23-audio-basics'],
  estimatedHours: 3,
  difficulty: 'intermediate',
  chapters: [
    ch('c1-f5-tts', 'F5-TTS', [
      ['s1-f5-tts', 'F5-TTS Zero-Shot'],
      ['s2-mac-perf', 'Mac Performance Notes'],
    ], 30),
    ch('c2-chattts', 'ChatTTS', [
      ['s1-chattts', 'ChatTTS Pipeline'],
    ], 20),
    ch('c3-xtts', 'XTTS-v2 (Coqui)', [
      ['s1-xtts', 'XTTS-v2 Setup'],
    ], 20),
    ch('c4-kokoro', 'Kokoro-TTS', [
      ['s1-kokoro', 'Kokoro (Small, Fast on Mac)'],
    ], 15, 'beginner'),
    ch('c5-comparison', 'Comparison Matrix', [
      ['s1-matrix', 'M5 Pro Comparison'],
    ], 15),
  ],
})

import { ch, subj } from './_helpers.js'

export default subj({
  id: '26-voice-cloning',
  number: 26,
  phase: 4,
  title: 'Voice Cloning',
  icon: '🎙️',
  description: 'RVC, OpenVoice v2, F5-TTS zero-shot. Dataset prep with Whisper.',
  prerequisites: ['25-tts'],
  estimatedHours: 4,
  difficulty: 'advanced',
  chapters: [
    ch('c1-rvc', 'RVC', [
      ['s1-rvc-pipeline', 'RVC Pipeline'],
      ['s2-rvc-training', 'Training on M5 Pro'],
    ], 40),
    ch('c2-openvoice', 'OpenVoice v2', [
      ['s1-openvoice', 'OpenVoice Setup'],
    ], 25),
    ch('c3-f5-zeroshot', 'F5-TTS Zero-Shot', [
      ['s1-10s-clone', '10-Second Voice Clone'],
    ], 25),
    ch('c4-dataset-prep', 'Dataset Preparation', [
      ['s1-recording', 'Recording Best Practices'],
      ['s2-denoising', 'Denoising'],
      ['s3-whisper-transcribe', 'Whisper Transcription'],
    ], 35),
    ch('c5-quality-time', 'Quality vs Time', [
      ['s1-tradeoffs', 'M5 Pro Trade-offs'],
    ], 20),
  ],
})

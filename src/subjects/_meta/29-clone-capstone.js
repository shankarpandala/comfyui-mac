import { ch, subj } from './_helpers.js'

export default subj({
  id: '29-clone-capstone',
  number: 29,
  phase: 5,
  title: 'Building Your Hyper-Realistic Clone (Capstone)',
  icon: '🪄',
  description:
    'End-to-end: photo capture → SDXL/FLUX LoRA → PuLID identity → LivePortrait + Sonic → F5-TTS / RVC voice → script-to-video.',
  prerequisites: ['12-lora-training', '26-voice-cloning', '27-identity', '28-talking-head'],
  estimatedHours: 12,
  difficulty: 'research',
  chapters: [
    ch('c1-pipeline-overview', 'Pipeline Overview', [
      ['s1-end-to-end', 'End-to-End Diagram'],
    ], 20),
    ch('c2-capture', 'Capturing Yourself', [
      ['s1-protocol', 'Phone-Camera Capture Protocol'],
      ['s2-lighting', 'Lighting Plan'],
      ['s3-expressions', 'Expression Variety'],
    ], 45),
    ch('c3-train-self-lora', 'Train a Self LoRA', [
      ['s1-sdxl-lora', 'SDXL LoRA of Yourself'],
      ['s2-flux-lora', 'FLUX LoRA of Yourself'],
    ], 60, 'research'),
    ch('c4-pulid-stack', 'Combine with PuLID', [
      ['s1-stronger-id', 'Stronger Identity Preservation'],
    ], 25),
    ch('c5-animate', 'Animate the Still', [
      ['s1-liveportrait-sonic', 'LivePortrait + Sonic'],
    ], 35, 'research'),
    ch('c6-voice-clone', 'Voice-Clone Yourself', [
      ['s1-f5-tts', 'F5-TTS Self-Clone'],
      ['s2-rvc', 'RVC Self-Clone'],
    ], 40),
    ch('c7-script-to-video', 'Script-to-Video End-to-End', [
      ['s1-pipeline', 'Pipeline: Script → TTS → Talk → Upscale → Export'],
      ['s2-9-16-export', '9:16 Reels/Shorts Export'],
    ], 45, 'research'),
  ],
})

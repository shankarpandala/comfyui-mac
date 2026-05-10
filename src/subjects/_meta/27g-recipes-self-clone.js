import { ch, subj } from './_helpers.js'

export default subj({
  id: '27g-recipes-self-clone',
  number: 27.7,
  phase: '5b',
  title: 'Recipes — Self-Clone Workflows',
  icon: '🪞👤',
  description: 'Concrete workflow files for cloning yourself across t2i, t+i2i, i2v, talking head, end-to-end.',
  prerequisites: ['29-clone-capstone'],
  estimatedHours: 6,
  difficulty: 'research',
  chapters: [
    ch('c1-capture', 'Capture Protocol', [
      ['s1-shotlist', '40–80 Shot List'],
    ], 25),
    ch('c2-caption', 'Captioning', [
      ['s1-wd14', 'WD14 + Manual Cleanup'],
    ], 20),
    ch('c3-train-sdxl', 'SDXL LoRA Training', [
      ['s1-mac-config', 'M5 Pro Config'],
    ], 35, 'research'),
    ch('c4-train-flux', 'FLUX LoRA Training', [
      ['s1-mac-flux', 'M5 Pro FLUX Config'],
    ], 40, 'research'),
    ch('c5-id-stack', 'Identity Stack', [
      ['s1-stack-recipe', 'Your-LoRA + PuLID + FaceID Portrait'],
    ], 30, 'advanced'),
    ch('c6-self-t2i', 'Self-Clone t2i Recipe', [
      ['s1-any-setting', 'Any Setting, Any Outfit'],
    ], 25),
    ch('c7-self-ti2i', 'Self-Clone t+i2i Recipe', [
      ['s1-into-scene', 'Place Yourself into a Reference Scene'],
    ], 25),
    ch('c8-self-i2v', 'Self-Clone i2v Recipe', [
      ['s1-animate-still', 'Animate a Still of You'],
    ], 25, 'advanced'),
    ch('c9-self-talking', 'Self-Clone Talking Head', [
      ['s1-liveportrait-sonic', 'LivePortrait + Sonic + Voice Clone'],
    ], 35, 'research'),
    ch('c10-end-to-end', 'End-to-End Script-to-Video', [
      ['s1-pipeline', 'Full Pipeline Recipe'],
    ], 40, 'research'),
  ],
})

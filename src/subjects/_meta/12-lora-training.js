import { chPub, subj } from './_helpers.js'

export default subj({
  id: '12-lora-training',
  number: 12,
  phase: 2,
  title: 'Training Your Own LoRAs Locally',
  icon: '🏋️',
  description:
    'Train LoRAs on M5 Pro with kohya_ss (MPS), ai-toolkit, or simpletuner — for SDXL and FLUX.',
  prerequisites: ['11-loras', '02-apple-silicon-mps'],
  estimatedHours: 8,
  difficulty: 'advanced',
  status: 'published',
  chapters: [
    chPub('c1-dataset', 'Dataset Preparation', [
      ['s1-image-counts', 'How Many Images, What Variety'],
      ['s2-captioning', 'Captioning (WD14, JoyTag, manual)'],
      ['s3-regularization', 'Regularization Images'],
    ], 60),
    chPub('c2-tools-on-mac', 'Training Tools on Mac', [
      ['s1-kohya', 'kohya_ss MPS Branch'],
      ['s2-ai-toolkit', 'ai-toolkit'],
      ['s3-simpletuner', 'simpletuner'],
    ], 45),
    chPub('c3-sdxl-training', 'SDXL LoRA Training on M5 Pro', [
      ['s1-config', 'Config: batch=1, accumulation, lr'],
      ['s2-time-budget', 'Realistic Time Budget'],
      ['s3-validation', 'Validation Sampling'],
    ], 50),
    chPub('c4-flux-training', 'FLUX LoRA Training on Mac', [
      ['s1-flux-config', 'FLUX-Specific Config'],
      ['s2-time-quality', 'Time vs Quality'],
    ], 50, 'research'),
    chPub('c5-overfit-and-merge', 'Overfit Detection and Merging', [
      ['s1-overfit', 'Detecting Overfit'],
      ['s2-merge-into-ckpt', 'Merging LoRAs into Checkpoints'],
    ], 30, 'advanced'),
  ],
})

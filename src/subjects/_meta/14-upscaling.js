import { ch, subj } from './_helpers.js'

export default subj({
  id: '14-upscaling',
  number: 14,
  phase: 2,
  title: 'Upscaling & Detail Enhancement',
  icon: '🔍',
  description: 'ESRGAN, SUPIR, tiled VAE, FaceDetailer, ReActor.',
  prerequisites: ['06-sdxl'],
  estimatedHours: 4,
  difficulty: 'intermediate',
  chapters: [
    ch('c1-esrgan', 'ESRGAN Family', [
      ['s1-real-esrgan', 'Real-ESRGAN, 4x-UltraSharp'],
      ['s2-nmkd', 'NMKD Models'],
    ], 25, 'beginner'),
    ch('c2-supir', 'SUPIR (Diffusion Upscale)', [
      ['s1-supir-recipe', 'SUPIR on Mac — Memory Budget'],
    ], 30, 'advanced'),
    ch('c3-tiled', 'Tiled Diffusion / Tiled VAE', [
      ['s1-tiling', 'Tiling Strategy'],
      ['s2-seam-handling', 'Seam Handling'],
    ], 30),
    ch('c4-iterative', 'Iterative SD Upscale', [
      ['s1-multi-pass', 'Multi-Pass Upscale'],
    ], 20),
    ch('c5-face-restore', 'Face Restoration', [
      ['s1-gfpgan-codeformer', 'GFPGAN, CodeFormer'],
      ['s2-reactor', 'ReActor Face Swap'],
    ], 25),
    ch('c6-detailers', 'Detailers (Impact Pack)', [
      ['s1-facedetailer', 'FaceDetailer'],
      ['s2-person-detailer', 'Person Detailer'],
    ], 25),
  ],
})

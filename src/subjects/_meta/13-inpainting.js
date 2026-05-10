import { ch, subj } from './_helpers.js'

export default subj({
  id: '13-inpainting',
  number: 13,
  phase: 2,
  title: 'Inpainting, Outpainting, Editing',
  icon: '🖌️',
  description: 'Mask-based editing — UNet inpaint, BrushNet, PowerPaint, FLUX Fill.',
  prerequisites: ['09-controlnet'],
  estimatedHours: 4,
  difficulty: 'intermediate',
  chapters: [
    ch('c1-mask-basics', 'Mask Basics', [
      ['s1-mask-anatomy', 'Mask Anatomy and Feathering'],
      ['s2-denoise-schedule', 'Denoise Schedule for Inpaint'],
    ], 30),
    ch('c2-models', 'Inpaint Models', [
      ['s1-base-vs-inpaint', 'Base + Denoise vs Inpaint Checkpoint'],
      ['s2-sdxl-inpaint-cnet', 'SDXL Inpaint ControlNets'],
    ], 30),
    ch('c3-brushnet-powerpaint', 'BrushNet and PowerPaint', [
      ['s1-brushnet', 'BrushNet'],
      ['s2-powerpaint', 'PowerPaint'],
    ], 30),
    ch('c4-differential', 'Differential Diffusion', [
      ['s1-soft-masks', 'Soft Masks via Differential Diffusion'],
    ], 20, 'advanced'),
    ch('c5-flux-fill', 'FLUX Fill', [
      ['s1-flux-fill-recipe', 'FLUX Fill Recipe on Mac'],
    ], 25, 'advanced'),
    ch('c6-outpainting', 'Outpainting', [
      ['s1-strategies', 'Strategies and Seam Handling'],
    ], 20),
  ],
})

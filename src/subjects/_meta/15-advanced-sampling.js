import { ch, subj } from './_helpers.js'

export default subj({
  id: '15-advanced-sampling',
  number: 15,
  phase: 2,
  title: 'Advanced Sampling & Guidance',
  icon: '🎚️',
  description: 'PAG, SEG, SAG, custom sigma schedules, dynamic thresholding.',
  prerequisites: ['03-diffusion-theory'],
  estimatedHours: 3,
  difficulty: 'advanced',
  chapters: [
    ch('c1-cfg-tricks', 'CFG Tricks', [
      ['s1-rescale', 'CFG Rescale'],
      ['s2-dynamic-thresh', 'Dynamic Thresholding'],
      ['s3-auto-cfg', 'Automatic CFG'],
    ], 30),
    ch('c2-pag-seg-sag', 'PAG / SEG / SAG', [
      ['s1-pag', 'Perturbed Attention Guidance'],
      ['s2-seg', 'Smoothed Energy Guidance'],
      ['s3-sag', 'Self-Attention Guidance'],
    ], 35, 'advanced'),
    ch('c3-step-tricks', 'Step / Detail Tricks', [
      ['s1-step-skip', 'Step Skip'],
      ['s2-detail-daemon', 'Detail Daemon'],
    ], 25, 'advanced'),
    ch('c4-custom-samplers', 'Custom Samplers', [
      ['s1-sampler-custom', 'SamplerCustom and Advanced'],
      ['s2-from-scratch-sigmas', 'Sigma Schedules from Scratch'],
    ], 30, 'research'),
  ],
})

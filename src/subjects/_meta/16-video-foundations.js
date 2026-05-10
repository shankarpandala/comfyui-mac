import { chPub, subj } from './_helpers.js'

export default subj({
  id: '16-video-foundations',
  number: 16,
  phase: 3,
  title: 'Video Diffusion Foundations',
  icon: '🎬',
  description: 'Temporal consistency, 3D causal VAEs, frame packing, VRAM math for 24 GB.',
  prerequisites: ['03-diffusion-theory'],
  estimatedHours: 4,
  difficulty: 'advanced',
  status: 'published',
  chapters: [
    chPub('c1-temporal-cons', 'Temporal Consistency', [
      ['s1-flicker', 'Flicker, Drift, Identity Loss'],
      ['s2-optical-flow', 'Optical Flow Constraints'],
    ], 35),
    chPub('c2-3d-vaes', '3D Causal VAEs', [
      ['s1-3d-vae-anatomy', '3D VAE Anatomy'],
      ['s2-frame-compression', 'Frame Compression Ratio'],
    ], 30, 'research'),
    chPub('c3-frame-packing', 'Frame Packing and Sliding Windows', [
      ['s1-windowing', 'Windowing for Long Outputs'],
    ], 25, 'advanced'),
    chPub('c4-vram-math', 'VRAM Math for 24 GB', [
      ['s1-budget-table', 'Budget Table for Common Models'],
    ], 25),
  ],
})

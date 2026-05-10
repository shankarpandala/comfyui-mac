import { chPub, subj } from './_helpers.js'

export default subj({
  id: '22-vid2vid',
  number: 22,
  phase: 3,
  title: 'Video-to-Video & Editing',
  icon: '✂️',
  description: 'vid2vid with ControlNet, optical flow, RIFE/FILM, SVD.',
  prerequisites: ['17-animatediff'],
  estimatedHours: 5,
  difficulty: 'advanced',
  status: 'published',
  chapters: [
    chPub('c1-cn-per-frame', 'ControlNet per Frame', [
      ['s1-depth-pose-canny', 'Depth, Pose, Canny per Frame'],
    ], 30),
    chPub('c2-optical-flow', 'Optical Flow', [
      ['s1-raft', 'RAFT for Consistency'],
    ], 25, 'research'),
    chPub('c3-vace', 'VACE Editing', [
      ['s1-vace-recipe', 'VACE Recipe'],
    ], 25, 'advanced'),
    chPub('c4-rife-film', 'RIFE / FILM Frame Interpolation', [
      ['s1-rife', 'RIFE'],
      ['s2-film', 'FILM'],
      ['s3-fps-uplift', '8 fps → 24/30 fps Pipeline'],
    ], 30),
    chPub('c5-svd', 'Stable Video Diffusion', [
      ['s1-svd', 'SVD / SVD-XT'],
    ], 25),
  ],
})

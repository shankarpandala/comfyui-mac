import { chPub, subj } from './_helpers.js'

export default subj({
  id: '27b-recipes-ti2i',
  number: 27.2,
  phase: '5b',
  title: 'Recipes — Text + Image to Image',
  icon: '🖼️➡️🖼️',
  description: 'i2i, IP-Adapter style, ControlNet+LoRA, FLUX Redux, InstantID+Pose.',
  prerequisites: ['27a-recipes-t2i', '10-ipadapter'],
  estimatedHours: 4,
  difficulty: 'intermediate',
  status: 'published',
  chapters: [
    chPub('c1-i2i-base', 'i2i Baseline', [
      ['s1-denoise-recipe', 'Denoise Schedule'],
    ], 25),
    chPub('c2-ip-adapter', 'IP-Adapter Style Transfer', [
      ['s1-style-only', 'Reference-Only Style'],
      ['s2-style-plus-cnet', 'IP-Adapter + ControlNet Canny'],
    ], 35),
    chPub('c3-cnet', 'ControlNet Recipes', [
      ['s1-depth-relight', 'Depth Relight'],
      ['s2-pose-character', 'Pose + Character LoRA'],
      ['s3-tile-upscale', 'Tile ControlNet Upscale'],
    ], 40),
    chPub('c4-flux-redux', 'FLUX Redux on Mac', [
      ['s1-redux-recipe', 'FLUX Redux Recipe'],
    ], 25),
    chPub('c5-instantid-pose', 'InstantID + Pose', [
      ['s1-id-pose', 'Face Transfer + Body Pose'],
    ], 30),
  ],
})

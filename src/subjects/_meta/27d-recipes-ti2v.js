import { chPub, subj } from './_helpers.js'

export default subj({
  id: '27d-recipes-ti2v',
  number: 27.4,
  phase: '5b',
  title: 'Recipes — Text + Images to Video',
  icon: '🖼️➡️🎬',
  description: 'i2v with text guidance, multi-image conditioning, first/last-frame interpolation.',
  prerequisites: ['27c-recipes-t2v'],
  estimatedHours: 4,
  difficulty: 'advanced',
  status: 'published',
  chapters: [
    chPub('c1-ltx-i2v', 'LTX i2v + Prompt', [
      ['s1-ltx-i2v-recipe', 'LTX i2v Most-Reliable Recipe'],
    ], 25),
    chPub('c2-wan-i2v', 'Wan 2.2 i2v', [
      ['s1-wan-i2v-recipe', 'Wan 2.2 i2v Recipe'],
    ], 30),
    chPub('c3-hunyuan-i2v', 'Hunyuan i2v', [
      ['s1-hy-i2v-gguf', 'Hunyuan i2v GGUF'],
    ], 30),
    chPub('c4-svd-clip', 'SVD + CLIP', [
      ['s1-svd-clip', 'Image-to-Video with CLIP-Cond Text'],
    ], 25),
    chPub('c5-multi-image', 'Multi-Image Conditioning', [
      ['s1-first-last', 'First-Frame + Last-Frame Interp'],
      ['s2-keyframe', 'Keyframe-Guided Sequence'],
    ], 35, 'research'),
  ],
})

import { chPub, subj } from './_helpers.js'

export default subj({
  id: '27c-recipes-t2v',
  number: 27.3,
  phase: '5b',
  title: 'Recipes — Text to Video',
  icon: '📝➡️🎬',
  description: 'Pure text-to-video workflows tuned for M5 Pro.',
  prerequisites: ['18-ltx', '20-wan'],
  estimatedHours: 4,
  difficulty: 'advanced',
  status: 'published',
  chapters: [
    chPub('c1-ltx-t2v', 'LTX-Video t2v', [
      ['s1-ltx-097', 'LTX 0.9.7 Recipe'],
    ], 25),
    chPub('c2-animatediff-t2v', 'AnimateDiff t2v', [
      ['s1-sdxl-motion', 'AnimateDiff SDXL + Motion LoRA'],
    ], 30),
    chPub('c3-hunyuan-t2v', 'Hunyuan t2v', [
      ['s1-gguf-q4', 'Hunyuan GGUF Q4 t2v'],
    ], 35),
    chPub('c4-wan-t2v', 'Wan 2.2 t2v', [
      ['s1-wan22-5b', 'Wan 2.2 5B t2v'],
    ], 30),
    chPub('c5-cog-t2v', 'CogVideoX-5B t2v', [
      ['s1-cog-recipe', 'CogVideoX Recipe'],
    ], 25),
    chPub('c6-svd-bridge', 'SVD Bridged t2v', [
      ['s1-image-bridged', 'Text → Image → SVD'],
    ], 25),
  ],
})

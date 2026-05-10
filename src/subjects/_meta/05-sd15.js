import { ch, subj } from './_helpers.js'

export default subj({
  id: '05-sd15',
  number: 5,
  phase: 2,
  title: 'Stable Diffusion 1.5 / 2.x',
  icon: '🖼️',
  description: 'The classic UNet pipeline. Architecture, prompting, embeddings, hi-res fix.',
  prerequisites: ['03-diffusion-theory'],
  estimatedHours: 5,
  difficulty: 'beginner',
  chapters: [
    ch('c1-architecture', 'Architecture', [
      ['s1-unet', 'UNet Anatomy'],
      ['s2-clip', 'CLIP Text Encoder'],
      ['s3-vae', 'VAE Encoder/Decoder'],
    ], 45, 'beginner'),
    ch('c2-checkpoints', 'Checkpoints, Refiners, VAEs', [
      ['s1-pruned-vs-full', 'Pruned vs Full'],
      ['s2-baked-vae', 'Baked-in VAE vs External'],
      ['s3-popular-bases', 'DreamShaper, RealisticVision, Anything'],
    ], 30, 'beginner'),
    ch('c3-prompting', 'Prompting', [
      ['s1-weights', 'Weighting and Emphasis'],
      ['s2-embeddings', 'Embeddings / Textual Inversion'],
      ['s3-break-and-schedule', 'BREAK and Prompt Scheduling'],
      ['s4-negative', 'Negative Prompts'],
    ], 50, 'beginner'),
    ch('c4-resolutions', 'Resolutions and Hi-Res Fix', [
      ['s1-native-resolution', 'Native 512 and Aspect Ratios'],
      ['s2-hires-fix', 'Hi-Res Fix Recipe'],
      ['s3-tiled-vae', 'Tiled VAE on Mac'],
    ], 35, 'beginner'),
    ch('c5-batching', 'Batching on Unified Memory', [
      ['s1-batch-vs-seq', 'Batch vs Sequential'],
      ['s2-memory-spikes', 'Avoiding Memory Spikes'],
    ], 25),
  ],
})

import { chPub, subj } from './_helpers.js'

export default subj({
  id: '34-mac-perf',
  number: 34,
  phase: 6,
  title: 'Memory & Speed Optimization on M5 Pro',
  icon: '⚙️',
  description: 'Running cheat-sheet for performance.',
  prerequisites: ['02-apple-silicon-mps'],
  estimatedHours: 3,
  difficulty: 'advanced',
  status: 'published',
  chapters: [
    chPub('c1-offload', 'Model Offloading', [
      ['s1-flags', '--cpu-vae / --gpu-only / --highvram / --lowvram'],
    ], 25),
    chPub('c2-tiled-vae', 'Tiled VAE Decode', [
      ['s1-big-images', 'Tiled Decode for Big Images'],
    ], 20),
    chPub('c3-batch-tricks', 'Sequential Batch Tricks', [
      ['s1-batch', 'Batch Tricks'],
    ], 20),
    chPub('c4-cache', 'Persistent Model Cache', [
      ['s1-cache', 'Cache vs Reload'],
    ], 15),
    chPub('c5-profile', 'Profiling on MPS', [
      ['s1-torch-profiler', 'torch.profiler'],
    ], 25, 'research'),
  ],
})

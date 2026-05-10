import { chPub, subj } from './_helpers.js'

export default subj({
  id: '31-custom-nodes',
  number: 31,
  phase: 6,
  title: 'Custom Nodes & Python Internals',
  icon: '🔧',
  description: 'Write your own ComfyUI nodes from scratch.',
  prerequisites: ['01-comfyui-fundamentals'],
  estimatedHours: 4,
  difficulty: 'advanced',
  status: 'published',
  chapters: [
    chPub('c1-contract', 'The INPUT_TYPES Contract', [
      ['s1-contract', 'INPUT_TYPES, RETURN_TYPES, FUNCTION'],
    ], 30),
    chPub('c2-first-node', 'Your First Node', [
      ['s1-10-line-example', '10-Line Example'],
    ], 25),
    chPub('c3-tensor-io', 'Tensor I/O', [
      ['s1-image-latent-mask', 'IMAGE / LATENT / MASK Conventions'],
    ], 30, 'advanced'),
    chPub('c4-frontend-widgets', 'Frontend Widgets', [
      ['s1-number-combo', 'Number, Combo, Image Preview'],
    ], 25, 'advanced'),
    chPub('c5-publishing', 'Publishing', [
      ['s1-comfy-registry', 'Publishing to Comfy Registry'],
    ], 20),
  ],
})

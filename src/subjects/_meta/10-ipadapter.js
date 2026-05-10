import { ch, subj } from './_helpers.js'

export default subj({
  id: '10-ipadapter',
  number: 10,
  phase: 2,
  title: 'IP-Adapter & Reference Conditioning',
  icon: '🪞',
  description: 'Image as a prompt — style, composition, identity. IP-Adapter, FaceID, InstantID, PuLID.',
  prerequisites: ['09-controlnet'],
  estimatedHours: 4,
  difficulty: 'intermediate',
  chapters: [
    ch('c1-architecture', 'IP-Adapter Architecture', [
      ['s1-cross-attn-injection', 'Cross-Attention Injection'],
      ['s2-image-encoders', 'CLIP-Vision Encoders'],
    ], 30),
    ch('c2-variants', 'Variants', [
      ['s1-plus', 'IP-Adapter Plus'],
      ['s2-faceid', 'FaceID, FaceID Plus v2'],
      ['s3-faceid-portrait', 'FaceID Portrait'],
    ], 35),
    ch('c3-instantid-pulid', 'InstantID and PuLID', [
      ['s1-instantid', 'InstantID Pipeline'],
      ['s2-pulid', 'PuLID (Recommended on Mac)'],
    ], 35),
    ch('c4-style-transfer', 'Style Transfer', [
      ['s1-style-only', 'Style-Only Conditioning'],
      ['s2-style-plus-control', 'Style + ControlNet'],
    ], 25),
    ch('c5-combined-stacks', 'Combined Identity Stacks', [
      ['s1-id-pose-style', 'Identity + Pose + Style'],
    ], 20, 'advanced'),
  ],
})

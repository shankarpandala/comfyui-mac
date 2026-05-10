import { chPub, subj } from './_helpers.js'

export default subj({
  id: '11-loras',
  number: 11,
  phase: 2,
  title: 'LoRAs, LyCORIS, DoRAs',
  icon: '🧬',
  description: 'Low-rank adaptation: theory, stacking, block weights, and per-architecture gotchas.',
  prerequisites: ['06-sdxl'],
  estimatedHours: 4,
  difficulty: 'intermediate',
  status: 'published',
  chapters: [
    chPub('c1-theory', 'Low-Rank Adaptation Theory', [
      ['s1-rank-alpha', 'Rank, Alpha, Dropout'],
      ['s2-where-injected', 'Where in the Network LoRA Injects'],
    ], 35, 'advanced'),
    chPub('c2-loading', 'Loading and Stacking', [
      ['s1-loraloader', 'LoraLoader (model + clip strength)'],
      ['s2-stacking', 'Stacking Multiple LoRAs'],
      ['s3-strength-tuning', 'Strength Tuning Strategies'],
    ], 30),
    chPub('c3-block-weights', 'Block Weights', [
      ['s1-per-block', 'Per-Block Strength'],
      ['s2-presets', 'Presets and Templates'],
    ], 25, 'advanced'),
    chPub('c4-variants', 'LyCORIS / LoCon / LoHa / DoRA', [
      ['s1-locon', 'LoCon'],
      ['s2-loha', 'LoHa'],
      ['s3-dora', 'DoRA'],
    ], 30, 'advanced'),
    chPub('c5-categories', 'Style / Character / Concept', [
      ['s1-style-loras', 'Style LoRAs'],
      ['s2-character-loras', 'Character LoRAs'],
      ['s3-concept-loras', 'Concept LoRAs'],
    ], 30),
    chPub('c6-flux-sd3', 'LoRA on FLUX and SD3', [
      ['s1-flux-loras', 'FLUX LoRA Compatibility'],
      ['s2-gotchas', 'Common Gotchas'],
    ], 25, 'advanced'),
  ],
})

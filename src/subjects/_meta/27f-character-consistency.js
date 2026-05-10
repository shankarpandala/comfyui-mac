import { ch, subj } from './_helpers.js'

export default subj({
  id: '27f-character-consistency',
  number: 27.6,
  phase: '5b',
  title: 'Recipes — Character Consistency in Long Videos',
  icon: '🪪',
  description:
    'The hard problem: keep one character coherent across >30 s of video. Six strategies plus a production recipe.',
  prerequisites: ['27d-recipes-ti2v', '11-loras', '27-identity'],
  estimatedHours: 5,
  difficulty: 'research',
  chapters: [
    ch('c1-the-problem', 'The Consistency Problem', [
      ['s1-drift', 'Drift, Identity Loss, Costume Change'],
    ], 20),
    ch('c2-strat-lora', 'Strategy 1 — Character LoRA', [
      ['s1-lora-injection', 'Inject Trained Subject in Every Clip'],
    ], 30),
    ch('c3-strat-pulid', 'Strategy 2 — PuLID/InstantID Re-Injection', [
      ['s1-per-clip-id', 'Per-Clip Identity Re-anchor'],
    ], 25),
    ch('c4-strat-i2v-chain', 'Strategy 3 — First-Frame I2V Chaining', [
      ['s1-chain-clips', 'Chain LTX/Wan I2V Clips'],
    ], 30, 'advanced'),
    ch('c5-strat-ip-per-shot', 'Strategy 4 — IP-Adapter per Shot', [
      ['s1-reference-image-stack', 'Per-Shot Reference Stack'],
    ], 25),
    ch('c6-strat-vace', 'Strategy 5 — VACE Masked Edits', [
      ['s1-vace-masked-id', 'Masked Identity Preservation'],
    ], 25, 'research'),
    ch('c7-strat-latent', 'Strategy 6 — Latent Anchoring', [
      ['s1-fixed-seed', 'Fixed Seed per Character'],
    ], 20, 'research'),
    ch('c8-combined-recipe', '>30s Production Recipe', [
      ['s1-combined', 'Combining Strategies for Long Output'],
    ], 40, 'research'),
    ch('c9-wardrobe-prop', 'Wardrobe and Prop Consistency', [
      ['s1-wardrobe-loras', 'Separate Wardrobe LoRAs'],
      ['s2-prompt-scaffolds', 'Prompt Scaffolds'],
    ], 30, 'advanced'),
    ch('c10-color-light', 'Color and Lighting Consistency', [
      ['s1-luts', 'LUTs in Post'],
      ['s2-tile-decode', 'Tile-Decode Tricks'],
    ], 25, 'advanced'),
  ],
})

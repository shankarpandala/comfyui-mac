import { ch, subj } from './_helpers.js'

export default subj({
  id: '27h-recipes-uncensored',
  number: 27.8,
  phase: '5b',
  title: 'Recipes — Unrestricted / Uncensored (Local)',
  icon: '🔓',
  description:
    'Local-only uncensored content. Responsible-use checklist (consent, age, watermarking, provenance), then model and recipe coverage.',
  prerequisites: ['27a-recipes-t2i'],
  estimatedHours: 4,
  difficulty: 'advanced',
  chapters: [
    ch('c1-why-local', 'Why Local Matters', [
      ['s1-hosted-vs-local', 'Hosted Moderation vs Local Freedom'],
    ], 20, 'beginner'),
    ch('c2-responsible-use', 'Responsible-Use Checklist', [
      ['s1-consent', 'Consent and Likeness'],
      ['s2-age-gate', 'No Minors in Training Data, Period'],
      ['s3-watermarking', 'Watermarking and Provenance'],
      ['s4-distribution', 'Distribution Policy and Storage Hygiene'],
    ], 35, 'beginner'),
    ch('c3-sdxl-bases', 'SDXL Uncensored Bases', [
      ['s1-pony', 'Pony Diffusion v6'],
      ['s2-illustrious', 'Illustrious-XL'],
      ['s3-noobai', 'NoobAI-XL'],
      ['s4-lustify', 'Lustify'],
    ], 35),
    ch('c4-sd15-bases', 'SD1.5 Uncensored Bases', [
      ['s1-survey', 'Survey'],
    ], 20),
    ch('c5-flux-uncensored', 'FLUX Uncensored Finetunes', [
      ['s1-mac-compat', 'Mac Compatibility Table'],
    ], 25, 'advanced'),
    ch('c6-video-uncensored', 'Hunyuan / Wan Uncensored LoRAs', [
      ['s1-mac-feasibility', 'Mac Feasibility'],
      ['s2-recipes', 'Video Uncensored Recipes'],
    ], 35, 'advanced'),
    ch('c7-prompt-style', 'Prompt-Style Differences', [
      ['s1-booru-vs-natural', 'Booru Tags vs Natural Language'],
    ], 25),
    ch('c8-detailers', 'Anatomy Fidelity', [
      ['s1-negative-detailer', 'Negative + Detailer Recipes'],
    ], 25, 'advanced'),
    ch('c9-self-uncensored', 'Self-Clone + Uncensored Stack', [
      ['s1-watermark-storage', 'Consent + Watermarking + Storage Hygiene'],
    ], 30, 'research'),
  ],
})

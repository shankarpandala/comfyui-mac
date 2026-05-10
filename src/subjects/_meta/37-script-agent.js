import { ch, subj } from './_helpers.js'

export default subj({
  id: '37-script-agent',
  number: 37,
  phase: 7,
  title: 'Script Generation Agent',
  icon: '✍️',
  description:
    'Turn research into broadcast-quality scripts: persona, length control, scene breakdown, B-roll prompts.',
  prerequisites: ['35-llm-integration', '36-research-tools'],
  estimatedHours: 4,
  difficulty: 'advanced',
  chapters: [
    ch('c1-persona', 'Persona and Voice', [
      ['s1-channel-voice', 'Defining Your Channel Voice'],
      ['s2-audience', 'Audience Persona'],
    ], 25),
    ch('c2-format', 'Format Templates', [
      ['s1-reel-format', 'Reel/Short (15–60 s)'],
      ['s2-short-form', 'Short-Form (1–3 min)'],
      ['s3-long-form', 'Long-Form (10–30 min)'],
    ], 35),
    ch('c3-structure', 'Script Structure', [
      ['s1-hook-body-cta', 'Hook → Body → CTA'],
      ['s2-beat-sheet', 'Beat Sheet'],
      ['s3-scene-breakdown', 'Scene Breakdown JSON'],
    ], 40),
    ch('c4-broll-prompts', 'B-Roll Prompt Generation', [
      ['s1-shot-list', 'Shot List from Script'],
      ['s2-prompt-templates', 'Visual Prompt Templates'],
    ], 30),
    ch('c5-length-tts', 'Length Control for TTS', [
      ['s1-words-to-seconds', 'Words ↔ Seconds Calibration'],
      ['s2-pacing', 'Pacing and Pauses'],
    ], 25),
    ch('c6-revise-loop', 'Revise/Critique Loop', [
      ['s1-self-critique', 'Self-Critique Pattern'],
      ['s2-style-guard', 'Style Guard Agent'],
    ], 30, 'advanced'),
  ],
})

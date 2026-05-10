import { ch, subj } from './_helpers.js'

export default subj({
  id: '39-heygen-capstone',
  number: 39,
  phase: 7,
  title: 'HeyGen-Class Capstone — Agentic AI Reels & Long Videos',
  icon: '🦾',
  description:
    'The final project: a fully agentic ComfyUI workflow that researches a topic, writes a script, narrates with your cloned voice, animates your AI clone, and produces realistic AI Reels, Shorts, and long videos — entirely on M5 Pro.',
  prerequisites: [
    '29-clone-capstone',
    '27g-recipes-self-clone',
    '30-social-pipelines',
    '38-orchestration',
  ],
  estimatedHours: 16,
  difficulty: 'research',
  chapters: [
    ch('c1-overview', 'HeyGen vs This Build', [
      ['s1-what-heygen-does', 'What HeyGen Does (and Costs)'],
      ['s2-our-equivalent', 'Our 100% Local Equivalent'],
      ['s3-capabilities-matrix', 'Capability Parity Matrix'],
    ], 30),
    ch('c2-architecture', 'System Architecture', [
      ['s1-block-diagram', 'Block Diagram of the Whole Pipeline'],
      ['s2-data-contracts', 'Data Contracts Between Stages'],
      ['s3-storage-layout', 'Storage Layout (raw, drafts, final)'],
    ], 40),
    ch('c3-research-stage', 'Stage 1 — Research Agent', [
      ['s1-topic-input', 'Topic Input and Research Brief'],
      ['s2-search-and-scrape', 'Search + Scrape + Summarize'],
      ['s3-fact-checks', 'Fact-Check / Source Citations'],
    ], 50, 'research'),
    ch('c4-script-stage', 'Stage 2 — Script Agent', [
      ['s1-format-router', 'Format Router (Reel / Short / Long)'],
      ['s2-script-draft', 'Script Drafting'],
      ['s3-scene-breakdown', 'Scene Breakdown + B-Roll Prompts'],
      ['s4-style-critique', 'Style Critique Pass'],
    ], 50, 'research'),
    ch('c5-voice-stage', 'Stage 3 — Voice (Your Clone)', [
      ['s1-tts-clone', 'TTS with F5-TTS / RVC of Your Voice'],
      ['s2-prosody', 'Prosody and Pacing Control'],
      ['s3-multi-take', 'Multi-Take Selection'],
    ], 40, 'advanced'),
    ch('c6-visual-stage', 'Stage 4 — Visual (Your AI Clone)', [
      ['s1-talking-head-shots', 'Talking-Head Shots (LivePortrait + Sonic)'],
      ['s2-broll-shots', 'B-Roll Shots (LTX / Wan i2v)'],
      ['s3-character-consistency', 'Long-Video Character Consistency'],
      ['s4-cutaways-and-text', 'Cutaways, Lower-Thirds, Title Cards'],
    ], 60, 'research'),
    ch('c7-edit-stage', 'Stage 5 — Edit & Assemble', [
      ['s1-timeline-build', 'Build a Timeline (ffmpeg)'],
      ['s2-music-sfx', 'Background Music / SFX'],
      ['s3-subtitle-burn', 'Subtitle Burn-In'],
      ['s4-watermark-c2pa', 'Watermark + C2PA Provenance'],
      ['s5-export-presets', 'Export Presets (9:16 Reel, 1:1, 16:9 Long)'],
    ], 50),
    ch('c8-orchestrator', 'Stage 6 — The Orchestrator', [
      ['s1-master-graph', 'Master Graph in ComfyUI'],
      ['s2-state-machine', 'State Machine and Resume'],
      ['s3-budget-guards', 'M5 Pro Budget Guards (memory, time)'],
      ['s4-human-gates', 'Human Approval Gates'],
    ], 60, 'research'),
    ch('c9-reels-recipe', 'Recipe — AI Reel (15–60 s)', [
      ['s1-fast-pipeline', 'Fast Pipeline (LTX + F5-TTS)'],
      ['s2-batch-iteration', 'Batch Iteration of Variants'],
    ], 40, 'advanced'),
    ch('c10-shorts-recipe', 'Recipe — AI Short (1–3 min)', [
      ['s1-multi-shot', 'Multi-Shot Shorts'],
      ['s2-pacing', 'Pacing and B-Roll Cadence'],
    ], 40, 'advanced'),
    ch('c11-long-recipe', 'Recipe — AI Long Video (10–30 min)', [
      ['s1-long-script', 'Long Script Sectioning'],
      ['s2-scene-batches', 'Scene-Batch Generation'],
      ['s3-consistency-strategy', 'Consistency Strategy across 30 min'],
      ['s4-render-budget', 'Mac Render Budget for 30 min'],
    ], 75, 'research'),
    ch('c12-publishing', 'Publishing Loop', [
      ['s1-platform-presets', 'YouTube / TikTok / Instagram / X Presets'],
      ['s2-thumbnails', 'Auto-Generated Thumbnails'],
      ['s3-metadata', 'Title / Description / Tags Generation'],
      ['s4-schedule', 'Local Scheduling via launchd'],
    ], 40, 'advanced'),
    ch('c13-evaluation', 'Quality Evaluation', [
      ['s1-rubric', 'Rubric: Identity / Lip-Sync / Pacing / Coherence'],
      ['s2-llm-judge', 'LLM-Judge Pattern'],
      ['s3-feedback-loop', 'Feedback Loop into the Agents'],
    ], 35, 'research'),
    ch('c14-responsible', 'Responsible Operation', [
      ['s1-disclosure', 'AI-Generated Disclosure'],
      ['s2-likeness', 'Your Own Likeness Only'],
      ['s3-c2pa-audit', 'C2PA Audit Trail'],
    ], 25),
  ],
})

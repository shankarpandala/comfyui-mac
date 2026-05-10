import { ch, subj } from './_helpers.js'

export default subj({
  id: '27e-recipes-v2v',
  number: 27.5,
  phase: '5b',
  title: 'Recipes — Video to Video',
  icon: '🎬➡️🎬',
  description: 'AnimateDiff vid2vid, Wan VACE, LTX vid2vid, IP-Adapter style transfer, Lineart, RIFE.',
  prerequisites: ['22-vid2vid'],
  estimatedHours: 4,
  difficulty: 'advanced',
  chapters: [
    ch('c1-animatediff-v2v', 'AnimateDiff vid2vid', [
      ['s1-cn-stack', 'ControlNet Stack per Frame'],
    ], 30),
    ch('c2-wan-vace', 'Wan VACE Editing', [
      ['s1-vace-recipe', 'VACE Recipe'],
    ], 30),
    ch('c3-ltx-v2v', 'LTX vid2vid + STG', [
      ['s1-ltx-stg', 'LTX vid2vid Recipe'],
    ], 25),
    ch('c4-style-transfer', 'Style Transfer', [
      ['s1-ip-per-frame', 'Per-Frame IP-Adapter'],
      ['s2-temporal-smooth', 'Temporal Smoothing'],
    ], 30, 'research'),
    ch('c5-rotoscope', 'Rotoscope Style', [
      ['s1-lineart-cn', 'ControlNet Lineart per Frame'],
    ], 25),
    ch('c6-fps-upgrade', 'FPS Upgrade Pass', [
      ['s1-rife-film', 'RIFE / FILM Recipe'],
    ], 20),
  ],
})

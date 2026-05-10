import { ch, subj } from './_helpers.js'

export default subj({
  id: '17-animatediff',
  number: 17,
  phase: 3,
  title: 'AnimateDiff & Hotshot',
  icon: '🌀',
  description: 'Motion modules layered onto SD1.5/SDXL bases. Context windows, motion LoRAs, vid2vid.',
  prerequisites: ['16-video-foundations', '06-sdxl'],
  estimatedHours: 4,
  difficulty: 'intermediate',
  chapters: [
    ch('c1-motion-modules', 'Motion Modules', [
      ['s1-v1-v2-v3', 'v1, v2, v3 Differences'],
      ['s2-sdxl-lightning', 'AnimateDiff SDXL and Lightning'],
    ], 35),
    ch('c2-context-windows', 'Context Windows', [
      ['s1-windowing', 'Window Size and Overlap'],
      ['s2-context-uniform', 'Context Uniform Schedulers'],
    ], 30, 'advanced'),
    ch('c3-motion-loras', 'Motion LoRAs', [
      ['s1-camera-motions', 'Camera Motion LoRAs'],
    ], 25),
    ch('c4-vid2vid', 'AnimateDiff vid2vid', [
      ['s1-cn-per-frame', 'ControlNet per Frame'],
    ], 30, 'advanced'),
    ch('c5-hotshot', 'Hotshot-XL', [
      ['s1-hotshot', 'Hotshot Pipeline'],
    ], 20),
  ],
})

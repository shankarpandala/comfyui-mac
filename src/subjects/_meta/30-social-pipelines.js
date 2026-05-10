import { chPub, subj } from './_helpers.js'

export default subj({
  id: '30-social-pipelines',
  number: 30,
  phase: 5,
  title: 'Social-Media Content Pipelines',
  icon: '📱',
  description: '9:16 / 1:1 / 16:9 presets, batch queue, ffmpeg, captions, watermarks.',
  prerequisites: ['29-clone-capstone'],
  estimatedHours: 3,
  difficulty: 'intermediate',
  status: 'published',
  chapters: [
    chPub('c1-aspect-presets', 'Aspect Ratio Presets', [
      ['s1-9-16', '9:16 Reels/Shorts'],
      ['s2-1-1', '1:1'],
      ['s3-16-9', '16:9'],
    ], 25),
    chPub('c2-batch-queues', 'Batch Generation Queues', [
      ['s1-queue-tactics', 'Queue Tactics on M5 Pro'],
    ], 25),
    chPub('c3-captions', 'Captions / Subtitles', [
      ['s1-burn-in', 'Burn-In via ffmpeg'],
      ['s2-style', 'Caption Style'],
    ], 25),
    chPub('c4-watermark', 'Watermarking', [
      ['s1-visible', 'Visible Watermark'],
      ['s2-c2pa', 'C2PA / Content Credentials'],
    ], 20),
    chPub('c5-api-mode', 'ComfyUI API Mode', [
      ['s1-api', 'Headless Generation'],
    ], 20),
  ],
})

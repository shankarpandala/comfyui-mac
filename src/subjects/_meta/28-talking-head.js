import { chPub, subj } from './_helpers.js'

export default subj({
  id: '28-talking-head',
  number: 28,
  phase: 5,
  title: 'Talking-Head & Lip-Sync',
  icon: '🗨️',
  description: 'Sonic, Hallo, EchoMimic, LivePortrait, SadTalker, Wav2Lip, MuseTalk.',
  prerequisites: ['27-identity', '26-voice-cloning'],
  estimatedHours: 5,
  difficulty: 'research',
  status: 'published',
  chapters: [
    chPub('c1-sonic', 'Sonic (Audio-Driven Portrait)', [
      ['s1-sonic-recipe', 'Sonic Recipe'],
    ], 30),
    chPub('c2-hallo', 'Hallo / Hallo2 / Hallo3', [
      ['s1-hallo', 'Hallo Versions'],
    ], 30),
    chPub('c3-echomimic', 'EchoMimic v2', [
      ['s1-echomimic', 'EchoMimic v2 Recipe'],
    ], 25),
    chPub('c4-liveportrait', 'LivePortrait', [
      ['s1-liveportrait', 'Expression Transfer'],
    ], 30),
    chPub('c5-sadtalker', 'SadTalker (Mac-Friendly)', [
      ['s1-sadtalker', 'SadTalker Setup'],
    ], 20),
    chPub('c6-wav2lip-musetalk', 'Wav2Lip / MuseTalk (Lip-Sync Only)', [
      ['s1-wav2lip', 'Wav2Lip'],
      ['s2-musetalk', 'MuseTalk'],
    ], 30),
  ],
})

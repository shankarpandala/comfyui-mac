import { ch, subj } from './_helpers.js'

export default subj({
  id: '27-identity',
  number: 27,
  phase: 5,
  title: 'Identity-Preserving Image Generation',
  icon: '👤',
  description: 'PuLID, InstantID, IP-Adapter FaceID, ReActor — keep one face across generations.',
  prerequisites: ['10-ipadapter'],
  estimatedHours: 4,
  difficulty: 'advanced',
  chapters: [
    ch('c1-pulid', 'PuLID', [
      ['s1-pulid-overview', 'PuLID Overview'],
      ['s2-pulid-mac', 'PuLID on Mac (Recommended)'],
    ], 35),
    ch('c2-instantid', 'InstantID', [
      ['s1-instantid', 'InstantID Recipe'],
    ], 25),
    ch('c3-faceid-portrait', 'IP-Adapter FaceID Portrait', [
      ['s1-portrait', 'FaceID Portrait Recipe'],
    ], 25),
    ch('c4-reactor', 'ReActor (Post-Hoc Swap)', [
      ['s1-reactor', 'ReActor Workflow'],
    ], 20),
    ch('c5-stack', 'Identity + Pose + Style Stack', [
      ['s1-full-stack', 'Full Stack Recipe'],
    ], 30, 'research'),
  ],
})

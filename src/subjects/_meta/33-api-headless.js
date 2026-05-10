import { chPub, subj } from './_helpers.js'

export default subj({
  id: '33-api-headless',
  number: 33,
  phase: 6,
  title: 'API, Automation, Headless',
  icon: '🤖',
  description: 'ComfyUI as a server, Python clients, launchd cron, Mac-mini cluster.',
  prerequisites: ['01-comfyui-fundamentals'],
  estimatedHours: 3,
  difficulty: 'advanced',
  status: 'published',
  chapters: [
    chPub('c1-server', 'ComfyUI as a Server', [
      ['s1-prompt-endpoint', '/prompt /queue /history Endpoints'],
    ], 25),
    chPub('c2-python-client', 'Python Client', [
      ['s1-client-pattern', 'Client Pattern'],
    ], 30),
    chPub('c3-launchd', 'macOS launchd Triggers', [
      ['s1-folder-watch', 'Folder Watch + Cron'],
    ], 25),
    chPub('c4-cluster', 'Multi-Mac Cluster', [
      ['s1-mac-mini-cluster', 'Mac-mini Cluster Patterns'],
    ], 25, 'research'),
  ],
})

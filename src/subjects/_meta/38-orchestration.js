import { chPub, subj } from './_helpers.js'

export default subj({
  id: '38-orchestration',
  number: 38,
  phase: 7,
  title: 'Agent Orchestration',
  icon: '🎼',
  description:
    'Wire many specialized agents into one workflow. LangGraph, CrewAI, native Comfy patterns, error handling.',
  prerequisites: ['37-script-agent'],
  estimatedHours: 5,
  difficulty: 'research',
  status: 'published',
  chapters: [
    chPub('c1-patterns', 'Orchestration Patterns', [
      ['s1-pipeline', 'Linear Pipeline'],
      ['s2-router', 'Router (Decide Then Branch)'],
      ['s3-supervisor', 'Supervisor / Sub-Agents'],
      ['s4-graph', 'Graph (LangGraph)'],
    ], 45),
    chPub('c2-langgraph', 'LangGraph in ComfyUI', [
      ['s1-graph-nodes', 'Graph Nodes from a Comfy Workflow'],
      ['s2-state-passing', 'State Passing'],
    ], 40, 'research'),
    chPub('c3-crewai', 'CrewAI Pattern', [
      ['s1-crew-roles', 'Roles and Tasks'],
      ['s2-handoff', 'Handoff Patterns'],
    ], 30),
    chPub('c4-native-comfy', 'Native Comfy Patterns', [
      ['s1-impact-switch', 'Impact-Pack Branches'],
      ['s2-anything-everywhere', 'Anything-Everywhere for State'],
    ], 30, 'advanced'),
    chPub('c5-error-handling', 'Error Handling and Retries', [
      ['s1-retries', 'Retries and Timeouts'],
      ['s2-fallback', 'Fallback Models'],
      ['s3-human-in-loop', 'Human-in-the-Loop Approval Gate'],
    ], 35, 'advanced'),
    chPub('c6-observability', 'Observability', [
      ['s1-traces', 'Tracing Agent Steps'],
      ['s2-cost', 'Cost / Time Accounting (Local)'],
    ], 25, 'advanced'),
  ],
})

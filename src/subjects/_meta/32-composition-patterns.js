import { ch, subj } from './_helpers.js'

export default subj({
  id: '32-composition-patterns',
  number: 32,
  phase: 6,
  title: 'Workflow Composition Patterns',
  icon: '🧱',
  description: 'Sub-workflows, Anything-Everywhere, conditionals, loops, reusable templates.',
  prerequisites: ['01-comfyui-fundamentals'],
  estimatedHours: 3,
  difficulty: 'intermediate',
  chapters: [
    ch('c1-subworkflows', 'Sub-Workflows / Groups / Reroutes', [
      ['s1-grouping', 'Grouping Strategies'],
    ], 25),
    ch('c2-wireless', 'Anything-Everywhere & Wireless Nodes', [
      ['s1-wireless', 'Wireless Patterns'],
    ], 25),
    ch('c3-conditional', 'Conditional Branching', [
      ['s1-impact-switches', 'Impact-Pack Switches'],
    ], 25, 'advanced'),
    ch('c4-loops', 'Loops', [
      ['s1-iterative', 'Iterative (Impact-Pack)'],
    ], 25, 'advanced'),
    ch('c5-templates', 'Reusable Templates', [
      ['s1-template-library', 'Template Library'],
    ], 20),
  ],
})

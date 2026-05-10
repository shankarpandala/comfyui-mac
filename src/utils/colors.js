/**
 * Color helpers for phases and difficulty in comfyui-mac.
 * Phases use hue-shifted oklch values defined in index.css.
 */

export const PHASE_COLORS = {
  1: { hex: '#3b82f6', name: 'Foundations', cssVar: '--phase-1' },
  2: { hex: '#8b5cf6', name: 'Image', cssVar: '--phase-2' },
  3: { hex: '#ec4899', name: 'Video', cssVar: '--phase-3' },
  4: { hex: '#f59e0b', name: 'Audio', cssVar: '--phase-4' },
  5: { hex: '#10b981', name: 'Avatars & Clones', cssVar: '--phase-5' },
  '5b': { hex: '#14b8a6', name: 'Workflow Recipes', cssVar: '--phase-5b' },
  6: { hex: '#64748b', name: 'Production', cssVar: '--phase-6' },
}

export const DIFFICULTY_COLORS = {
  beginner: {
    hex: '#22c55e',
    textClass: 'text-green-400',
    bgClass: 'bg-green-500/20',
    borderClass: 'border-green-500/40',
    label: 'Beginner',
  },
  intermediate: {
    hex: '#eab308',
    textClass: 'text-yellow-400',
    bgClass: 'bg-yellow-500/20',
    borderClass: 'border-yellow-500/40',
    label: 'Intermediate',
  },
  advanced: {
    hex: '#f97316',
    textClass: 'text-orange-400',
    bgClass: 'bg-orange-500/20',
    borderClass: 'border-orange-500/40',
    label: 'Advanced',
  },
  research: {
    hex: '#ef4444',
    textClass: 'text-red-400',
    bgClass: 'bg-red-500/20',
    borderClass: 'border-red-500/40',
    label: 'Research-grade',
  },
}

export function getPhaseColor(phase) {
  return PHASE_COLORS[phase] || PHASE_COLORS[1]
}

export function getDifficultyColor(level) {
  return (
    DIFFICULTY_COLORS[level] || {
      hex: '#6b7280',
      textClass: 'text-gray-400',
      bgClass: 'bg-gray-500/20',
      borderClass: 'border-gray-500/40',
      label: level || 'Unrated',
    }
  )
}

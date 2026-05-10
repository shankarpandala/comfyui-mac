/**
 * Tiny helpers to keep metadata files compact and uniform.
 * Used internally by subject _meta files.
 */

export const ch = (id, title, sections, mins = 40, diff = 'intermediate', desc = '') => ({
  id,
  title,
  description: desc,
  difficulty: diff,
  estimatedMinutes: mins,
  sections: sections.map((row) => {
    const [sid, t, m = 15] = row
    return { id: sid, title: t, difficulty: diff, readingMinutes: m, status: 'stub' }
  }),
})

export const subj = (cfg) => ({ status: 'stub', prerequisites: [], ...cfg })

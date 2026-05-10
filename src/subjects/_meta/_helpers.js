/**
 * Tiny helpers to keep metadata files compact and uniform.
 * Used internally by subject _meta files.
 */

export const ch = (id, title, sections, mins = 40, diff = 'intermediate', desc = '', status = 'stub') => ({
  id,
  title,
  description: desc,
  difficulty: diff,
  estimatedMinutes: mins,
  sections: sections.map((row) => {
    const [sid, t, m = 15] = row
    return { id: sid, title: t, difficulty: diff, readingMinutes: m, status }
  }),
})

/** Publish a chapter (and all its sections) — wraps ch() with status='published'. */
export const chPub = (id, title, sections, mins = 40, diff = 'intermediate', desc = '') =>
  ch(id, title, sections, mins, diff, desc, 'published')

export const subj = (cfg) => ({ status: 'stub', prerequisites: [], ...cfg })

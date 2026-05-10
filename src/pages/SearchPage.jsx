import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CURRICULUM } from '../subjects/index.js'

function flattenAll() {
  const out = []
  for (const s of CURRICULUM) {
    out.push({ kind: 'subject', id: s.id, label: s.title, desc: s.description, link: `/subjects/${s.id}` })
    for (const c of s.chapters || []) {
      out.push({
        kind: 'chapter',
        id: `${s.id}/${c.id}`,
        label: c.title,
        desc: c.description,
        link: `/subjects/${s.id}/${c.id}`,
        parent: s.title,
      })
      for (const sec of c.sections || []) {
        out.push({
          kind: 'section',
          id: `${s.id}/${c.id}/${sec.id}`,
          label: sec.title,
          desc: sec.description,
          link: `/subjects/${s.id}/${c.id}/${sec.id}`,
          parent: `${s.title} → ${c.title}`,
        })
      }
    }
  }
  return out
}

export default function SearchPage() {
  const [q, setQ] = useState('')
  const flat = useMemo(flattenAll, [])
  const results = useMemo(() => {
    const query = q.trim().toLowerCase()
    if (!query) return []
    return flat.filter((it) => `${it.label} ${it.desc || ''} ${it.parent || ''}`.toLowerCase().includes(query)).slice(0, 50)
  }, [q, flat])

  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Search</h1>
      <input
        type="search"
        autoFocus
        placeholder="Search subjects, chapters, sections…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900"
      />
      <ul className="mt-4 space-y-2">
        {results.map((r) => (
          <li key={r.id}>
            <Link to={r.link} className="block p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-brand-400">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wide text-zinc-500">{r.kind}</span>
                <span className="font-medium">{r.label}</span>
              </div>
              {r.parent && <div className="text-xs text-zinc-500 mt-0.5">{r.parent}</div>}
              {r.desc && <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{r.desc}</p>}
            </Link>
          </li>
        ))}
        {q && results.length === 0 && <li className="text-zinc-500 text-sm">No matches.</li>}
      </ul>
    </div>
  )
}

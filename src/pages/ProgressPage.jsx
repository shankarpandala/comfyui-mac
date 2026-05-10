import { CURRICULUM, PHASES } from '../subjects/index.js'
import { countSections } from '../utils/curriculum.js'
import useProgress from '../hooks/useProgress.js'
import { Link } from 'react-router-dom'

export default function ProgressPage() {
  const { getSubjectProgress } = useProgress()
  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">Your Progress</h1>
      {PHASES.map((p) => {
        const subjects = CURRICULUM.filter((s) => String(s.phase) === String(p.id))
        if (!subjects.length) return null
        return (
          <section key={p.id} className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Phase {p.id} — {p.name}</h2>
            <div className="space-y-2">
              {subjects.map((s) => {
                const total = countSections(s.id)
                const pct = getSubjectProgress(s.id, total)
                return (
                  <Link
                    key={s.id}
                    to={`/subjects/${s.id}`}
                    className="block p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-brand-400"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span>{s.icon}</span>
                        <span className="font-medium">{s.title}</span>
                      </div>
                      <span className="text-sm text-zinc-500">{pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                      <div className="h-full bg-brand-500" style={{ width: `${pct}%` }} />
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>
        )
      })}
    </div>
  )
}

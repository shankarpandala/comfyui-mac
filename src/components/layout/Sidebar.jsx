import { Link, NavLink } from 'react-router-dom'
import { CURRICULUM, PHASES } from '../../subjects/index.js'

function PhaseGroup({ phase, subjects, onClose }) {
  if (!subjects.length) return null
  return (
    <div className="mb-4">
      <div className="px-3 text-xs uppercase tracking-wide text-zinc-500 mb-1">
        Phase {phase.id} — {phase.name}
      </div>
      <ul>
        {subjects.map((s) => (
          <li key={s.id}>
            <NavLink
              to={`/subjects/${s.id}`}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-1.5 text-sm rounded-md ${
                  isActive
                    ? 'bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-200'
                    : 'hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                }`
              }
            >
              <span className="w-5 text-center">{s.icon}</span>
              <span className="truncate">{s.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Sidebar({ isOpen, onClose }) {
  const grouped = PHASES.map((p) => ({
    phase: p,
    subjects: CURRICULUM.filter((s) => String(s.phase) === String(p.id)),
  }))

  return (
    <>
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 z-30"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <aside
        className={`fixed top-14 bottom-0 left-0 w-[280px] z-40 lg:z-20 bg-white dark:bg-zinc-950 border-r border-zinc-200 dark:border-zinc-800 overflow-y-auto transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="px-4 py-3">
          <Link to="/" onClick={onClose} className="block px-3 py-2 text-sm font-semibold rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800">
            🏠 Home
          </Link>
        </div>
        <div className="px-1 pb-8">
          {grouped.map(({ phase, subjects }) => (
            <PhaseGroup key={phase.id} phase={phase} subjects={subjects} onClose={onClose} />
          ))}
        </div>
      </aside>
    </>
  )
}

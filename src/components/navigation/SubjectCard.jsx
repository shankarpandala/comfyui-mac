import { Link } from 'react-router-dom'
import { getDifficultyColor } from '../../utils/colors.js'
import useProgress from '../../hooks/useProgress.js'
import { countSections } from '../../utils/curriculum.js'

export default function SubjectCard({ subject }) {
  const diff = getDifficultyColor(subject.difficulty)
  const { getSubjectProgress } = useProgress()
  const total = countSections(subject.id)
  const pct = getSubjectProgress(subject.id, total)

  return (
    <Link
      to={`/subjects/${subject.id}`}
      className="block rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-brand-400 dark:hover:border-brand-600 transition p-4"
    >
      <div className="flex items-start gap-3">
        <div className="text-3xl">{subject.icon}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs text-zinc-500">Subject {subject.number}</span>
            <span className={`text-xs px-1.5 py-0.5 rounded ${diff.bgClass} ${diff.textClass}`}>{diff.label}</span>
          </div>
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 truncate">{subject.title}</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 line-clamp-2">{subject.description}</p>
          <div className="mt-3 flex items-center gap-3 text-xs text-zinc-500">
            <span>{(subject.chapters || []).length} chapters</span>
            <span>· {total} sections</span>
            {subject.estimatedHours && <span>· ~{subject.estimatedHours}h</span>}
          </div>
          <div className="mt-2 h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
            <div className="h-full bg-brand-500" style={{ width: `${pct}%` }} />
          </div>
        </div>
      </div>
    </Link>
  )
}

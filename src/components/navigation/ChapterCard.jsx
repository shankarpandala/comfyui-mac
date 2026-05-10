import { Link } from 'react-router-dom'
import { getDifficultyColor } from '../../utils/colors.js'

export default function ChapterCard({ subjectId, chapter, index }) {
  const diff = getDifficultyColor(chapter.difficulty)
  return (
    <Link
      to={`/subjects/${subjectId}/${chapter.id}`}
      className="block rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-brand-400 transition p-4"
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-zinc-500">Chapter {index + 1}</span>
        <span className={`text-xs px-1.5 py-0.5 rounded ${diff.bgClass} ${diff.textClass}`}>{diff.label}</span>
      </div>
      <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">{chapter.title}</h4>
      {chapter.description && <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{chapter.description}</p>}
      <div className="mt-2 text-xs text-zinc-500">
        {(chapter.sections || []).length} sections
        {chapter.estimatedMinutes ? ` · ~${chapter.estimatedMinutes} min` : ''}
      </div>
    </Link>
  )
}

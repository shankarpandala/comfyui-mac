import { Link } from 'react-router-dom'
import { getDifficultyColor } from '../../utils/colors.js'

export default function SectionLayout({ subject, chapter, section, children, prev, next, onComplete, isComplete }) {
  const diff = getDifficultyColor(section.difficulty)
  return (
    <article className="max-w-3xl mx-auto px-6 py-8">
      <header className="mb-8">
        <div className="flex items-center gap-2 text-xs mb-2">
          <Link to={`/subjects/${subject.id}`} className="text-zinc-500 hover:underline">
            {subject.title}
          </Link>
          <span className="text-zinc-400">/</span>
          <Link to={`/subjects/${subject.id}/${chapter.id}`} className="text-zinc-500 hover:underline">
            {chapter.title}
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">{section.title}</h1>
        <div className="flex items-center gap-2 text-sm text-zinc-500">
          {section.difficulty && (
            <span className={`px-2 py-0.5 rounded-md text-xs ${diff.bgClass} ${diff.textClass} ${diff.borderClass} border`}>
              {diff.label}
            </span>
          )}
          {section.readingMinutes && <span>· {section.readingMinutes} min read</span>}
        </div>
      </header>
      <div className="prose-doc">{children}</div>
      <footer className="mt-12 border-t border-zinc-200 dark:border-zinc-800 pt-6">
        {onComplete && (
          <button
            type="button"
            onClick={onComplete}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              isComplete
                ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300'
                : 'bg-brand-500 text-white hover:bg-brand-600'
            }`}
          >
            {isComplete ? '✓ Marked complete' : 'Mark complete'}
          </button>
        )}
        <div className="mt-6 flex justify-between text-sm">
          <div>
            {prev && (
              <Link to={`/subjects/${prev.subjectId}/${prev.chapterId}/${prev.sectionId}`} className="text-brand-600 dark:text-brand-400 hover:underline">
                ← {prev.title}
              </Link>
            )}
          </div>
          <div>
            {next && (
              <Link to={`/subjects/${next.subjectId}/${next.chapterId}/${next.sectionId}`} className="text-brand-600 dark:text-brand-400 hover:underline">
                {next.title} →
              </Link>
            )}
          </div>
        </div>
      </footer>
    </article>
  )
}

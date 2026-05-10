import { Link, useParams } from 'react-router-dom'
import { getSubject, getChapter } from '../utils/curriculum.js'
import { getDifficultyColor } from '../utils/colors.js'
import Breadcrumbs from '../components/layout/Breadcrumbs.jsx'

export default function ChapterPage() {
  const { subjectId, chapterId } = useParams()
  const subject = getSubject(subjectId)
  const chapter = getChapter(subjectId, chapterId)
  if (!subject || !chapter) return <div className="p-8 text-zinc-500">Chapter not found.</div>
  const diff = getDifficultyColor(chapter.difficulty)
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <Breadcrumbs
        items={[
          { to: '/', label: 'Home' },
          { to: `/subjects/${subjectId}`, label: subject.title },
          { label: chapter.title },
        ]}
      />
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">{chapter.title}</h1>
        {chapter.description && <p className="text-zinc-600 dark:text-zinc-400 mt-2">{chapter.description}</p>}
        <div className="mt-2 text-sm">
          <span className={`px-2 py-0.5 rounded ${diff.bgClass} ${diff.textClass}`}>{diff.label}</span>
        </div>
      </header>
      <ul className="space-y-2">
        {(chapter.sections || []).map((s, i) => {
          const sdiff = getDifficultyColor(s.difficulty)
          return (
            <li key={s.id}>
              <Link
                to={`/subjects/${subjectId}/${chapterId}/${s.id}`}
                className="flex items-center justify-between rounded-lg border border-zinc-200 dark:border-zinc-800 p-3 hover:border-brand-400 transition"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-zinc-400 text-sm font-mono">{i + 1}.</span>
                  <span className="font-medium truncate">{s.title}</span>
                  {s.status === 'stub' && (
                    <span className="text-xs px-1.5 py-0.5 rounded bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                      coming soon
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 shrink-0 text-xs text-zinc-500">
                  <span className={`px-1.5 py-0.5 rounded ${sdiff.bgClass} ${sdiff.textClass}`}>{sdiff.label}</span>
                  {s.readingMinutes && <span>{s.readingMinutes} min</span>}
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

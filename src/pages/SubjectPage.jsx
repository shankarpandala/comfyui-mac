import { useParams } from 'react-router-dom'
import { getSubject, countSections } from '../utils/curriculum.js'
import { getDifficultyColor } from '../utils/colors.js'
import Breadcrumbs from '../components/layout/Breadcrumbs.jsx'
import ChapterCard from '../components/navigation/ChapterCard.jsx'

export default function SubjectPage() {
  const { subjectId } = useParams()
  const subject = getSubject(subjectId)
  if (!subject) return <div className="p-8 text-zinc-500">Subject not found.</div>

  const diff = getDifficultyColor(subject.difficulty)
  const total = countSections(subjectId)

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <Breadcrumbs items={[{ to: '/', label: 'Home' }, { label: subject.title }]} />
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-4xl">{subject.icon}</span>
          <div>
            <div className="text-xs text-zinc-500">Phase {subject.phase} · Subject {subject.number}</div>
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">{subject.title}</h1>
          </div>
        </div>
        <p className="text-zinc-600 dark:text-zinc-400 mt-3 max-w-3xl">{subject.description}</p>
        <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-zinc-500">
          <span className={`px-2 py-0.5 rounded ${diff.bgClass} ${diff.textClass}`}>{diff.label}</span>
          {subject.estimatedHours && <span>~{subject.estimatedHours} hours</span>}
          <span>{(subject.chapters || []).length} chapters · {total} sections</span>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {(subject.chapters || []).map((c, i) => (
          <ChapterCard key={c.id} subjectId={subjectId} chapter={c} index={i} />
        ))}
      </div>
    </div>
  )
}

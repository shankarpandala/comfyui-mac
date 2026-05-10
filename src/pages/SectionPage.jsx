import { useParams } from 'react-router-dom'
import { lazy, Suspense, useMemo } from 'react'
import { getSubject, getChapter, getSection, getNextSection, getPrevSection } from '../utils/curriculum.js'
import SectionLayout from '../components/content/SectionLayout.jsx'
import useProgress from '../hooks/useProgress.js'

const sectionModules = import.meta.glob('../subjects/[0-9]*/c*/s*.jsx')

function StubBody({ section }) {
  return (
    <div>
      <p>
        This section is part of the curriculum but has not been authored yet. The structure exists; the
        content lands in a follow-up commit.
      </p>
      <p>What this section will cover:</p>
      <ul>
        <li>{section.description || section.title}</li>
      </ul>
      <p className="text-sm text-zinc-500 mt-6">
        Track progress on the GitHub repo or the Progress page.
      </p>
    </div>
  )
}

export default function SectionPage() {
  const { subjectId, chapterId, sectionId } = useParams()
  const subject = getSubject(subjectId)
  const chapter = getChapter(subjectId, chapterId)
  const section = getSection(subjectId, chapterId, sectionId)
  const { markComplete, unmarkComplete, isComplete } = useProgress()

  const Body = useMemo(() => {
    if (!section || section.status === 'stub') return null
    const path = `../subjects/${subjectId}/${chapterId}/${sectionId}.jsx`
    const loader = sectionModules[path]
    if (!loader) return null
    return lazy(loader)
  }, [subjectId, chapterId, sectionId, section])

  if (!subject || !chapter || !section) {
    return <div className="p-8 text-zinc-500">Section not found.</div>
  }

  const prev = getPrevSection(subjectId, chapterId, sectionId)
  const next = getNextSection(subjectId, chapterId, sectionId)
  const completed = isComplete(subjectId, chapterId, sectionId)
  const handleComplete = () =>
    completed
      ? unmarkComplete(subjectId, chapterId, sectionId)
      : markComplete(subjectId, chapterId, sectionId)

  return (
    <SectionLayout
      subject={subject}
      chapter={chapter}
      section={section}
      prev={prev}
      next={next}
      onComplete={handleComplete}
      isComplete={completed}
    >
      {Body ? (
        <Suspense fallback={<div className="text-zinc-400">Loading content…</div>}>
          <Body />
        </Suspense>
      ) : (
        <StubBody section={section} />
      )}
    </SectionLayout>
  )
}

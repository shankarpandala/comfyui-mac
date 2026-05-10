import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CURRICULUM, PHASES } from '../../subjects/index.js'
import useProgress from '../../hooks/useProgress.js'

function ChevronIcon({ open }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-200 shrink-0 ${open ? 'rotate-90' : 'rotate-0'}`}
      aria-hidden="true"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-emerald-500 dark:text-emerald-400 shrink-0"
      aria-label="Completed"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function SectionLink({ section, chapter, subject, isActive, isDone, onClose }) {
  const to = `/subjects/${subject.id}/${chapter.id}/${section.id}`
  return (
    <Link
      to={to}
      onClick={onClose}
      className={`group flex items-start gap-2 rounded-md py-1.5 pl-9 pr-3 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
        isActive
          ? 'bg-indigo-50 font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'
          : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-200'
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      <span className="flex-1 leading-snug break-words">{section.title}</span>
      {isDone && <CheckIcon />}
    </Link>
  )
}

function ChapterRow({ chapter, subject, activePathname, onClose }) {
  const { isComplete } = useProgress()
  const defaultOpen = chapter.sections?.some(
    (sec) => activePathname.includes(`/${chapter.id}/${sec.id}`)
  )
  const [open, setOpen] = useState(defaultOpen || false)

  const completedCount = chapter.sections?.filter((sec) =>
    isComplete(subject.id, chapter.id, sec.id)
  ).length || 0
  const total = chapter.sections?.length || 0

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start gap-2 rounded-md py-1.5 pl-5 pr-3 text-left text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        aria-expanded={open}
      >
        <span className="mt-0.5">
          <ChevronIcon open={open} />
        </span>
        <span className="flex-1 leading-snug break-words">{chapter.title}</span>
        {total > 0 && (
          <span className="ml-auto text-xs tabular-nums text-zinc-400 dark:text-zinc-500 shrink-0">
            {completedCount}/{total}
          </span>
        )}
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="chapter-sections"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-1">
              {chapter.sections?.map((section) => {
                const isActive = activePathname.includes(`/${chapter.id}/${section.id}`)
                const isDone = isComplete(subject.id, chapter.id, section.id)
                return (
                  <SectionLink
                    key={section.id}
                    section={section}
                    chapter={chapter}
                    subject={subject}
                    isActive={isActive}
                    isDone={isDone}
                    onClose={onClose}
                  />
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function SubjectRow({ subject, activePathname, onClose }) {
  const isSubjectActive = activePathname.includes(`/subjects/${subject.id}`)
  const [open, setOpen] = useState(isSubjectActive)

  return (
    <div className="border-b border-zinc-100 dark:border-zinc-800/60 last:border-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`flex w-full items-start gap-2.5 px-4 py-2.5 text-left text-sm font-semibold transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
          isSubjectActive
            ? 'text-zinc-900 dark:text-zinc-50'
            : 'text-zinc-700 dark:text-zinc-300'
        }`}
        aria-expanded={open}
      >
        <span className="text-base leading-none mt-0.5 shrink-0" aria-hidden="true">
          {subject.icon}
        </span>
        <span className="flex-1 leading-snug break-words">{subject.title}</span>
        <span className="mt-1">
          <ChevronIcon open={open} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="subject-chapters"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-2">
              {subject.chapters?.map((chapter) => (
                <ChapterRow
                  key={chapter.id}
                  chapter={chapter}
                  subject={subject}
                  activePathname={activePathname}
                  onClose={onClose}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function PhaseSection({ phase, subjects, activePathname, onClose }) {
  if (!subjects.length) return null
  return (
    <div>
      <div className="px-4 pt-4 pb-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
        Phase {phase.id} — {phase.name}
      </div>
      {subjects.map((subject) => (
        <SubjectRow
          key={subject.id}
          subject={subject}
          activePathname={activePathname}
          onClose={onClose}
        />
      ))}
    </div>
  )
}

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation()
  const grouped = PHASES.map((p) => ({
    phase: p,
    subjects: CURRICULUM.filter((s) => String(s.phase) === String(p.id)),
  }))

  const sidebarContent = (
    <aside
      className="flex h-full flex-col bg-white dark:bg-zinc-950"
      aria-label="Site navigation"
    >
      <div className="flex h-14 shrink-0 items-center justify-between border-b border-zinc-200 px-4 dark:border-zinc-800">
        <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          Curriculum
        </span>
        <button
          type="button"
          onClick={onClose}
          className="lg:hidden rounded-md p-1.5 text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          aria-label="Close sidebar"
        >
          <CloseIcon />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto" aria-label="Curriculum subjects">
        <Link
          to="/"
          onClick={onClose}
          className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b border-zinc-100 dark:border-zinc-800/60 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/40"
        >
          <span aria-hidden="true">🏠</span> Home
        </Link>
        {grouped.map(({ phase, subjects }) => (
          <PhaseSection
            key={phase.id}
            phase={phase}
            subjects={subjects}
            activePathname={location.pathname}
            onClose={onClose}
          />
        ))}
      </nav>

      <div className="shrink-0 border-t border-zinc-100 p-3 dark:border-zinc-800 space-y-2">
        <Link
          to="/models"
          onClick={onClose}
          className="block rounded-md bg-zinc-100 dark:bg-zinc-800/60 px-3 py-2 text-center text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700/60"
        >
          Model Catalog →
        </Link>
        <Link
          to="/progress"
          onClick={onClose}
          className="block rounded-md bg-indigo-50 px-3 py-2 text-center text-sm font-medium text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-900/50"
        >
          View My Progress →
        </Link>
      </div>
    </aside>
  )

  return (
    <>
      <div className="hidden lg:block fixed top-14 left-0 h-[calc(100vh-3.5rem)] w-[280px] overflow-hidden border-r border-zinc-200 dark:border-zinc-800 z-40">
        {sidebarContent}
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
              onClick={onClose}
              aria-hidden="true"
            />
            <motion.div
              key="drawer"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 z-50 h-full w-[280px] shadow-2xl lg:hidden"
            >
              {sidebarContent}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

/**
 * Curriculum navigation utilities.
 * Single source of truth: src/subjects/index.js (aggregated from _meta/*.js).
 */
import { CURRICULUM } from '../subjects/index.js'

export function getAllSubjects() {
  return CURRICULUM
}

export function getSubject(id) {
  return CURRICULUM.find((s) => s.id === id) || null
}

export function getChapter(subjectId, chapterId) {
  const subject = getSubject(subjectId)
  if (!subject) return null
  return (subject.chapters || []).find((c) => c.id === chapterId) || null
}

export function getSection(subjectId, chapterId, sectionId) {
  const chapter = getChapter(subjectId, chapterId)
  if (!chapter) return null
  return (chapter.sections || []).find((s) => s.id === sectionId) || null
}

export function countSections(subjectId) {
  const subject = getSubject(subjectId)
  if (!subject) return 0
  return (subject.chapters || []).reduce((sum, c) => sum + (c.sections?.length || 0), 0)
}

function flatSections(subjectId) {
  const subject = getSubject(subjectId)
  if (!subject) return []
  const flat = []
  for (const chapter of subject.chapters || []) {
    for (const section of chapter.sections || []) {
      flat.push({ subjectId, chapterId: chapter.id, sectionId: section.id, ...section })
    }
  }
  return flat
}

export function getNextSection(subjectId, chapterId, sectionId) {
  const flat = flatSections(subjectId)
  const idx = flat.findIndex((s) => s.chapterId === chapterId && s.sectionId === sectionId)
  if (idx === -1 || idx >= flat.length - 1) return null
  return flat[idx + 1]
}

export function getPrevSection(subjectId, chapterId, sectionId) {
  const flat = flatSections(subjectId)
  const idx = flat.findIndex((s) => s.chapterId === chapterId && s.sectionId === sectionId)
  if (idx <= 0) return null
  return flat[idx - 1]
}

export function getSubjectsByPhase(phase) {
  return CURRICULUM.filter((s) => String(s.phase) === String(phase))
}

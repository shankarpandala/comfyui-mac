import useAppStore from '../store/appStore.js'

export default function useProgress() {
  const markComplete = useAppStore((state) => state.markSectionComplete)
  const unmarkComplete = useAppStore((state) => state.unmarkSectionComplete)
  const isComplete = useAppStore((state) => state.isComplete)
  const getSubjectProgress = useAppStore((state) => state.getSubjectProgress)
  return { markComplete, unmarkComplete, isComplete, getSubjectProgress }
}

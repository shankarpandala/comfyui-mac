import { useEffect } from 'react'
import useAppStore from '../store/appStore.js'

export default function useTheme() {
  const theme = useAppStore((state) => state.theme)
  const toggleTheme = useAppStore((state) => state.toggleTheme)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
  }, [theme])

  return { theme, toggleTheme }
}

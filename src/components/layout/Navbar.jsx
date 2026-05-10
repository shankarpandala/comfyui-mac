import { Link } from 'react-router-dom'
import useTheme from '../../hooks/useTheme.js'

export default function Navbar({ onToggleSidebar, sidebarOpen }) {
  const { theme, toggleTheme } = useTheme()
  return (
    <nav className="sticky top-0 z-30 h-14 bg-white/80 dark:bg-zinc-950/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
      <div className="h-full px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleSidebar}
            className="lg:hidden p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800"
            aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
          >
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current" />
          </button>
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <span className="text-xl">🧩</span>
            <span className="hidden sm:inline">ComfyUI on Mac</span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/models" className="px-3 py-1.5 rounded-md text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800">
            Models
          </Link>
          <Link to="/search" className="px-3 py-1.5 rounded-md text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800">
            Search
          </Link>
          <Link to="/progress" className="px-3 py-1.5 rounded-md text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800">
            Progress
          </Link>
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  )
}

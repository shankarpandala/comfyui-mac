import { Link } from 'react-router-dom'

export default function Breadcrumbs({ items }) {
  return (
    <nav className="text-sm text-zinc-500 dark:text-zinc-400 mb-4" aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap gap-1">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <span className="text-zinc-400">/</span>}
            {it.to ? (
              <Link to={it.to} className="hover:text-zinc-700 dark:hover:text-zinc-200 underline-offset-2 hover:underline">
                {it.label}
              </Link>
            ) : (
              <span className="text-zinc-700 dark:text-zinc-200">{it.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

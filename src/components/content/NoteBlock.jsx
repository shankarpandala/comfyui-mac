export default function NoteBlock({ title, children }) {
  return (
    <aside className="my-6 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 p-4">
      <div className="text-xs font-semibold uppercase tracking-wide text-zinc-600 dark:text-zinc-400 mb-1">Note</div>
      {title && <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">{title}</h4>}
      <div className="text-sm text-zinc-700 dark:text-zinc-300">{children}</div>
    </aside>
  )
}

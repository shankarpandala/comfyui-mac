export default function MacGotchaBlock({ title, children }) {
  return (
    <aside className="my-6 rounded-xl border-2 border-red-400 dark:border-red-600 bg-red-50 dark:bg-red-950/30 p-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">🍎</span>
        <span className="text-xs font-semibold uppercase tracking-wide text-red-700 dark:text-red-300">
          Mac / MPS Gotcha
        </span>
      </div>
      {title && <h4 className="font-semibold text-red-900 dark:text-red-100 mb-1">{title}</h4>}
      <div className="text-sm text-red-900 dark:text-red-100">{children}</div>
    </aside>
  )
}

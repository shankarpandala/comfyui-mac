export default function WarningBlock({ title, children }) {
  return (
    <aside className="my-6 rounded-xl border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/30 p-4">
      <div className="text-xs font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-300 mb-1">⚠️ Warning</div>
      {title && <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-1">{title}</h4>}
      <div className="text-sm text-amber-900 dark:text-amber-100">{children}</div>
    </aside>
  )
}

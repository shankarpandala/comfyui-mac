export default function ExampleBlock({ title, children, difficulty }) {
  return (
    <aside className="my-6 rounded-xl border border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/30 p-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">Example</span>
        {difficulty && <span className="text-xs text-emerald-700 dark:text-emerald-400">· {difficulty}</span>}
      </div>
      {title && <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-1">{title}</h4>}
      <div className="text-sm text-emerald-900 dark:text-emerald-100">{children}</div>
    </aside>
  )
}

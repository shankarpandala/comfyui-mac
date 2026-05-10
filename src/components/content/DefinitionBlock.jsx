export default function DefinitionBlock({ title, children, term }) {
  return (
    <aside className="my-6 rounded-xl border border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/30 p-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">Definition</span>
        {term && <span className="font-mono text-sm text-blue-900 dark:text-blue-200">{term}</span>}
      </div>
      {title && <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">{title}</h4>}
      <div className="text-sm text-blue-900 dark:text-blue-100">{children}</div>
    </aside>
  )
}

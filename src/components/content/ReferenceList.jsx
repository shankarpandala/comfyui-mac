export default function ReferenceList({ references = [] }) {
  if (!references.length) return null
  return (
    <section className="mt-10 pt-6 border-t border-zinc-200 dark:border-zinc-800">
      <h3 className="text-lg font-semibold mb-3">References</h3>
      <ul className="space-y-2 text-sm">
        {references.map((r, i) => (
          <li key={i} className="text-zinc-700 dark:text-zinc-300">
            <span className="text-zinc-400">[{i + 1}]</span>{' '}
            {r.authors && <span>{r.authors} </span>}
            {r.year && <span>({r.year}). </span>}
            {r.url ? (
              <a href={r.url} target="_blank" rel="noopener noreferrer" className="font-medium text-brand-600 dark:text-brand-400 hover:underline">
                {r.title}
              </a>
            ) : (
              <span className="font-medium">{r.title}</span>
            )}
            {r.venue && <span className="text-zinc-500"> · {r.venue}</span>}
          </li>
        ))}
      </ul>
    </section>
  )
}

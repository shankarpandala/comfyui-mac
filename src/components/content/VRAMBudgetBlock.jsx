export default function VRAMBudgetBlock({ rows = [], target = '24 GB unified (M5 Pro)' }) {
  return (
    <div className="my-6 rounded-xl border border-zinc-300 dark:border-zinc-700 overflow-hidden">
      <div className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-xs uppercase tracking-wide text-zinc-600 dark:text-zinc-400 flex justify-between">
        <span>VRAM Budget</span>
        <span>Target: {target}</span>
      </div>
      <table className="w-full text-sm">
        <thead className="bg-zinc-50 dark:bg-zinc-900">
          <tr className="text-left">
            <th className="p-2">Component</th>
            <th className="p-2">Dtype</th>
            <th className="p-2 text-right">Size</th>
            <th className="p-2">Notes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-zinc-200 dark:border-zinc-800">
              <td className="p-2 font-mono">{r.component}</td>
              <td className="p-2">{r.dtype}</td>
              <td className="p-2 text-right font-mono">{r.size}</td>
              <td className="p-2 text-zinc-600 dark:text-zinc-400">{r.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function ModelCard({ model }) {
  if (!model) return null
  const { name, family, dtype, sizeGB, license, hf, civitai, macRecommended, notes } = model
  return (
    <div className="my-4 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 overflow-hidden">
      <div className="px-4 py-2 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
        <div className="font-semibold">{name}</div>
        {macRecommended && (
          <span className="text-xs bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 px-2 py-0.5 rounded">
            Mac-Recommended
          </span>
        )}
      </div>
      <div className="p-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
        <div><div className="text-xs text-zinc-500">Family</div><div>{family}</div></div>
        <div><div className="text-xs text-zinc-500">Dtype</div><div className="font-mono">{dtype}</div></div>
        <div><div className="text-xs text-zinc-500">Size</div><div>{sizeGB} GB</div></div>
        <div><div className="text-xs text-zinc-500">License</div><div>{license}</div></div>
      </div>
      {notes && <div className="px-4 pb-3 text-xs text-zinc-600 dark:text-zinc-400">{notes}</div>}
      <div className="px-4 pb-3 flex gap-3 text-xs">
        {hf && <a href={hf} target="_blank" rel="noopener noreferrer" className="text-brand-600 dark:text-brand-400 hover:underline">HuggingFace</a>}
        {civitai && <a href={civitai} target="_blank" rel="noopener noreferrer" className="text-brand-600 dark:text-brand-400 hover:underline">CivitAI</a>}
      </div>
    </div>
  )
}

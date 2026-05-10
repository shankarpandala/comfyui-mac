import { useMemo, useState } from 'react'
import { MODELS, MODALITIES, DTYPES } from '../models/index.js'
import ModelCard from '../components/content/ModelCard.jsx'

export default function ModelsPage() {
  const [modality, setModality] = useState('all')
  const [dtype, setDtype] = useState('all')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return MODELS.filter((m) => {
      if (modality !== 'all' && m.modality !== modality) return false
      if (dtype !== 'all' && m.dtype !== dtype) return false
      if (q && !`${m.name} ${m.family} ${m.notes || ''}`.toLowerCase().includes(q)) return false
      return true
    })
  }, [modality, dtype, query])

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">Models for M5 Pro / 24 GB</h1>
        <p className="text-zinc-600 dark:text-zinc-400 mt-2">
          Curated catalog of image, video, audio, voice, and LLM models with the recommended dtype/quant
          for 24 GB unified memory. Populated as the curriculum is authored.
        </p>
      </header>
      <div className="flex flex-wrap gap-3 mb-6">
        <input
          type="search"
          placeholder="Search models…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 min-w-[200px] px-3 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900"
        />
        <select
          value={modality}
          onChange={(e) => setModality(e.target.value)}
          className="px-3 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900"
        >
          <option value="all">All modalities</option>
          {MODALITIES.map((m) => (
            <option key={m.id} value={m.id}>{m.label}</option>
          ))}
        </select>
        <select
          value={dtype}
          onChange={(e) => setDtype(e.target.value)}
          className="px-3 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900"
        >
          <option value="all">All dtypes</option>
          {DTYPES.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>
      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-zinc-300 dark:border-zinc-700 p-8 text-center text-zinc-500">
          No models in the catalog yet. Models are added as the curriculum subjects are authored.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((m) => (
            <ModelCard key={m.id} model={m} />
          ))}
        </div>
      )}
    </div>
  )
}

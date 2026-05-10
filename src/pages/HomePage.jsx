import { CURRICULUM, PHASES } from '../subjects/index.js'
import SubjectCard from '../components/navigation/SubjectCard.jsx'

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
          ComfyUI on Mac
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl">
          A deep, interactive curriculum for building <em>any</em> ComfyUI workflow from scratch on
          MacBook Pro M5 Pro / 24 GB. Image, video, audio, AI avatars, voice cloning, hyper-realistic
          self-clones, and a HeyGen-class agentic capstone — all running locally.
        </p>
        <div className="mt-4 text-sm text-zinc-500">
          <span className="inline-block px-2 py-0.5 rounded bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 mr-2">
            🍎 Mac-first
          </span>
          <span className="inline-block px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 mr-2">
            no fp8 traps
          </span>
          <span className="inline-block px-2 py-0.5 rounded bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300">
            100% local
          </span>
        </div>
      </header>
      {PHASES.map((p) => {
        const subjects = CURRICULUM.filter((s) => String(s.phase) === String(p.id))
        if (!subjects.length) return null
        return (
          <section key={p.id} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
              Phase {p.id} — {p.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {subjects.map((s) => (
                <SubjectCard key={s.id} subject={s} />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}

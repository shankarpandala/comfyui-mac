export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-16 py-8 text-sm text-zinc-500">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>
          <span className="font-semibold text-zinc-700 dark:text-zinc-300">ComfyUI on Mac</span>{' '}
          — for MacBook Pro M5 Pro / 24 GB. All workflows run locally.
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/shankarpandala/comfyui-mac"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-800 dark:hover:text-zinc-200"
          >
            GitHub
          </a>
          <span>MIT</span>
        </div>
      </div>
    </footer>
  )
}

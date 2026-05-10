import { useState } from 'react'

export default function CommandBlock({ command, label, multiline = false }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // ignore
    }
  }
  return (
    <div className="my-4 rounded-lg bg-zinc-900 border border-zinc-700 overflow-hidden">
      {label && (
        <div className="px-3 py-1.5 text-xs text-zinc-400 border-b border-zinc-800 flex items-center justify-between">
          <span>{label}</span>
          <span className="text-zinc-500">terminal</span>
        </div>
      )}
      <div className="flex items-start">
        <pre className={`flex-1 p-3 text-sm text-zinc-100 overflow-x-auto font-mono ${multiline ? 'whitespace-pre' : 'whitespace-pre'}`}>
          <span className="text-zinc-500 select-none">$ </span>{command}
        </pre>
        <button
          type="button"
          onClick={handleCopy}
          className="m-2 px-2 py-1 text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded"
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  )
}

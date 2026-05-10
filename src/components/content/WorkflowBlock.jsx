import { lazy, Suspense } from 'react'

const NodeGraph = lazy(() => import('../viz/NodeGraph.jsx'))

export default function WorkflowBlock({ title, description, jsonPath, nodes, edges, height = 360 }) {
  const downloadHref = jsonPath ? `${import.meta.env.BASE_URL}${jsonPath.replace(/^\//, '')}` : null
  return (
    <div className="my-6 rounded-xl border border-zinc-300 dark:border-zinc-700 overflow-hidden bg-white dark:bg-zinc-900">
      <div className="px-4 py-2 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-wide text-zinc-500">ComfyUI Workflow</div>
          {title && <div className="font-semibold">{title}</div>}
        </div>
        {downloadHref && (
          <a
            href={downloadHref}
            download
            className="text-xs px-3 py-1.5 rounded-md bg-brand-500 text-white hover:bg-brand-600"
          >
            Download .json
          </a>
        )}
      </div>
      {description && <div className="px-4 py-2 text-sm text-zinc-600 dark:text-zinc-400">{description}</div>}
      <div style={{ height }}>
        <Suspense fallback={<div className="h-full flex items-center justify-center text-zinc-400 text-sm">Loading graph…</div>}>
          <NodeGraph nodes={nodes} edges={edges} />
        </Suspense>
      </div>
    </div>
  )
}

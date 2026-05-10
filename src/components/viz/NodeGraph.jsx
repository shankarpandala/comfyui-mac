import { ReactFlow, Background, Controls, MiniMap } from '@xyflow/react'

export default function NodeGraph({ nodes = [], edges = [] }) {
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      fitView
      proOptions={{ hideAttribution: true }}
      nodesDraggable={false}
      nodesConnectable={false}
      panOnDrag
      zoomOnScroll
    >
      <Background gap={16} size={1} />
      <Controls showInteractive={false} />
      <MiniMap pannable zoomable />
    </ReactFlow>
  )
}

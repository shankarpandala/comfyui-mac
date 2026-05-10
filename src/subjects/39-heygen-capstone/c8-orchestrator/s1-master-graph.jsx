import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1MasterGraph() {
  return (
    <>
      <p>The master orchestrator graph. LangGraph wiring of all 7 stages.</p>

      <h2>Top-level structure</h2>
      <pre>{`from langgraph.graph import StateGraph, END

graph = StateGraph(CapstoneState)

# Stages
graph.add_node("input", input_node)
graph.add_node("research", research_node)
graph.add_node("script", script_node)
graph.add_node("script_critique", critique_node)
graph.add_node("approve_gate", approval_node)
graph.add_node("visual", visual_node)         # parallel
graph.add_node("tts", tts_node)                # parallel
graph.add_node("talking_head_sync", th_sync_node)
graph.add_node("compose", compose_node)
graph.add_node("publish", publish_node)

# Edges
graph.set_entry_point("input")
graph.add_edge("input", "research")
graph.add_edge("research", "script")
graph.add_edge("script", "script_critique")
graph.add_conditional_edges(
    "script_critique",
    lambda s: "script" if s["critique_score"] < 7 else "approve_gate"
)
graph.add_edge("approve_gate", "visual")
graph.add_edge("approve_gate", "tts")
graph.add_edge(["visual", "tts"], "talking_head_sync")
graph.add_edge("talking_head_sync", "compose")
graph.add_edge("compose", "publish")
graph.add_edge("publish", END)

app = graph.compile(checkpointer=SqliteSaver.from_conn_string("./checkpoints.db"))`}</pre>

      <h2>Run</h2>
      <pre>{`result = app.invoke({"topic": "Mac FLUX speed tips", "format": "reel"})
print(result["final_path"])  # path to the finished mp4`}</pre>

      <NoteBlock title="The 'graph as documentation'">
        The graph definition IS the documentation of how the pipeline works. New contributors read
        the graph; understand the system in 5 minutes.
      </NoteBlock>
    </>
  )
}

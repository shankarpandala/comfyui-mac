import CommandBlock from '../../../components/content/CommandBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1GraphNodes() {
  return (
    <>
      <p>LangGraph nodes from a Comfy workflow — each ComfyUI workflow becomes a graph node.</p>

      <h2>Install</h2>
      <CommandBlock command="pip install langgraph langchain-openai" />

      <h2>The pattern</h2>
      <pre>{`from langgraph.graph import StateGraph, END
from typing import TypedDict

class CapstoneState(TypedDict):
    topic: str
    research: str
    script: dict
    visuals: list
    audio: list
    final_path: str

graph = StateGraph(CapstoneState)
graph.add_node("research", research_node)
graph.add_node("write", write_node)
graph.add_node("visualize", visualize_node)
graph.add_node("tts", tts_node)
graph.add_node("compose", compose_node)

graph.set_entry_point("research")
graph.add_edge("research", "write")
graph.add_edge("write", "visualize")
graph.add_edge("visualize", "tts")
graph.add_edge("tts", "compose")
graph.add_edge("compose", END)

app = graph.compile()
result = app.invoke({"topic": "Mac FLUX speed tips"})`}</pre>

      <h2>Each node is a function</h2>
      <pre>{`def visualize_node(state):
    visuals = []
    for scene in state["script"]["scenes"]:
        if scene["type"] == "talking-head":
            still = comfy_submit("flux-pulid-yourself.json", scene["visual_prompt"])
        else:
            still = comfy_submit("flux-baseline.json", scene["visual_prompt"])
        clip = comfy_submit("ltx-i2v.json", still)
        visuals.append({"scene_id": scene["id"], "clip_path": clip})
    return {"visuals": visuals}`}</pre>

      <NoteBlock title="The state-passing pattern">
        Each node returns a dict that LangGraph merges into the state. Downstream nodes access
        prior outputs via state[]. Clean, debuggable, persistent.
      </NoteBlock>
    </>
  )
}

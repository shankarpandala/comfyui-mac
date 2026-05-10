import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Router() {
  return (
    <>
      <p>Router pattern — an LLM decides which downstream path to dispatch to. Useful when the same input could need different processing.</p>

      <h2>The shape</h2>
      <pre>{`router_agent(topic)
  → decides format: "Reel" / "Short" / "Long-form"
  → dispatches to format-specific script_agent
  → continues pipeline`}</pre>

      <h2>Use case</h2>
      <p>
        User says "make a video about X" without specifying format. Router agent decides the right
        format based on topic complexity:
      </p>
      <ul>
        <li>Single tip → Reel.</li>
        <li>Multi-step tutorial → Short.</li>
        <li>Deep-dive analysis → Long-form.</li>
      </ul>

      <h2>Implementation</h2>
      <pre>{`def router_agent(topic):
    decision = llm(f"""Given the topic, which format fits?
    Topic: {topic}
    Format options: reel (60s), short (3min), long-form (10min+).
    Respond with format name and reasoning.""")
    return parse(decision)

def pipeline(topic):
    format = router_agent(topic)
    if format == "reel":
        return reel_pipeline(topic)
    elif format == "short":
        return short_pipeline(topic)
    else:
        return long_form_pipeline(topic)`}</pre>

      <NoteBlock title="The 'router for variants, pipeline for steps'">
        Routers handle "which path?". Pipelines handle "next step." Most workflows have both —
        router up front, pipeline after.
      </NoteBlock>
    </>
  )
}

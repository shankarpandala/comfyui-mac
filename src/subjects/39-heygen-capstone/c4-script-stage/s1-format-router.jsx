import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1FormatRouter() {
  return (
    <>
      <p>Format router — Reel / Short / Long-form. Picks the right script template based on topic depth.</p>

      <h2>The router</h2>
      <pre>{`def format_router(research):
    decision = llm(f"""Given this research, pick the best video format:

Topic: {research['topic']}
Key points: {research['key_points']}

Options:
- reel (60s): single tip / single transformation
- short (3min): 2-3 connected points
- long-form (10min+): deep dive, multi-section

Respond JSON: {{ "format": str, "reasoning": str }}""")
    return decision["format"]`}</pre>

      <h2>The handoff</h2>
      <p>Once format is decided, dispatch to the format-specific script agent. Each has its own system prompt + structure.</p>

      <h2>User override</h2>
      <p>
        If user specified format in input, skip the router. Router is for "I have a topic, you
        decide" use cases.
      </p>

      <NoteBlock title="The 'right size for the content' principle">
        Some topics are 60-second Reels. Others are 20-minute deep dives. Router prevents the
        agent from cramming a deep topic into a Reel or padding a tip into a 20-minute video.
      </NoteBlock>
    </>
  )
}

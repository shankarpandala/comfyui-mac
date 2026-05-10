import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3Metadata() {
  return (
    <>
      <p>Auto-generated title, description, tags, hashtags. The metadata agent.</p>

      <h2>The agent</h2>
      <pre>{`def metadata_node(state):
    metadata = llm(f"""Given this Reel's research and script, generate metadata.

Topic: {state['research']['topic']}
Script summary: ...
Target platform: {state['platform']}

Output JSON:
- title (under 100 chars, attention-grabbing)
- description (~200 chars; first line is hook)
- hashtags (5-10, relevant)
- tags (YouTube-style, ~10 keywords)""", json_mode=True)

    return {"metadata": metadata}`}</pre>

      <h2>Per-platform tweaks</h2>
      <ul>
        <li>YouTube: longer description; SEO-keyworded.</li>
        <li>Instagram: emoji-friendly; hashtags hidden in first comment.</li>
        <li>TikTok: hashtags critical; trend-aware.</li>
        <li>Twitter/X: punchy first line.</li>
      </ul>

      <NoteBlock title="The 'human review for first 10' rule">
        Auto-generated metadata is decent but not perfect. Review the first 10 outputs; adjust the
        agent's system prompt based on what you'd change. After 10 reviews, trust the agent.
      </NoteBlock>
    </>
  )
}

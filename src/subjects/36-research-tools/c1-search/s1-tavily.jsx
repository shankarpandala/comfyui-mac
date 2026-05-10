import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Tavily() {
  return (
    <>
      <p>Tavily / Brave Search / SerpAPI — commercial web search APIs for the research agent. Pay per query, get clean results.</p>

      <h2>Tavily</h2>
      <ul>
        <li>Designed specifically for LLM agents.</li>
        <li>Returns search results + scraped content + summary.</li>
        <li>Free tier: ~1000 queries/month.</li>
        <li>~$0.005 per query after.</li>
      </ul>

      <h2>Brave Search API</h2>
      <ul>
        <li>Independent index (not Google).</li>
        <li>Free tier: 2000 queries/month.</li>
        <li>Cheap; results are raw.</li>
      </ul>

      <h2>SerpAPI</h2>
      <ul>
        <li>Wraps Google / Bing / DuckDuckGo.</li>
        <li>Higher cost per query.</li>
        <li>Useful when you need the actual SERP rankings.</li>
      </ul>

      <h2>Tool definition</h2>
      <pre>{`{
  "name": "web_search",
  "description": "Search the web for current information",
  "parameters": {
    "type": "object",
    "properties": {
      "query": {"type": "string", "description": "Search query"}
    },
    "required": ["query"]
  }
}`}</pre>

      <h2>Mac integration</h2>
      <p>
        Just an HTTP call from your ComfyUI custom node or Python tool. No special Mac config.
        Store API key in <code>~/.zshrc</code> environment variable.
      </p>

      <NoteBlock title="The Mac choice">
        Tavily's free tier is enough for ~30 Reels' research per month. Start there. Move to Brave
        if cost becomes an issue.
      </NoteBlock>
    </>
  )
}

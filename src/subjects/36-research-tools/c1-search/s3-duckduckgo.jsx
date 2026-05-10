import CommandBlock from '../../../components/content/CommandBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3Duckduckgo() {
  return (
    <>
      <p>DuckDuckGo no-key API — simplest free option. Use the <code>duckduckgo-search</code> Python package.</p>

      <h2>Install</h2>
      <CommandBlock command="pip install duckduckgo-search" />

      <h2>Use</h2>
      <pre>{`from duckduckgo_search import DDGS
results = DDGS().text("What is FLUX diffusion model", max_results=10)
for r in results:
    print(r["title"], r["href"], r["body"])`}</pre>

      <h2>Pros / cons</h2>
      <ul>
        <li>Pro: zero setup, no API key.</li>
        <li>Pro: free, no rate limits (unofficial).</li>
        <li>Con: scrapes DuckDuckGo's HTML; can break when DDG changes their pages.</li>
        <li>Con: less polished than Tavily for agent use cases.</li>
      </ul>

      <h2>For prototyping</h2>
      <p>
        For quickly testing a research agent before committing to a paid service: DuckDuckGo. Works
        well enough to validate the agent's reasoning. Move to Tavily when going to production.
      </p>

      <NoteBlock title="The 'free first, commercial later' approach">
        Start with DuckDuckGo for prototyping. Move to Tavily / Brave for production. Subject 39's
        capstone uses Tavily as recommended; you can swap in DuckDuckGo by changing one tool's
        implementation.
      </NoteBlock>
    </>
  )
}

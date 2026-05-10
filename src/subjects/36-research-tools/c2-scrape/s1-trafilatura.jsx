import CommandBlock from '../../../components/content/CommandBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Trafilatura() {
  return (
    <>
      <p>Trafilatura / Readability — extract clean article text from arbitrary web pages. Strips ads, sidebars, navigation.</p>

      <h2>Install</h2>
      <CommandBlock command="pip install trafilatura" />

      <h2>Use</h2>
      <pre>{`import trafilatura
url = "https://example.com/article"
downloaded = trafilatura.fetch_url(url)
text = trafilatura.extract(downloaded)
print(text)`}</pre>

      <h2>What you get</h2>
      <ul>
        <li>Article body text — no ads, no nav, no boilerplate.</li>
        <li>Optional: metadata (author, date, title).</li>
        <li>Optional: structured output (JSON).</li>
      </ul>

      <h2>Use in capstone</h2>
      <ol>
        <li>Search agent gets URLs from Tavily.</li>
        <li>Trafilatura extracts each URL's clean text.</li>
        <li>LLM summarizes / synthesizes across sources.</li>
        <li>Output becomes context for script writing.</li>
      </ol>

      <h2>Alternatives</h2>
      <ul>
        <li><code>readability-lxml</code> — older, similar.</li>
        <li><code>newspaper3k</code> — also extracts; sometimes more aggressive.</li>
        <li>Tavily already does extraction — using both is redundant.</li>
      </ul>

      <NoteBlock title="The 'clean text in, clean script out' principle">
        LLM agents work better with clean inputs. Spending one second per URL on extraction
        produces dramatically better summaries than feeding raw HTML.
      </NoteBlock>
    </>
  )
}

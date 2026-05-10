import CommandBlock from '../../../components/content/CommandBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Searxng() {
  return (
    <>
      <p>SearXNG — self-hosted meta-search engine. Free, private, runs on your Mac. The "no API key, no rate limit" alternative.</p>

      <h2>Install (Docker)</h2>
      <CommandBlock command="docker run -d --name searxng -p 8888:8080 searxng/searxng" />
      <p>API at <code>http://localhost:8888/search?q=QUERY&format=json</code>.</p>

      <h2>Mac compatibility</h2>
      <p>Docker Desktop on Mac handles this. SearXNG itself is a Python web app; runs natively too if you prefer.</p>

      <h2>Why self-host</h2>
      <ul>
        <li>No API quotas.</li>
        <li>No data sent to commercial APIs.</li>
        <li>No cost per query.</li>
        <li>Private — your queries don't go to a tracker.</li>
      </ul>

      <h2>Trade-offs</h2>
      <ul>
        <li>Quality varies — depends on which engines SearXNG aggregates.</li>
        <li>Maintenance — occasional engine breakages.</li>
        <li>No commercial backing.</li>
      </ul>

      <NoteBlock title="The privacy choice">
        For research that involves sensitive topics, self-hosted SearXNG is the right pick.
        For general research where convenience trumps privacy, Tavily's API is simpler.
      </NoteBlock>
    </>
  )
}

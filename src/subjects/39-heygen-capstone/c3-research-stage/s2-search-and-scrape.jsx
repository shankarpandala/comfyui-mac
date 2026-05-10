import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2SearchAndScrape() {
  return (
    <>
      <p>The research execution loop — search + scrape + summarize.</p>

      <h2>The loop</h2>
      <pre>{`def research_node(state):
    brief = state["brief"]
    sources = []

    # 1. Search
    for query in brief["key_search_queries"]:
        results = tavily_search(query, max_results=5)
        sources.extend(results)

    # 2. Dedupe + filter
    sources = dedupe_by_url(sources)[:15]

    # 3. Scrape
    for s in sources:
        s["content"] = trafilatura_extract(s["url"])

    # 4. YouTube transcripts (if any video sources)
    for s in sources:
        if "youtube.com" in s["url"]:
            s["content"] = youtube_transcript(s["url"])

    # 5. Summarize
    summary = llm(f"""Summarize these sources for a {brief['format']} Reel
on '{brief['topic']}' with angle '{brief['angle']}':

{format_sources(sources)}

Output JSON: summary, key_points (3-7), unique_insights, surprising_facts.""")

    return {
        "research": {
            "summary": summary["summary"],
            "key_points": summary["key_points"],
            "sources": [{"title": s["title"], "url": s["url"]} for s in sources],
            "angle": brief["angle"]
        }
    }`}</pre>

      <h2>Mac wall time</h2>
      <p>~3-5 minutes for typical Reel research (15 sources, ~20K tokens summarized).</p>

      <NoteBlock title="The 'cite sources' habit">
        Always include source URLs in the research output. Script agent can cite them; you can
        verify claims; provenance is preserved.
      </NoteBlock>
    </>
  )
}

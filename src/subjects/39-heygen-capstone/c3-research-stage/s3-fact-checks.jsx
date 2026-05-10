import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3FactChecks() {
  return (
    <>
      <p>Fact-check + source citations — guard against hallucinated claims in the research summary.</p>

      <h2>The pattern</h2>
      <ol>
        <li>After summary generation, extract all factual claims.</li>
        <li>For each claim, ask LLM: "Is this supported by the source content?"</li>
        <li>Flag unsupported claims; remove or rewrite.</li>
        <li>Final summary contains only verified-against-source claims.</li>
      </ol>

      <h2>Tool</h2>
      <pre>{`def fact_check(summary, sources):
    claims = llm(f"Extract all factual claims from: {summary}").json()["claims"]
    verified = []
    for claim in claims:
        check = llm(f"""Is this claim supported by the sources?

Claim: {claim}
Sources: {format_sources(sources)}

Respond JSON: {{ "supported": bool, "source_index": int | null }}""").json()
        if check["supported"]:
            verified.append({"claim": claim, "source": sources[check["source_index"]]["url"]})

    return verified`}</pre>

      <h2>For Reels</h2>
      <p>
        60-second Reels have maybe 2-3 factual claims. Cheap to verify. For long-form, this matters
        more.
      </p>

      <h2>Disclaimer</h2>
      <p>
        Even fact-checked summaries are LLM-mediated; no fully reliable. Critical claims (medical,
        legal, financial) should not skip human review.
      </p>

      <NoteBlock title="The credibility hedge">
        Fact-checking adds cost (~10% more tokens) but reduces hallucination risk meaningfully. For
        any content going to public audience, worth doing.
      </NoteBlock>
    </>
  )
}

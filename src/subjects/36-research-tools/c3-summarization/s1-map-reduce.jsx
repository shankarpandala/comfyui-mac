import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1MapReduce() {
  return (
    <>
      <p>Map-reduce summarization — for content too long to fit in one LLM context window. Split into chunks; summarize each (map); summarize the summaries (reduce).</p>

      <h2>The pattern</h2>
      <pre>{`def map_reduce_summarize(text, chunk_size=4000, llm=ollama_call):
    chunks = split_text(text, chunk_size)
    summaries = [llm(f"Summarize: {chunk}") for chunk in chunks]
    final = llm(f"Synthesize: {' '.join(summaries)}")
    return final`}</pre>

      <h2>When you need it</h2>
      <ul>
        <li>Long-form research (multiple articles totaling 50K+ tokens).</li>
        <li>Multi-source synthesis (5 transcripts of 30 min each).</li>
        <li>Llama 3.1 8B has 128K context but performance degrades past ~32K.</li>
      </ul>

      <h2>Hierarchical alternative</h2>
      <p>For really long content (book-length): chunk → summarize → group summaries → re-summarize → final summary. 3-4 levels deep.</p>

      <NoteBlock title="The 'summary of summaries' caveat">
        Each map-reduce level loses some detail. For most agentic use: 2 levels (chunks → final)
        is enough. Don't over-tier.
      </NoteBlock>
    </>
  )
}

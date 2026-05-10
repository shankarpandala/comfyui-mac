import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2StuffVsRefine() {
  return (
    <>
      <p>"Stuff" vs "Refine" — two simpler alternatives to map-reduce when your content fits in context.</p>

      <h2>Stuff (simplest)</h2>
      <p>Concatenate all input; feed to LLM in one call. Done.</p>
      <ul>
        <li>Pro: simplest possible.</li>
        <li>Pro: LLM sees everything at once; can spot cross-doc connections.</li>
        <li>Con: limited by context window.</li>
      </ul>

      <h2>Refine (incremental)</h2>
      <p>Process chunks one at a time, refining a running summary:</p>
      <pre>{`summary = ""
for chunk in chunks:
    summary = llm(f"Existing summary: {summary}\\n\\nNew content: {chunk}\\n\\nUpdate the summary to incorporate the new content.")`}</pre>
      <ul>
        <li>Pro: handles long content sequentially.</li>
        <li>Pro: maintains a running narrative across the chain.</li>
        <li>Con: later chunks may dominate; early content fades.</li>
      </ul>

      <h2>When to use which</h2>
      <ul>
        <li><strong>Stuff</strong>: total tokens &lt; 30K (fits Llama 3.1 8B context comfortably).</li>
        <li><strong>Refine</strong>: 30-100K, narrative content where order matters.</li>
        <li><strong>Map-reduce</strong>: 100K+, parallel/independent content.</li>
      </ul>

      <NoteBlock title="The 'stuff first' rule">
        For research with 5-10 articles totaling &lt; 20K tokens, stuff. It's simplest and produces
        the best output. Reach for refine / map-reduce only when stuff doesn't fit.
      </NoteBlock>
    </>
  )
}

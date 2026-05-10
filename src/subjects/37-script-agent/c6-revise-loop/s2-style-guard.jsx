import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2StyleGuard() {
  return (
    <>
      <p>Style guard agent — separate critique pass focused only on brand voice match. Catches drift the writer agent misses.</p>

      <h2>The pattern</h2>
      <pre>{`def style_guard(script, voice_doc, examples):
    return llm(f"""You are the brand voice guardian.

Voice doc:
{voice_doc}

Examples of correct voice:
{examples}

Script to evaluate:
{script}

Score 1-10 on voice match. Identify specific lines that drift from the voice. Suggest rewrites.""")`}</pre>

      <h2>When to invoke</h2>
      <ul>
        <li>After the script agent's first draft.</li>
        <li>Before sending to TTS / production stages.</li>
        <li>If style_score &lt; 8, send back to writer for revision.</li>
      </ul>

      <h2>Why a separate agent</h2>
      <ul>
        <li>The writer is optimizing for hook + structure + content. Voice match is a secondary concern.</li>
        <li>A dedicated style critic with the voice doc as primary reference catches drift.</li>
        <li>Easier to evolve the voice doc independently of the writer's prompt.</li>
      </ul>

      <NoteBlock title="The 'specialized agents over jack-of-all-trades' principle">
        Multiple narrow agents beat one wide agent. Each has a clear job and a single
        evaluation criterion. Subject 38 covers the orchestration that ties them.
      </NoteBlock>
    </>
  )
}

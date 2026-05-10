import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1LongScript() {
  return (
    <>
      <p>Long-form (10-30 min) recipe — long script sectioning + scene-batch generation.</p>

      <h2>Long-form script structure</h2>
      <ol>
        <li>Hook (15-30s).</li>
        <li>Outline preview (30s).</li>
        <li>3-5 sections (3-7 min each).</li>
        <li>Synthesis (1-2 min).</li>
        <li>CTA (15-30s).</li>
      </ol>

      <h2>Word count</h2>
      <p>~150 words/min × 20 min = ~3000 words. Big script.</p>

      <h2>Section-by-section generation</h2>
      <ul>
        <li>Don't ask LLM to generate 3000 words at once — quality drops past ~1500.</li>
        <li>Generate section-by-section. Each section ~500 words.</li>
        <li>Pass prior section context for continuity.</li>
      </ul>

      <h2>Outline-first approach</h2>
      <p>Generate outline first (research → outline → per-section drafts). Validates structure before drafting bulk content.</p>

      <NoteBlock title="The 'long-form is research-heavy'">
        Long-form needs more research than Reels. ~30 sources for a 20-min vs ~10 for a Reel. Plan
        research stage time accordingly.
      </NoteBlock>
    </>
  )
}

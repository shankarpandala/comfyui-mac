import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3LongForm() {
  return (
    <>
      <p>Long-form format (10-30 minutes). For YouTube long-form, podcast-style content. Different beast from Reels.</p>

      <h2>Structure</h2>
      <ol>
        <li><strong>Hook (0-15s)</strong>: a thesis statement or surprising question.</li>
        <li><strong>Outline preview (15-45s)</strong>: "Here's what we'll cover."</li>
        <li><strong>Section 1 (45s-5min)</strong>: first major topic.</li>
        <li><strong>Section 2 (5-10min)</strong>: second major topic.</li>
        <li><strong>Section 3 (10-15min)</strong>: third (or as many as the topic deserves).</li>
        <li><strong>Synthesis (last 1-2 min)</strong>: tie sections together.</li>
        <li><strong>CTA</strong>: subscribe, comment, link.</li>
      </ol>

      <h2>Word counts</h2>
      <ul>
        <li>10 min: ~1500 words.</li>
        <li>20 min: ~3000 words.</li>
        <li>30 min: ~4500 words.</li>
      </ul>

      <h2>For AI clone long-form on Mac</h2>
      <p>
        Each minute of talking-head requires ~7-9 minutes of Mac wall time (Sonic). 30-minute video
        = 4-5 hours of rendering. Pre-record voice + animate overnight.
      </p>

      <h2>Visual rhythm</h2>
      <ul>
        <li>Cuts every 8-15 seconds (less frenetic than Reels).</li>
        <li>B-roll heavy — talking head can't carry 30 minutes alone.</li>
        <li>Charts / illustrations / supporting visuals.</li>
      </ul>

      <NoteBlock title="The 'long-form is a different product' rule">
        Don't try to extend a Reel script to 20 minutes. Long-form requires different structure
        from the start. The script agent needs separate prompts for short vs long form.
      </NoteBlock>
    </>
  )
}

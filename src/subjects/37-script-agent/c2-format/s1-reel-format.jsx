import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1ReelFormat() {
  return (
    <>
      <p>Reel / Short format template (15-60 seconds). The most-used social-media content format.</p>

      <h2>Structure</h2>
      <ol>
        <li><strong>Hook (0-3s)</strong>: One sentence. Specific and surprising. Promises value or stakes.</li>
        <li><strong>Setup (3-15s)</strong>: Establish context / problem.</li>
        <li><strong>Body (15-50s)</strong>: 1-2 key points / one transformation.</li>
        <li><strong>Payoff + CTA (50-60s)</strong>: Resolution + ask (follow, comment, click).</li>
      </ol>

      <h2>Word counts</h2>
      <ul>
        <li>Total spoken: ~150-175 words for 60 seconds at average pace.</li>
        <li>Hook: 8-15 words.</li>
        <li>Each "key point" body: 30-50 words.</li>
        <li>CTA: 5-10 words.</li>
      </ul>

      <h2>Reel-specific writing rules</h2>
      <ul>
        <li>No throat-clearing. Drop "today we're going to talk about". Get into it.</li>
        <li>Visual cues every 5-7 seconds — script needs to support cuts.</li>
        <li>One idea per Reel. Don't try to cover three.</li>
        <li>Captions matter — 85% watch muted. Write so the visual + caption tells the story.</li>
      </ul>

      <NoteBlock title="The hook is everything">
        First 3 seconds determine whether viewers watch the rest. The script agent's most
        important job is generating compelling hooks. We tune that prompt heavily in chapter 6.
      </NoteBlock>
    </>
  )
}

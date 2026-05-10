import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2ShortForm() {
  return (
    <>
      <p>Short-form format (1-3 minutes). For YouTube Shorts longer-end, TikTok, content with more substance.</p>

      <h2>Structure</h2>
      <ol>
        <li><strong>Hook (0-5s)</strong>: same as Reel.</li>
        <li><strong>Promise (5-10s)</strong>: explicit "here's what you'll learn" or "by the end".</li>
        <li><strong>Setup (10-25s)</strong>: context.</li>
        <li><strong>3 body beats (25-150s)</strong>: each ~30-40s, distinct sub-point.</li>
        <li><strong>Recap (150-170s)</strong>: 3 things you covered.</li>
        <li><strong>CTA (170-180s)</strong>.</li>
      </ol>

      <h2>Word counts</h2>
      <ul>
        <li>Total: ~400-500 words for 3 minutes.</li>
        <li>Each body beat: 80-120 words.</li>
      </ul>

      <h2>Visual pacing</h2>
      <ul>
        <li>Cut every 3-5 seconds.</li>
        <li>Each beat needs at least one visual change (B-roll cut, subject reposition).</li>
      </ul>

      <NoteBlock title="The 'three beats max' rule">
        For 3-minute content, stop at 3 main points. More than that and viewers tune out. The
        script agent's body should produce exactly 3 — enforce in the system prompt.
      </NoteBlock>
    </>
  )
}

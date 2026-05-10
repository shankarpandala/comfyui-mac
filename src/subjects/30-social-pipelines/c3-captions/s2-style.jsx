import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Style() {
  return (
    <>
      <p>
        Caption styling makes the difference between Reels that look amateur and ones that look
        professional. A few choices that matter.
      </p>

      <h2>Font</h2>
      <ul>
        <li><strong>Sans-serif, bold, slightly extended</strong>: Inter Bold, Montserrat Bold, Anton, Bebas Neue.</li>
        <li>Avoid: thin fonts (illegible on small screens), serif fonts (look stuffy in Reels).</li>
      </ul>

      <h2>Colors</h2>
      <ul>
        <li>White text + black outline: most readable, default safe.</li>
        <li>Yellow text + black outline: high-engagement, used by many viral creators.</li>
        <li>Brand color text: only if it has high contrast with outline.</li>
      </ul>

      <h2>Position</h2>
      <ul>
        <li><strong>Center-bottom (default)</strong> — standard for Reels.</li>
        <li><strong>Center-mid</strong> — when subject is at top; captions don't compete with face.</li>
        <li><strong>Lower-third</strong> — TV-news style; less common in Reels.</li>
      </ul>

      <h2>Animation</h2>
      <ul>
        <li><strong>Static (no animation)</strong> — simplest, lowest effort.</li>
        <li><strong>Word-by-word reveal</strong> — increases engagement; requires per-word timestamps from Whisper.</li>
        <li><strong>Karaoke highlight</strong> — current word highlighted in different color. Highest engagement.</li>
      </ul>

      <h2>Tools</h2>
      <ul>
        <li>ffmpeg subtitles filter — basic static captions.</li>
        <li><code>captacity</code> Python lib — word-level styled captions.</li>
        <li><code>caption-this</code> — alternative.</li>
      </ul>

      <NoteBlock title="The 'consistent style' rule">
        Pick one caption style (font + color + animation) and use across all your AI clone content.
        Builds brand recognition. Don't change per-Reel.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1AnimateStill() {
  return (
    <>
      <p>Self-clone i2v: animate a still of yourself. Foundation of every AI clone Reel.</p>

      <h2>Recipe</h2>
      <ol>
        <li>Generate self-clone still (Subject 27g / Chapter 5).</li>
        <li>Wan I2V or LTX I2V workflow (Subject 27d).</li>
        <li>Motion prompt: describe what your AI clone should do in the clip.</li>
        <li>Render 5-second clip.</li>
      </ol>

      <h2>Pick the right i2v model</h2>
      <ul>
        <li><strong>LTX I2V</strong>: ~2-3 min. Good for B-roll, natural ambient motion.</li>
        <li><strong>Wan I2V 14B</strong>: ~15-25 min. Best identity preservation. Use for hero shots.</li>
      </ul>

      <h2>Motion prompt patterns</h2>
      <ul>
        <li>"slight smile, natural eye blinks, subtle head movement" — talking-head ambient</li>
        <li>"the person turns to look at the camera and smiles" — engagement shot</li>
        <li>"the camera slowly pans around the person" — establishing shot</li>
        <li>"the person walks toward the camera" — narrative entrance</li>
      </ul>

      <h2>For talking content</h2>
      <p>
        For lip-synced talking, animate via Sonic / Hallo (Subject 28) instead of generic i2v.
        Generic i2v + audio won't lip-sync; talking-head models do.
      </p>

      <NoteBlock title="The 'B-roll generator'">
        For Reels, most shots are B-roll (you doing something). i2v handles these. Reserve
        Sonic-driven talking-head for the spoken-content shots (intros, key points, CTAs).
      </NoteBlock>
    </>
  )
}

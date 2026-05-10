import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3CharacterConsistency() {
  return (
    <>
      <p>Long-video character consistency via Subject 27f. The capstone applies the strategies depending on Reel length.</p>

      <h2>For 60-second Reels</h2>
      <ul>
        <li>One self-clone still shared across talking-head segments.</li>
        <li>LoRA (0.7) + PuLID (1.0) on the still.</li>
        <li>Fixed seed.</li>
        <li>That's enough. Drift over 60s is minimal with these anchors.</li>
      </ul>

      <h2>For 3-minute Shorts</h2>
      <ul>
        <li>Multiple stills (one per major segment).</li>
        <li>Each still uses same LoRA + PuLID + face reference.</li>
        <li>I2V for transitions between shot types.</li>
      </ul>

      <h2>For 10+ minute long-form</h2>
      <ul>
        <li>Full Subject 27f / Chapter 8 production recipe.</li>
        <li>Combined: LoRA + PuLID re-anchor + first-frame chaining + per-shot IP-Adapter + fixed seed.</li>
        <li>Render budget: 2-4 hours for 10-min video.</li>
      </ul>

      <NoteBlock title="The 'apply effort proportional to length' rule">
        Don't over-engineer consistency for 60-second content. Don't under-engineer for 30-minute
        videos. Match the strategy stack to the duration.
      </NoteBlock>
    </>
  )
}

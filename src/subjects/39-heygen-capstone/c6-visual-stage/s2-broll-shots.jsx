import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2BrollShots() {
  return (
    <>
      <p>B-roll shots via Subject 27c (LTX) or 27d (Wan i2v). Faster than talking-head; visual variety for the Reel.</p>

      <h2>Per B-roll scene pipeline</h2>
      <ol>
        <li>Generate still (FLUX) from scene's visual_prompt.</li>
        <li>LTX i2v from still + scene's motion description.</li>
        <li>Output: 4-second B-roll clip.</li>
      </ol>

      <h2>For a 60-second Reel with 2 B-roll segments</h2>
      <ul>
        <li>2 stills × ~50s = 100s.</li>
        <li>2 LTX clips × ~3min = 6 minutes.</li>
        <li>Total B-roll cost: ~7-8 minutes.</li>
      </ul>

      <h2>Higher-quality option</h2>
      <p>Replace LTX with Wan I2V 14B for best i2v quality. ~25 min per clip; reserve for hero content.</p>

      <NoteBlock title="The 'two-tier visual quality'">
        Talking-head shots: hero quality (Wan I2V or Sonic). B-roll shots: LTX i2v fast. The mix is
        what makes the capstone feel polished without 2-hour render times.
      </NoteBlock>
    </>
  )
}

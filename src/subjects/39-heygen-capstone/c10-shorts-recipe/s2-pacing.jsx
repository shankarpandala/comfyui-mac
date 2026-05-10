import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Pacing() {
  return (
    <>
      <p>Pacing and B-roll cadence for Shorts. Different from Reels — more breathing room.</p>

      <h2>Reels vs Shorts pacing</h2>
      <ul>
        <li>Reels: cuts every 2-4 seconds.</li>
        <li>Shorts (3 min): cuts every 4-6 seconds.</li>
        <li>Talking-head segments can be longer in Shorts (5-10s) — viewers are committed.</li>
      </ul>

      <h2>B-roll frequency</h2>
      <p>
        Per beat (45s): 2-3 B-roll inserts of 5-10 seconds each. Talking-head dominant for the
        explanation; B-roll for visual relief and reinforcement.
      </p>

      <h2>Audio pacing</h2>
      <p>
        F5-TTS reference for Shorts: slightly slower than Reels reference. ~150-170 wpm vs 180-200
        wpm. More authoritative feel.
      </p>

      <NoteBlock title="The 'measured Short' contrast">
        Shorts are not "long Reels". They have their own rhythm. Train the script agent on Short
        examples separately.
      </NoteBlock>
    </>
  )
}

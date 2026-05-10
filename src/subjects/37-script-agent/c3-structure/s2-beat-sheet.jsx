import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2BeatSheet() {
  return (
    <>
      <p>Beat sheet — explicit time-coded breakdown of a script into beats. Both helps the writer think and helps downstream stages (visual / video) align.</p>

      <h2>Example beat sheet (60s Reel)</h2>
      <pre>{`# Beat Sheet: "Mac FLUX Speed Tricks"

[0:00-0:03] HOOK: "I cut FLUX render time on Mac by 80% with one trick."
[0:03-0:10] SETUP: Show vanilla FLUX taking 60 seconds per image.
[0:10-0:25] BEAT 1: GGUF Q5_K_S substitution. Show comparison.
[0:25-0:40] BEAT 2: --bf16-vae flag fix. Show NaN issue and fix.
[0:40-0:50] BEAT 3: Quitting Safari frees ~3 GB. Show Activity Monitor.
[0:50-0:55] PAYOFF: Final time = 12 seconds. Show side-by-side.
[0:55-0:60] CTA: "Like for more Mac AI tips. Comment your render times."`}</pre>

      <h2>Why beat sheets matter</h2>
      <ul>
        <li>Forces specific timing — agent can't write "talk for a while".</li>
        <li>Enables visual planning — every beat needs a B-roll prompt.</li>
        <li>Quality control — easy to spot pacing problems.</li>
      </ul>

      <h2>Agent output format</h2>
      <p>
        Script agent should produce JSON with beats array. Each beat has timestamp, content, and
        a "visual" hint. The visual hint feeds Subject 37 / Chapter 4 (B-roll prompts).
      </p>

      <NoteBlock title="The structured-output requirement">
        Agent must output structured beat sheet, not free-form script. Subject 35 / Chapter 4 / S2
        on JSON output is the technique. Voice and creativity inside structure.
      </NoteBlock>
    </>
  )
}

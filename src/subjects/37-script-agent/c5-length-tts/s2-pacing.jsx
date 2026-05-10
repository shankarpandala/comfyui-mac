import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Pacing() {
  return (
    <>
      <p>Pacing and pauses — the script agent must indicate where to slow down. Affects both TTS output and viewer engagement.</p>

      <h2>Pacing markers</h2>
      <ul>
        <li><strong>Em-dash</strong>: short pause. "Mac users — listen up."</li>
        <li><strong>Period</strong>: full stop pause.</li>
        <li><strong>Ellipsis</strong>: dramatic pause "...".</li>
        <li><strong>Comma</strong>: slight breath.</li>
        <li><strong>F5-TTS uses punctuation for prosody</strong>; the script agent's punctuation choices directly affect output rhythm.</li>
      </ul>

      <h2>Build in pauses for visuals</h2>
      <p>
        After a hook line, a 1-second pause lets the visual catch up. After a key revelation, a
        pause adds emphasis. Script agent should mark these.
      </p>

      <h2>Prompt instruction</h2>
      <pre>{`In the script:
- Use periods generously. Short sentences = punchy delivery.
- Use em-dashes for emphasis pauses.
- Use ellipses sparingly, only for dramatic pauses (max 1-2 per Reel).
- Group sentences in 5-8 word chunks. Avoid run-ons.`}</pre>

      <NoteBlock title="The 'read it aloud' check">
        Before sending script to F5-TTS, read aloud at target pace. If pacing feels weird, fix
        the punctuation. The script's rhythm dictates the final video's rhythm.
      </NoteBlock>
    </>
  )
}

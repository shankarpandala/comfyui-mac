import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Prosody() {
  return (
    <>
      <p>Prosody and pacing control — F5-TTS inherits prosody from your reference clip. Match reference style to desired output style.</p>

      <h2>The reference matching</h2>
      <ul>
        <li>Energetic Reel content → record reference at conversational+ energy.</li>
        <li>Documentary-style → record measured, even pace.</li>
        <li>Dramatic narration → record with pauses + emphasis.</li>
      </ul>

      <h2>Multiple reference clips</h2>
      <p>
        Maintain 2-3 reference clips for different content moods. Pipeline picks the matching one
        based on script tone (could be an LLM judgment per script).
      </p>

      <h2>Punctuation tweaks</h2>
      <p>If TTS output has wrong rhythm:</p>
      <ul>
        <li>Add periods to break up long sentences.</li>
        <li>Add commas for natural breath pauses.</li>
        <li>Em-dashes for emphasis pauses.</li>
        <li>Avoid run-on sentences.</li>
      </ul>

      <NoteBlock title="The 'reference defines voice' rule">
        F5-TTS is reference-driven. Iterate on the reference clip; prompt isn't enough to control
        prosody. 30s reference + 5s of polish is the right setup time investment.
      </NoteBlock>
    </>
  )
}

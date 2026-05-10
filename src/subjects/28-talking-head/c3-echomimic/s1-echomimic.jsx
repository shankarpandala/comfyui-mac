import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Echomimic() {
  return (
    <>
      <p>
        EchoMimic v2 is another audio-driven portrait animator. Strong on character preservation
        across longer outputs (15+ seconds). Less popular than Sonic / Hallo but worth knowing.
      </p>

      <h2>Files</h2>
      <ul>
        <li>EchoMimic v2 UNet (~3 GB)</li>
        <li>Reference encoder + audio encoder</li>
      </ul>

      <h2>Strengths</h2>
      <ul>
        <li>Long-output stability — character looks the same at 15s as at 1s.</li>
        <li>Strong on side-profile / 3/4 angle portraits.</li>
        <li>Body motion (gestures) in addition to face.</li>
      </ul>

      <h2>Mac wall time</h2>
      <p>~12-18 min per 15-second clip.</p>

      <h2>When to use EchoMimic v2</h2>
      <ul>
        <li>Longer talking-head shots than Sonic supports.</li>
        <li>Side / 3/4 angle portraits where Sonic struggles.</li>
        <li>You need body gesture, not just face.</li>
      </ul>

      <NoteBlock title="The third option">
        EchoMimic is the third-tier talking-head choice. Sonic / Hallo3 cover most use cases.
        Reach for EchoMimic if those don't satisfy specific requirements.
      </NoteBlock>
    </>
  )
}

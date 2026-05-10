import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Disclosure() {
  return (
    <>
      <p>AI-generated disclosure — non-negotiable for any AI clone content. Multiple layers of disclosure.</p>

      <h2>Visible disclosure</h2>
      <ul>
        <li>"AI-generated" tag in video itself (text overlay first 2s, or persistent watermark).</li>
        <li>Caption / description includes "AI-generated content."</li>
        <li>Channel "About" section discloses AI use.</li>
      </ul>

      <h2>Platform compliance</h2>
      <ul>
        <li>YouTube: tick "altered or synthetic content" checkbox.</li>
        <li>TikTok: AI Content label.</li>
        <li>Instagram: similar disclosure prompts.</li>
        <li>Always toggle these. Failure to disclose risks account suspension.</li>
      </ul>

      <h2>C2PA provenance</h2>
      <p>Cryptographic disclosure embedded in file. Subject 30 / Chapter 4 covered this.</p>

      <NoteBlock title="The 'always disclose' rule">
        Hiding AI generation is a short-term win that becomes a long-term liability when discovered.
        Disclose; build trust through transparency. Audiences increasingly value honesty about AI
        use.
      </NoteBlock>
    </>
  )
}

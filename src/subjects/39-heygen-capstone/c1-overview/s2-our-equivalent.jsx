import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2OurEquivalent() {
  return (
    <>
      <p>Our 100% local Mac equivalent. Component map.</p>

      <h2>HeyGen → Mac equivalent</h2>
      <table>
        <thead><tr><th>HeyGen feature</th><th>Mac equivalent</th></tr></thead>
        <tbody>
          <tr><td>Avatar library</td><td>FLUX + your trained self-LoRA + PuLID (Subject 27/29)</td></tr>
          <tr><td>Custom avatar from photos</td><td>Self-LoRA training (Subject 12/29)</td></tr>
          <tr><td>Voice library</td><td>Kokoro presets (Subject 25)</td></tr>
          <tr><td>Custom voice clone</td><td>F5-TTS reference (Subject 25/26)</td></tr>
          <tr><td>Script-to-video</td><td>Subject 39's pipeline (this subject)</td></tr>
          <tr><td>Template library</td><td>Workflow JSONs (Subject 32 / Chapter 5)</td></tr>
          <tr><td>Export presets</td><td>ffmpeg presets (Subject 30 / Chapter 1)</td></tr>
          <tr><td>(NEW) Research agent</td><td>Subject 36</td></tr>
          <tr><td>(NEW) B-roll generation</td><td>Subject 27c/27d</td></tr>
          <tr><td>(NEW) Long-video character consistency</td><td>Subject 27f</td></tr>
        </tbody>
      </table>

      <NoteBlock title="The 'matching feature for feature' goal">
        By Subject 39's end, you can give your pipeline a topic and get back a published-ready
        Reel. Same UX as HeyGen's web app — yours is CLI-driven and runs on your laptop.
      </NoteBlock>
    </>
  )
}

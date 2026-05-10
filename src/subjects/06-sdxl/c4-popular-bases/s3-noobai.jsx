import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3Noobai() {
  return (
    <>
      <p>
        NoobAI-XL is a third major SDXL anime/illustration base, trained on a different dataset and
        with a more "raw" anime aesthetic than Pony or Illustrious. Smaller community than the
        other two but distinctive enough to mention.
      </p>

      <h2>Aesthetic</h2>
      <ul>
        <li>Sharper line work than Illustrious's softer feel.</li>
        <li>Stronger anime/manga ink influence.</li>
        <li>Less "glossy" than Pony.</li>
      </ul>

      <h2>Prompting</h2>
      <p>Booru-style tags, similar to Illustrious. No quality-tag prefix system like Pony.</p>

      <h2>Recommended settings</h2>
      <ul>
        <li><strong>cfg</strong>: 5.0–6.0</li>
        <li><strong>steps</strong>: 28</li>
        <li><strong>sampler</strong>: <code>euler_ancestral</code></li>
        <li><strong>scheduler</strong>: <code>karras</code></li>
      </ul>

      <h2>Other notable SDXL bases</h2>
      <table>
        <thead><tr><th>Base</th><th>Strength</th></tr></thead>
        <tbody>
          <tr><td>Juggernaut XL v9</td><td>Best generalist photoreal base; replaces base SDXL for most users</td></tr>
          <tr><td>RealVisXL v4</td><td>Strong photoreal, especially humans</td></tr>
          <tr><td>DreamShaper XL</td><td>Versatile mix of photoreal and stylized</td></tr>
          <tr><td>EpiCRealismXL</td><td>Photoreal, leans cinematic</td></tr>
          <tr><td>Lustify SDXL</td><td>Uncensored photoreal</td></tr>
        </tbody>
      </table>

      <NoteBlock title="The 'one photoreal + one anime' baseline">
        For Mac with limited disk: Juggernaut XL v9 (photoreal) + Pony or Illustrious (anime/illustration)
        covers ~90% of needs. Add specialty bases only when you have a specific reason.
      </NoteBlock>
    </>
  )
}

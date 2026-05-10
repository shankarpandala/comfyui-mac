import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Portrait() {
  return (
    <>
      <p>
        IP-Adapter FaceID Portrait (Subject 10) revisited as a deliberate choice for SDXL portrait
        work. Strongest of the IP-Adapter FaceID family for close-up framing.
      </p>

      <h2>Recipe (SDXL Portrait)</h2>
      <ol>
        <li>SDXL load (Juggernaut XL v9 for photoreal).</li>
        <li><code>IPAdapterUnifiedLoader</code> → preset <code>FACEID PORTRAIT</code>.</li>
        <li><code>LoadImage</code> → reference face photo.</li>
        <li><code>IPAdapterFaceIDPortrait</code> → weight 0.9–1.0.</li>
        <li>Standard SDXL CLIPTextEncode + KSampler.</li>
      </ol>

      <h2>FaceID Portrait vs PuLID vs InstantID</h2>
      <table>
        <thead><tr><th>Method</th><th>Base</th><th>Mac perf</th><th>Identity strength</th></tr></thead>
        <tbody>
          <tr><td>FaceID Portrait</td><td>SDXL</td><td>Fast</td><td>Strong</td></tr>
          <tr><td>InstantID</td><td>SDXL</td><td>Medium</td><td>Strongest with spatial control</td></tr>
          <tr><td>PuLID FLUX</td><td>FLUX</td><td>Slower (FLUX overhead)</td><td>Strongest overall</td></tr>
        </tbody>
      </table>

      <h2>Best for</h2>
      <ul>
        <li>Close-up headshots / portraits.</li>
        <li>Profile pic generation.</li>
        <li>Quick SDXL identity work without InstantID's complexity.</li>
      </ul>

      <NoteBlock title="The 'fast SDXL identity' option">
        FaceID Portrait is faster than InstantID and simpler to set up. For most portrait work on
        SDXL, it's enough.
      </NoteBlock>
    </>
  )
}

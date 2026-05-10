import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3FaceidPortrait() {
  return (
    <>
      <p>
        IP-Adapter FaceID Portrait is the most identity-faithful FaceID variant. Specifically tuned
        for portrait shots — close-up to medium framing. Use when you need the strongest possible
        match to a reference face.
      </p>

      <h2>File</h2>
      <p><code>ip-adapter-faceid-portrait_sdxl.bin</code> — ~700 MB</p>

      <h2>What's different</h2>
      <ul>
        <li>Trained on a curated portrait dataset.</li>
        <li>Stronger face-region attention.</li>
        <li>Less style transfer (compared to Plus v2) — output style is driven by prompt + base model.</li>
      </ul>

      <h2>Recipe</h2>
      <ol>
        <li><code>IPAdapterUnifiedLoader</code> → preset <code>FACEID PORTRAIT</code></li>
        <li><code>IPAdapterFaceIDPortrait</code> node</li>
        <li><strong>weight</strong>: 0.8–1.0 (Portrait tolerates higher weights than Plus v2)</li>
        <li><strong>start_at, end_at</strong>: 0.0, 1.0 (full duration)</li>
      </ol>

      <h2>When to use Portrait vs Plus v2</h2>
      <table>
        <thead><tr><th>Use case</th><th>Variant</th></tr></thead>
        <tbody>
          <tr><td>Close-up headshot of you, exact face</td><td>Portrait</td></tr>
          <tr><td>You in a scene with body visible</td><td>Plus v2</td></tr>
          <tr><td>You in a non-realistic style (anime, painting)</td><td>Plus v2 (Portrait may lose the style)</td></tr>
          <tr><td>Stacking with a character LoRA</td><td>Plus v2 (smoother stacking)</td></tr>
        </tbody>
      </table>

      <h2>Multi-image FaceID</h2>
      <p>
        You can feed multiple reference photos by using <code>IPAdapter Encoder</code> nodes in a
        chain — each photo contributes to the average face embedding. Better identity from 4–8
        photos than from one.
      </p>

      <NoteBlock title="The Phase 5 capstone path">
        For your AI clone in Subject 29, the recommended identity stack is FaceID Portrait (face)
        + your trained LoRA (style/full-body) + PuLID for FLUX-based shots. We tie it all together
        in the capstone.
      </NoteBlock>
    </>
  )
}

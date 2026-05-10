import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Reactor() {
  return (
    <>
      <p>
        ReActor is a face-swap node — replaces faces in a generated image with a face from a
        reference photo. Different from FaceID (which conditions during generation) — ReActor is a
        post-process that swaps the rendered face with the reference identity.
      </p>

      <h2>Custom node</h2>
      <p><code>comfyui-reactor-node</code> — install via Manager.</p>

      <h2>How it works</h2>
      <ol>
        <li>InsightFace detects faces in source (generated) and target (reference).</li>
        <li>Face embeddings extracted from both.</li>
        <li>Source face features replaced with target's via inswapper model.</li>
        <li>GFPGAN/CodeFormer post-process to clean the swap.</li>
      </ol>

      <h2>Files</h2>
      <ul>
        <li><strong>inswapper_128.onnx</strong> — the face-swap model (~660 MB)</li>
        <li>InsightFace antelopev2 — face detection</li>
        <li>GFPGAN or CodeFormer for cleanup</li>
      </ul>

      <h2>Recipe</h2>
      <ol>
        <li>Generate image (any pipeline).</li>
        <li><code>LoadImage</code> → reference face.</li>
        <li><code>ReActorFaceSwap</code> → input image + reference face → output with swapped face.</li>
        <li><code>SaveImage</code></li>
      </ol>

      <h2>ReActor vs FaceID vs PuLID</h2>
      <table>
        <thead><tr><th>Method</th><th>When applied</th><th>Quality</th></tr></thead>
        <tbody>
          <tr><td>ReActor</td><td>Post-process</td><td>Sharp face but less stylistic match</td></tr>
          <tr><td>FaceID Plus v2</td><td>During generation</td><td>Style-matched face</td></tr>
          <tr><td>PuLID FLUX</td><td>During generation</td><td>Best identity, FLUX-only</td></tr>
        </tbody>
      </table>

      <h2>When to use ReActor</h2>
      <ul>
        <li>Quick face-swap on existing images without re-generating.</li>
        <li>Recovering identity when FaceID/PuLID lost it during generation.</li>
        <li>Swapping faces in batches of generated content.</li>
      </ul>

      <NoteBlock title="The Phase 5 capstone usage">
        For the AI clone pipeline, ReActor as a final-pass identity recovery is sometimes used when
        the upstream stack (LoRA + PuLID) isn't perfectly preserving identity. Soft fallback.
      </NoteBlock>
    </>
  )
}

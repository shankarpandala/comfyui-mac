import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Instantid() {
  return (
    <>
      <p>
        InstantID is an identity-preserving adapter from InstantX research. Conceptually similar to
        FaceID but uses both an IP-Adapter-like injection AND a ControlNet-style spatial constraint.
        Result: very strong identity preservation at the cost of more memory.
      </p>

      <h2>Files</h2>
      <ul>
        <li><strong>IP-Adapter</strong>: <code>instantid-ip-adapter.bin</code> (~600 MB)</li>
        <li><strong>ControlNet</strong>: <code>instantid-controlnet.safetensors</code> (~1 GB)</li>
        <li>Plus the standard CLIP-Vision-G + InsightFace antelopev2.</li>
      </ul>

      <h2>How it works</h2>
      <ol>
        <li>InsightFace detects + crops + embeds the reference face.</li>
        <li>The face embedding goes through an IP-Adapter-style injection into UNet cross-attention.</li>
        <li>InsightFace's keypoints (eyes, nose, mouth) are projected to a face-keypoint image.</li>
        <li>That keypoint image drives a ControlNet that spatially constrains where the face appears.</li>
      </ol>

      <h2>Recipe (SDXL)</h2>
      <ol>
        <li>SDXL load.</li>
        <li><code>InstantIDModelLoader</code> → loads ip-adapter + controlnet + face encoder.</li>
        <li><code>LoadImage</code> → reference face.</li>
        <li><code>InsightFaceLoader</code> + <code>FaceAnalysis</code> → produces face embeddings + keypoints.</li>
        <li><code>ApplyInstantID</code> node → wires everything into the conditioning.</li>
      </ol>

      <h2>InstantID vs FaceID Plus v2</h2>
      <ul>
        <li><strong>InstantID</strong>: stronger spatial control (face appears where keypoints say). Heavier (~2 GB extra). SDXL only (no good FLUX version yet on Mac).</li>
        <li><strong>FaceID Plus v2</strong>: lighter (~700 MB). Less spatial control. Works on SDXL and SD1.5.</li>
      </ul>

      <h2>Mac performance</h2>
      <p>
        InstantID adds ~2 GB to the SDXL workflow. With ControlNet preprocessor cost, total
        workflow is ~14 GB. Comfortable on M5 Pro.
      </p>

      <NoteBlock title="When to choose InstantID">
        For "I want my face to appear in this exact pose / framing" with strong spatial control,
        InstantID wins. For "my face in a scene, any framing", FaceID Plus v2 is simpler and
        lighter.
      </NoteBlock>
    </>
  )
}

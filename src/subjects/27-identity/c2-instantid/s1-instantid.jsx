import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Instantid() {
  return (
    <>
      <p>
        InstantID (InstantX, 2024) is the SDXL identity adapter. Combines an IP-Adapter-style
        injection with a face-keypoint ControlNet for spatial face placement. Heavier than PuLID
        but the strongest SDXL identity option.
      </p>

      <h2>When to use InstantID over PuLID</h2>
      <ul>
        <li>Working on SDXL (PuLID's FLUX variant doesn't apply).</li>
        <li>Need precise face position control (the ControlNet branch enforces face placement).</li>
        <li>Stacking with SDXL-specific LoRAs that don't have FLUX equivalents.</li>
      </ul>

      <h2>Files</h2>
      <ul>
        <li><code>instantid-ip-adapter.bin</code> (~600 MB)</li>
        <li><code>instantid-controlnet.safetensors</code> (~1 GB)</li>
        <li>InsightFace antelopev2</li>
        <li>CLIP-Vision-G</li>
      </ul>

      <h2>Recipe summary</h2>
      <ol>
        <li>SDXL load.</li>
        <li><code>InstantIDModelLoader</code> → ip-adapter + controlnet.</li>
        <li><code>InsightFaceLoader</code> + <code>FaceAnalysis</code> → embed reference face + extract keypoints.</li>
        <li><code>ApplyInstantID</code> → injects embeddings + keypoint controlnet.</li>
        <li>KSampler.</li>
      </ol>

      <h2>Mac performance</h2>
      <p>SDXL + InstantID at 1024×1024: ~25 s per image (vs ~17 s for plain SDXL). Memory ~14 GB total.</p>

      <NoteBlock title="The Mac choice">
        For SDXL identity work: InstantID. For FLUX identity work: PuLID. They're not interchangeable
        — different model families. Most Phase 5 capstone work in this curriculum uses PuLID FLUX
        because of the higher base quality.
      </NoteBlock>
    </>
  )
}

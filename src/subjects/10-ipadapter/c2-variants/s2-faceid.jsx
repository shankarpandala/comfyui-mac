import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Faceid() {
  return (
    <>
      <p>
        IP-Adapter FaceID is the identity-preserving variant. Where Plus captures "this image's
        general feel," FaceID specifically captures "this person's face." Crucial for any "AI clone
        of myself" workflow.
      </p>

      <h2>Variants</h2>
      <ul>
        <li><strong>FaceID</strong> — original. Decent but easily mismatched.</li>
        <li><strong>FaceID Plus v2</strong> — recommended. Better identity preservation. <code>ip-adapter-faceid-plusv2_sdxl.bin</code></li>
        <li><strong>FaceID Portrait</strong> — strongest. Specifically tuned for portrait shots. Next section.</li>
      </ul>

      <h2>Recipe (FaceID Plus v2 SDXL)</h2>
      <ol>
        <li>SDXL load.</li>
        <li><code>IPAdapterUnifiedLoader</code> → preset <code>FACEID PLUS V2</code>. This loads CLIP-Vision-L + InsightFace antelopev2 + the IP-Adapter weights.</li>
        <li><code>LoadImage</code> → reference photo of the face.</li>
        <li><code>IPAdapterFaceID</code> node → wire MODEL, IPADAPTER, image, weight, weight_v2.</li>
      </ol>

      <h2>The two weights</h2>
      <p>FaceID has two strength knobs:</p>
      <ul>
        <li><strong>weight</strong> — face embedding strength. 0.5–0.9 typical.</li>
        <li><strong>weight_v2</strong> (Plus v2 only) — additional CLIP-Vision-L face hint strength. 0.5 typical.</li>
      </ul>
      <p>Tune both together. weight 0.7 + weight_v2 0.5 is a good starting point.</p>

      <h2>What to provide as reference</h2>
      <ul>
        <li>Single clear face shot, eyes visible, neutral expression.</li>
        <li>Crop tight to the head — too much body in frame dilutes the face signal.</li>
        <li>Good lighting, no occlusion (no glasses if possible, or at least same glasses style as desired output).</li>
      </ul>

      <h2>FaceID Plus v2 + ControlNet OpenPose</h2>
      <p>
        The standard "person in custom pose" workflow:
      </p>
      <ul>
        <li>FaceID Plus v2 → identity (your face)</li>
        <li>OpenPose ControlNet → desired body pose</li>
        <li>Text prompt → outfit, scene, lighting</li>
      </ul>
      <p>This is the SDXL identity stack; Subject 27 has the full walkthrough.</p>

      <NoteBlock title="When the face still doesn't look like you">
        FaceID's identity is good but not perfect. For better fidelity: train your own LoRA (Subject
        12). For the best identity preservation today on FLUX: PuLID (next chapter).
      </NoteBlock>
    </>
  )
}

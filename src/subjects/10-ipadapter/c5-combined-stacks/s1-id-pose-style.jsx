import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1IdPoseStyle() {
  return (
    <>
      <p>
        The "identity + pose + style" stack is the foundation of personalized character generation.
        FaceID for face, OpenPose ControlNet for body pose, IP-Adapter style for aesthetic. Three
        controls, three independent reference inputs, one cohesive output.
      </p>

      <h2>Recipe (SDXL "your face, in this pose, with this style")</h2>
      <ol>
        <li>SDXL load (e.g., Juggernaut XL v9).</li>
        <li><code>IPAdapterUnifiedLoader</code> → preset <code>FACEID PLUS V2</code></li>
        <li><code>LoadImage A</code> → photo of you (face).</li>
        <li><code>LoadImage B</code> → pose reference photo.</li>
        <li><code>LoadImage C</code> → style reference (painting/photo with desired aesthetic).</li>
        <li><code>DWPreprocessor</code> on B → pose skeleton.</li>
        <li><code>IPAdapterFaceID</code> with image A, weight 0.7.</li>
        <li><code>IPAdapter</code> with image C, weight 0.5, weight_type style transfer.</li>
        <li><code>ControlNetApplyAdvanced</code> with pose skeleton, strength 0.8.</li>
        <li>KSampler → VAEDecode → SaveImage.</li>
      </ol>

      <h2>Order matters</h2>
      <p>
        IP-Adapter and ControlNet apply differently — IP-Adapter modifies MODEL, ControlNet modifies
        CONDITIONING. A typical order:
      </p>
      <pre>{`MODEL → IPAdapterFaceID (your face)
      → IPAdapter (style ref)
      → KSampler.model

CONDITIONING (text) → ControlNetApply (pose) → KSampler.positive`}</pre>

      <h2>Mac memory budget</h2>
      <p>SDXL + 2 IP-Adapters + 1 ControlNet + CLIP-Visions + InsightFace + activations = ~17 GB. Tight on 24 GB Mac. Pre-flight: quit other apps.</p>

      <h2>The FLUX equivalent</h2>
      <p>For FLUX (Phase 5 capstone path):</p>
      <ul>
        <li>FLUX Dev Q5_K_S</li>
        <li>PuLID FLUX (replaces FaceID — better identity on FLUX)</li>
        <li>InstantX/XLabs FLUX ControlNet OpenPose (replaces SDXL OpenPose)</li>
        <li>FLUX Redux for style (replaces IP-Adapter style)</li>
      </ul>
      <p>Same three-layer concept, FLUX-native components.</p>

      <NoteBlock title="The Phase 5 capstone foundation">
        This recipe is the starting point for Subject 29's "AI clone capstone." Add a trained
        personal LoRA, swap IP-Adapter Plus v2 for FaceID Portrait for stronger identity, and you
        have the canonical self-clone stack.
      </NoteBlock>
    </>
  )
}

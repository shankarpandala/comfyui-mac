import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1IdPose() {
  return (
    <>
      <p>InstantID + OpenPose ControlNet — face transfer + body pose control. The "your face on this pose" recipe.</p>

      <h2>Recipe (SDXL)</h2>
      <ol>
        <li>SDXL load (Juggernaut XL).</li>
        <li><code>InstantIDModelLoader</code> + <code>InsightFaceLoader</code>.</li>
        <li><code>LoadImage A</code> → your face reference.</li>
        <li><code>FaceAnalysis</code> on A → face embedding + keypoints.</li>
        <li><code>LoadImage B</code> → pose reference photo.</li>
        <li><code>DWPreprocessor</code> on B → pose skeleton.</li>
        <li><code>ApplyInstantID</code> with face A.</li>
        <li><code>ControlNetApplyAdvanced</code> with pose B, strength 0.7.</li>
        <li>CLIPTextEncode → describe scene/outfit.</li>
        <li>KSampler.</li>
      </ol>

      <h2>Memory</h2>
      <p>~17 GB peak. Pre-flight quit other apps.</p>

      <h2>Wall time</h2>
      <p>~30 seconds per image on M5 Pro.</p>

      <h2>FLUX equivalent</h2>
      <p>For FLUX, swap InstantID → PuLID FLUX. Add FLUX ControlNet OpenPose. Result is similar but FLUX's higher base quality wins for hero shots.</p>

      <NoteBlock title="The 'two-image input' Phase 5 capstone primitive">
        Face image + pose image → your face in that pose with prompt-driven scene. Foundation of
        Subject 29's "AI clone in any setting" workflows. Subject 27g extends this with self-LoRA
        for even tighter identity.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2StylePlusControl() {
  return (
    <>
      <p>
        The "style + ControlNet" stack is a daily-driver pattern: IP-Adapter feeds style/aesthetic,
        ControlNet feeds composition. Three layers of control: text (subject), image (style),
        ControlNet (composition).
      </p>

      <h2>Recipe (SDXL "subject in famous composition with reference style")</h2>
      <ol>
        <li>SDXL load.</li>
        <li><code>IPAdapterUnifiedLoader</code> → STANDARD preset.</li>
        <li><code>LoadImage A</code> → style reference (e.g., Van Gogh painting).</li>
        <li><code>LoadImage B</code> → composition reference (e.g., a photo with the layout you want).</li>
        <li><code>CannyEdgePreprocessor</code> on Image B → edge map.</li>
        <li><code>ControlNetLoader</code> → SDXL Union ControlNet.</li>
        <li><code>SetUnionControlNetType</code> → canny.</li>
        <li><code>IPAdapter</code> with image A, weight 0.7, weight_type style transfer.</li>
        <li><code>ControlNetApplyAdvanced</code> with image (canny edges from B), strength 0.7.</li>
        <li>Wire conditioning chain: CLIPTextEncode → IPAdapter (modifies MODEL) → ControlNetApply (modifies conditioning) → KSampler.</li>
      </ol>

      <h2>Strength budgeting</h2>
      <p>Three controls competing. Sum of strengths under ~2.0 is safe:</p>
      <ul>
        <li>Text: implicit (CFG / guidance).</li>
        <li>IP-Adapter: 0.7</li>
        <li>ControlNet: 0.7</li>
      </ul>

      <h2>Common variations</h2>
      <ul>
        <li><strong>Style + Pose</strong>: IP-Adapter (style) + OpenPose ControlNet (body pose).</li>
        <li><strong>Style + Depth</strong>: IP-Adapter (style) + Depth ControlNet (3D scene preservation).</li>
        <li><strong>Style + Tile</strong>: IP-Adapter (style) + Tile ControlNet (image fidelity for upscaling/restyling).</li>
      </ul>

      <NoteBlock title="The Mac memory math for the trio">
        SDXL fp16 + Union ControlNet (~2.5 GB) + IP-Adapter Plus (~700 MB) + CLIP-Vision-G (~3.5
        GB) + activations = ~16 GB. Tight; quit other apps. With FLUX, replace the encoders with
        SigLIP and you're closer to 18 GB.
      </NoteBlock>
    </>
  )
}

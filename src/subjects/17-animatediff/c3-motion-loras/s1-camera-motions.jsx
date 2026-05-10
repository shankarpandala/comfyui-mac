import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1CameraMotions() {
  return (
    <>
      <p>
        Motion LoRAs are small adapters trained for specific camera moves: pan-left, zoom-in, tilt,
        rotate. Stack on top of AnimateDiff motion modules to get reliable camera motion that
        prompts alone can't deliver consistently.
      </p>

      <h2>Standard motion LoRAs</h2>
      <ul>
        <li><strong>v2_lora_PanLeft.ckpt</strong></li>
        <li><strong>v2_lora_PanRight.ckpt</strong></li>
        <li><strong>v2_lora_TiltUp.ckpt</strong></li>
        <li><strong>v2_lora_TiltDown.ckpt</strong></li>
        <li><strong>v2_lora_RollingClockwise.ckpt</strong></li>
        <li><strong>v2_lora_RollingAnticlockwise.ckpt</strong></li>
        <li><strong>v2_lora_ZoomIn.ckpt</strong></li>
        <li><strong>v2_lora_ZoomOut.ckpt</strong></li>
      </ul>
      <p>Folder: <code>models/loras/</code> (treated like regular LoRAs).</p>

      <h2>Loading</h2>
      <p>
        Use <code>AnimateDiffLoraLoader</code> (from Evolved) — a special LoraLoader that wires the
        motion LoRA into the motion module rather than the spatial UNet. Required because motion
        LoRAs are temporally-shaped.
      </p>

      <h2>Strength</h2>
      <ul>
        <li>0.5–0.8 — typical strength.</li>
        <li>1.0+ — over-strong; motion may look exaggerated or break composition.</li>
      </ul>

      <h2>Stacking motion LoRAs</h2>
      <p>
        Two motion LoRAs at moderate strength can blend (pan-right + zoom-in = "dolly forward and
        right"). Three usually produces incoherent motion.
      </p>

      <h2>Combine with character LoRAs</h2>
      <p>
        Stack: spatial character LoRA (via standard LoraLoader) + motion LoRA (via
        AnimateDiffLoraLoader). Both apply during sampling without conflict.
      </p>

      <NoteBlock title="The cinematography toolkit">
        For social media B-roll: a small library of motion LoRAs (pan, zoom, tilt) gives you a
        cinematographer's vocabulary without prompting tricks. Build a workflow per camera move
        and reuse.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1MotionLoras() {
  return (
    <>
      <p>
        Wan motion LoRAs work like AnimateDiff motion LoRAs — train on specific camera moves or
        body actions, apply via LoraLoader for that specific motion.
      </p>

      <h2>Notable Wan motion LoRAs</h2>
      <ul>
        <li>Camera-pan LoRAs (left, right, up, down)</li>
        <li>Zoom LoRAs (in, out)</li>
        <li>Action LoRAs (walking, running, dancing) trained per-action</li>
      </ul>

      <h2>Loading</h2>
      <p>Standard <code>LoraLoader</code> works for Wan LoRAs. They patch the Wan UNet's temporal layers.</p>

      <h2>Strength</h2>
      <ul>
        <li>0.6–0.8 typical.</li>
        <li>Wan is sensitive to LoRA strength — start lower than for SDXL.</li>
      </ul>

      <h2>Stacking</h2>
      <p>
        Wan motion LoRA + character LoRA stacks naturally. Subject 27g uses this for self-clone
        action animation: your-LoRA + walking-LoRA → "you walking."
      </p>

      <NoteBlock title="The growing Wan LoRA ecosystem">
        Wan LoRAs are newer than SDXL/FLUX LoRAs. CivitAI has a growing collection; check the
        "Wan" filter. Quality varies more than for established bases.
      </NoteBlock>
    </>
  )
}

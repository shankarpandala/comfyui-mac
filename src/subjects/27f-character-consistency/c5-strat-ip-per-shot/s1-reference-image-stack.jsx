import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1ReferenceImageStack() {
  return (
    <>
      <p>Strategy 4: IP-Adapter per-shot. Apply visual reference image (still of you) to every video segment via IP-Adapter or FLUX Redux.</p>

      <h2>The technique</h2>
      <p>For each segment:</p>
      <ol>
        <li>Maintain a "canonical reference photo" of your character.</li>
        <li>Apply IP-Adapter (SDXL) or FLUX Redux (FLUX) with this reference, strength 0.5-0.7.</li>
        <li>Generate segment with reference influence.</li>
        <li>Reference stays the same across all segments.</li>
      </ol>

      <h2>Why it helps</h2>
      <ul>
        <li>IP-Adapter pulls outputs toward "look like this image."</li>
        <li>Same reference across segments → all segments look like the reference.</li>
        <li>Less precise than PuLID for face but covers full appearance (outfit, body shape).</li>
      </ul>

      <h2>For video models without IP-Adapter support</h2>
      <p>
        AnimateDiff supports IP-Adapter natively. LTX/Hunyuan/Wan don't directly — apply IP-Adapter
        to the i2v "first frame" still instead. The video model preserves the first-frame
        appearance anyway.
      </p>

      <NoteBlock title="The redundant-anchoring philosophy">
        IP-Adapter + LoRA + PuLID is "belt and suspenders." Each provides identity from a different
        angle (visual ref / weight pattern / face embedding). Together they hold tight where any
        single one would slip.
      </NoteBlock>
    </>
  )
}

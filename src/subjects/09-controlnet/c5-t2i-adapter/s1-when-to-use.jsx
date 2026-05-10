import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1WhenToUse() {
  return (
    <>
      <p>
        T2I-Adapter is a lighter alternative to ControlNet — smaller models that achieve similar
        spatial control. Less popular than ControlNet today but worth knowing about for tight memory
        situations.
      </p>

      <h2>Architecture difference</h2>
      <ul>
        <li><strong>ControlNet</strong>: trainable copy of UNet's encoder. ~half the UNet's size. Strong control.</li>
        <li><strong>T2I-Adapter</strong>: small CNN that produces residuals at fewer points in the UNet. ~10% of UNet's size. Weaker but often sufficient.</li>
      </ul>

      <h2>Available variants</h2>
      <ul>
        <li>Canny, Depth, Sketch, Color, Pose for SD 1.5 and SDXL</li>
        <li>Sizes: ~150–300 MB each (vs ~1.5 GB ControlNet)</li>
      </ul>

      <h2>When T2I-Adapter wins</h2>
      <ul>
        <li>You're running multiple controls on tight Mac memory.</li>
        <li>You want soft guidance, not hard control.</li>
        <li>Per-step compute matters — T2I-Adapter is much faster than ControlNet per step.</li>
      </ul>

      <h2>When ControlNet wins</h2>
      <ul>
        <li>You need precise pose / silhouette adherence.</li>
        <li>You need depth-accurate scene preservation.</li>
        <li>You need any of the niche controls (Tile, Inpaint) that exist only as ControlNets.</li>
      </ul>

      <h2>The 2026 verdict</h2>
      <p>
        T2I-Adapter has been mostly eclipsed by ControlNet for serious use. It's still in ComfyUI
        and works fine — particularly the SDXL Color and Sketch variants for stylized work — but
        it's not the first tool you reach for.
      </p>

      <NoteBlock title="The rare Mac use case">
        If you're stacking 4+ controls on FLUX (e.g., Phase 5b complex self-clone workflows), one
        T2I-Adapter for soft style control while ControlNets handle the structural ones can save
        precious GB. Otherwise, default to ControlNet.
      </NoteBlock>
    </>
  )
}

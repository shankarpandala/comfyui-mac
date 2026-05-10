import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Strategies() {
  return (
    <>
      <p>
        Outpainting extends an existing image into new pixel territory beyond its original borders.
        Same fundamental tech as inpainting — the mask is just on the new outside region.
      </p>

      <h2>Setup</h2>
      <ol>
        <li>Take your input image. Pad it on one or more sides — add canvas, fill with gray.</li>
        <li>Create a mask: white over the new (outside) region, black over the original.</li>
        <li>Run an inpaint workflow on the padded image with the mask.</li>
        <li>Inpaint fills in the new region with content matching the original's edges.</li>
      </ol>

      <h2>The padding trick</h2>
      <p>
        Custom-node packs ship <code>ImagePadForOutpaint</code> that handles the padding + mask
        creation automatically. Specify how many pixels to add on each side; node outputs the padded
        image + matching mask.
      </p>

      <h2>Best models for outpainting</h2>
      <ul>
        <li><strong>FLUX Fill</strong> — excellent at outpainting; trained on the task.</li>
        <li><strong>PowerPaint outpaint mode</strong> — purpose-built; SD 1.5 / SDXL.</li>
        <li><strong>SDXL Inpaint base</strong> — works but less seamless than FLUX Fill.</li>
      </ul>

      <h2>The seam problem</h2>
      <p>
        Outpaint seams (where new region meets old) can be visible. Mitigations:
      </p>
      <ul>
        <li><strong>Overlap pixels</strong> — make the mask a few pixels narrower than the new region. The model regenerates a sliver of the original, blending the boundary.</li>
        <li><strong>Soft mask edge</strong> — feather the mask 10–20 pixels for gradient transition.</li>
        <li><strong>Iterative outpaint</strong> — outpaint 256 pixels at a time, not 1024 in one shot. Each pass has a smaller seam to manage.</li>
      </ul>

      <h2>Use cases</h2>
      <ul>
        <li><strong>Aspect ratio change</strong> — turn a square portrait into 16:9 cinematic by outpainting both sides.</li>
        <li><strong>Reveal hidden context</strong> — what's "outside" the frame of a tightly-cropped photo.</li>
        <li><strong>Creative extensions</strong> — add fantasy backgrounds to portraits.</li>
      </ul>

      <NoteBlock title="The 'iterative' rule">
        For big aspect-ratio changes (square → 21:9), outpaint in 2–3 passes of 256 pixels each.
        One-shot outpaint of 1000+ pixels rarely produces clean results.
      </NoteBlock>
    </>
  )
}

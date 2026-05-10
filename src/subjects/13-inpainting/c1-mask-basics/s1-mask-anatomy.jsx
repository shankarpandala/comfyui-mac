import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1MaskAnatomy() {
  return (
    <>
      <p>
        Inpainting modifies specific regions of an existing image while leaving the rest untouched.
        The mask defines the region. Sharp masks produce visible seams; soft masks blend smoothly.
      </p>

      <DefinitionBlock title="Inpaint mask">
        Single-channel grayscale image at the same resolution as the input. White (1.0) = inpaint
        (model is free to change). Black (0.0) = preserve. Gray = blend the inpainted result with
        the original at intermediate strength.
      </DefinitionBlock>

      <h2>Three ways to create a mask in ComfyUI</h2>
      <ol>
        <li><strong>Paint in the LoadImage editor</strong> — right-click the LoadImage node → Open in MaskEditor → paint with brush.</li>
        <li><strong>Load a separate PNG mask</strong> — alpha channel becomes the mask.</li>
        <li><strong>Generate from segmentation</strong> — SAM (Segment Anything) or YOLO detector produces a mask of detected objects.</li>
      </ol>

      <h2>Mask edge softness</h2>
      <p>
        Sharp mask edges = visible boundary in output. Solutions:
      </p>
      <ul>
        <li><strong>Feather node</strong>: <code>MaskFeather</code> — applies Gaussian blur to mask edges, ~10–30 pixels typical.</li>
        <li><strong>Grow + Blur</strong>: <code>MaskGrow</code> + <code>MaskBlur</code> — expand the mask outward then blur for soft boundary.</li>
        <li><strong>Differential diffusion</strong> (chapter 4) — uses gradient of mask intensity instead of binary cutoff.</li>
      </ul>

      <h2>Mask conventions in ComfyUI</h2>
      <ul>
        <li>Most nodes expect "white = inpaint here". Some nodes invert; check the node's tooltip.</li>
        <li>The MaskEditor paints white-on-black by default (you paint where you want change).</li>
        <li>If outputs are inverted (the unchanged region got changed), invert the mask via <code>InvertMask</code>.</li>
      </ul>

      <NoteBlock title="The 'where to paint' question">
        Paint on the area you want the model to redraw. If you want to add a hat to a person's head,
        paint on top of where the hat should go. If you want to remove a watermark, paint over the
        watermark.
      </NoteBlock>
    </>
  )
}

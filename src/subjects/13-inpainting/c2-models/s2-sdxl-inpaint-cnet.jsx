import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2SdxlInpaintCnet() {
  return (
    <>
      <p>
        For SDXL inpainting, the alternative to a dedicated inpaint base is using SDXL with an
        Inpaint ControlNet. Stack on top of base SDXL with no model swap. Lighter on disk; slightly
        less seamless than a dedicated inpaint model.
      </p>

      <h2>The SDXL Inpaint ControlNet</h2>
      <ul>
        <li><strong>File</strong>: <code>controlnet-inpaint-sdxl-1.0.safetensors</code> (~2.5 GB)</li>
        <li><strong>Source</strong>: various community uploads; check CivitAI</li>
      </ul>

      <h2>Recipe</h2>
      <ol>
        <li>Standard SDXL load (e.g., Juggernaut XL).</li>
        <li>LoadImage with mask.</li>
        <li><code>InpaintPreprocessor</code> → produces a "masked input" image (original × inverted-mask, masked region zeroed out).</li>
        <li>ControlNetLoader → SDXL Inpaint ControlNet.</li>
        <li>ControlNetApplyAdvanced → wires preprocessed image into conditioning, strength 0.9.</li>
        <li>SetLatentNoiseMask → wires mask into the latent for sampling.</li>
        <li>KSampler → denoise 1.0 (because the ControlNet provides the spatial constraint).</li>
      </ol>

      <h2>Advantages over dedicated inpaint base</h2>
      <ul>
        <li>Stack with character LoRAs that wouldn't work with the dedicated inpaint UNet.</li>
        <li>Use the same base for inpaint and t2i — no model swap.</li>
        <li>Fine-tune control via ControlNet strength.</li>
      </ul>

      <h2>Disadvantages</h2>
      <ul>
        <li>Slightly less natural seams than dedicated inpaint base.</li>
        <li>Memory: base SDXL + Inpaint ControlNet = ~14 GB.</li>
      </ul>

      <h2>The DiffControl-Inpaint variant</h2>
      <p>
        Newer community ControlNets specifically tuned for inpaint may produce better results.
        Check <code>xinsir/controlnet-union-sdxl-1.0-promax</code> with type=inpaint setting.
      </p>

      <NoteBlock title="When to choose this path">
        If you have a strong character/style LoRA stack you want to inpaint with, the ControlNet
        approach is better than swapping to a dedicated inpaint base. For pure inpainting without
        LoRA stacks, dedicated inpaint base is simpler.
      </NoteBlock>
    </>
  )
}

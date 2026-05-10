import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3EmptyLatent() {
  return (
    <>
      <p>
        Diffusion models don't paint pixels — they denoise tensors. The starting tensor is pure
        Gaussian noise, sized to the latent space. EmptyLatentImage is the node that creates it.
      </p>

      <DefinitionBlock title="EmptyLatentImage">
        Produces a LATENT of shape <code>[B, 4, H/8, W/8]</code> filled with random Gaussian noise
        seeded from the workflow's seed. <code>4</code> is the channel count for the SD1.5 VAE; H and
        W are the pixel dimensions you specify.
      </DefinitionBlock>

      <h2>Add the node</h2>
      <ol>
        <li>Double-click empty canvas → type <code>EmptyLatentImage</code> → select.</li>
        <li>Set <code>width</code> = 512.</li>
        <li>Set <code>height</code> = 512.</li>
        <li>Set <code>batch_size</code> = 1.</li>
      </ol>

      <h2>Why 512×512?</h2>
      <p>
        SD1.5 was trained at 512×512. Going much larger introduces composition errors (extra heads,
        repeated bodies) because the UNet's receptive field is sized for that resolution. SDXL's
        sweet spot is 1024×1024; FLUX is flexible. We respect SD1.5's training resolution for our
        first run.
      </p>

      <h2>Aspect ratios</h2>
      <p>
        Width and height must each be a multiple of 8 (8× downsample by the VAE) and ideally a
        multiple of 64 (UNet stride alignment). Common SD1.5 ratios:
      </p>
      <table>
        <thead><tr><th>Ratio</th><th>Width × Height</th><th>Use</th></tr></thead>
        <tbody>
          <tr><td>1:1</td><td>512 × 512</td><td>Square, default</td></tr>
          <tr><td>2:3</td><td>512 × 768</td><td>Portrait</td></tr>
          <tr><td>3:2</td><td>768 × 512</td><td>Landscape</td></tr>
          <tr><td>9:16</td><td>448 × 768</td><td>Reels / Shorts (cropped to 9:16 in post)</td></tr>
        </tbody>
      </table>

      <h2>Batch size</h2>
      <p>
        <code>batch_size</code> ≥ 2 generates multiple images in parallel from the same prompt with
        different noise seeds (offset by <code>seed</code>, <code>seed+1</code>, …). For SD1.5 on M5
        Pro, batch_size 4 is comfortable; batch_size 8 starts to swap. For our first run, leave it at
        1.
      </p>

      <NoteBlock title="Why latent space at all?">
        The UNet operates on 64×64×4 tensors instead of 512×512×3. That's <em>~12×</em> less data per
        step. The VAE handles the round-trip to pixels at the start and end. We unpack the math in
        Subject 03.
      </NoteBlock>
    </>
  )
}

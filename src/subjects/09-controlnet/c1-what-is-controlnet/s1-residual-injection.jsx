import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1ResidualInjection() {
  return (
    <>
      <p>
        ControlNet (Zhang et al. 2023) injects spatial guidance into diffusion. You give it an
        edge map, depth map, or pose skeleton; it forces the generated image to match that
        structure. The mechanism: a parallel "control branch" computes residuals that get added to
        the frozen UNet's intermediate activations.
      </p>

      <DefinitionBlock title="ControlNet">
        A trainable copy of the UNet's encoder that takes a control signal (depth/canny/pose) as
        input and produces residuals. Residuals are added to the corresponding layers of the frozen
        UNet decoder during the diffusion forward pass.
      </DefinitionBlock>

      <h2>Why this design works</h2>
      <ul>
        <li>The UNet weights are frozen — no degradation of base model quality.</li>
        <li>The control branch is small (~1.5 GB for SDXL ControlNet) — affordable to train per control type.</li>
        <li>Residuals are additive — multiple ControlNets stack naturally.</li>
        <li>Strength and per-step schedule are runtime-tunable — no retraining for different uses.</li>
      </ul>

      <h2>The data flow per step</h2>
      <ol>
        <li>Standard FLUX/SDXL forward pass starts.</li>
        <li>Control image → ControlNet's encoder → residuals at each UNet layer.</li>
        <li>Residuals (× strength) added to UNet activations.</li>
        <li>UNet decoder produces the final ε / velocity prediction.</li>
        <li>Sampler step proceeds as normal.</li>
      </ol>

      <h2>Per-step compute cost</h2>
      <p>
        ControlNet adds ~30% per-step compute to SDXL (the parallel encoder is ~half the size of
        the UNet's encoder). For FLUX it's a smaller percentage because FLUX is bigger.
      </p>

      <NoteBlock title="The conceptual mental model">
        "ControlNet is a frozen UNet plus a small trained adapter that whispers spatial constraints
        into the UNet's decoder." That sentence captures everything. The next sections are about
        which preprocessors generate which control signals.
      </NoteBlock>
    </>
  )
}

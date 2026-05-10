import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1DitOverview() {
  return (
    <>
      <p>
        FLUX.1, by Black Forest Labs (founded by ex-Stability researchers), is the current
        state-of-the-art open-weights image model. It's a 12B-parameter Diffusion Transformer trained
        with flow matching. On Mac it's the model that motivates this entire curriculum.
      </p>

      <DefinitionBlock title="FLUX.1">
        12 B-parameter MMDiT-style transformer. Trained with flow matching (rectified flow), not
        DDPM. Uses CLIP-L + T5-XXL for text conditioning. 16-channel VAE. Native 1024 resolution
        but flexible across aspect ratios.
      </DefinitionBlock>

      <h2>The variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Steps</th><th>License</th><th>Notes</th></tr></thead>
        <tbody>
          <tr><td>FLUX Dev</td><td>20–50</td><td>Non-commercial</td><td>Highest quality. Mac users want this most.</td></tr>
          <tr><td>FLUX Schnell</td><td>4</td><td>Apache 2.0</td><td>Distilled. Apache means commercial OK.</td></tr>
          <tr><td>FLUX Pro</td><td>API only</td><td>—</td><td>Closed; not in this curriculum.</td></tr>
        </tbody>
      </table>

      <h2>Sizes</h2>
      <ul>
        <li>UNet (DiT): 12 B params, ~23 GB at fp16</li>
        <li>T5-XXL: ~9.5 GB at fp16</li>
        <li>CLIP-L: ~250 MB at fp16</li>
        <li>VAE: ~170 MB at bf16</li>
      </ul>
      <p>
        Total at fp16: ~33 GB. Won't fit in 24 GB Mac. This is why GGUF is mandatory.
      </p>

      <h2>What FLUX gets right</h2>
      <ul>
        <li>Best-in-class prompt adherence — long descriptive prompts work.</li>
        <li>Fingers actually look correct.</li>
        <li>Text in image renders even better than SD3.</li>
        <li>Photoreal output that doesn't need a finetune to look professional.</li>
      </ul>

      <NoteBlock title="On Mac: GGUF is the way">
        Subject 02 / Chapter 3's substitution table prescribes GGUF Q5_K_S for FLUX UNet on Mac.
        That brings the UNet from ~23 GB to ~7.8 GB. With GGUF T5 (~3.5 GB) + CLIP-L + VAE +
        activations, total ~14 GB — comfortable on 16 GB working budget.
      </NoteBlock>
    </>
  )
}

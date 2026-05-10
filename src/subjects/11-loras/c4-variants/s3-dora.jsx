import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3Dora() {
  return (
    <>
      <p>
        DoRA (Weight-Decomposed Low-Rank Adaptation, NVIDIA 2024) is the newest popular LoRA variant.
        It decomposes weight updates into magnitude and direction components, training each
        separately. Better fidelity for the same parameter count than standard LoRA.
      </p>

      <h2>The math (simple version)</h2>
      <p>
        Standard LoRA adds <code>ΔW = AB</code> to the original weight. DoRA splits the original
        weight into magnitude × direction, then trains a magnitude scaling vector + a low-rank
        directional update.
      </p>

      <h2>Why it works better</h2>
      <ul>
        <li>The decomposition aligns with how full finetuning naturally moves weights.</li>
        <li>Better at preserving the base model's behavior on concepts the LoRA isn't targeting.</li>
        <li>Sharper concept transfer at the same rank.</li>
      </ul>

      <h2>File extension</h2>
      <p>Same .safetensors. ComfyUI's <code>LoraLoader</code> auto-detects DoRA from the file structure (recent ComfyUI versions; older may not).</p>

      <h2>Adoption</h2>
      <ul>
        <li>Some FLUX LoRA training scripts now default to DoRA.</li>
        <li>CivitAI uploads tagged "DoRA" — usually ~20–30% larger than equivalent LoRA at same rank for the additional magnitude vector.</li>
        <li>SDXL DoRAs exist but adoption is slower than for FLUX.</li>
      </ul>

      <h2>Mac compatibility</h2>
      <p>
        DoRAs load on MPS via the same LoraLoader. No special handling. If a DoRA fails to load,
        update ComfyUI to the latest version — DoRA support landed in mid-2024.
      </p>

      <NoteBlock title="The choosing">
        For most users, what matters is the trained content of the LoRA, not its variant. A great
        standard-LoRA character beats a mediocre-DoRA character every time. When training your own
        in Subject 12, DoRA is worth choosing for FLUX work; for SDXL, standard LoRA is still the
        battle-tested default.
      </NoteBlock>
    </>
  )
}

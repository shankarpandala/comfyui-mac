import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3Sag() {
  return (
    <>
      <p>
        Self-Attention Guidance (SAG, Hong et al. 2023) is the older predecessor of PAG/SEG. Uses
        attention map masking to derive guidance. Largely superseded by PAG, but still in some
        community workflows.
      </p>

      <h2>How it works</h2>
      <ol>
        <li>At each step, compute the self-attention map.</li>
        <li>Mask high-attention regions (Gaussian blur on the masked latent).</li>
        <li>Run a perturbed forward pass on the partially-blurred latent.</li>
        <li>Use as the negative-equivalent in CFG-style guidance.</li>
      </ol>

      <h2>Status in 2026</h2>
      <ul>
        <li>PAG generally better.</li>
        <li>SAG still works; not actively developed.</li>
        <li>Exists as <code>SelfAttentionGuidance</code> custom node.</li>
      </ul>

      <h2>The lineage</h2>
      <p>SAG (2023) → PAG (early 2024) → SEG (mid 2024). Each iteration improved on the previous. PAG is the recommended modern choice; SAG's name appears in older tutorials.</p>

      <NoteBlock title="If you see SAG in a community workflow">
        Consider replacing with PAG. The wiring is similar; PAG is generally a drop-in upgrade.
      </NoteBlock>
    </>
  )
}

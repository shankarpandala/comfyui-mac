import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Stg() {
  return (
    <>
      <p>
        STG (Spatio-Temporal Guidance) is LTX's PAG equivalent. Adds an additional guidance signal
        based on perturbing the spatial OR temporal attention paths. Often improves quality at small
        compute cost.
      </p>

      <h2>How it works</h2>
      <p>
        STG perturbs LTX's attention by zeroing out one branch of attention (spatial-only,
        temporal-only, or both). The perturbed prediction is subtracted from the standard
        prediction in CFG-style:
      </p>
      <pre>{`ε_out = ε_standard + stg_scale × (ε_standard - ε_perturbed)`}</pre>

      <h2>The custom node</h2>
      <p>
        <code>STGGuidance</code> from LTX-specific custom-node packs (<code>ComfyUI-LTXVideo</code>{' '}
        ships it).
      </p>

      <h2>Parameters</h2>
      <ul>
        <li><strong>stg_scale</strong>: 1.0–4.0 typical.</li>
        <li><strong>perturb_mode</strong>: <code>spatial</code> (perturb spatial attn), <code>temporal</code> (perturb temporal attn), or <code>both</code>.</li>
        <li><strong>start_percent / end_percent</strong>: which sampler steps active (0–1.0).</li>
      </ul>

      <h2>Recommendation</h2>
      <ul>
        <li>For temporal coherence improvements: <code>perturb_mode=temporal</code>, scale 2.0.</li>
        <li>For spatial detail improvements: <code>perturb_mode=spatial</code>, scale 2.0.</li>
        <li>For balanced: <code>perturb_mode=both</code>, scale 1.5.</li>
      </ul>

      <h2>Compute cost</h2>
      <p>~30% extra per-step (the perturbed forward pass). For LTX 2B that's negligible — adds ~30s to a 2-minute render.</p>

      <NoteBlock title="The 'add when needed' rule">
        STG is a quality boost for LTX. Default to no STG; add it when outputs need more polish.
        Particularly useful for vid2vid (Subject 27e) where temporal coherence matters most.
      </NoteBlock>
    </>
  )
}

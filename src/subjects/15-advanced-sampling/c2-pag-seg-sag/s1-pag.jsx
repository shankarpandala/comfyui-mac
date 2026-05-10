import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Pag() {
  return (
    <>
      <p>
        Perturbed Attention Guidance (PAG, Ahn et al. 2024) is an alternative guidance signal to
        CFG. Instead of using a "no prompt" branch as the negative, PAG uses a "broken self-attention"
        branch. Often improves coherence on prompts where CFG produces artifacts.
      </p>

      <DefinitionBlock title="PAG">
        Replace one self-attention layer's softmax with the identity (so it averages tokens
        uniformly). The output of this perturbed forward pass is a "weak" prediction. Subtract it
        from the strong prediction (analogous to CFG):
        <code>ε_out = ε_strong + scale × (ε_strong - ε_perturbed)</code>
      </DefinitionBlock>

      <h2>The custom node</h2>
      <p><code>PerturbedAttentionGuidance</code> from base ComfyUI or several custom-node packs.</p>

      <h2>Parameters</h2>
      <ul>
        <li><strong>scale</strong>: 1.0–4.0 typical. Like CFG scale but additive.</li>
        <li><strong>start_at, end_at</strong>: which sampler steps PAG is active (0.0-1.0).</li>
        <li><strong>block</strong>: which UNet block to perturb (default: middle block 0).</li>
      </ul>

      <h2>Why PAG often outperforms CFG</h2>
      <ul>
        <li>The perturbed branch is "near" the model's actual output (just one ablated attention layer) — gradient direction is more useful than CFG's far-away "no prompt" branch.</li>
        <li>Doesn't require negative prompts.</li>
        <li>Stacks additively with CFG — use both.</li>
      </ul>

      <h2>Mac compatibility</h2>
      <p>
        PAG works on MPS without issue. Cost: ~30% extra per-step compute (the perturbed forward
        pass). For SDXL on M5 Pro, ~17 s → ~22 s with PAG.
      </p>

      <NoteBlock title="When to add PAG">
        For SDXL outputs with composition issues that CFG tweaking doesn't fix. For FLUX (which
        already has its own guidance), PAG sometimes helps but the marginal benefit is smaller.
        Test on your problematic prompts; keep if it helps.
      </NoteBlock>
    </>
  )
}

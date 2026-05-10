import { BlockMath, InlineMath } from 'react-katex'
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2RectifiedFlow() {
  return (
    <>
      <p>
        Rectified Flow (Liu et al. 2022) is a sharpening of flow matching: it takes a flow-matching
        model and re-trains it so the trajectories from noise to data are nearly straight lines. This
        is what enables 4-step inference for distilled flow models (FLUX Schnell, SD3 Turbo).
      </p>

      <DefinitionBlock title="Why straight lines matter">
        If the optimal velocity field is constant along trajectories, an Euler step from{' '}
        <InlineMath math="t = 1" /> to <InlineMath math="t = 0" /> is exact in one step:
        <BlockMath math="x_0 = x_1 - v_\theta(x_1, 1)" />
        Real models are not perfectly straight, so a few steps are still needed — but the closer to
        straight, the fewer steps.
      </DefinitionBlock>

      <h2>The reflow procedure</h2>
      <ol>
        <li>Start with a trained flow matching model <InlineMath math="v_\theta" />.</li>
        <li>Sample many (noise, data) pairs by running the model end-to-end.</li>
        <li>Re-train the model on these straight-line pairs — but now using the model's <em>own outputs</em> as the data anchor.</li>
        <li>Each round of reflow makes trajectories straighter.</li>
      </ol>
      <p>
        After 1–2 reflow rounds, the model can produce reasonable samples in 1–4 Euler steps. Each
        round costs roughly as much as the original training but the gains are significant.
      </p>

      <h2>FLUX Schnell as a rectified-flow distillation</h2>
      <p>
        FLUX Schnell is FLUX Dev with rectified-flow + adversarial distillation applied. Both
        techniques in the same training run. Result: a model that produces images close to FLUX Dev
        quality in 4 Euler steps at <InlineMath math="\text{guidance}=0" /> (no CFG).
      </p>
      <p>
        On M5 Pro: ~8 seconds per FLUX Schnell image at 1024×1024 vs ~45 seconds for FLUX Dev.
        Schnell is the right Mac default for ideation, Dev for final.
      </p>

      <h2>Why we don't reflow ourselves</h2>
      <p>
        Reflow needs:
      </p>
      <ul>
        <li>Multi-GPU compute. Single 24 GB Mac is too constrained.</li>
        <li>Days of training time per round.</li>
        <li>Significant data engineering to maintain quality.</li>
      </ul>
      <p>
        The community releases distilled models when they're ready. FLUX Schnell is open source;
        SDXL Lightning, Hyper-SDXL, LCM-LoRA are all distillations of various flavors. Subject 06
        and Subject 08 walk through using them.
      </p>

      <NoteBlock title="Distillation is hard to undo">
        Once a model is distilled to 4 steps, you cannot get back to 50-step quality just by running
        50 steps on the distilled model. The "creativity" that comes from many sampler steps is
        baked away during distillation. For your final hero shots, use the un-distilled model. For
        speed, use the distillation.
      </NoteBlock>
    </>
  )
}

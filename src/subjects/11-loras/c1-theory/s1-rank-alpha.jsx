import { BlockMath, InlineMath } from 'react-katex'
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1RankAlpha() {
  return (
    <>
      <p>
        LoRA (Low-Rank Adaptation, Hu et al. 2021) is the technique that lets you teach a diffusion
        model new concepts without retraining all 12 B parameters. It learns a small low-rank
        update to specific weight matrices.
      </p>

      <DefinitionBlock title="LoRA decomposition">
        For each adapted weight matrix <InlineMath math="W \in \mathbb{R}^{d \times k}" />, learn
        two small matrices <InlineMath math="A \in \mathbb{R}^{d \times r}" /> and{' '}
        <InlineMath math="B \in \mathbb{R}^{r \times k}" /> with{' '}
        <InlineMath math="r \ll \min(d, k)" />. The forward pass becomes:
        <BlockMath math="W' x = W x + \frac{\alpha}{r}\, A B x" />
        Original weights stay frozen; only A and B are trained.
      </DefinitionBlock>

      <h2>The three knobs</h2>
      <ul>
        <li><strong>rank (r)</strong> — the inner dimension of A and B. Typically 4–128. Higher = more capacity.</li>
        <li><strong>alpha (α)</strong> — scaling factor on the LoRA contribution at inference. Typically equals rank.</li>
        <li><strong>dropout</strong> — regularization during training. 0–0.1 typical.</li>
      </ul>

      <h2>What the rank controls</h2>
      <ul>
        <li><strong>r=4</strong> — tiny LoRA (~5 MB SDXL). Captures simple style or concept.</li>
        <li><strong>r=16</strong> — typical character LoRA (~30 MB SDXL). Single character with consistent appearance.</li>
        <li><strong>r=32</strong> — detailed LoRA (~60 MB SDXL). Complex character + style.</li>
        <li><strong>r=64–128</strong> — complex multi-concept LoRAs (~100–200 MB).</li>
        <li><strong>r=256+</strong> — diminishing returns; better off finetuning the full model.</li>
      </ul>

      <h2>The alpha:rank ratio</h2>
      <p>
        <InlineMath math="\alpha = r" /> is the conventional "no scaling" choice. <InlineMath math="\alpha = r/2" />{' '}
        halves the LoRA's effective influence at inference (you can compensate by training longer).
        Most modern training scripts default to <InlineMath math="\alpha = r" /> unless you know
        why you'd want otherwise.
      </p>

      <h2>Why LoRA scales so well</h2>
      <ul>
        <li>SDXL has ~3.5 B parameters. A rank-16 LoRA on attention layers is ~10 M parameters — 350× smaller.</li>
        <li>Training memory drops proportionally — you can train SDXL LoRAs on 24 GB Mac (Subject 12).</li>
        <li>Stacking multiple LoRAs is just adding their A·B contributions — no per-LoRA UNet copy needed.</li>
      </ul>

      <NoteBlock title="The takeaway">
        LoRA = "small trained patch on top of a big frozen model." Its size and capacity are tuned
        by rank. Most LoRAs you'll download are rank 16 or 32. We'll get into stacking, block
        weights, and training in the chapters that follow.
      </NoteBlock>
    </>
  )
}

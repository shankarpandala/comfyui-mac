import { InlineMath } from 'react-katex'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Loha() {
  return (
    <>
      <p>
        LoHa (Low-Rank Hadamard Product) is a LyCORIS variant that decomposes the weight update
        into the Hadamard (element-wise) product of two low-rank matrices instead of a single matrix
        product. Theoretically more expressive at the same parameter count.
      </p>

      <h2>The math (intuitive)</h2>
      <p>
        Standard LoRA: <InlineMath math="\Delta W = AB" /> where A is d×r and B is r×k.
      </p>
      <p>
        LoHa: <InlineMath math="\Delta W = (A_1 B_1) \odot (A_2 B_2)" /> where ⊙ is element-wise
        product. Same total parameters but higher effective rank in the resulting <InlineMath math="\Delta W" />.
      </p>

      <h2>What that means in practice</h2>
      <ul>
        <li>LoHa can capture more nuanced concept adaptations at small file sizes.</li>
        <li>Particularly useful for character LoRAs trained on small datasets — squeezes more out of fewer images.</li>
        <li>Slower training convergence than standard LoRA; needs more training steps.</li>
      </ul>

      <h2>File extension and loading</h2>
      <p>Same .safetensors. <code>LoraLoader</code> auto-detects.</p>

      <h2>When LoHa helps</h2>
      <ul>
        <li>Character LoRAs from very small datasets (5–10 images).</li>
        <li>Compact LoRAs where you can't afford rank 32+.</li>
      </ul>

      <h2>When LoHa doesn't help</h2>
      <ul>
        <li>Style LoRAs from large datasets — standard LoRA does fine.</li>
        <li>Speed LoRAs (Lightning, Hyper) — they're not LyCORIS-style.</li>
      </ul>

      <h2>The other LyCORIS variants</h2>
      <ul>
        <li><strong>LoKr</strong> — low-rank Kronecker product. Even smaller than LoHa for the same effective rank. Niche use.</li>
        <li><strong>IA3</strong> — extremely small (KB-scale) adapter that scales activations. Limited expressiveness; rarely used for diffusion.</li>
        <li><strong>DiagOFT, BOFT</strong> — orthogonal finetuning variants. Research-tier; you won't see these on CivitAI.</li>
      </ul>

      <NoteBlock title="The LyCORIS landscape today">
        Standard LoRA (90%) and LoCon (~5%) cover almost everything you'll download. LoHa is rare;
        the others are research. Don't worry about variant choice when consuming LoRAs — the loader
        handles it. Worry about it only when training your own (Subject 12).
      </NoteBlock>
    </>
  )
}

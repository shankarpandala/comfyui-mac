import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1PrunedVsFull() {
  return (
    <>
      <p>
        SD 1.5 checkpoints come in two sizes: pruned and full. The difference is which weights are
        included. For inference, only the pruned version is needed.
      </p>

      <h2>What's in a full checkpoint</h2>
      <ul>
        <li>UNet weights (~860 M params)</li>
        <li>EMA UNet weights (a separate copy used during training)</li>
        <li>CLIP weights</li>
        <li>VAE weights</li>
        <li>Optimizer state (Adam moments)</li>
        <li>Training metadata</li>
      </ul>

      <h2>What's in a pruned checkpoint</h2>
      <ul>
        <li>EMA UNet weights (the better-quality copy)</li>
        <li>CLIP weights</li>
        <li>VAE weights</li>
      </ul>
      <p>That's it. Optimizer state is dropped; non-EMA UNet is dropped.</p>

      <h2>Sizes</h2>
      <table>
        <thead><tr><th>Type</th><th>Size</th></tr></thead>
        <tbody>
          <tr><td>SD 1.5 full</td><td>~7.7 GB</td></tr>
          <tr><td>SD 1.5 EMA-only pruned</td><td>~4 GB</td></tr>
          <tr><td>SD 1.5 EMA-only fp16 pruned</td><td>~2 GB</td></tr>
        </tbody>
      </table>

      <h2>Naming conventions</h2>
      <ul>
        <li><code>v1-5-pruned-emaonly.safetensors</code> — what we used in Subject 01.</li>
        <li><code>v1-5-pruned.safetensors</code> — both EMA and non-EMA, no optimizer.</li>
        <li><code>v1-5.ckpt</code> (no suffix) — usually the full file.</li>
      </ul>

      <NoteBlock title="Always grab pruned for inference">
        Unless you're explicitly fine-tuning, pruned-emaonly is the right download. fp16 pruned at
        ~2 GB is the most disk-efficient option.
      </NoteBlock>
    </>
  )
}

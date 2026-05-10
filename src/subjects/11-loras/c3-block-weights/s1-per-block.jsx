import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1PerBlock() {
  return (
    <>
      <p>
        A LoRA's effect can be applied at different strengths to different UNet blocks. "Block
        weights" let you, e.g., apply a character LoRA only to the encoder blocks (which control
        composition) and not to the decoder blocks (which control details).
      </p>

      <h2>The UNet block layout (SDXL)</h2>
      <table>
        <thead><tr><th>Group</th><th>Blocks</th><th>What they control</th></tr></thead>
        <tbody>
          <tr><td>Input encoder</td><td>IN00–IN08</td><td>Coarse composition, broad subject</td></tr>
          <tr><td>Mid block</td><td>M00</td><td>Bottleneck — global features</td></tr>
          <tr><td>Output decoder</td><td>OUT00–OUT08</td><td>Fine details, textures</td></tr>
        </tbody>
      </table>

      <h2>The LoRA Block Weight node</h2>
      <p>
        Custom-node packs ship <code>LoRA Loader (Block Weight)</code> or similar. They expose 19+
        sliders, one per UNet block. Standard LoraLoader is equivalent to setting all blocks to the
        same strength.
      </p>

      <h2>Common patterns</h2>
      <ul>
        <li><strong>Character at full strength only in OUT blocks</strong>: preserves composition from prompt, character appearance in details. Pattern:
          <pre>{`IN: 0.0   OUT00-04: 1.0   OUT05-08: 1.0`}</pre>
        </li>
        <li><strong>Style only in input/mid</strong>: composition gets the style influence, details follow base model. Useful for "subtly stylized realism".
          <pre>{`IN: 1.0   M: 1.0   OUT: 0.3`}</pre>
        </li>
        <li><strong>Character but not lighting</strong>: some blocks govern lighting; muting them keeps the character under your prompt's lighting.</li>
      </ul>

      <h2>How to discover the right pattern</h2>
      <p>
        Trial and error. Start with all-1.0 (standard LoraLoader). If outputs are over-LoRA'd in a
        specific way (e.g., "the character LoRA's lighting is overriding my prompt"), drop the
        relevant block group and re-test.
      </p>

      <NoteBlock title="When to bother">
        Block weights are advanced. For most users, standard LoraLoader at varying strengths is
        enough. Reach for block weights when you have a stack of competing LoRAs and need surgical
        control. The Phase 5b self-clone recipes don't use block weights — they're not necessary
        for that workflow.
      </NoteBlock>
    </>
  )
}

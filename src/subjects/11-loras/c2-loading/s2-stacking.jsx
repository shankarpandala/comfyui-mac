import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Stacking() {
  return (
    <>
      <p>
        Multiple LoRAs stack by chaining LoraLoader nodes. Each one modifies the MODEL/CLIP coming
        from the previous. There's no hard cap on count — but quality and stability degrade as you
        add more.
      </p>

      <h2>The chain</h2>
      <pre>{`CheckpointLoader → LoraLoader (Lightning, 1.0)
                → LoraLoader (Character, 0.8)
                → LoraLoader (Style, 0.6)
                → LoraLoader (Outfit, 0.5)
                → KSampler`}</pre>

      <h2>Order matters (sometimes)</h2>
      <ul>
        <li><strong>Speed LoRAs first</strong> (Lightning / Hyper / LCM) — they fundamentally change how the model samples.</li>
        <li><strong>Character LoRAs next</strong> — establish identity.</li>
        <li><strong>Style LoRAs after</strong> — apply aesthetic on top.</li>
        <li><strong>Outfit / detail LoRAs last</strong> — fine adjustments.</li>
      </ul>
      <p>For LoRA targets that don't overlap, order is mathematically equivalent. Most overlap somewhere.</p>

      <h2>The strength budget rule</h2>
      <p>Sum of LoRA strengths matters. Rough guidance:</p>
      <ul>
        <li><strong>1 LoRA</strong>: strength 1.0 OK.</li>
        <li><strong>2 LoRAs</strong>: each at 0.7–0.9, sum &lt; 1.6.</li>
        <li><strong>3 LoRAs</strong>: each at 0.5–0.7, sum &lt; 1.8.</li>
        <li><strong>4+ LoRAs</strong>: each at 0.4–0.6, sum &lt; 2.0.</li>
      </ul>
      <p>Over-budget leads to "fried" outputs — too much LoRA influence breaks the base model's distribution.</p>

      <h2>Lora Stacker nodes (custom)</h2>
      <p>
        Custom-node packs ship "stacker" nodes that bundle multiple LoRAs into one node with per-row
        strength. Useful for compact workflows. Functionally equivalent to chained LoraLoaders.
      </p>

      <h2>Mac memory</h2>
      <p>
        LoRAs are memory-cheap during inference — the trained low-rank update is applied to the
        UNet weights at load time, not stored separately. ~10–200 MB per LoRA on disk; near-zero
        runtime memory cost.
      </p>

      <NoteBlock title="The stack-test rhythm">
        When building a multi-LoRA workflow: start with one LoRA at 1.0. Add the next at 0.7. Test.
        Tune strengths down if outputs look fried; up if effects are too subtle. One LoRA at a time.
      </NoteBlock>
    </>
  )
}

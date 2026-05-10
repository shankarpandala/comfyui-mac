import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Locon() {
  return (
    <>
      <p>
        LyCORIS is a family of LoRA-extension techniques. The names are confusing; functionally
        they all "low-rank adapt more places than standard LoRA does." LoCon is the first and
        simplest extension: standard LoRA on attention layers + low-rank adaptation of conv layers.
      </p>

      <h2>What LoCon adds over LoRA</h2>
      <ul>
        <li>Standard LoRA: only attention Q/K/V projections.</li>
        <li>LoCon: attention + ResNet conv layers.</li>
        <li>Result: stronger style adaptation (conv layers govern texture, color palette).</li>
      </ul>

      <h2>File extension</h2>
      <p>Same <code>.safetensors</code> as LoRA. ComfyUI auto-detects LoCon vs LoRA from the file's tensor names.</p>

      <h2>Loading</h2>
      <p>
        Standard <code>LoraLoader</code> loads LoCon files transparently. No special node needed.
        Some custom-node packs ship <code>LycorisLoader</code> that's equivalent for clarity.
      </p>

      <h2>Size</h2>
      <ul>
        <li>SD 1.5 LoCon at rank 16: ~80 MB</li>
        <li>SDXL LoCon at rank 16: ~150 MB</li>
        <li>About 2× standard LoRA at the same rank.</li>
      </ul>

      <h2>When LoCon helps</h2>
      <ul>
        <li><strong>Strong style transfer</strong> — texture and palette adaptation is what conv layers do.</li>
        <li><strong>Photo-realism finetunes</strong> — skin texture, fabric weave benefit.</li>
        <li><strong>Color-graded looks</strong> — overall palette shifts.</li>
      </ul>

      <h2>When LoCon doesn't help</h2>
      <ul>
        <li>Pure character LoRAs — character identity lives in attention layers, not conv. LoCon adds size for nothing.</li>
        <li>Concept LoRAs — same.</li>
      </ul>

      <NoteBlock title="LyCORIS terminology">
        LyCORIS is the umbrella project. LoCon is one technique inside it. LoHa, LoKr, DoRA are
        others. We cover the rest in the next sections. Most CivitAI uploads are either standard
        LoRA or LoCon — the others are rarer.
      </NoteBlock>
    </>
  )
}

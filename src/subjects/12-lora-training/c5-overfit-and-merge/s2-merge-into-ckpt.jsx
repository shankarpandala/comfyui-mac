import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2MergeIntoCkpt() {
  return (
    <>
      <p>
        LoRAs can be permanently merged into a checkpoint, producing a fused finetune that doesn't
        need LoraLoader at runtime. Useful when you've found a winning LoRA combination and want to
        commit it as a base.
      </p>

      <h2>Why merge</h2>
      <ul>
        <li><strong>Workflow simplicity</strong> — no LoraLoader chain to maintain.</li>
        <li><strong>Per-step speed</strong> — LoRA application has small per-step overhead; merging removes it.</li>
        <li><strong>Distribution</strong> — share a single checkpoint vs base + many LoRAs.</li>
      </ul>

      <h2>Why NOT merge</h2>
      <ul>
        <li><strong>Disk cost</strong> — each merged checkpoint is 6.7 GB SDXL or 23 GB FLUX. LoRAs are tiny.</li>
        <li><strong>Inflexibility</strong> — can't tune strength after merge. Merged at 1.0 means stuck at 1.0.</li>
        <li><strong>Hard to revert</strong> — base checkpoint not recoverable from merged file.</li>
      </ul>

      <h2>Merging in ComfyUI</h2>
      <p>Custom-node packs include merge nodes. Common chain:</p>
      <ol>
        <li><code>CheckpointLoader</code> → MODEL.</li>
        <li><code>LoraLoader</code>(s) → modified MODEL with all desired LoRAs at desired strengths.</li>
        <li><code>CheckpointSave</code> (from <code>ComfyUI-Custom-Scripts</code>) → writes the merged checkpoint to <code>models/checkpoints/</code>.</li>
      </ol>

      <h2>Merging with kohya_ss</h2>
      <p>
        kohya_ss has a CLI tool: <code>networks/merge_lora.py</code>. Takes a base, one or more
        LoRAs with strengths, outputs a merged .safetensors. Recommended for batch merges.
      </p>

      <h2>Mac considerations</h2>
      <p>
        Merging is a one-time compute job — load base, apply LoRA math, save. Memory: same as
        loading the base + the LoRAs. Time: ~30 seconds for SDXL, ~2 minutes for FLUX. Disk: equal
        to base size.
      </p>

      <NoteBlock title="The 'merge when stable' rule">
        For your AI clone, keep the LoRA in LoRA form during development — you'll want to tune
        strength as you build workflows. Once your stack is locked in (right strengths, right LoRA
        combinations) and you find yourself loading the same set every workflow, merge into a
        custom checkpoint and call it your "self-base". Subject 29 capstone walks through this.
      </NoteBlock>
    </>
  )
}

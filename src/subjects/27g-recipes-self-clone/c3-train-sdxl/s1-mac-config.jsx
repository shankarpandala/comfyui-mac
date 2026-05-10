import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1MacConfig() {
  return (
    <>
      <p>Train your SDXL self-LoRA on M5 Pro overnight using kohya_ss MPS branch.</p>

      <h2>Config (verified Mac-friendly)</h2>
      <ul>
        <li>Source: Juggernaut XL v9</li>
        <li>Network: LoRA, rank 16, alpha 16</li>
        <li>Optimizer: AdamW8bit (fall back to AdamW)</li>
        <li>LR: 1e-4 UNet, 5e-5 CLIP, cosine_with_restarts</li>
        <li>Batch 1, gradient_accumulation_steps 4</li>
        <li>Mixed precision: bf16</li>
        <li>Epochs: 10, save every 2</li>
        <li>Resolution: 1024 with bucketing</li>
        <li>flip_aug: false (faces aren't symmetric)</li>
        <li>noise_offset: 0.05</li>
      </ul>

      <h2>Wall time</h2>
      <p>~5-6 hours overnight on M5 Pro for 50 photos + 200 reg images.</p>

      <h2>After training</h2>
      <ul>
        <li>Test snapshots from epochs 6, 8, 10.</li>
        <li>Pick best generalizer.</li>
        <li>Save as <code>my-self-sdxl-v1.safetensors</code>.</li>
      </ul>

      <NoteBlock title="Subject 12 deep dive">
        Subject 12 is the canonical reference for LoRA training. This section is the Mac
        capstone-specific recipe that distills it.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1SdxlLora() {
  return (
    <>
      <p>
        Your SDXL self-LoRA is the foundation. Train it first — it validates your dataset and
        produces a usable result in ~6 hours. The FLUX LoRA (next section) follows once SDXL is
        proven.
      </p>

      <h2>Pre-training checklist</h2>
      <ul>
        <li>50-80 photos curated and ready.</li>
        <li>WD14-Tagger captioned them with auto-tags.</li>
        <li>Manual cleanup: removed irrelevant tags, added trigger word to every caption.</li>
        <li>200-500 regularization images (Subject 12 / Chapter 1 / Section 3).</li>
      </ul>

      <h2>Training config (kohya_ss MPS)</h2>
      <ul>
        <li>Source model: Juggernaut XL v9 (photoreal SDXL base)</li>
        <li>Network: LoRA, rank 16, alpha 16</li>
        <li>Batch 1, gradient accumulation 4</li>
        <li>Learning rate 1e-4, cosine_with_restarts</li>
        <li>Optimizer: AdamW8bit (or AdamW if 8bit fails)</li>
        <li>Mixed precision: bf16</li>
        <li>10 epochs (50 photos × 10 = 500 base steps; with reg ~2500 effective)</li>
        <li>Save every 2 epochs (snapshots for picking best)</li>
        <li>Resolution: 1024 with bucketing (768-1280)</li>
      </ul>

      <h2>Wall time</h2>
      <p>~5-7 hours overnight on M5 Pro with 50 photos + 200 reg.</p>

      <h2>Validation prompts during training</h2>
      <pre>{`my-trigger person portrait, neutral expression, soft lighting
my-trigger person walking in a park
my-trigger person in formal attire at evening event
my-trigger person in tropical beach setting`}</pre>
      <p>The last one is the overfit detector. If your training photos didn't include beaches, this prompt should still produce you on a beach. If it produces your training-photo backdrop with a tropical filter, you've overfit.</p>

      <h2>After training</h2>
      <ul>
        <li>Test all snapshot epochs (epoch 6, 8, 10).</li>
        <li>Pick the one with best generalization.</li>
        <li>Save as <code>my-self-sdxl-lora.safetensors</code>.</li>
      </ul>

      <NoteBlock title="The 'snapshots are critical' rule">
        Final epoch is often overfit. Test 3-4 snapshots; pick the one that handles novel prompts
        best. This is true for ~70% of self-LoRA training runs.
      </NoteBlock>
    </>
  )
}

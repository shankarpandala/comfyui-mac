import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Cache() {
  return (
    <>
      <p>ComfyUI's persistent model cache. Models stay in MPS memory across queue runs; not reloaded for each prompt.</p>

      <h2>What's cached</h2>
      <ul>
        <li>UNet weights (the big one).</li>
        <li>CLIP / text encoders.</li>
        <li>VAE.</li>
        <li>Loaded LoRAs (until you change them).</li>
      </ul>

      <h2>What's NOT cached</h2>
      <ul>
        <li>Activations / KSampler temporaries (per-run).</li>
        <li>Decoded images (per-run).</li>
        <li>VAE-encoded inputs (per-run unless you cache via ComfyUI-Cache custom nodes).</li>
      </ul>

      <h2>Cache invalidation</h2>
      <p>The cache invalidates when:</p>
      <ul>
        <li>You change the model file (CheckpointLoader dropdown).</li>
        <li>You change a LoRA file or strength materially.</li>
        <li>You change a launch flag affecting weights.</li>
        <li>You restart ComfyUI.</li>
      </ul>

      <h2>The "load once, generate many" pattern</h2>
      <p>
        First queue: ~30 s of model load + ~17 s sample = 47 s.
        Second queue (same model): ~17 s sample only.
      </p>
      <p>For batch / Auto Queue runs, only the first eats load time.</p>

      <NoteBlock title="The 'don't restart ComfyUI mid-batch' rule">
        For overnight 50-render batches, don't restart ComfyUI. The cache saves you ~25 minutes
        across 50 renders. If you must restart, plan for the cold-start cost.
      </NoteBlock>
    </>
  )
}

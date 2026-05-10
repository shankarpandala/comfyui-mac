import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1MacFlux() {
  return (
    <>
      <p>Train FLUX self-LoRA on M5 Pro using ai-toolkit. ~10-12 hours overnight.</p>

      <h2>Config (ai-toolkit YAML)</h2>
      <ul>
        <li>Base: FLUX.1-dev with quantize: true</li>
        <li>Network: LoRA, rank 16, alpha 16</li>
        <li>train_unet: true, train_text_encoder: false</li>
        <li>gradient_checkpointing: true</li>
        <li>Optimizer: AdamW8bit, LR 1e-4, constant scheduler</li>
        <li>noise_scheduler: flowmatch</li>
        <li>Steps: 2500-3500</li>
        <li>Resolution: 1024 + bucketing</li>
        <li>cache_latents_to_disk: true</li>
        <li>device: mps</li>
      </ul>

      <h2>Wall time</h2>
      <p>~10-12 hours on M5 Pro for 50 photos.</p>

      <h2>Output</h2>
      <p><code>my-self-flux-v1.safetensors</code> — ~150-300 MB.</p>

      <h2>Use it</h2>
      <p>
        Drop in <code>models/loras/</code>, load with standard LoraLoader on top of FLUX Mac kit.
        Strength 0.7-0.8.
      </p>

      <NoteBlock title="The 'overnight train, daytime use' rhythm">
        Capture Saturday afternoon. Caption Sunday. Train Sunday night. Use Monday onward.
        One-week onboarding to your AI clone capstone capability.
      </NoteBlock>
    </>
  )
}

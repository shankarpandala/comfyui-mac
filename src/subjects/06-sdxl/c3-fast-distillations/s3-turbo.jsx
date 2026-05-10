import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3Turbo() {
  return (
    <>
      <p>
        SDXL Turbo (Stability AI, 2023) was the first major SDXL distillation. 1–4 steps at low
        resolution. Largely superseded by Lightning and Hyper-SD, but worth knowing about because
        community workflows and tutorials still reference it.
      </p>

      <h2>The story</h2>
      <p>
        Stability trained SDXL Turbo with Adversarial Diffusion Distillation (ADD). The result: a
        single-step generator at 512×512 that runs in &lt;1 second on consumer hardware. It was the
        proof-of-concept that few-step SDXL was possible.
      </p>

      <h2>Why it's been left behind</h2>
      <ul>
        <li>Trained at 512×512, not SDXL's native 1024 — outputs feel "small SD-1.5-style".</li>
        <li>License is non-commercial (Stability research license).</li>
        <li>Lightning and Hyper-SD produce better quality at 4 steps with full 1024 native res.</li>
      </ul>

      <h2>If you encounter it</h2>
      <p>Recipe for SDXL Turbo:</p>
      <ul>
        <li><strong>steps</strong>: 1–4</li>
        <li><strong>cfg</strong>: 1.0</li>
        <li><strong>sampler</strong>: <code>euler_ancestral</code></li>
        <li><strong>scheduler</strong>: <code>normal</code></li>
        <li><strong>resolution</strong>: 512×512 (don't push higher)</li>
      </ul>

      <h2>The successor</h2>
      <p>
        Stability later released <strong>SDXL Turbo Lightning</strong> and{' '}
        <strong>SD3 Turbo</strong>, both better. For new SDXL workflows in 2026, default to
        Lightning or Hyper-SD; reach for Turbo only if a recipe specifies it.
      </p>

      <NoteBlock title="The terminology mess">
        "Turbo", "Lightning", "Hyper", "LCM" all refer to few-step distillation. They're not
        interchangeable — each requires its specific sampler + LoRA pairing. When following a
        recipe, match the LoRA name to the sampler exactly.
      </NoteBlock>
    </>
  )
}

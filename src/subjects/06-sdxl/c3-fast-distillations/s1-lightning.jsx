import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Lightning() {
  return (
    <>
      <p>
        SDXL Lightning (ByteDance, 2024) compresses SDXL to 1/2/4/8 sampling steps via progressive
        adversarial distillation. At 4 steps it's nearly indistinguishable from 25-step base. On
        M5 Pro it brings 1024×1024 SDXL generation to ~3 seconds.
      </p>

      <h2>Variants</h2>
      <ul>
        <li><strong>1-step</strong> — fastest, lowest quality. Useful only for ideation.</li>
        <li><strong>2-step</strong> — visible quality jump over 1-step.</li>
        <li><strong>4-step</strong> — recommended balance. ~95% of base SDXL quality.</li>
        <li><strong>8-step</strong> — closer to indistinguishable; doubles the compute of 4-step.</li>
      </ul>

      <h2>Two distribution forms</h2>
      <ul>
        <li><strong>Full UNet checkpoint</strong> — replaces SDXL base entirely. Larger download (~6.7 GB).</li>
        <li><strong>LoRA</strong> — applies on top of any SDXL base. Smaller (~400 MB) and stackable with character/style LoRAs.</li>
      </ul>
      <p>The LoRA form is more flexible and what most workflows use.</p>

      <h2>Recipe (4-step LoRA)</h2>
      <ul>
        <li><strong>LoRA</strong>: <code>sdxl_lightning_4step_lora.safetensors</code></li>
        <li><strong>strength</strong>: 1.0 (model and clip)</li>
        <li><strong>steps</strong>: 4</li>
        <li><strong>cfg</strong>: 1.0 (Lightning is trained for CFG=1)</li>
        <li><strong>sampler</strong>: <code>euler</code></li>
        <li><strong>scheduler</strong>: <code>sgm_uniform</code></li>
      </ul>

      <h2>What breaks at 4 steps</h2>
      <ul>
        <li>Long, complex prompts may get partially ignored.</li>
        <li>Fingers and text are slightly less reliable than 25-step.</li>
        <li>CFG &gt; 1 produces oversaturated outputs; stay at 1.</li>
      </ul>

      <NoteBlock title="The Mac iteration loop">
        SDXL Lightning at 4 steps gives you ~3-second iteration on M5 Pro. That's the difference
        between "diffusion is slow" and "diffusion feels live". For prompt experimentation, set
        Auto Queue and let it shuffle.
      </NoteBlock>
    </>
  )
}

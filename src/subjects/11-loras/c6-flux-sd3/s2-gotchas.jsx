import MacGotchaBlock from '../../../components/content/MacGotchaBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Gotchas() {
  return (
    <>
      <p>
        Common LoRA gotchas, especially for FLUX and SD3. Knowing them saves debugging time.
      </p>

      <h2>"My LoRA produces a totally different style"</h2>
      <ul>
        <li><strong>Wrong base</strong>: LoRA was trained against a specific finetune. Try the matching base.</li>
        <li><strong>Wrong prompt format</strong>: Pony LoRAs need <code>score_9, source_anime</code>; without it the style is off.</li>
        <li><strong>Strength too low</strong>: try 1.0.</li>
      </ul>

      <h2>"My LoRA crashes ComfyUI on load"</h2>
      <ul>
        <li>Old DoRA on old ComfyUI — update.</li>
        <li>LyCORIS variant ComfyUI doesn't recognize — try via <code>Power Lora Loader (rgthree)</code> or similar custom-node loader.</li>
        <li>File corruption — re-download.</li>
      </ul>

      <h2>"FLUX LoRA produces all black/NaN"</h2>
      <ul>
        <li>Missing <code>--bf16-vae</code> launch flag (Subject 08 / Chapter 4 / Section 3).</li>
        <li>LoRA was trained against fp16 FLUX but you're loading bf16 — usually OK but rare cases break.</li>
      </ul>

      <h2>"SDXL LoRA on FLUX (or vice versa)"</h2>
      <MacGotchaBlock title="Cross-base LoRAs don't work">
        SDXL LoRAs cannot be loaded on FLUX. The architectures are incompatible — different attention
        shapes, different block counts. ComfyUI will error or silently produce garbage.
      </MacGotchaBlock>

      <h2>"Stacked LoRAs are slow on FLUX"</h2>
      <ul>
        <li>Each LoRA's weights are merged into the dequantized UNet at runtime. With GGUF, this happens per-step. Slight per-step cost ~5–10% per LoRA stacked.</li>
        <li>For multi-LoRA FLUX workflows, consider merging LoRAs into a fused checkpoint offline (Subject 12 covers merging).</li>
      </ul>

      <h2>"LoRA + ControlNet conflict"</h2>
      <ul>
        <li>Both modify what the UNet attends to. High strengths on both fight each other.</li>
        <li>Drop both to ~0.6.</li>
        <li>Or schedule them at different sampler steps (start/end ranges).</li>
      </ul>

      <NoteBlock title="The general debugging order">
        1. Read the LoRA's CivitAI page — trigger words, recommended base, suggested CFG.
        2. Test with no other LoRAs/ControlNets in the workflow.
        3. Try strength 1.0 first; only adjust after you've seen baseline.
        4. If still broken, the LoRA might just be poorly trained — try a different one.
      </NoteBlock>
    </>
  )
}

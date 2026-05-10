import { InlineMath } from 'react-katex'
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S4LcmTcd() {
  return (
    <>
      <p>
        LCM (Latent Consistency Model) and TCD (Trajectory Consistency Distillation) are not really
        samplers — they're <em>distilled</em> models that come with their own dedicated sampler. The
        result: 4–8 steps at quality close to 25-step DPM++. We discuss them here because they're
        in ComfyUI's sampler dropdown and use a different ODE step.
      </p>

      <DefinitionBlock title="Consistency models">
        Train a "student" model to map any point on the probability-flow ODE trajectory directly to
        the endpoint <InlineMath math="x_0" /> in one step. If the student is trained well, you can
        sample with as few as one step (single-step model) or chain a few steps for higher quality.
      </DefinitionBlock>

      <h2>How they work in ComfyUI</h2>
      <p>Two ingredients:</p>
      <ol>
        <li>A <strong>distilled checkpoint or LoRA</strong> — the actual student model. Examples: <code>lcm-lora-sdxl.safetensors</code>, <code>sdxl_lightning_4step_lora.safetensors</code>, <code>Hyper-SDXL-8steps-CFG-lora.safetensors</code>.</li>
        <li>A <strong>matching sampler</strong> — <code>lcm</code>, <code>tcd</code> in the KSampler dropdown. These compute the consistency-model step rather than a generic ODE step.</li>
      </ol>
      <p>
        Critical: the LoRA is mandatory for LCM/TCD samplers. Without it, the sampler is asking the
        UNet for a property the UNet wasn't trained to produce; output is noise.
      </p>

      <h2>The few-step recipes you'll meet</h2>
      <table>
        <thead><tr><th>Method</th><th>Steps</th><th>CFG</th><th>Sampler</th><th>Where</th></tr></thead>
        <tbody>
          <tr><td>SDXL Lightning 4-step</td><td>4</td><td>1</td><td><code>euler</code> + <code>sgm_uniform</code></td><td>ByteDance LoRA</td></tr>
          <tr><td>SDXL Lightning 8-step</td><td>8</td><td>1</td><td><code>euler</code></td><td>ByteDance LoRA</td></tr>
          <tr><td>LCM-LoRA SDXL</td><td>4–8</td><td>1.5</td><td><code>lcm</code></td><td>Tsinghua LoRA</td></tr>
          <tr><td>Hyper-SD SDXL 4-step</td><td>4</td><td>1</td><td><code>tcd</code></td><td>ByteDance LoRA</td></tr>
          <tr><td>FLUX Schnell</td><td>4</td><td>1</td><td><code>euler</code> + <code>simple</code></td><td>Black Forest distillation (full checkpoint, not a LoRA)</td></tr>
        </tbody>
      </table>

      <h2>Quality vs speed trade-off</h2>
      <ul>
        <li><strong>4 steps</strong> — usable, mild artifacts, fingers/text degraded. Fine for ideation.</li>
        <li><strong>8 steps</strong> — visibly better. Often indistinguishable from 25-step base for stylized prompts.</li>
        <li><strong>16+ steps with a 4-step distill</strong> — diminishing returns; sometimes worse than the dedicated long-step sampler.</li>
      </ul>

      <h2>When to use these on M5 Pro</h2>
      <ul>
        <li><strong>Iteration speed.</strong> SDXL Lightning 4-step at 1024×1024 is ~3 s wall-clock on M5 Pro. That's "as fast as you can think about prompts."</li>
        <li><strong>Batch generation.</strong> 4 steps × batch_size 4 vs 25 steps × batch_size 1 — sometimes the distilled version wins on throughput.</li>
        <li><strong>Production.</strong> If output quality at 4–8 steps is good enough for your use case (Reels thumbnails, ideation), the speedup is huge.</li>
      </ul>

      <NoteBlock title="The distinction matters">
        LCM/TCD/Lightning all happen to be "few-step" but they are not interchangeable. Loading the
        Lightning LoRA but selecting the LCM sampler gives broken output. Match the LoRA to its
        intended sampler — Subject 06 has the recipes spelled out.
      </NoteBlock>
    </>
  )
}

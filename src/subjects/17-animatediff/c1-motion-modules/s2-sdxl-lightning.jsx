import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2SdxlLightning() {
  return (
    <>
      <p>
        AnimateDiff Lightning is the few-step distilled motion module. 4-step generation at SDXL
        quality. Combined with SDXL Lightning (the image distillation), you get fast video on Mac.
      </p>

      <h2>Recipe</h2>
      <ol>
        <li>Load SDXL base.</li>
        <li>Load SDXL Lightning 4-step LoRA at strength 1.0.</li>
        <li><code>AnimateDiffLoaderGen1</code> with <code>animatediff_lightning_4step_diffusers.safetensors</code>.</li>
        <li>EmptyLatentImage → set to 1024×576, batch_size=16 (16 frames).</li>
        <li>KSampler: 4 steps, cfg 1.0, euler, sgm_uniform.</li>
        <li>VAEDecode → IMAGE batch.</li>
        <li><code>VHS_VideoCombine</code> (Video Helper Suite) → mp4 output.</li>
      </ol>

      <h2>The interaction with SDXL Lightning LoRA</h2>
      <p>
        Both pieces (image distillation LoRA + Lightning motion module) need to be present.
        Without the LoRA, the motion module's distillation assumptions break and you get garbled
        video. They're a matched pair.
      </p>

      <h2>Wall time on M5 Pro</h2>
      <p>16 frames at 1024×576, 4 steps: ~30 seconds end-to-end.</p>

      <h2>Output frame rate</h2>
      <p>
        AnimateDiff produces 16 frames. Set output fps in <code>VHS_VideoCombine</code>:
      </p>
      <ul>
        <li>fps 8 → 2-second clip</li>
        <li>fps 12 → 1.3-second clip</li>
        <li>fps 16 → 1-second clip</li>
      </ul>

      <h2>Combining with character LoRAs</h2>
      <p>
        Character LoRAs stack on top of AnimateDiff Lightning. Lightning LoRA at 1.0 + character
        LoRA at 0.7-0.8. Results in your character animated for 2 seconds.
      </p>

      <NoteBlock title="The fast video iteration loop">
        AnimateDiff SDXL Lightning is the fastest "see motion" path on Mac. ~30s per clip means
        you can iterate prompts in real time. For longer / higher-quality, switch to LTX or Hunyuan
        (next subjects).
      </NoteBlock>
    </>
  )
}

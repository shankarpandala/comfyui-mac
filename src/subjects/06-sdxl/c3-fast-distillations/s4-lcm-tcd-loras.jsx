import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S4LcmTcdLoras() {
  return (
    <>
      <p>
        LCM-LoRA (Tsinghua, 2023) and TCD (Trajectory Consistency Distillation) are open-source
        few-step distillations applied via LoRA. They predate Lightning/Hyper-SD and are still in
        use because they're permissively licensed and stack with anything.
      </p>

      <h2>LCM-LoRA</h2>
      <ul>
        <li><strong>File</strong>: <code>lcm-lora-sdxl.safetensors</code></li>
        <li><strong>strength</strong>: 1.0</li>
        <li><strong>steps</strong>: 4–8</li>
        <li><strong>cfg</strong>: 1.5 (slight CFG, distinctive to LCM)</li>
        <li><strong>sampler</strong>: <code>lcm</code> — LCM has its own sampler in ComfyUI's dropdown</li>
        <li><strong>scheduler</strong>: <code>sgm_uniform</code></li>
      </ul>

      <h2>TCD</h2>
      <ul>
        <li>Various community releases; ByteDance's Hyper-SD-CFG variants use TCD internally.</li>
        <li><strong>sampler</strong>: <code>tcd</code></li>
        <li>Otherwise treat like Hyper-SD.</li>
      </ul>

      <h2>The four-distillation comparison on M5 Pro</h2>
      <table>
        <thead>
          <tr><th>Method</th><th>Steps</th><th>CFG</th><th>Quality</th><th>License</th></tr>
        </thead>
        <tbody>
          <tr><td>LCM-LoRA</td><td>8</td><td>1.5</td><td>Good</td><td>OpenRAIL</td></tr>
          <tr><td>SDXL Lightning</td><td>4</td><td>1.0</td><td>Better</td><td>OpenRAIL</td></tr>
          <tr><td>Hyper-SDXL CFG</td><td>8</td><td>5–7</td><td>Best balance</td><td>OpenRAIL</td></tr>
          <tr><td>SDXL Turbo</td><td>1–4</td><td>1.0</td><td>OK at 512</td><td>Non-commercial</td></tr>
        </tbody>
      </table>

      <h2>Stacking distillations with character LoRAs</h2>
      <p>
        Recipe — load Lightning/Hyper-SD/LCM LoRA first, then your character LoRA, then your style
        LoRA. Strength 1.0 on the speed LoRA; tune the others as usual. Most character LoRAs
        survive the distillation without major degradation.
      </p>

      <NoteBlock title="The 2026 default">
        For Mac iteration: Hyper-SDXL 8-step CFG. For maximum speed: Lightning 4-step. For final
        quality where you have time to spare: base SDXL at 25 steps. All three are useful in
        different moments.
      </NoteBlock>
    </>
  )
}

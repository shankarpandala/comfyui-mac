import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2HyperSd() {
  return (
    <>
      <p>
        Hyper-SD (also ByteDance, 2024) is the next generation after Lightning. It uses Trajectory
        Segmented Consistency Distillation (a TCD variant) and produces slightly better outputs at
        the same step counts.
      </p>

      <h2>Variants</h2>
      <ul>
        <li><strong>Hyper-SDXL 1-step UNet</strong> — single-step generation. Quality usable for ideation.</li>
        <li><strong>Hyper-SDXL 4-step CFG LoRA</strong> — supports CFG (unlike Lightning's CFG=1 lock).</li>
        <li><strong>Hyper-SDXL 8-step CFG LoRA</strong> — recommended balance with CFG.</li>
        <li><strong>Hyper-SDXL 12-step CFG LoRA</strong> — closest to base SDXL quality.</li>
      </ul>

      <h2>The CFG advantage over Lightning</h2>
      <p>
        Lightning is locked to CFG=1, which means no negative prompt influence. Hyper-SD-CFG variants
        allow CFG ≈ 5–8 — you keep the few-step speedup AND get prompt steerability. For workflows
        that depend on negative prompts (anatomy guards, style negatives), Hyper-SD is the better
        pick.
      </p>

      <h2>Recipe (Hyper-SDXL 8-step CFG)</h2>
      <ul>
        <li><strong>LoRA</strong>: <code>Hyper-SDXL-8steps-CFG-lora.safetensors</code></li>
        <li><strong>strength</strong>: 1.0</li>
        <li><strong>steps</strong>: 8</li>
        <li><strong>cfg</strong>: 5–7 (your usual SDXL CFG works)</li>
        <li><strong>sampler</strong>: <code>tcd</code> or <code>dpmpp_sde_gpu</code></li>
        <li><strong>scheduler</strong>: <code>karras</code></li>
      </ul>

      <h2>Lightning vs Hyper-SD on Mac</h2>
      <table>
        <thead><tr><th>Use case</th><th>Recommendation</th></tr></thead>
        <tbody>
          <tr><td>Fastest, no negatives needed</td><td>Lightning 4-step</td></tr>
          <tr><td>Balanced speed + negatives</td><td>Hyper-SD 8-step CFG</td></tr>
          <tr><td>Closest to base quality</td><td>Hyper-SD 12-step CFG</td></tr>
        </tbody>
      </table>

      <NoteBlock title="They stack with character LoRAs">
        Both Lightning and Hyper-SD LoRAs stack with style/character LoRAs. The stacking order
        matters slightly — apply the speed LoRA first, then the style LoRA. Most workflows do this
        in a chain of <code>LoraLoader</code> nodes.
      </NoteBlock>
    </>
  )
}

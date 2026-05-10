import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1SdxlMotion() {
  return (
    <>
      <p>AnimateDiff SDXL t2v + motion LoRA — quick 2-second clips.</p>

      <h2>Recipe</h2>
      <ol>
        <li>SDXL load + Lightning 4-step LoRA at 1.0.</li>
        <li><code>AnimateDiffLoaderGen1</code> → <code>animatediff_lightning_4step_diffusers.safetensors</code>.</li>
        <li>(Optional) <code>AnimateDiffLoraLoader</code> → motion LoRA (zoom-in, pan-left, etc.) at 0.7.</li>
        <li>CLIPTextEncode prompts.</li>
        <li>EmptyLatentImage → 1024×576, batch_size=16.</li>
        <li>KSampler: 4 steps, cfg 1.0, euler, sgm_uniform.</li>
        <li>VAEDecode + VHS_VideoCombine @ 8 fps + RIFE x3 → 24 fps output.</li>
      </ol>

      <h2>Wall time</h2>
      <p>~30 seconds per 2-second clip on M5 Pro.</p>

      <h2>Why use AnimateDiff over LTX</h2>
      <ul>
        <li>Faster for short B-roll clips (~30s vs ~3min).</li>
        <li>Stacks with character LoRAs that don't have LTX equivalents.</li>
        <li>Established ecosystem — many motion LoRAs available.</li>
      </ul>

      <NoteBlock title="The 'fastest video on Mac'">
        AnimateDiff SDXL Lightning + motion LoRA is the fastest path to a 2-second video clip on
        Mac. Use for high-volume B-roll where LTX's 3-minute renders would bottleneck.
      </NoteBlock>
    </>
  )
}

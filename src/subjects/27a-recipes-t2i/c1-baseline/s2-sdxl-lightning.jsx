import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2SdxlLightning() {
  return (
    <>
      <p>SDXL Lightning 4-step variant of the baseline. ~3 seconds per image — Mac iteration speed.</p>

      <h2>Settings</h2>
      <ul>
        <li>Base: Juggernaut XL v9 (or any SDXL)</li>
        <li>LoRA: <code>sdxl_lightning_4step_lora.safetensors</code> at 1.0</li>
        <li>Steps: 4 · cfg: 1.0 · sampler: <code>euler</code> · scheduler: <code>sgm_uniform</code></li>
        <li>Resolution: 1024×1024</li>
      </ul>

      <h2>Wall time</h2>
      <p>~3 seconds per image on M5 Pro.</p>

      <NoteBlock title="The iteration loop">
        Lightning + Auto Queue + randomize seed = a steady stream of variations to pick from.
        When something good appears, lock seed, switch to the canonical (25-step) workflow for the
        final hero render.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3Noobai() {
  return (
    <>
      <p>NoobAI-XL recipe — third anime SDXL base, sharper line work than Illustrious.</p>

      <h2>Settings</h2>
      <ul>
        <li>Base: NoobAI-XL</li>
        <li>Resolution: 1024×1024 or 832×1216</li>
        <li>Steps: 28 · cfg: 5.0–6.0 · sampler: <code>euler_ancestral</code> · scheduler: <code>karras</code></li>
      </ul>

      <h2>Prompting</h2>
      <p>Booru-style tags, similar to Illustrious. Slight aesthetic differences in output.</p>

      <h2>Wall time</h2>
      <p>~20 seconds per image on M5 Pro.</p>

      <NoteBlock title="The 'pick one anime base' rule">
        Pony, Illustrious, NoobAI all serve similar purposes. Pick one for your channel; stack
        compatible LoRAs. Don't try to keep all three on disk — wastes 20 GB on overlapping models.
      </NoteBlock>
    </>
  )
}

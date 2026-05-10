import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Illustrious() {
  return (
    <>
      <p>Illustrious-XL recipe — modern anime base, cleaner than Pony.</p>

      <h2>Settings</h2>
      <ul>
        <li>Base: Illustrious-XL or Illustrious-derivative</li>
        <li>Resolution: 1024×1024 or 832×1216</li>
        <li>Steps: 28 · cfg: 6.0 · sampler: <code>euler_ancestral</code> · scheduler: <code>karras</code></li>
      </ul>

      <h2>Prompting</h2>
      <p>Booru-style tags directly. No Pony-style prefix:</p>
      <pre>{`1girl, long black hair, school uniform, classroom, looking at viewer,
bright lighting, sharp focus`}</pre>

      <h2>Negative</h2>
      <pre>{`worst quality, low quality, blurry, jpeg artifacts, bad anatomy, extra fingers`}</pre>

      <h2>Wall time</h2>
      <p>~20 seconds per image on M5 Pro.</p>

      <NoteBlock title="Pony vs Illustrious">
        Pony for established characters / fan content. Illustrious for cleaner lines / modern anime
        aesthetic. Pick one base; stack character LoRAs designed for that base.
      </NoteBlock>
    </>
  )
}

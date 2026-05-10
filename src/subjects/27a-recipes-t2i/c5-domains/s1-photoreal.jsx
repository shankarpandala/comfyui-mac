import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Photoreal() {
  return (
    <>
      <p>Photoreal recipe — for hero portraits, product shots, photoreal scenes.</p>

      <h2>Settings (FLUX Dev)</h2>
      <ul>
        <li>Model: FLUX Dev Q5_K_S (best photoreal quality on Mac)</li>
        <li>Steps: 25 · guidance: 3.5</li>
        <li>+ FaceDetailer post-sample</li>
        <li>+ ESRGAN 4x upscale (if 4K final)</li>
      </ul>

      <h2>Settings (SDXL alternative)</h2>
      <ul>
        <li>Base: Juggernaut XL v9 or RealVisXL</li>
        <li>Steps: 28 · cfg: 5.0 · sampler: <code>dpmpp_2m_sde</code> · scheduler: <code>karras</code></li>
        <li>+ FaceDetailer + Person Detailer post-sample</li>
        <li>+ Negative: <code>(worst quality, low quality:1.4), bad anatomy, watermark</code></li>
      </ul>

      <h2>Photoreal prompt patterns</h2>
      <ul>
        <li>"a photo of [subject]" — implicit photoreal cue.</li>
        <li>"photorealistic, sharp focus, professional photography, 35mm" — explicit.</li>
        <li>Lighting: "soft natural light", "golden hour", "studio softbox".</li>
      </ul>

      <NoteBlock title="The Mac photoreal stack">
        FLUX Dev + FaceDetailer + ESRGAN x4 = ~60 seconds for a 4K photoreal hero shot. Best
        quality you can get locally on M5 Pro.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Sd35LargeTurbo() {
  return (
    <>
      <p>
        SD3.5 Large Turbo is a 4-step distilled version of SD3.5 Large. Same memory profile (~16 GB
        UNet) but generates in ~5 sampler steps instead of 28. On Mac with --lowvram it becomes
        approachable.
      </p>

      <h2>Recipe</h2>
      <ul>
        <li><strong>checkpoint</strong>: <code>sd3.5_large_turbo.safetensors</code></li>
        <li><strong>steps</strong>: 4–6</li>
        <li><strong>cfg</strong>: 1.0 (Turbo is CFG=1)</li>
        <li><strong>sampler</strong>: <code>euler</code></li>
        <li><strong>scheduler</strong>: <code>sgm_uniform</code></li>
        <li><strong>launch flags</strong>: <code>--bf16-unet --lowvram</code></li>
      </ul>

      <h2>Time on M5 Pro</h2>
      <ul>
        <li>SD3.5 Large at 28 steps: ~3 min (with --lowvram swap penalty).</li>
        <li>SD3.5 Large Turbo at 4 steps: ~30 s.</li>
      </ul>

      <h2>Quality</h2>
      <p>
        Large Turbo preserves most of Large's quality. Text rendering and complex compositions still
        come through. Some loss on very fine detail vs Large at 28 steps, but for the speed gain
        it's a clear win on Mac.
      </p>

      <NoteBlock title="The Mac SD3 default">
        For most Mac SD3 use: SD3.5 Medium fp16 (fastest, best quality/cost). Keep SD3.5 Large
        Turbo around for when you specifically need Large's bigger brain (complex compositions,
        more accurate text rendering) but don't want the ~3-minute renders.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1ChainClips() {
  return (
    <>
      <p>Strategy 3: First-frame I2V chaining. Last frame of segment N becomes first frame of segment N+1. Each video model preserves "from the input frame" identity tightly.</p>

      <h2>The chain</h2>
      <ol>
        <li>Segment 1: still A (FLUX + LoRA + PuLID generated). LTX i2v from A → 4-second clip 1.</li>
        <li>Extract last frame of clip 1 → still B.</li>
        <li>Segment 2: LTX i2v from still B → 4-second clip 2.</li>
        <li>Continue: clip 3 from last frame of clip 2, etc.</li>
        <li>Concatenate via ffmpeg → long-form video.</li>
      </ol>

      <h2>Why it works</h2>
      <ul>
        <li>I2V models tightly preserve the first-frame appearance.</li>
        <li>Last-frame-of-N to first-frame-of-N+1 is a cut, not a continuous motion — but appearance carries.</li>
        <li>Chains of ~5 clips before drift becomes visible.</li>
      </ul>

      <h2>Limitations</h2>
      <ul>
        <li>Visible cut at segment boundaries (each clip "restarts" motion).</li>
        <li>Drift still happens past ~5 chained clips.</li>
        <li>Combine with Strategy 1 (character LoRA) for additional anchoring.</li>
      </ul>

      <NoteBlock title="Best for narrative cuts">
        The visible cut between segments is a feature, not a bug, when your video has natural cuts
        anyway (talking-head shot → B-roll → talking-head shot). Each cut is a chained-i2v segment.
      </NoteBlock>
    </>
  )
}

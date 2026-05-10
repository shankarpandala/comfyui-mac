import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1TalkingHeadShots() {
  return (
    <>
      <p>Visual stage — talking-head shots via Subject 28's LivePortrait + Sonic combo.</p>

      <h2>Per scene pipeline</h2>
      <ol>
        <li>Generate self-clone still (FLUX + your-LoRA + PuLID).</li>
        <li>(If multiple talking-head scenes) reuse same still for consistency.</li>
        <li>Generate driver video (record yourself reading the segment).</li>
        <li>LivePortrait warps still with driver expressions.</li>
        <li>Sonic re-syncs lips to F5-TTS audio.</li>
        <li>Output: per-scene talking-head clip.</li>
      </ol>

      <h2>The shared-still trick</h2>
      <p>For all talking-head scenes in one Reel: generate the still ONCE. Reuse for every talking-head segment. Guarantees character consistency across scenes.</p>

      <h2>Wall time</h2>
      <p>Per talking-head scene: ~7 minutes (mostly Sonic). 4 talking-head scenes ~ 28 minutes.</p>

      <NoteBlock title="The 'parallel where possible' practice">
        Sonic per-scene calls can run in parallel up to your Mac's compute capacity. With M5 Pro
        24 GB, ~1 Sonic at a time. With 2 Macs in cluster (Subject 33 / Chapter 4), parallelize.
      </NoteBlock>
    </>
  )
}

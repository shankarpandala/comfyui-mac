import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Liveportrait() {
  return (
    <>
      <p>
        LivePortrait (2024) is a different kind of talking-head: it transfers expressions from a
        driving video to a target portrait. Not audio-driven — driving-video-driven. Useful when
        you want exact expression control.
      </p>

      <h2>How it works</h2>
      <ol>
        <li>Input 1: target portrait (your AI clone face).</li>
        <li>Input 2: driving video (someone making the expressions/motions you want).</li>
        <li>LivePortrait extracts driving keypoints; warps the target portrait to match.</li>
        <li>Output: target portrait with driver's expressions/motions.</li>
      </ol>

      <h2>Files</h2>
      <ul>
        <li>LivePortrait weights (~600 MB)</li>
        <li>Custom node: <code>ComfyUI-LivePortraitKJ</code> by kijai</li>
      </ul>

      <h2>Mac wall time</h2>
      <p>Real-time-ish: 2-3 seconds per second of output. Fastest of the talking-head family.</p>

      <h2>The Sonic + LivePortrait combo</h2>
      <p>
        For the Phase 5 capstone:
      </p>
      <ol>
        <li>Generate driving video of yourself reading a teleprompter (any face works).</li>
        <li>Generate target portrait (your AI clone via FLUX + PuLID).</li>
        <li>LivePortrait warps target with driver expressions.</li>
        <li>Sonic adds audio-synced lip movement on top.</li>
      </ol>
      <p>Result: expression-and-audio-perfect talking head of your AI clone.</p>

      <NoteBlock title="The expression control trick">
        Sonic alone produces generic expressions matched to audio energy. LivePortrait + Sonic
        combo lets you produce specific expressions (you smiling, pausing, looking thoughtful) by
        recording the driver yourself.
      </NoteBlock>
    </>
  )
}

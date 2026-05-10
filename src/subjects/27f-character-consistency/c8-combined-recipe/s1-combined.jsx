import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Combined() {
  return (
    <>
      <p>The combined recipe — production-grade long-video character consistency on Mac. Stacks Strategies 1, 2, 3, 4, 6.</p>

      <h2>The 30-second AI clone video pipeline</h2>
      <ol>
        <li><strong>Pre-production</strong>:
          <ul>
            <li>Trained FLUX self-LoRA (Strategy 1).</li>
            <li>Reference face image (Strategy 2/4 input).</li>
            <li>Fixed master seed for the video (Strategy 6).</li>
          </ul>
        </li>

        <li><strong>Generate keyframe still 1</strong>:
          <ul>
            <li>FLUX + self-LoRA (0.7) + PuLID (1.0) → still A at scene 1.</li>
            <li>Save as canonical reference for the video.</li>
          </ul>
        </li>

        <li><strong>Segment 1 (0-5 s)</strong>:
          <ul>
            <li>Wan I2V from still A with motion prompt.</li>
            <li>Output: clip 1.</li>
          </ul>
        </li>

        <li><strong>Generate keyframe still 2</strong>:
          <ul>
            <li>Take last frame of clip 1.</li>
            <li>Pass through FLUX + self-LoRA + PuLID with prompt "same character, scene 2"
              and last frame as Redux reference (Strategy 4) → still B.</li>
            <li>This refreshes face identity and bridges scene change.</li>
          </ul>
        </li>

        <li><strong>Segment 2 (5-10 s)</strong>: Wan I2V from still B → clip 2.</li>

        <li><strong>Continue chain</strong> for as many segments as needed (Strategy 3).</li>

        <li><strong>Concatenate</strong> via ffmpeg.</li>
      </ol>

      <h2>Wall time on M5 Pro</h2>
      <ul>
        <li>Per segment: ~5 min still + ~20 min Wan I2V = ~25 min.</li>
        <li>30-second video (6 segments): ~2.5 hours.</li>
      </ul>

      <h2>Quality</h2>
      <p>This recipe holds character consistency through 30+ second videos. Drift is minimal; what little there is, is hidden by scene cuts.</p>

      <NoteBlock title="The Phase 7 capstone connection">
        Subject 39's HeyGen-class capstone wraps THIS pipeline in agentic orchestration — the LLM
        agent runs the whole sequence per segment, you just provide the topic. Subject 27g is the
        manual self-clone version of these recipes.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Stacking() {
  return (
    <>
      <p>
        Multi-ControlNet stacking is one of the most powerful patterns. Pose + Depth + Canny
        together lets you control character pose, scene 3D structure, and silhouette simultaneously.
      </p>

      <h2>The wiring</h2>
      <p>Each ControlNet has its own <code>ControlNetApplyAdvanced</code> node. Chain them in series:</p>
      <pre>{`CLIPTextEncode (positive) → ControlNetApplyAdvanced #1 (Depth, str=0.8)
                          → ControlNetApplyAdvanced #2 (OpenPose, str=0.7)
                          → ControlNetApplyAdvanced #3 (Canny, str=0.4)
                          → KSampler.positive`}</pre>
      <p>
        Each Apply node enriches the conditioning with another control. The order doesn't strictly
        matter (residuals add commutatively), but readability suffers if you randomize. Convention:
        most-restrictive first (Depth), least-restrictive last (Canny low-strength).
      </p>

      <h2>Strength budgeting</h2>
      <p>Total "control strength" across stacked ControlNets adds up. Rule of thumb:</p>
      <ul>
        <li><strong>One ControlNet</strong>: strength 1.0 OK.</li>
        <li><strong>Two ControlNets</strong>: each at 0.7–0.8 to avoid over-control.</li>
        <li><strong>Three ControlNets</strong>: each at 0.5–0.7. Total "budget" ~1.8.</li>
        <li><strong>Four+</strong>: rarely useful; the model loses freedom.</li>
      </ul>

      <h2>Per-step scheduling for stacks</h2>
      <p>
        You can stagger when each ControlNet is active:
      </p>
      <ul>
        <li>Depth: active 0.0–1.0 (constrain composition throughout)</li>
        <li>OpenPose: active 0.0–0.5 (pose locks in early)</li>
        <li>Canny: active 0.5–0.8 (refine silhouette later)</li>
      </ul>
      <p>This pattern helps the model establish each control type at the right phase of denoising.</p>

      <h2>Mac memory</h2>
      <p>
        Each SDXL ControlNet adds ~2.5 GB. A 3-stack with SDXL fp16 + extras hits ~16 GB total.
        With FLUX, each community ControlNet adds ~1.5–6 GB; stacking more than 2 on FLUX is tight
        on 24 GB Mac.
      </p>

      <NoteBlock title="Start single, add as needed">
        Get one ControlNet working first, see if the output is what you want. Add a second only if
        the first isn't enough. Stacks are powerful but easy to over-tune into a constrained mess.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2FunControl() {
  return (
    <>
      <p>
        Wan Fun-Control is a Wan variant that accepts explicit camera-control or pose-control
        signals. Useful for cinematography — "pan slowly to the right while subject walks toward
        the camera".
      </p>

      <h2>Files</h2>
      <ul>
        <li><code>Wan2.1-Fun-Control-14B.safetensors</code> or GGUF</li>
      </ul>

      <h2>Control inputs</h2>
      <ul>
        <li><strong>Camera trajectory</strong> — XYZ camera path over time</li>
        <li><strong>Pose sequence</strong> — per-frame OpenPose-like skeleton</li>
        <li><strong>Trajectory + pose combined</strong> — simultaneous camera and subject control</li>
      </ul>

      <h2>Custom node</h2>
      <p><code>ComfyUI-WanVideoWrapper</code> by kijai — install via Manager. Provides the Wan-specific control nodes.</p>

      <h2>Recipe (camera control)</h2>
      <ol>
        <li>Standard Wan Fun-Control load.</li>
        <li><code>CameraTrajectoryFromText</code> — converts text description into a trajectory ("pan right slowly").</li>
        <li>Or <code>CameraTrajectoryFromKeyframes</code> — explicit keyframe positions.</li>
        <li>Wire trajectory into Wan sampler.</li>
        <li>KSampler / VAEDecode / VHS_VideoCombine as usual.</li>
      </ol>

      <h2>Use cases</h2>
      <ul>
        <li>Cinematic camera moves on a generated scene.</li>
        <li>Establishing shots with controlled framing.</li>
        <li>Pose-driven animation (your AI clone doing a specific dance).</li>
      </ul>

      <NoteBlock title="When Fun-Control wins">
        For controlled cinematography — exact camera path, exact subject motion. For free-form
        text-to-video, regular Wan T2V is simpler.
      </NoteBlock>
    </>
  )
}

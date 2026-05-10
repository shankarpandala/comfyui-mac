import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Flicker() {
  return (
    <>
      <p>
        Image diffusion is hard; video diffusion is dramatically harder. The new dimension —
        time — introduces failure modes that don't exist in still images. This section names them
        so you can recognize what's broken when it breaks.
      </p>

      <DefinitionBlock title="The temporal failure modes">
        <ul>
          <li><strong>Flicker</strong> — frame-to-frame appearance of the same subject changes randomly.</li>
          <li><strong>Drift</strong> — the subject slowly transforms across frames (a face becomes a different face).</li>
          <li><strong>Identity loss</strong> — character features (clothing, accessories, hairstyle) disappear or change.</li>
          <li><strong>Background shift</strong> — environment changes mid-shot.</li>
          <li><strong>Object popping</strong> — items appear/disappear without smooth transition.</li>
        </ul>
      </DefinitionBlock>

      <h2>Why these happen</h2>
      <p>
        A naive approach (run image diffusion independently on each frame) produces total chaos —
        every frame is an independent random sample. Even with the same prompt, each frame's noise
        is different, leading to wildly different outputs.
      </p>
      <p>Video models solve this by adding <strong>temporal layers</strong> — attention or convolution that connects frames within a sliding window so they share latent features.</p>

      <h2>Severity by model</h2>
      <table>
        <thead><tr><th>Approach</th><th>Temporal coherence</th></tr></thead>
        <tbody>
          <tr><td>Image-per-frame (no temporal)</td><td>Terrible — pure flicker</td></tr>
          <tr><td>AnimateDiff (motion module)</td><td>Decent — short clips smooth</td></tr>
          <tr><td>SVD (image-to-video)</td><td>Good — natural motion from one image</td></tr>
          <tr><td>LTX-Video / HunyuanVideo / Wan</td><td>Very good — purpose-built video models</td></tr>
        </tbody>
      </table>

      <NoteBlock title="The mental model shift">
        Stop thinking "diffusion of single image." Start thinking "diffusion of a 4D latent
        [batch, channels, time, height, width]." Time is just another dimension the model attends
        across. Subjects 17-22 are the specific implementations.
      </NoteBlock>
    </>
  )
}

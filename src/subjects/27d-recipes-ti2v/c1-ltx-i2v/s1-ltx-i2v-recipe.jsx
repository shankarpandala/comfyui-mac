import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1LtxI2vRecipe() {
  return (
    <>
      <p>LTX-Video i2v + text prompt — most reliable Mac i2v option.</p>

      <h2>Recipe</h2>
      <ol>
        <li><code>CheckpointLoaderSimple</code> → ltx-video-2b-v0.9.7.safetensors.</li>
        <li><code>LoadImage</code> → input still.</li>
        <li><code>ImageScale</code> → 768×512.</li>
        <li><code>VAEEncode</code> → encoded latent.</li>
        <li><code>LTXVImgToVideo</code> → wraps as first-frame anchor, 97-frame target.</li>
        <li>CLIPTextEncode → motion description prompt.</li>
        <li>KSampler: 40 steps, cfg 3.0, euler, sgm_uniform.</li>
        <li>VAEDecode + VHS_VideoCombine @ 24 fps.</li>
      </ol>

      <h2>Wall time</h2>
      <p>~1.5–3 min for 4-second clip on M5 Pro.</p>

      <h2>Prompt examples</h2>
      <ul>
        <li>"slow zoom in toward the subject's face, dramatic"</li>
        <li>"the camera pulls back revealing more of the scene"</li>
        <li>"gentle camera pan to the right"</li>
        <li>"the person turns and looks at the camera"</li>
      </ul>

      <NoteBlock title="The Mac i2v default">
        For animating any still — your AI clone, FLUX hero shot, photo — LTX i2v is the recommended
        starting point. Fastest, most reliable, lowest memory.
      </NoteBlock>
    </>
  )
}

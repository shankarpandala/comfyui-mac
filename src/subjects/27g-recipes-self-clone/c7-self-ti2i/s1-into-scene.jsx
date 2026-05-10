import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1IntoScene() {
  return (
    <>
      <p>Self-clone t+i2i: place yourself into a reference scene image.</p>

      <h2>Recipe</h2>
      <ol>
        <li>Identity stack (LoRA + PuLID).</li>
        <li><code>LoadImage</code> → reference scene (without you in it).</li>
        <li><code>DepthAnythingV2Preprocessor</code> → depth map of scene.</li>
        <li>FLUX Depth ControlNet (or SDXL Union with type=depth) → strength 0.7.</li>
        <li>Prompt: "[trigger] [pose description] in [scene]".</li>
        <li>KSampler.</li>
      </ol>

      <h2>Use cases</h2>
      <ul>
        <li>Place yourself in a famous location photo.</li>
        <li>Insert into stock photos.</li>
        <li>Compose AI clone into branded scene templates.</li>
      </ul>

      <h2>Quality tip</h2>
      <p>
        Lighting from the scene won't auto-apply to you — generated outputs may have mismatched
        lighting. Add lighting cues to prompt: "warm afternoon light from left", matching the
        scene's actual lighting.
      </p>

      <NoteBlock title="The 'scene compositor' workflow">
        Build a folder of reference scenes (places, sets, brand environments). For each Reel, pick
        a scene, run this recipe with relevant prompt. Consistent visual library for your channel.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1CogRecipe() {
  return (
    <>
      <p>CogVideoX-5B t2v recipe. Niche third option.</p>

      <h2>Files</h2>
      <ul>
        <li><code>CogVideoX-5b-Q5_K_S.gguf</code> (~3.5 GB)</li>
        <li>Custom node: <code>ComfyUI-CogVideoXWrapper</code></li>
      </ul>

      <h2>Recipe</h2>
      <ul>
        <li>Resolution: 720×480</li>
        <li>Frames: 49 (~6 s @ 8 fps)</li>
        <li>Steps: 50 · cfg: 6.0</li>
      </ul>

      <h2>Wall time</h2>
      <p>~8-12 min on M5 Pro.</p>

      <h2>When to choose CogVideoX</h2>
      <p>Specific outputs you A/B-tested as better than LTX/Wan for your domain. Otherwise default to LTX or Wan 5B.</p>

      <NoteBlock title="Mostly skipped on Mac">
        For most Mac users in 2026: LTX, Wan, Hunyuan cover all video needs. CogVideoX is worth
        knowing exists; rarely worth the install.
      </NoteBlock>
    </>
  )
}

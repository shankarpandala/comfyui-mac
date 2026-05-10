import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Ltx097() {
  return (
    <>
      <p>LTX-Video 0.9.7 t2v — the recommended Mac default for text-to-video.</p>

      <h2>Recipe</h2>
      <ol>
        <li><code>CheckpointLoaderSimple</code> → <code>ltx-video-2b-v0.9.7.safetensors</code>.</li>
        <li>CLIPTextEncode positive (descriptive sentence) + negative (low quality, blurry).</li>
        <li><code>EmptyHunyuanLatentVideo</code> or <code>EmptyLatentVideo</code> → 768×512, 97 frames.</li>
        <li>KSampler: 40 steps, cfg 3.0, euler, sgm_uniform.</li>
        <li>VAEDecode + VHS_VideoCombine @ 24 fps.</li>
      </ol>

      <h2>Wall time</h2>
      <p>~1.5–3 min for 4-second clip on M5 Pro.</p>

      <h2>Memory</h2>
      <p>~12 GB. Comfortable.</p>

      <h2>Prompt patterns that work</h2>
      <ul>
        <li>"A young woman walks through a sunlit forest, leaves rustling, soft golden light, smooth steady camera follows her"</li>
        <li>"Aerial view of ocean waves crashing on rocky coast, slow descent, cinematic"</li>
        <li>"Close-up of coffee being poured into a glass cup, slow motion, warm lighting"</li>
      </ul>

      <NoteBlock title="The Mac t2v default">
        For any "give me a 4-second clip from text" need on Mac, start with this recipe. Iterate
        prompts here; switch to Hunyuan/Wan for hero quality only when locked in.
      </NoteBlock>
    </>
  )
}

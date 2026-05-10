import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1WanI2vRecipe() {
  return (
    <>
      <p>Wan 2.2 i2v + text prompt — higher-fidelity i2v than LTX. Best for hero shots where identity preservation matters.</p>

      <h2>Files</h2>
      <ul>
        <li><code>Wan2.1-I2V-14B-720P-Q4_K_S.gguf</code> (~8 GB)</li>
        <li>umT5-XXL Q5_K_M GGUF, Wan VAE</li>
      </ul>

      <h2>Recipe</h2>
      <ol>
        <li>UnetLoaderGGUF → Wan I2V 14B.</li>
        <li>CLIPLoader umT5 + VAELoader Wan VAE.</li>
        <li>LoadImage → input still.</li>
        <li><code>WanImageToVideo</code> → wraps as first frame, sets length 81.</li>
        <li>CLIPTextEncode → motion prompt.</li>
        <li>KSampler: 30 steps, cfg 5.0, euler, simple.</li>
        <li>VAEDecodeTiled + VHS_VideoCombine @ 16 fps.</li>
      </ol>

      <h2>Wall time</h2>
      <p>~15-25 min for 5-second clip on M5 Pro.</p>

      <h2>When Wan beats LTX for i2v</h2>
      <ul>
        <li>Identity-critical: AI clone face animation.</li>
        <li>Complex motion prompts ("turning while raising hand").</li>
        <li>720p output (Wan I2V 720P variant).</li>
      </ul>

      <NoteBlock title="The hero-shot i2v">
        For talking-head close-ups in the AI clone capstone (Subject 29), Wan I2V is the recommended
        path. Worth the 15-min wait for the identity preservation.
      </NoteBlock>
    </>
  )
}

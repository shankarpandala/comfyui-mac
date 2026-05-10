import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1I2v() {
  return (
    <>
      <p>
        Wan I2V (Image-to-Video) is one of the strongest open-source i2v models. Take a still image,
        animate it to a 5-second clip with prompt-driven motion. Best Mac choice for animating
        AI-generated portraits.
      </p>

      <h2>Recipe (Wan 14B I2V Q4_K_S)</h2>
      <ol>
        <li><code>UnetLoaderGGUF</code> → Wan2.1-I2V-14B-720P-Q4_K_S.gguf → MODEL.</li>
        <li><code>CLIPLoader</code> for umT5 GGUF → CLIP.</li>
        <li><code>VAELoader</code> → wan_2.1_vae.safetensors.</li>
        <li><code>LoadImage</code> → input image (your AI clone still).</li>
        <li><code>WanImageToVideo</code> (custom node) → wraps image as starting frame.</li>
        <li><code>CLIPTextEncode</code> (positive) → motion description.</li>
        <li><code>KSampler</code>: 30 steps, cfg 5.0, euler, simple.</li>
        <li><code>VAEDecodeTiled</code> + <code>VHS_VideoCombine</code> @ 16 fps.</li>
      </ol>

      <h2>Wall time</h2>
      <p>81 frames @ 832×480 with Wan 14B I2V Q4_K_S: ~15–25 minutes.</p>

      <h2>What Wan I2V is great at</h2>
      <ul>
        <li>Preserving input image fidelity — character looks the same throughout the clip.</li>
        <li>Following complex motion prompts ("turning while raising a hand").</li>
        <li>Realistic environmental motion (hair, fabric, ambient elements).</li>
      </ul>

      <h2>What it's not great at</h2>
      <ul>
        <li>Camera moves — better with explicit camera control via Fun-Control variant.</li>
        <li>Long single shots — 5 s is the trained sweet spot; longer needs chaining (Subject 27d).</li>
      </ul>

      <NoteBlock title="The Phase 5 capstone use">
        Wan I2V is the recommended path for animating talking-head close-ups in the AI clone
        capstone (Subject 29). LivePortrait + Sonic for facial animation; Wan I2V for body / scene
        animation around the talking head.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1I2vRecipe() {
  return (
    <>
      <p>
        Hunyuan I2V is the image-to-video variant. Tencent shipped it after the original t2v.
        Higher-fidelity than LTX i2v but slower and tighter on Mac memory.
      </p>

      <h2>Files</h2>
      <ul>
        <li><code>HunyuanVideo-I2V-Q4_K_S.gguf</code> — I2V variant of the UNet</li>
        <li>Same encoders + VAE as t2v</li>
      </ul>

      <h2>Recipe</h2>
      <ol>
        <li>Standard Hunyuan load (UnetLoaderGGUF + DualCLIPLoaderGGUF + VAELoader).</li>
        <li><code>LoadImage</code> → input image.</li>
        <li><code>HunyuanImageToVideo</code> (custom node) → wraps the image as the first-frame anchor, prepares LATENT.</li>
        <li><code>CLIPTextEncode</code> → describe the motion.</li>
        <li><code>KSampler</code> → 30 steps, cfg 6.0.</li>
        <li><code>VAEDecodeTiled</code> + <code>VHS_VideoCombine</code>.</li>
      </ol>

      <h2>Memory budget</h2>
      <p>
        I2V adds ~1 GB to the t2v footprint (image conditioning encoder). On 24 GB Mac with
        Q4_K_S UNet, total ~17 GB. Use --lowvram + --cpu-vae for safety.
      </p>

      <h2>Wall time</h2>
      <p>121 frames @ 544×960 with Q4_K_S: ~13–18 minutes (slightly slower than t2v due to image conditioning).</p>

      <h2>The "still + Hunyuan i2v" pattern</h2>
      <p>For AI clone work (Phase 5 capstone):</p>
      <ol>
        <li>Generate a still of yourself with FLUX + PuLID.</li>
        <li>Feed into Hunyuan I2V with a motion prompt.</li>
        <li>Get a 5-second clip with high-fidelity rendering of you.</li>
      </ol>

      <NoteBlock title="Hunyuan i2v vs LTX i2v">
        LTX i2v: faster (~3 min), lower fidelity. Hunyuan i2v: slower (~15 min), higher fidelity.
        Match to use case. For Reels B-roll, LTX. For talking-head establishing shots, Hunyuan.
      </NoteBlock>
    </>
  )
}

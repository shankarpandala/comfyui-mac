import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Wan225b() {
  return (
    <>
      <p>Wan 2.2 5B t2v — middle-ground quality between LTX (fast) and Hunyuan (slow). ~6-8 min per 5-second clip.</p>

      <h2>Files</h2>
      <ul>
        <li><code>wan2.2-t2v-5b-fp16.safetensors</code> (~10 GB)</li>
        <li>Or <code>wan2.2-t2v-5b-Q5_K_S.gguf</code> (~3.5 GB) for tight memory</li>
        <li>umT5-XXL Q5_K_M GGUF</li>
        <li>Wan VAE</li>
      </ul>

      <h2>Recipe</h2>
      <ol>
        <li>Standard Wan load (UnetLoaderGGUF or CheckpointLoaderSimple).</li>
        <li>CLIPLoader with umT5 GGUF.</li>
        <li>VAELoader with Wan VAE.</li>
        <li>CLIPTextEncode prompts.</li>
        <li>EmptyLatentVideo → 832×480 or 480×832, 81 frames.</li>
        <li>KSampler: 30 steps, cfg 5.0, uni_pc, simple.</li>
        <li>VAEDecodeTiled + VHS_VideoCombine @ 16 fps.</li>
      </ol>

      <h2>Wall time</h2>
      <p>~6-8 min for 5-second clip on M5 Pro.</p>

      <h2>Wan vs LTX vs Hunyuan</h2>
      <ul>
        <li>LTX: fastest (~2 min), lowest quality.</li>
        <li>Wan 5B: middle (~6 min), middle quality.</li>
        <li>Hunyuan: slowest (~12 min), highest quality.</li>
      </ul>

      <NoteBlock title="Wan 5B's niche">
        When LTX quality isn't enough but you don't want Hunyuan's wait. Strong fallback if your
        Hunyuan render fails or you need to iterate medium-quality clips.
      </NoteBlock>
    </>
  )
}

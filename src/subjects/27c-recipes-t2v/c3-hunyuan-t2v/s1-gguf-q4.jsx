import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1GgufQ4() {
  return (
    <>
      <p>HunyuanVideo Q4_K_S t2v — cinematic hero shots. ~12 minutes per 5-second clip on Mac.</p>

      <h2>Recipe</h2>
      <ol>
        <li><code>UnetLoaderGGUF</code> → <code>HunyuanVideo-Q4_K_S.gguf</code>.</li>
        <li><code>DualCLIPLoaderGGUF</code> with type=hunyuan_video.</li>
        <li><code>VAELoader</code> → <code>hunyuan_video_vae_bf16.safetensors</code>.</li>
        <li>CLIPTextEncode prompts.</li>
        <li><code>EmptyHunyuanLatentVideo</code> → 544×960 (9:16) or 720×720, 121 frames.</li>
        <li>KSampler: 30 steps, cfg 6.0, euler, simple.</li>
        <li><code>VAEDecodeTiled</code> + <code>VHS_VideoCombine</code> @ 24 fps.</li>
      </ol>

      <h2>Memory</h2>
      <p>~17 GB peak. Tight; --lowvram + --cpu-vae helps.</p>

      <h2>When Hunyuan is worth the wait</h2>
      <ul>
        <li>Cinematic hero shots for content highlights.</li>
        <li>Complex prompts that LTX doesn't follow.</li>
        <li>Final renders after iteration is locked.</li>
      </ul>

      <NoteBlock title="Pair with FastHunyuan for iteration">
        Use FastHunyuan Q4 (10 steps) for iteration (~4 min/clip). Switch to vanilla Hunyuan
        (30 steps) for the final hero render. Same prompt; ~3× quality bump.
      </NoteBlock>
    </>
  )
}

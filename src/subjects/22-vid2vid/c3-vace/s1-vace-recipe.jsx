import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1VaceRecipe() {
  return (
    <>
      <p>
        We covered VACE in Subject 20 / Chapter 4. This section is the concrete vid2vid recipe —
        the actual workflow you wire on Mac for editing video.
      </p>

      <h2>Use case: style-transfer a clip</h2>
      <ol>
        <li><code>UnetLoaderGGUF</code> → <code>Wan2.1-VACE-14B-Q4_K_S.gguf</code>.</li>
        <li>Standard Wan encoders + VAE.</li>
        <li><code>VHS_LoadVideo</code> → input video (5-second clip).</li>
        <li><code>LoadImage</code> → style reference image.</li>
        <li><code>WanVACEEdit</code> → wires inputs + sets edit mode.</li>
        <li><code>CLIPTextEncode</code> → describe the style change.</li>
        <li><code>KSampler</code>: 30 steps, cfg 5.0.</li>
        <li><code>VAEDecodeTiled</code> + <code>VHS_VideoCombine</code>.</li>
      </ol>

      <h2>Use case: subject swap (your AI clone)</h2>
      <ol>
        <li>VACE setup as above.</li>
        <li>Input video: stock clip of person doing the motion you want.</li>
        <li>Reference image: still of your AI clone (face).</li>
        <li>Mask the subject in input video using SAM2.</li>
        <li>Wire mask + reference into <code>WanVACEEdit</code>.</li>
        <li>Sample.</li>
      </ol>

      <h2>Mac wall time</h2>
      <p>5-second clip vid2vid: ~25–35 minutes.</p>

      <h2>Memory</h2>
      <p>~18-19 GB peak. Use --lowvram + --cpu-vae.</p>

      <NoteBlock title="The Phase 5b connection">
        Subject 27e covers VACE recipes in more depth: style transfer, subject swap, masked
        identity-preserving edit. This section is the introduction; 27e is the production-recipe
        deep dive.
      </NoteBlock>
    </>
  )
}

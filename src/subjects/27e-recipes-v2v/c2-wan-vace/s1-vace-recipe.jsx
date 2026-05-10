import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1VaceRecipe() {
  return (
    <>
      <p>Wan VACE — purpose-built vid2vid editor. Best Mac open-source option for serious video editing.</p>

      <h2>Recipe (style transfer)</h2>
      <ol>
        <li>UnetLoaderGGUF → Wan2.1-VACE-14B-Q4_K_S.gguf.</li>
        <li>CLIPLoader umT5 + VAELoader Wan VAE.</li>
        <li>VHS_LoadVideo → input clip.</li>
        <li>LoadImage → style reference.</li>
        <li><code>WanVACEEdit</code> → wires everything in style-transfer mode.</li>
        <li>CLIPTextEncode → describe the style.</li>
        <li>KSampler: 30 steps, cfg 5.0, euler, simple.</li>
        <li>VAEDecodeTiled + VHS_VideoCombine.</li>
      </ol>

      <h2>Wall time</h2>
      <p>~25-35 min for 5-second clip on M5 Pro. Long but unmatched quality.</p>

      <h2>VACE modes</h2>
      <ul>
        <li>Style transfer (input video + style image).</li>
        <li>Subject swap (input video + character ref + mask).</li>
        <li>Temporal inpainting (mask out a region across frames).</li>
        <li>Outpainting (extend frame edges).</li>
      </ul>

      <NoteBlock title="The Mac vid2vid heavyweight">
        VACE is the best vid2vid quality you can get on Mac. The 30-min wall time is the cost.
        Reserve for hero edits; iterate cheaper variants on AnimateDiff or LTX vid2vid first.
      </NoteBlock>
    </>
  )
}

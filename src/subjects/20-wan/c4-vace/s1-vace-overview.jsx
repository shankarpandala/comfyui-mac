import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1VaceOverview() {
  return (
    <>
      <p>
        Wan VACE (Video Audio Comprehensive Editing) is the dedicated Wan variant for editing
        existing videos. Take an input clip, apply changes — restyle, swap subject, replace
        background — while preserving motion and structure. Best Mac open-source vid2vid editor.
      </p>

      <h2>The model</h2>
      <ul>
        <li><code>Wan2.1-VACE-14B-Q4_K_S.gguf</code> — UNet</li>
        <li>Same encoders + VAE as base Wan</li>
      </ul>

      <h2>Operating modes</h2>
      <ul>
        <li><strong>Style transfer</strong> — input video + style reference image → restyled video</li>
        <li><strong>Subject swap</strong> — input video + character reference → same motion, new subject</li>
        <li><strong>Inpainting in time</strong> — input video + mask → fill masked region across all frames coherently</li>
        <li><strong>Outpainting</strong> — extend a video into new pixels at the edges</li>
      </ul>

      <h2>Recipe (basic style transfer)</h2>
      <ol>
        <li><code>UnetLoaderGGUF</code> → VACE.</li>
        <li>Standard Wan encoders + VAE.</li>
        <li><code>VHS_LoadVideo</code> → input video.</li>
        <li><code>LoadImage</code> → style reference.</li>
        <li><code>WanVACEEdit</code> (custom node) → wires inputs.</li>
        <li><code>KSampler</code> → 30 steps, cfg 5.0.</li>
        <li><code>VAEDecodeTiled</code> + <code>VHS_VideoCombine</code>.</li>
      </ol>

      <h2>Wall time</h2>
      <p>Per 5-second input clip: ~20–30 minutes on M5 Pro with Q4_K_S.</p>

      <h2>Why VACE wins for vid2vid</h2>
      <p>
        VACE is the only model in this curriculum specifically trained on (input_video, edited_video)
        pairs. AnimateDiff vid2vid (Subject 17) is a hack on top of an image model; LTX vid2vid is
        general-purpose. VACE was built for the task.
      </p>

      <NoteBlock title="The Phase 5b promise">
        Subject 27e covers the canonical Mac VACE recipes: style transfer, character swap, masked
        identity-preserving edit. VACE is the recommended Mac vid2vid path.
      </NoteBlock>
    </>
  )
}

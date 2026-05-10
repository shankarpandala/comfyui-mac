import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Raft() {
  return (
    <>
      <p>
        RAFT (Recurrent All-Pairs Field Transforms) is the standard optical flow estimator used in
        vid2vid pipelines. Custom-node packs use it for temporal consistency post-processing —
        warp pixels along flow vectors, blend with denoised result.
      </p>

      <h2>The use cases</h2>
      <ul>
        <li><strong>Temporal smoothing</strong>: warp frame N forward to frame N+1's spatial layout, blend with N+1's content. Reduces flicker.</li>
        <li><strong>Frame interpolation</strong>: generate intermediate frames between pairs (RIFE/FILM use this).</li>
        <li><strong>Optical-flow-guided sampling</strong>: warp the latent across frames so neighboring frames share more spatial correlation.</li>
      </ul>

      <h2>The custom node</h2>
      <p><code>ComfyUI-RAFT</code> or similar — many packs include RAFT for various uses.</p>

      <h2>Mac compatibility</h2>
      <p>RAFT runs on MPS via PyTorch. ~50 ms per frame pair at 1024 resolution. Fast.</p>

      <h2>When you need it</h2>
      <ul>
        <li>AnimateDiff vid2vid output has visible flicker — apply optical-flow smoothing.</li>
        <li>Building custom vid2vid that doesn't have built-in temporal layers.</li>
      </ul>

      <h2>When you don't</h2>
      <ul>
        <li>Modern video models (LTX, Hunyuan, Wan, VACE) handle temporal consistency internally.</li>
        <li>Adding RAFT post-processing on their outputs is usually unnecessary.</li>
      </ul>

      <NoteBlock title="The 'don't reinvent' rule">
        RAFT is most useful for older AnimateDiff workflows. For modern Wan/LTX vid2vid, the model
        already does the temporal work. Don't add post-processing complexity unless you have a
        specific flicker problem to solve.
      </NoteBlock>
    </>
  )
}

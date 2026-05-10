import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2OpticalFlow() {
  return (
    <>
      <p>
        Optical flow is the field of per-pixel motion vectors between frames. Some video pipelines
        use it as an auxiliary loss or post-processing constraint to enforce consistency.
      </p>

      <h2>What optical flow is</h2>
      <p>For each pixel in frame N, optical flow tells you where that pixel "moved to" in frame N+1. The result is a 2-channel field (Δx, Δy) per pixel — a dense motion map.</p>

      <h2>How it's used in video diffusion</h2>
      <ul>
        <li><strong>Training loss</strong> — penalize generated frames whose optical flow doesn't match input flow (for vid2vid). The model learns to preserve motion.</li>
        <li><strong>Post-processing smoothing</strong> — warp detail from frame N to frame N+1 along the flow, blend with denoised result. Reduces flicker.</li>
        <li><strong>Frame interpolation</strong> — generate intermediate frames by warping along flow (RIFE, FILM — Subject 22).</li>
      </ul>

      <h2>RAFT — the standard optical flow estimator</h2>
      <p>
        RAFT (Recurrent All-Pairs Field Transforms) is the most-used optical flow CNN. ComfyUI
        custom nodes use RAFT for vid2vid consistency.
      </p>

      <h2>Mac compatibility</h2>
      <p>
        RAFT runs on MPS via PyTorch. ~50 ms per frame pair at 1024 resolution. Negligible compared
        to per-frame diffusion sampling.
      </p>

      <NoteBlock title="The 'when it matters' guidance">
        For text-to-video on Hunyuan/Wan/LTX, the model handles temporal consistency internally —
        you don't touch optical flow. For vid2vid (Subject 22), optical flow becomes a useful
        consistency lever.
      </NoteBlock>
    </>
  )
}

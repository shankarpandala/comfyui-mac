import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1CnStack() {
  return (
    <>
      <p>AnimateDiff vid2vid with ControlNet stack — fast vid2vid for short clips. The "anime your dance video" recipe.</p>

      <h2>Recipe</h2>
      <ol>
        <li>VHS_LoadVideo → input video as IMAGE batch.</li>
        <li>DWPreprocessor on batch → per-frame pose skeletons.</li>
        <li>DepthAnythingV2Preprocessor on batch → per-frame depth maps.</li>
        <li>SDXL load + AnimateDiff motion module.</li>
        <li>2× ControlNetApplyAdvanced (pose + depth), each 0.6 strength.</li>
        <li>CLIPTextEncode → desired output style ("anime", "cyberpunk", etc.).</li>
        <li>KSampler.</li>
        <li>VAEDecode + VHS_VideoCombine.</li>
      </ol>

      <h2>Wall time</h2>
      <p>~3-4 min for 16-frame clip on M5 Pro.</p>

      <h2>Use cases</h2>
      <ul>
        <li>Style-transfer dance videos.</li>
        <li>Anime your action footage.</li>
        <li>Cyberpunk / fantasy retexture of sports clips.</li>
      </ul>

      <NoteBlock title="The Mac vid2vid lightweight option">
        AnimateDiff vid2vid is fast but limited to 16-frame clips (~2 seconds at 8 fps). For longer
        vid2vid, switch to LTX vid2vid or Wan VACE.
      </NoteBlock>
    </>
  )
}

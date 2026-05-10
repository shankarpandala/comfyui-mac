import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1ImageBridged() {
  return (
    <>
      <p>SVD-bridged t2v: text → still image (FLUX/SDXL) → SVD-XT animation. The "use the best image model + animate it" pattern.</p>

      <h2>Recipe</h2>
      <ol>
        <li>Generate still image from text via FLUX or SDXL (Subject 27a).</li>
        <li>Pass image into SVD-XT i2v workflow.</li>
        <li>SVD-XT animates the still — natural motion physics.</li>
      </ol>

      <h2>Why this beats native SVD t2v</h2>
      <p>
        SVD doesn't have a t2v mode — it's image-conditioned only. So the pattern is "pick your
        best image model for the still, then animate via SVD." Best of both worlds.
      </p>

      <h2>Recipe (SVD-XT animation)</h2>
      <ol>
        <li><code>ImageOnlyCheckpointLoader</code> → <code>svd_xt.safetensors</code>.</li>
        <li>LoadImage → still from FLUX.</li>
        <li><code>SVD_img2vid_Conditioning</code> → 25 frames @ 7 fps.</li>
        <li>KSampler: 30 steps, cfg 2.5, euler.</li>
        <li>VAEDecode + VHS_VideoCombine.</li>
      </ol>

      <h2>Wall time</h2>
      <p>~4 min total (FLUX still + SVD animation).</p>

      <NoteBlock title="The 'best image, smooth motion' approach">
        For Reels where the still quality matters most: use FLUX → SVD. Result: best-in-class
        image quality with natural motion. Better than native t2v models for many B-roll cases.
      </NoteBlock>
    </>
  )
}

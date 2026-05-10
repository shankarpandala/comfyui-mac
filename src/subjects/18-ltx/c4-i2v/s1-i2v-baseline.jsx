import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1I2vBaseline() {
  return (
    <>
      <p>
        LTX image-to-video takes a still image and animates it. Useful for animating photos,
        adding motion to AI-generated stills, or starting a video from a specific composition.
      </p>

      <h2>The graph</h2>
      <ol>
        <li><code>CheckpointLoaderSimple</code> → LTX checkpoint.</li>
        <li><code>LoadImage</code> → input image.</li>
        <li><code>ImageScale</code> → resize to 768×512 (or matching ratio).</li>
        <li><code>VAEEncode</code> → latent representation of the image.</li>
        <li><code>LTXVImgToVideo</code> (LTX-specific node) → wraps the encoded image as the first frame, prepares LATENT for sampling.</li>
        <li><code>CLIPTextEncode</code> → describe what should happen (motion direction, action).</li>
        <li><code>KSampler</code> → standard LTX settings.</li>
        <li><code>VAEDecode</code> + <code>VHS_VideoCombine</code>.</li>
      </ol>

      <h2>Prompts that work</h2>
      <ul>
        <li><strong>Camera motion</strong>: "slow zoom in, the camera pulls forward"</li>
        <li><strong>Subject motion</strong>: "the person turns and looks at the camera, smiling"</li>
        <li><strong>Environmental motion</strong>: "leaves rustling in the wind, dappled light shifting"</li>
        <li><strong>Cinematic combo</strong>: "the camera slowly tracks left as snow begins falling around her"</li>
      </ul>

      <h2>Wall time</h2>
      <p>Same as t2v: ~1.5–3 minutes for 97 frames @ 768×512.</p>

      <h2>Use cases for AI clone work</h2>
      <p>
        Generate a still of yourself with FLUX + PuLID. Feed it into LTX i2v with a motion prompt.
        Result: a 4-second clip of you doing the prompted motion. The Phase 5 capstone leverages
        this heavily.
      </p>

      <NoteBlock title="The first-frame anchoring trick">
        For long videos with character consistency: generate a still, run LTX i2v to get clip #1,
        take the LAST frame of clip #1, run LTX i2v again from that frame for clip #2. Chain
        indefinitely. Subject 27f covers the long-video version.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S4WatermarkC2pa() {
  return (
    <>
      <p>Watermark + C2PA provenance — final polish + responsible disclosure.</p>

      <h2>Watermark</h2>
      <p>Subject 30 / Chapter 4 covers the ffmpeg overlay. For the capstone, every output gets:</p>
      <ul>
        <li>Channel handle / logo overlay (top-right corner).</li>
        <li>"AI" indicator if your channel is explicit about AI generation.</li>
      </ul>

      <h2>C2PA signing</h2>
      <p>
        After all visual processing, sign the file with c2patool:
      </p>
      <pre>{`c2patool sign final/reel-9-16.mp4 \\
  --manifest manifest.json \\
  --output final/reel-9-16-signed.mp4`}</pre>
      <p>
        manifest.json declares: AI-generated, by your tools, on this date. Embedded
        cryptographically.
      </p>

      <h2>LUT (color grade)</h2>
      <pre>{`ffmpeg -i in.mp4 -vf "lut3d=teal_orange.cube" out.mp4`}</pre>
      <p>Apply your channel's signature color grade. Visual brand consistency.</p>

      <NoteBlock title="The 'every Reel signed' principle">
        Make C2PA signing mandatory in your pipeline. Builds trust; future-proofs against platform
        ToS changes; reduces deepfake-misattribution risk.
      </NoteBlock>
    </>
  )
}

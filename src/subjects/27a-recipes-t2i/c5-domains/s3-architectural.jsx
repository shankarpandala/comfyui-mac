import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3Architectural() {
  return (
    <>
      <p>Architectural / interior design recipe.</p>

      <h2>Settings</h2>
      <ul>
        <li>Model: FLUX Dev or SDXL (RealVisXL works well)</li>
        <li>Resolution: 1344×768 (16:9 horizontal) or 1920×1080</li>
        <li>Steps: 25 (FLUX) or 30 (SDXL)</li>
        <li>cfg/guidance: 3.5 (FLUX) or 6.0 (SDXL)</li>
      </ul>

      <h2>Prompt patterns</h2>
      <pre>{`a modern minimalist living room with floor-to-ceiling windows,
warm afternoon light, neutral palette, oak wood floors, no people,
architectural photography, wide angle`}</pre>

      <h2>Useful add-ons</h2>
      <ul>
        <li><strong>ControlNet Depth</strong> from a reference photo to lock spatial layout.</li>
        <li><strong>ControlNet MLSD</strong> for straight-line preservation (architecture).</li>
        <li><strong>Tile upscale post-gen</strong> for 4K wall-art-quality output.</li>
      </ul>

      <h2>What to avoid</h2>
      <ul>
        <li>People in architectural shots (model often adds blurry humans). Negative: "people, person, human".</li>
        <li>Mismatched style descriptors ("modern Victorian") — pick one.</li>
      </ul>

      <NoteBlock title="The 'reference + ControlNet' workflow">
        For architectural recipes that need exact geometry, take a real photo of a similar space,
        run Depth or MLSD ControlNet, generate variations of styling. Composition stays correct;
        style varies freely.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2TileDecode() {
  return (
    <>
      <p>Tile-decode tricks for consistent color rendition across high-resolution video frames.</p>

      <h2>The issue</h2>
      <p>
        VAE tiled decode (Subject 14 / Chapter 3) splits frames into spatial tiles. Each tile
        decodes independently. Subtle color differences between adjacent tiles produce visible
        grid patterns in long-render output.
      </p>

      <h2>Mitigations</h2>
      <ul>
        <li><strong>Larger tile size (1024)</strong> instead of 512 — fewer seams, more memory per tile.</li>
        <li><strong>Wider overlap (128)</strong> — softer blends between tiles.</li>
        <li><strong>--cpu-vae</strong> on Mac — skips tiling entirely (CPU memory is large), eliminates seams. Slower but cleaner.</li>
      </ul>

      <h2>For long video</h2>
      <p>
        Color consistency across frames matters more than across tiles within a frame for video.
        Stick to <code>--cpu-vae</code> for video work; spend the extra decode time for cleaner output.
      </p>

      <NoteBlock title="The 'cpu-vae for video' rule">
        For all video workflows on Mac, default to <code>--cpu-vae</code>. The slight decode
        slowdown is worth eliminating per-frame seams and color drift. Memory unification means
        the cost is small.
      </NoteBlock>
    </>
  )
}

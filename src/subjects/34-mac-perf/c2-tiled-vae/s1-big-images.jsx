import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1BigImages() {
  return (
    <>
      <p>Tiled VAE decode for high-resolution outputs. Splits decode into spatial tiles; reduces peak memory.</p>

      <h2>The node</h2>
      <p><code>VAEDecodeTiled</code> ships with ComfyUI. Drop-in replacement for <code>VAEDecode</code>.</p>

      <h2>Parameters</h2>
      <ul>
        <li><strong>tile_size</strong>: 512 default; 1024 for fewer seams.</li>
        <li><strong>overlap</strong>: 64 default; 128 for smoother blends.</li>
      </ul>

      <h2>When you need it</h2>
      <ul>
        <li>Output &gt; 2048×2048.</li>
        <li>Hunyuan / Wan video decode (always).</li>
        <li>Memory pressure during decode.</li>
      </ul>

      <h2>Cost</h2>
      <p>~30% slower than direct VAEDecode. Worth it when alternative is OOM.</p>

      <NoteBlock title="The video decode default">
        For all video workflows on Mac, default to VAEDecodeTiled. Video activation memory is high;
        tiled decode lets you finish renders that would OOM at the last step.
      </NoteBlock>
    </>
  )
}

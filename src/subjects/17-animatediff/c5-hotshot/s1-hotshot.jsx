import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Hotshot() {
  return (
    <>
      <p>
        Hotshot-XL is an alternative to AnimateDiff for SDXL — different motion-module training,
        slightly different output style. Smaller community than AnimateDiff but still in some
        workflows.
      </p>

      <h2>How it differs from AnimateDiff</h2>
      <ul>
        <li>Trained on different video data; outputs feel slightly different.</li>
        <li>Shorter native window (8 frames typical vs AnimateDiff's 16).</li>
        <li>Less smooth motion than AnimateDiff v3, but cleaner per-frame quality.</li>
      </ul>

      <h2>The model</h2>
      <p><code>hsxl_temporal_layers.safetensors</code> from <code>hotshotco/Hotshot-XL</code> repo on HuggingFace. ~2 GB.</p>

      <h2>ComfyUI integration</h2>
      <p>
        Older ComfyUI custom nodes supported Hotshot directly. Modern AnimateDiff Evolved nodes
        also load Hotshot motion modules — pass the Hotshot file in <code>AnimateDiffLoaderGen1</code>.
      </p>

      <h2>Should you use it?</h2>
      <ul>
        <li>For new projects in 2026 → no, use AnimateDiff v3 SDXL or Lightning.</li>
        <li>For existing community workflows that reference Hotshot → install and use.</li>
        <li>For specific aesthetic differences you've A/B-tested → personal choice.</li>
      </ul>

      <NoteBlock title="The verdict">
        Hotshot is a niche alternative. Not worth seeking out unless you have a specific reason.
        AnimateDiff covers the same use case with broader support.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3Watermarking() {
  return (
    <>
      <p>Watermarking + provenance. For AI-generated unrestricted content, signed provenance is increasingly required by platforms and legally helpful.</p>

      <h2>The two layers</h2>
      <ul>
        <li><strong>Visible watermark</strong>: channel handle, "AI-generated", or both. Prevents casual misattribution.</li>
        <li><strong>C2PA provenance</strong> (Subject 30 / Chapter 4): cryptographically signed metadata. Platforms read it; viewers can verify origin.</li>
      </ul>

      <h2>Both are good practice</h2>
      <ul>
        <li>Visible: protects against social-platform misattribution.</li>
        <li>C2PA: protects against legal claims that you didn't disclose.</li>
        <li>Together: complete provenance trail.</li>
      </ul>

      <h2>For unrestricted content specifically</h2>
      <p>
        Some platforms allow adult content; others don't. Visible labeling like "AI-generated, 18+"
        helps with ToS compliance and signals to viewers what they're seeing.
      </p>

      <NoteBlock title="The 'always sign' rule">
        Any unrestricted content you generate should have C2PA + visible watermark before
        distribution. Both are cheap to add (Subject 30); both protect you.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1NegativeDetailer() {
  return (
    <>
      <p>Anatomy fidelity for unrestricted content — combinations of negative prompts and detailer post-processes.</p>

      <h2>Anatomy negatives</h2>
      <pre>{`(worst quality, low quality:1.4),
(deformed, distorted, disfigured:1.3),
(extra fingers, fewer fingers, fused fingers:1.4),
(extra limbs, missing limbs:1.4),
bad anatomy, bad proportions,
watermark, signature`}</pre>

      <h2>Detailer post-processes</h2>
      <ol>
        <li><strong>FaceDetailer</strong> (Subject 14 / Chapter 6) — sharpens face region.</li>
        <li><strong>Hand Detailer</strong> — sharpens hands. Critical; hands are AI's perpetual weakness.</li>
        <li><strong>Person Detailer</strong> — full-body refinement.</li>
      </ol>

      <h2>Specific NSFW detailers</h2>
      <p>
        Some Impact-Pack workflows include anatomy-specific detailers — body-region-focused
        re-sampling for parts the base model gets wrong. Effective for hero-quality output.
      </p>

      <h2>Stack order</h2>
      <pre>{`KSampler base → FaceDetailer → Hand Detailer → Body Detailer → SaveImage`}</pre>

      <h2>Wall time additions</h2>
      <p>Each detailer adds ~10-15 s. Full stack adds ~45 s to a base SDXL render.</p>

      <NoteBlock title="The 'every output gets detailed' rule">
        For unrestricted content where anatomy correctness matters, always run at minimum
        FaceDetailer + Hand Detailer. Rare to ship without them.
      </NoteBlock>
    </>
  )
}

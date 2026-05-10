import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1FixedSeed() {
  return (
    <>
      <p>Strategy 6: Latent anchoring via fixed seed. Use the same noise seed for each segment so the model starts from identical "creative state" each time.</p>

      <h2>How it helps</h2>
      <p>
        Sampler noise is what creates output variation. Identical seed → identical noise → similar
        outputs given similar prompts. For long video, fix the seed to "lock" creative variation
        across segments.
      </p>

      <h2>Recipe</h2>
      <ol>
        <li>Set KSampler seed to a fixed value (not random) for every segment.</li>
        <li>Vary prompt per segment but keep base context consistent.</li>
        <li>Combined with LoRA + PuLID, this further reduces drift.</li>
      </ol>

      <h2>Limitations</h2>
      <ul>
        <li>Fixed seed locks variation but doesn't fix appearance entirely. Different prompts at the same seed still produce different appearances.</li>
        <li>Works best as a stabilizer on top of other strategies, not alone.</li>
      </ul>

      <h2>The "per-character seed" trick</h2>
      <p>
        For multi-character scenes: use one seed for character A's regions, different seed for
        character B's regions. Regional prompting (Subject 32) supports per-region seeds. Each
        character stays consistent within their region.
      </p>

      <NoteBlock title="The free stabilizer">
        Fixed seed costs nothing to implement. Always use it for character-consistent segments.
        Only allow random seed when explicitly seeking variation.
      </NoteBlock>
    </>
  )
}

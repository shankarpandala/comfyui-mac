import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S4Negative() {
  return (
    <>
      <p>
        Negative prompts steer the sampler <em>away</em> from concepts. Unlike "tag what you don't
        want" intuition, the mechanism is more subtle: every step computes a delta between positive
        and negative conditioning predictions, and CFG amplifies that delta.
      </p>

      <h2>What goes in a negative prompt</h2>
      <ul>
        <li>Quality words: <code>blurry, low quality, jpeg artifacts, low resolution</code></li>
        <li>Anatomy: <code>extra fingers, deformed hands, mutated limbs</code></li>
        <li>Watermarks: <code>watermark, text, signature, logo</code></li>
        <li>Style negatives: <code>cartoon</code> when you want photoreal; <code>photo</code> when you want illustration</li>
        <li>Negative embeddings: <code>EasyNegative, FastNegativeV2</code> (one token references hundreds of concepts)</li>
      </ul>

      <h2>What does NOT go in a negative prompt</h2>
      <ul>
        <li>The opposite of every positive concept — too much negative dilutes the signal.</li>
        <li>Subjects you simply don't want — usually better to just not include them positively.</li>
        <li>Long prose — short tag-style phrases work best.</li>
      </ul>

      <h2>The minimal SD 1.5 negative</h2>
      <pre>{`(worst quality, low quality:1.4), (deformed, distorted, disfigured:1.3),
(extra fingers, fewer fingers:1.4), bad anatomy, watermark, signature`}</pre>
      <p>That's a defensible "default negative" for SD 1.5. Add to it for specific use cases.</p>

      <h2>Negative weights</h2>
      <p>Same syntax as positive: <code>(blurry:1.4)</code> in the negative prompt strongly pushes away from blurriness.</p>

      <h2>The CFG interaction</h2>
      <p>
        Higher CFG amplifies the gap between positive and negative. With a strong negative + CFG 8,
        outputs become very prompt-faithful but can saturate. With CFG 4 + the same negative,
        outputs are softer.
      </p>

      <NoteBlock title="The 'less is more' rule">
        Beginners overload negatives with 30 quality words. Pros use 4–6 words plus one negative
        embedding. Test with no negative first; add words only when you see specific failures.
      </NoteBlock>
    </>
  )
}

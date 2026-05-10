import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1StyleOnly() {
  return (
    <>
      <p>
        IP-Adapter can be used purely for style transfer — feed a reference image whose <em>style</em>
        you want, while the prompt drives the subject. The trick is using the right weight type and
        IP-Adapter variant.
      </p>

      <h2>Recipe (SDXL style transfer)</h2>
      <ol>
        <li><code>IPAdapterUnifiedLoader</code> → preset <code>STANDARD (medium strength)</code></li>
        <li><code>IPAdapterStyleComposition</code> node — purpose-built for style/composition split.</li>
        <li>Reference image input → image whose style you want.</li>
        <li><strong>weight</strong>: 0.6–0.8</li>
        <li><strong>weight_type</strong>: <code>style transfer</code></li>
      </ol>

      <h2>What "style transfer" weight type does</h2>
      <p>
        IP-Adapter's image embedding is split into "style features" (low-level: color palette,
        brushwork, texture) and "content features" (high-level: objects, composition). The{' '}
        <code>style transfer</code> weight type emphasizes only the style features when injecting
        into cross-attention.
      </p>

      <h2>Use cases</h2>
      <ul>
        <li>"This person, painted in this artist's style" — reference is the artist's painting; prompt is the subject.</li>
        <li>"This scene, in the color palette of this photo" — reference is a colorful photo; prompt is the new scene.</li>
        <li>"My subject, in the texture/lighting of this reference" — reference is a moody photo; prompt is your subject.</li>
      </ul>

      <h2>The Composition counterpart</h2>
      <p>
        <code>weight_type: composition</code> does the opposite — emphasize layout and content, drop
        style. Useful for "this composition (e.g. famous painting layout) but with a totally different
        scene".
      </p>

      <h2>Style + ControlNet combo</h2>
      <p>
        Pair IP-Adapter style with ControlNet Canny/Depth from a separate source image. Result: your
        subject (text), in this style (IP-Adapter image), constrained to this composition (ControlNet
        image). Three independent control signals.
      </p>

      <NoteBlock title="The style-LoRA alternative">
        For widely-used styles, a trained style LoRA usually beats IP-Adapter style transfer. Use
        IP-Adapter style for one-off references; train a LoRA when you find yourself reaching for the
        same style repeatedly.
      </NoteBlock>
    </>
  )
}

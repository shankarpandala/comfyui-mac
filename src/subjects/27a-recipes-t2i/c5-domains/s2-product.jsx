import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Product() {
  return (
    <>
      <p>Product shots recipe — clean isolated objects on simple backgrounds.</p>

      <h2>Settings</h2>
      <ul>
        <li>Model: FLUX Dev Q5_K_S (best material rendering)</li>
        <li>Steps: 25 · guidance: 3.5</li>
        <li>Resolution: 1024×1024 (square is conventional for product)</li>
      </ul>

      <h2>Prompting patterns</h2>
      <pre>{`a [product name] on a clean white background, professional product photography,
soft studio lighting, sharp focus, no shadows, e-commerce style`}</pre>

      <h2>Common variants</h2>
      <ul>
        <li>"on a marble surface" — premium feel</li>
        <li>"on a wooden table with soft natural light" — lifestyle product</li>
        <li>"floating on white background, drop shadow" — e-commerce hero</li>
      </ul>

      <h2>The "consistent product" trick</h2>
      <p>
        For multiple shots of the same product: train a small concept LoRA from 5-10 photos of the
        product. Stack at 0.8 strength. Each generation produces the actual product, not a generic
        AI hallucination.
      </p>

      <NoteBlock title="Photoreal product on FLUX">
        FLUX is exceptional at fabric, leather, glass, metal. SDXL needs more prompt engineering to
        get materials right. For ad-quality product imagery, FLUX is worth the extra wall time.
      </NoteBlock>
    </>
  )
}

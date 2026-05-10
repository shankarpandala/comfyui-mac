import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Redux() {
  return (
    <>
      <p>
        FLUX Redux is FLUX's image-prompt adapter. Feed it a reference image; FLUX uses the image
        as prompt context alongside (or instead of) your text. Similar in spirit to IP-Adapter for
        SDXL but FLUX-native and higher quality.
      </p>

      <h2>The model</h2>
      <ul>
        <li><strong>file</strong>: <code>flux1-redux-dev.safetensors</code></li>
        <li>SigLIP image encoder + small adapter</li>
        <li>~2.5 GB total</li>
      </ul>

      <h2>Recipe</h2>
      <ol>
        <li>Standard FLUX load (UnetLoaderGGUF + DualCLIPLoaderGGUF + VAELoader).</li>
        <li>Add <code>StyleModelLoader</code> → load <code>flux1-redux-dev.safetensors</code>.</li>
        <li>Add <code>CLIPVisionLoader</code> → load the matching SigLIP encoder (sigclip vit-l-14).</li>
        <li>Add <code>LoadImage</code> → your reference image.</li>
        <li>Add <code>CLIPVisionEncode</code> → encodes the reference image.</li>
        <li>Add <code>StyleModelApply</code> → injects the encoded image into the positive conditioning.</li>
        <li>Wire its output → KSampler positive.</li>
      </ol>

      <h2>Strength control</h2>
      <p>
        <code>StyleModelApply</code> has a <code>strength</code> input. 1.0 makes the reference
        image dominant; 0.5 blends with text equally; 0.2 is a soft hint.
      </p>

      <h2>Use cases</h2>
      <ul>
        <li><strong>Style transfer</strong> — feed an image with the style you want; text describes the subject.</li>
        <li><strong>Composition reference</strong> — feed a sketch / rough; text describes details.</li>
        <li><strong>Variations</strong> — feed an existing FLUX output, vary slightly via text changes.</li>
      </ul>

      <NoteBlock title="Mac memory">
        FLUX Redux adds ~2.5 GB to the workflow. With Q5_K_S Dev + GGUF T5, total ~17 GB. Still
        fits comfortably on M5 Pro.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1ReduxRecipe() {
  return (
    <>
      <p>FLUX Redux — FLUX-native image-prompt adapter. Higher-quality "use this image as inspiration" than IP-Adapter on FLUX.</p>

      <h2>Files</h2>
      <ul>
        <li>FLUX Mac kit (UnetLoaderGGUF + DualCLIPLoaderGGUF + VAELoader)</li>
        <li><code>flux1-redux-dev.safetensors</code> (~2 GB)</li>
        <li>SigLIP CLIP-Vision encoder (~880 MB)</li>
      </ul>

      <h2>Recipe</h2>
      <ol>
        <li>Standard FLUX Mac load.</li>
        <li><code>StyleModelLoader</code> → flux1-redux-dev.safetensors.</li>
        <li><code>CLIPVisionLoader</code> → SigLIP.</li>
        <li><code>LoadImage</code> → reference image.</li>
        <li><code>CLIPVisionEncode</code> → encode reference.</li>
        <li><code>StyleModelApply</code> → injects into positive conditioning, strength 0.8.</li>
        <li>Standard FLUX KSampler.</li>
      </ol>

      <h2>Use cases</h2>
      <ul>
        <li>Variations of an existing FLUX output.</li>
        <li>Style transfer from a photograph or illustration.</li>
        <li>"Same subject feel, different scene" via text prompt change.</li>
      </ul>

      <h2>Strength</h2>
      <ul>
        <li>0.5 — soft hint.</li>
        <li>0.8 — clear influence.</li>
        <li>1.0 — strong; reference dominates.</li>
      </ul>

      <NoteBlock title="The FLUX-native advantage">
        Redux is trained alongside FLUX. Better integrated than IP-Adapter; cleaner outputs. For
        FLUX workflows that need image conditioning, default to Redux over IP-Adapter.
      </NoteBlock>
    </>
  )
}

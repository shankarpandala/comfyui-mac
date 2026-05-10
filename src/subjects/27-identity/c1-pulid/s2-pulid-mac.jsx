import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2PulidMac() {
  return (
    <>
      <p>
        Concrete Mac PuLID FLUX recipe. Builds on the Mac FLUX recipe from Subject 08.
      </p>

      <h2>Files needed</h2>
      <ul>
        <li>FLUX Mac kit (UnetLoaderGGUF + DualCLIPLoaderGGUF + VAELoader) — Subject 08 / Chapter 4</li>
        <li><code>pulid_flux_v0.9.1.safetensors</code> — PuLID weights (~2 GB)</li>
        <li>EVA-CLIP-L (different from regular CLIP-Vision) — ~600 MB</li>
        <li>InsightFace antelopev2 — ~100 MB</li>
      </ul>

      <h2>Custom node</h2>
      <p><code>ComfyUI-PuLID-Flux-Enhanced</code> — install via Manager.</p>

      <h2>Recipe</h2>
      <ol>
        <li>Standard FLUX Mac load.</li>
        <li><code>PulidFluxModelLoader</code> → <code>pulid_flux_v0.9.1.safetensors</code>.</li>
        <li><code>PulidFluxEvaClipLoader</code> → EVA-CLIP-L.</li>
        <li><code>PulidFluxInsightFaceLoader</code> → antelopev2.</li>
        <li><code>LoadImage</code> → reference face photo.</li>
        <li><code>ApplyPulidFlux</code> → wires MODEL + image + EVA-CLIP + InsightFace.
          <ul>
            <li><strong>weight</strong>: 1.0 (PuLID tolerates max strength)</li>
            <li><strong>start_at, end_at</strong>: 0.0, 1.0</li>
            <li><strong>fusion</strong>: <code>mean</code> if multiple reference images</li>
          </ul>
        </li>
        <li>Continue with standard FLUX KSampler.</li>
      </ol>

      <h2>Mac wall time</h2>
      <p>FLUX Dev Q5_K_S + PuLID FLUX at 1024×1024: ~50–55 s per image (vs ~45 s for plain FLUX).</p>

      <h2>Memory</h2>
      <p>FLUX kit (~12 GB) + PuLID + EVA-CLIP + InsightFace = ~17 GB total. Tight; pre-flight quit other apps.</p>

      <h2>Multiple reference images</h2>
      <p>
        ApplyPulidFlux accepts a batch of reference images. 2-4 photos of the same face
        (different angles/lighting) produce noticeably better identity than one photo. Use
        <code>fusion=mean</code> to average their embeddings.
      </p>

      <NoteBlock title="The Phase 5 capstone foundation">
        This recipe is the "you in any scene" baseline for Subject 29. PuLID FLUX provides face
        identity; LoRA you trained provides body/style; ControlNet provides pose. Three layers,
        one workflow.
      </NoteBlock>
    </>
  )
}

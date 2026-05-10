import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Pulid() {
  return (
    <>
      <p>
        PuLID (Pure and Lightning ID Customization, ByteDance 2024) is currently the best identity
        adapter for FLUX on Mac. Strong identity, low memory cost, fast. The Mac default for
        identity work in 2026.
      </p>

      <h2>Files</h2>
      <ul>
        <li><strong>FLUX variant</strong>: <code>pulid_flux_v0.9.1.safetensors</code> (~2 GB)</li>
        <li><strong>SDXL variant</strong>: <code>ip-adapter_pulid_sdxl_fp16.safetensors</code> (~1 GB)</li>
        <li>Plus EVA-CLIP-L (different from regular CLIP-Vision-L) + InsightFace antelopev2.</li>
      </ul>

      <h2>Why PuLID is good on Mac</h2>
      <ul>
        <li>Strong identity preservation — competitive with InstantID, often better.</li>
        <li>FLUX-native — works seamlessly with our Mac FLUX setup (UnetLoaderGGUF + DualCLIPLoaderGGUF).</li>
        <li>Lightweight — ~2 GB total adapter load vs InstantID's ~3 GB.</li>
        <li>No separate ControlNet needed — single conditioning injection.</li>
      </ul>

      <h2>Recipe (PuLID FLUX)</h2>
      <ol>
        <li>Standard FLUX Mac load: UnetLoaderGGUF + DualCLIPLoaderGGUF + VAELoader.</li>
        <li><code>PulidFluxModelLoader</code> → load <code>pulid_flux_v0.9.1.safetensors</code>.</li>
        <li><code>PulidFluxEvaClipLoader</code> → load EVA-CLIP-L.</li>
        <li><code>PulidFluxInsightFaceLoader</code> → load antelopev2.</li>
        <li><code>LoadImage</code> → reference face.</li>
        <li><code>ApplyPulidFlux</code> → wires MODEL + reference image + weight, replaces MODEL going to KSampler.</li>
      </ol>

      <h2>Settings</h2>
      <ul>
        <li><strong>weight</strong>: 1.0 (PuLID tolerates max strength well)</li>
        <li><strong>start_at, end_at</strong>: 0.0, 1.0</li>
      </ul>

      <h2>The Mac memory math</h2>
      <p>FLUX Dev Q5_K_S + GGUF T5 + PuLID + activations = ~17 GB. Tight but workable on M5 Pro.</p>

      <h2>Multi-image PuLID</h2>
      <p>
        Concatenate face embeddings from 2–4 reference photos via the <code>ApplyPulidFlux</code>{' '}
        node's image input (it accepts a batch). Better identity than from a single photo.
      </p>

      <NoteBlock title="The Mac identity recommendation">
        For Phase 5 / Subject 27's identity stack: PuLID FLUX is the headline. It's the lightest,
        fastest, and most identity-faithful path on Mac. We use it as the primary identity adapter
        in the HeyGen-class capstone (Subject 39).
      </NoteBlock>
    </>
  )
}

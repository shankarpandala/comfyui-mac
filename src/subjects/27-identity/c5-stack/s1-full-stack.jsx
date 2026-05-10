import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1FullStack() {
  return (
    <>
      <p>
        The full identity stack: trained LoRA + PuLID/InstantID + ControlNet pose + IP-Adapter
        style + ReActor cleanup. The "you in any scene with any pose with any style" workflow.
      </p>

      <h2>The recipe (FLUX)</h2>
      <ol>
        <li>FLUX Mac kit (UNet + DualCLIP + VAE).</li>
        <li><code>LoraLoader</code> → your trained self-LoRA (Subject 12), strength 0.8.</li>
        <li><code>PulidFluxModelLoader</code> + <code>ApplyPulidFlux</code> → reference face, weight 1.0.</li>
        <li><code>ControlNetLoader</code> + <code>ControlNetApplyAdvanced</code> → pose ControlNet, strength 0.7.</li>
        <li>Optional: <code>IPAdapter</code> with style reference image, weight 0.5.</li>
        <li>KSampler.</li>
        <li>Optional: <code>FaceDetailer</code> + <code>ReActorFaceSwap</code> for final identity polish.</li>
      </ol>

      <h2>The strength budget</h2>
      <ul>
        <li>Self-LoRA: 0.8</li>
        <li>PuLID: 1.0</li>
        <li>ControlNet pose: 0.7</li>
        <li>IP-Adapter style: 0.5</li>
        <li>Total identity-related strength: ~3.0 (high but PuLID + LoRA reinforce each other)</li>
      </ul>

      <h2>Mac memory</h2>
      <p>FLUX kit (~12 GB) + LoRA (~0 GB at runtime) + PuLID (~3 GB) + ControlNet (~6 GB) + IP-Adapter (~700 MB) = ~22 GB. Tight; needs --lowvram + --cpu-vae.</p>

      <h2>Wall time</h2>
      <p>~75-90 seconds per image on M5 Pro at 1024×1024.</p>

      <h2>Common usage</h2>
      <ul>
        <li>Generate yourself in any setting from a text prompt.</li>
        <li>Use a pose reference photo to control posture.</li>
        <li>Use a style reference for aesthetic.</li>
        <li>Result: you, in your style, in the prompted scene, in the reference's pose.</li>
      </ul>

      <NoteBlock title="The Phase 5 capstone preview">
        This stack IS the foundation of Subject 29's "AI clone capstone" — the end-to-end pipeline
        that produces talking-head videos of yourself. Phase 5b's recipe subjects show specific
        applications (t2i, t+i2i, i2v).
      </NoteBlock>
    </>
  )
}

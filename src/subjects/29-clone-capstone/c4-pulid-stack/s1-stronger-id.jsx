import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1StrongerId() {
  return (
    <>
      <p>
        Combining your trained FLUX self-LoRA with PuLID FLUX produces stronger identity than
        either alone. Both reinforce each other.
      </p>

      <h2>Why combine</h2>
      <ul>
        <li><strong>Self-LoRA</strong>: knows your full appearance — face, body, common outfits, mannerisms learned during training.</li>
        <li><strong>PuLID</strong>: knows your specific face exactly from a reference photo.</li>
        <li>Together: LoRA fills in body/style; PuLID locks face identity.</li>
      </ul>

      <h2>The recipe</h2>
      <ol>
        <li>FLUX Mac kit (UnetLoaderGGUF + DualCLIPLoaderGGUF + VAELoader).</li>
        <li><code>LoraLoader</code> → your-flux-lora.safetensors, strength 0.7-0.8.</li>
        <li><code>ApplyPulidFlux</code> → reference photo of you, weight 1.0.</li>
        <li>Standard prompt → "a photo of [trigger] standing in [scene], [style]".</li>
        <li>KSampler → 20 steps, euler, simple, guidance 3.5.</li>
      </ol>

      <h2>Strength tuning</h2>
      <ul>
        <li>If face looks generic: increase LoRA to 1.0, PuLID weight up.</li>
        <li>If face looks too "training-photo-like": drop LoRA to 0.6, keep PuLID at 1.0.</li>
        <li>Sweet spot: LoRA 0.75 + PuLID 1.0.</li>
      </ul>

      <h2>Mac wall time</h2>
      <p>~70-80 seconds per image (FLUX 50s + PuLID overhead 20-30s).</p>

      <h2>Memory</h2>
      <p>~16-17 GB. Tight; pre-flight quit other apps.</p>

      <NoteBlock title="The capstone identity primitive">
        This stack — FLUX + your-LoRA + PuLID — is the canonical "AI clone of yourself" identity
        generator. Every still in the capstone uses some variation of it.
      </NoteBlock>
    </>
  )
}

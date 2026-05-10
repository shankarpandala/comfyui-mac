import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1StackRecipe() {
  return (
    <>
      <p>The full identity stack: your-LoRA + PuLID + IP-Adapter FaceID Portrait. Maximum identity preservation.</p>

      <h2>FLUX recipe</h2>
      <ol>
        <li>FLUX Mac kit.</li>
        <li>LoraLoader → your-FLUX-self-LoRA at 0.75.</li>
        <li>PuLID FLUX → your face reference at 1.0.</li>
        <li>FluxGuidance 3.5.</li>
        <li>KSampler euler/simple, 20 steps.</li>
      </ol>

      <h2>SDXL recipe (lighter)</h2>
      <ol>
        <li>SDXL load (Juggernaut XL).</li>
        <li>LoraLoader → your-SDXL-self-LoRA at 0.8.</li>
        <li>IPAdapterUnifiedLoader → FACEID PORTRAIT preset.</li>
        <li>IPAdapterFaceIDPortrait → your face, weight 0.7.</li>
        <li>KSampler dpmpp_2m/karras, 25 steps.</li>
      </ol>

      <h2>The 3-strength tuning</h2>
      <ul>
        <li>LoRA 0.75 + PuLID 1.0 → strong identity, prompt-controllable.</li>
        <li>LoRA 1.0 + PuLID 1.0 → too rigid; reduce one.</li>
        <li>LoRA 0.5 + PuLID 1.0 → identity OK; LoRA's contribution thin.</li>
      </ul>

      <NoteBlock title="The capstone primitive">
        This stack is the "you in a photo" primitive. Subject 27g's recipes (next sections) build
        specific use cases on top: t2i, t+i2i, i2v, talking-head.
      </NoteBlock>
    </>
  )
}

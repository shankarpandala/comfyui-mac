import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Loraloader() {
  return (
    <>
      <p>
        ComfyUI's <code>LoraLoader</code> is the workhorse node for applying LoRAs. Drop it between
        your CheckpointLoader and KSampler; it modifies the MODEL and CLIP outputs in place.
      </p>

      <h2>The node</h2>
      <p>Inputs:</p>
      <ul>
        <li><code>model</code> — MODEL from CheckpointLoader or another LoraLoader.</li>
        <li><code>clip</code> — CLIP from same source.</li>
        <li><code>lora_name</code> — pick from <code>models/loras/</code>.</li>
        <li><code>strength_model</code> — UNet strength.</li>
        <li><code>strength_clip</code> — text encoder strength.</li>
      </ul>
      <p>Outputs: modified MODEL and CLIP.</p>

      <h2>Wiring</h2>
      <pre>{`CheckpointLoader → LoraLoader → KSampler.model
                              → CLIPTextEncode.clip`}</pre>

      <h2>The strength interpretation</h2>
      <ul>
        <li><strong>strength = 0</strong> — LoRA off (passthrough).</li>
        <li><strong>strength = 0.5</strong> — half the LoRA's trained influence.</li>
        <li><strong>strength = 1.0</strong> — the LoRA's intended strength. Default.</li>
        <li><strong>strength = 1.5</strong> — over-strength; can produce artifacts.</li>
        <li><strong>strength = -0.5</strong> — negative; partially "subtracts" the LoRA's concept (useful for unlearning unwanted bias).</li>
      </ul>

      <h2>strength_model vs strength_clip — when to differ</h2>
      <ul>
        <li><strong>Character LoRAs</strong>: usually equal (1.0 / 1.0).</li>
        <li><strong>Style LoRAs</strong>: equal (1.0 / 1.0).</li>
        <li><strong>Concept LoRAs</strong>: try strength_model 1.0, strength_clip 0.7 — keeps the visual without forcing the prompt-trigger word everywhere.</li>
        <li><strong>Lightning/Hyper LoRAs</strong>: 1.0 / 1.0 always — these aren't really "adapter LoRAs," they're trained to behave as model surgeries.</li>
      </ul>

      <NoteBlock title="The trigger-word convention">
        Many LoRAs are trained with a "trigger word" — a phrase you must include in the prompt to
        activate the concept. CivitAI model pages list trigger words. Without the trigger, even at
        strength 1.0, the LoRA may have subtle effect.
      </NoteBlock>
    </>
  )
}

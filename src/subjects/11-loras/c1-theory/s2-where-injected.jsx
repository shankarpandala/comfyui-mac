import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2WhereInjected() {
  return (
    <>
      <p>
        LoRA can target any weight matrix in the network. For diffusion, two locations matter most:
        attention layers and CLIP encoder layers. Different targets produce different LoRA behaviors.
      </p>

      <h2>UNet attention layers (the most common target)</h2>
      <ul>
        <li><strong>Q, K, V projections in cross-attention</strong> — controls how strongly text influences image.</li>
        <li><strong>Q, K, V projections in self-attention</strong> — controls within-image spatial correlations.</li>
        <li><strong>Output projections</strong> — finer adjustments to attended features.</li>
      </ul>
      <p>
        A "standard" SDXL LoRA targets all of these in every UNet block. Result: full coverage of
        the visual content the model can produce.
      </p>

      <h2>UNet conv layers (less common)</h2>
      <p>
        ResNet conv layers can also be LoRA-adapted ("LoRA conv"). Useful for style LoRAs that need
        to influence low-frequency features like color palette and texture. Standard LoRAs skip these
        for size reasons.
      </p>

      <h2>CLIP encoder LoRA</h2>
      <p>
        Some LoRAs also adapt CLIP's text encoder. This affects how text is interpreted, not just
        how images are rendered. Useful for:
      </p>
      <ul>
        <li>Teaching new tokens (proper names of characters not in CLIP's vocab).</li>
        <li>Re-weighting existing tokens (a character LoRA might amplify "anime girl").</li>
        <li>Style LoRAs that depend on prompt nuance.</li>
      </ul>

      <h2>The two ComfyUI strengths</h2>
      <p>
        <code>LoraLoader</code> exposes two strength inputs:
      </p>
      <ul>
        <li><strong>strength_model</strong> — multiplier on the UNet LoRA contribution.</li>
        <li><strong>strength_clip</strong> — multiplier on the CLIP encoder LoRA contribution.</li>
      </ul>
      <p>
        For LoRAs that adapt both: keep them roughly equal (1.0 / 1.0). For LoRAs that only adapt
        one: the other is ignored. For LoRAs where you want to mute the prompt influence: drop
        strength_clip to 0.5.
      </p>

      <NoteBlock title="LyCORIS variants target more">
        Standard LoRA = attention only. LyCORIS variants (LoCon, LoHa, LoKr, DoRA — covered in
        chapter 4) target conv layers and other components for richer adaptation. Bigger but more
        expressive.
      </NoteBlock>
    </>
  )
}

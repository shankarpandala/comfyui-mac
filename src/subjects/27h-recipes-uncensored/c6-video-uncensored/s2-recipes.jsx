import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Recipes() {
  return (
    <>
      <p>Concrete uncensored video recipes on Mac.</p>

      <h2>Wan I2V + uncensored LoRA</h2>
      <ol>
        <li>Generate base still: FLUX + uncensored LoRA + your-LoRA + PuLID.</li>
        <li>Wan I2V from still + motion prompt.</li>
        <li>Output: 5-second uncensored clip.</li>
      </ol>

      <h2>Hunyuan + uncensored LoRA</h2>
      <ol>
        <li>UnetLoaderGGUF → HunyuanVideo Q4_K_S.</li>
        <li>LoraLoader → uncensored LoRA at 0.8.</li>
        <li>Standard prompts.</li>
        <li>Render 121-frame clip.</li>
      </ol>

      <h2>VACE for editing existing footage</h2>
      <p>
        For "swap subject in this video to my AI clone" with mature content: VACE masked-edit
        works the same way as SFW (Subject 27e). VACE doesn't have built-in moderation.
      </p>

      <h2>Mac wall time</h2>
      <ul>
        <li>Hunyuan + LoRA at Q4_K_S: ~12-15 min for 5s clip.</li>
        <li>Wan 14B I2V + LoRA: ~18-25 min for 5s clip.</li>
        <li>VACE edit: ~25-35 min for 5s.</li>
      </ul>

      <NoteBlock title="The responsibility reminder">
        Refer back to chapter 2's checklist. Consent + age verification + watermarking +
        platform-policy match — required before producing or distributing.
      </NoteBlock>
    </>
  )
}

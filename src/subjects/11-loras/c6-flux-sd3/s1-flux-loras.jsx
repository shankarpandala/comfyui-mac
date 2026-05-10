import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1FluxLoras() {
  return (
    <>
      <p>
        FLUX LoRAs are a growing ecosystem. Quality is generally high — FLUX's strong base means
        even mediocre LoRAs produce decent output. Most are trained at rank 16 or 32; some use DoRA.
      </p>

      <h2>Loading FLUX LoRAs on Mac</h2>
      <p>Drop them in <code>models/loras/</code>. The standard <code>LoraLoader</code> works:</p>
      <ol>
        <li>UnetLoaderGGUF → MODEL.</li>
        <li>DualCLIPLoaderGGUF → CLIP.</li>
        <li><code>LoraLoader</code> → both inputs from above, lora_name = your FLUX LoRA.</li>
        <li>Modified MODEL/CLIP go to KSampler / CLIPTextEncode.</li>
      </ol>

      <h2>FLUX LoRAs that stack with GGUF UNets</h2>
      <p>
        Yes — ComfyUI-GGUF correctly applies LoRAs to dequantized weights at runtime. You can stack
        multiple LoRAs on a Q5_K_S FLUX UNet without issue. The performance hit is minimal.
      </p>

      <h2>Notable FLUX LoRA categories</h2>
      <ul>
        <li><strong>Style</strong>: anime, watercolor, photoreal subgenres, vintage looks.</li>
        <li><strong>Character</strong>: original characters, established characters, real people.</li>
        <li><strong>Speed</strong>: there's no FLUX equivalent of SDXL Lightning yet — Schnell is the only "fast FLUX".</li>
        <li><strong>Concept/detail</strong>: hand fixes, lighting effects, specific aesthetics.</li>
        <li><strong>Identity</strong>: face-specific LoRAs (less needed because PuLID does the job better).</li>
      </ul>

      <h2>Strength tuning for FLUX</h2>
      <p>
        FLUX is sensitive to LoRA strength. A LoRA that works at 1.0 on SDXL often needs 0.6–0.8
        on FLUX:
      </p>
      <ul>
        <li>FLUX style LoRAs: 0.5–0.8</li>
        <li>FLUX character LoRAs: 0.7–1.0</li>
        <li>FLUX concept LoRAs: 0.3–0.5</li>
      </ul>

      <NoteBlock title="The Mac FLUX-LoRA workflow">
        Build a base FLUX template (Subject 08 / Chapter 4 / Section 2). Add LoraLoader nodes
        between UNet and KSampler as needed. Save variations as separate workflow JSONs. PuLID
        sits in a separate slot — works alongside LoRAs without conflict.
      </NoteBlock>
    </>
  )
}

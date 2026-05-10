import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2FluxLora() {
  return (
    <>
      <p>
        FLUX self-LoRA produces noticeably better identity than SDXL self-LoRA. Train it after
        validating SDXL works. ~10-12 hours overnight on M5 Pro.
      </p>

      <h2>Why FLUX self-LoRA in addition to SDXL</h2>
      <ul>
        <li>FLUX outputs higher quality at the cost of more compute.</li>
        <li>FLUX renders faces more accurately — your LoRA's identity preservation is stronger.</li>
        <li>FLUX prompts are natural-language; richer scene descriptions for AI clone Reels.</li>
      </ul>

      <h2>Training config (ai-toolkit)</h2>
      <ul>
        <li>Base: FLUX.1-dev with quantize=true (uses Q5_K_S internally during training)</li>
        <li>Network: LoRA, rank 16, alpha 16</li>
        <li>train_unet=true, train_text_encoder=false</li>
        <li>gradient_checkpointing=true (mandatory)</li>
        <li>Optimizer: AdamW8bit, lr 1e-4, constant scheduler</li>
        <li>noise_scheduler: flowmatch</li>
        <li>dtype: bf16</li>
        <li>Steps: 2500-3500 (FLUX needs more than SDXL)</li>
        <li>Resolution: 1024 with bucketing</li>
        <li>cache_latents_to_disk=true</li>
      </ul>

      <h2>Validation samples</h2>
      <p>Same prompts as SDXL training, sampled every 250 steps.</p>

      <h2>Wall time</h2>
      <p>~10-12 hours overnight on M5 Pro.</p>

      <h2>Memory during training</h2>
      <p>~17 GB peak. Quit Safari/Slack first; close other apps for the duration.</p>

      <h2>The output</h2>
      <ul>
        <li><code>my-self-flux-lora.safetensors</code> (~150-300 MB)</li>
        <li>Stack on top of FLUX Dev Q5_K_S in any FLUX workflow with LoraLoader.</li>
      </ul>

      <NoteBlock title="Use both">
        Keep both SDXL and FLUX self-LoRAs. SDXL for fast B-roll generation (~17 s/image); FLUX
        for hero shots (~50 s/image). Different time budgets, different use cases.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1FluxConfig() {
  return (
    <>
      <p>
        FLUX LoRA training on Mac is feasible but slower than SDXL. ai-toolkit handles it well with
        memory-efficient settings. Below is the realistic configuration.
      </p>

      <h2>FLUX LoRA via ai-toolkit on M5 Pro</h2>
      <table>
        <thead><tr><th>Setting</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Base model</td><td>FLUX.1-dev (with quantization on)</td></tr>
          <tr><td>Network type</td><td>LoRA (or DoRA for slightly better fidelity)</td></tr>
          <tr><td>rank</td><td>16</td></tr>
          <tr><td>alpha</td><td>16</td></tr>
          <tr><td>train_unet</td><td>true</td></tr>
          <tr><td>train_text_encoder</td><td>false (FLUX text encoders frozen)</td></tr>
          <tr><td>batch_size</td><td>1</td></tr>
          <tr><td>gradient_accumulation</td><td>1</td></tr>
          <tr><td>gradient_checkpointing</td><td>true (mandatory for memory)</td></tr>
          <tr><td>optimizer</td><td>AdamW8bit</td></tr>
          <tr><td>learning_rate</td><td>1e-4</td></tr>
          <tr><td>lr_scheduler</td><td>constant</td></tr>
          <tr><td>noise_scheduler</td><td>flowmatch (FLUX is flow matching)</td></tr>
          <tr><td>dtype</td><td>bf16</td></tr>
          <tr><td>quantize</td><td>true (uses GGUF-equivalent for memory)</td></tr>
          <tr><td>steps</td><td>2500–4000 (FLUX needs more steps than SDXL)</td></tr>
          <tr><td>resolution</td><td>1024</td></tr>
          <tr><td>cache_latents_to_disk</td><td>true (saves recomputing VAE encode each step)</td></tr>
        </tbody>
      </table>

      <h2>What's different from SDXL training</h2>
      <ul>
        <li><strong>Frozen text encoders</strong> — FLUX's T5 + CLIP-L are not adapted, only the DiT.</li>
        <li><strong>Flow-matching loss</strong>, not DDPM loss.</li>
        <li><strong>Quantized base</strong> — the trainer uses a quantized FLUX (similar to GGUF Q5) so the model fits in 24 GB during training.</li>
        <li><strong>More steps needed</strong> — FLUX converges slower per step; 2500-4000 vs 1500-2500 for SDXL.</li>
      </ul>

      <h2>Memory during FLUX training</h2>
      <ul>
        <li>FLUX UNet quantized: ~9 GB</li>
        <li>Optimizer state (AdamW8bit, only LoRA params): ~50 MB (tiny — only trains the LoRA, not the full model)</li>
        <li>Text encoder forward pass cache: ~3 GB</li>
        <li>Activations: ~5 GB</li>
        <li>Total: ~17 GB</li>
      </ul>

      <NoteBlock title="The training-vs-inference parity">
        Training quantized FLUX produces LoRAs that work on quantized FLUX inference. Use the same
        Q5_K_S setup at inference as you used for training and the LoRA will behave correctly.
      </NoteBlock>
    </>
  )
}

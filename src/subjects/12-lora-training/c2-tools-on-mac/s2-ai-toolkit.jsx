import CommandBlock from '../../../components/content/CommandBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2AiToolkit() {
  return (
    <>
      <p>
        ai-toolkit by Ostris is the FLUX-friendly LoRA trainer. Cleaner config, modern, MPS-compatible.
        Recommended for FLUX LoRA training on Mac.
      </p>

      <h2>Install</h2>
      <CommandBlock command="git clone https://github.com/ostris/ai-toolkit && cd ai-toolkit" />
      <CommandBlock command="python -m venv venv && source venv/bin/activate" />
      <CommandBlock command="pip install -r requirements.txt" />
      <CommandBlock command="pip install torch torchvision torchaudio" label="Mac-compatible PyTorch" />

      <h2>Config-driven training</h2>
      <p>ai-toolkit uses YAML configs. Copy <code>config/examples/train_lora_flux_24gb.yaml</code> as a starting point.</p>

      <h2>Mac config tweaks</h2>
      <pre>{`# config/my-flux-lora.yaml
job: extension
config:
  name: my-self-clone
  process:
    - type: sd_trainer
      training_folder: output
      device: mps                  # <-- the Mac key
      trigger_word: my-trigger

      network:
        type: lora
        linear: 16                 # rank
        linear_alpha: 16

      train:
        batch_size: 1
        steps: 2500
        gradient_accumulation_steps: 1
        train_unet: true
        train_text_encoder: false  # FLUX text encoder usually frozen
        gradient_checkpointing: true
        noise_scheduler: flowmatch
        optimizer: adamw8bit
        lr: 1e-4
        dtype: bf16

      model:
        name_or_path: black-forest-labs/FLUX.1-dev
        is_flux: true
        quantize: true             # GGUF-equivalent for memory

      sample:
        sampler: euler
        steps: 4
        guidance_scale: 1
        seed: 42
        width: 1024
        height: 1024
        sample_every: 250
        prompts:
          - "my-trigger person in a coffee shop"
          - "my-trigger person hiking in mountains"

      datasets:
        - folder_path: /Users/you/datasets/my-clone
          caption_ext: txt
          caption_dropout_rate: 0.05
          shuffle_tokens: false
          cache_latents_to_disk: true
          resolution: [1024]`}</pre>

      <h2>Launching</h2>
      <CommandBlock command="python run.py config/my-flux-lora.yaml" />

      <h2>Training time on M5 Pro</h2>
      <p>FLUX self-clone LoRA, 50 images, rank 16, 2500 steps: ~6–10 hours overnight. Slower than SDXL because FLUX is bigger.</p>

      <NoteBlock title="ai-toolkit advantages">
        Config files are versionable. Sample-during-training is excellent for catching overfit
        early. Less browser-UI overhead than kohya_ss. Recommended Mac default for FLUX LoRA work.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'
import CommandBlock from '../../../components/content/CommandBlock.jsx'

export default function S2SharedStorage() {
  return (
    <>
      <p>
        If you also run A1111, Forge, InvokeAI, or Diffusion Bee on the same Mac, sharing one
        models directory across tools saves dozens of gigabytes. ComfyUI supports this via{' '}
        <code>extra_model_paths.yaml</code>.
      </p>

      <h2>The mechanism</h2>
      <p>
        ComfyUI looks for a file named <code>extra_model_paths.yaml</code> in its install directory.
        If present, it scans the listed directories <em>in addition</em> to its own{' '}
        <code>models/</code>. Loaders merge results from all sources into one dropdown.
      </p>

      <h2>Example file</h2>
      <p>Save the following as <code>~/Documents/ComfyUI/extra_model_paths.yaml</code>:</p>
      <pre>{`a1111:
    base_path: /Users/you/AI/stable-diffusion-webui

    checkpoints: models/Stable-diffusion
    vae: models/VAE
    loras: |
      models/Lora
      models/LyCORIS
    embeddings: embeddings
    controlnet: models/ControlNet
    upscale_models: |
      models/ESRGAN
      models/RealESRGAN

shared:
    base_path: /Volumes/ExternalSSD/shared-models

    checkpoints: checkpoints
    loras: loras
    controlnet: controlnet
    unet: unet
    clip: clip
    vae: vae`}</pre>

      <p>
        Each top-level key is just a label. <code>base_path</code> is the prefix; the entries below
        are subdirectories relative to that base. The pipe <code>|</code> syntax lists multiple
        directories under one model type.
      </p>

      <h2>Verify it loaded</h2>
      <p>Restart ComfyUI. In the startup logs you should see something like:</p>
      <pre>{`Adding extra search path checkpoints /Users/you/AI/stable-diffusion-webui/models/Stable-diffusion
Adding extra search path loras /Users/you/AI/stable-diffusion-webui/models/Lora
…`}</pre>
      <p>If those lines are missing, the YAML didn't parse — check indentation (YAML is whitespace-sensitive).</p>

      <h2>Migrating from A1111 to ComfyUI</h2>
      <p>
        The simplest way to start using ComfyUI without re-downloading 80 GB of models: copy the
        example above, point <code>base_path</code> at your existing A1111 install, restart. Every
        checkpoint and LoRA now appears in ComfyUI's dropdowns immediately.
      </p>

      <NoteBlock title="extra_model_paths.yaml.example">
        ComfyUI ships a sample file at <code>extra_model_paths.yaml.example</code>. Copy it to{' '}
        <code>extra_model_paths.yaml</code> and edit, or write your own from scratch.
      </NoteBlock>

      <h2>What's next</h2>
      <p>
        You now have ComfyUI installed, a working first workflow saved as JSON, ComfyUI Manager + the
        five essential custom-node packages, and a sane models tree. The next subject is{' '}
        <strong>Subject 02 — Apple Silicon &amp; MPS Deep Dive</strong>: where we tackle the fp8-on-MPS
        problem head-on, learn the launch flags that matter, and build a Mac-tuned mental model for
        memory and dtype management. That's the foundation everything in Phase 2 stands on.
      </p>
    </>
  )
}

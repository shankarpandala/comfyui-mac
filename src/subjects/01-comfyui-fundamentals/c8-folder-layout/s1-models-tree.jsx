import NoteBlock from '../../../components/content/NoteBlock.jsx'
import MacGotchaBlock from '../../../components/content/MacGotchaBlock.jsx'

export default function S1ModelsTree() {
  return (
    <>
      <p>
        ComfyUI looks for files by directory convention. Each loader node has a hard-coded subfolder
        of <code>models/</code> it scans. Knowing this layout lets you place downloaded files in the
        right place the first time.
      </p>

      <h2>The standard tree</h2>
      <pre>{`models/
├── checkpoints/        # full UNet+CLIP+VAE bundles (.safetensors / .ckpt)
├── unet/               # UNet-only (FLUX, Hunyuan when bundled is too big)
├── clip/               # standalone CLIP / T5 encoders
├── vae/                # standalone VAEs
├── loras/              # LoRA / LyCORIS / DoRA files
├── controlnet/         # ControlNet weight files
├── upscale_models/     # ESRGAN-family upscalers
├── ipadapter/          # IP-Adapter weights
├── clip_vision/        # CLIP-Vision encoders (used by IP-Adapter)
├── style_models/       # T2I-Adapter style models
├── embeddings/         # textual inversion embeddings
├── hypernetworks/      # legacy SD1.5 hypernetworks
├── diffusers/          # diffusers-format model directories
├── photomaker/         # PhotoMaker weights
├── facerestore_models/ # GFPGAN, CodeFormer
├── insightface/        # FaceID identity model
├── pulid/              # PuLID identity adapter
├── instantid/          # InstantID weights
├── sams/               # Segment Anything checkpoints
├── ultralytics/        # YOLO models for detailers
└── animatediff_models/ # AnimateDiff motion modules`}</pre>

      <p>
        Custom-node packages can add more subfolders. <code>ComfyUI-GGUF</code>, for example, expects
        GGUF UNet files in <code>models/unet/</code> and GGUF CLIP files in <code>models/clip/</code>.
      </p>

      <h2>How loaders find files</h2>
      <p>
        Each loader hard-codes its subfolder. <code>CheckpointLoaderSimple</code> scans{' '}
        <code>models/checkpoints/</code>. <code>VAELoader</code> scans <code>models/vae/</code>.{' '}
        <code>LoraLoader</code> scans <code>models/loras/</code>. The dropdowns are populated at
        startup and on <code>R</code> press.
      </p>

      <h2>Subdirectories are flattened in the dropdown</h2>
      <p>
        You can organize <code>models/checkpoints/</code> with subfolders — <code>SDXL/</code>,{' '}
        <code>SD15/</code>, <code>FLUX/</code>. ComfyUI scans recursively and the dropdown shows
        relative paths like <code>SDXL/sd_xl_base_1.0.safetensors</code>. Strongly recommended once
        you have more than ~20 checkpoints.
      </p>

      <MacGotchaBlock title="iCloud Drive will eat your models">
        On macOS, <code>~/Documents</code> is iCloud-synced by default. iCloud keeps removing
        files locally to "free space" and replaces them with placeholders, which makes ComfyUI
        report missing models. Either disable iCloud Drive sync for the Documents folder (System
        Settings → Apple ID → iCloud → iCloud Drive → Documents), right-click{' '}
        <code>~/Documents/ComfyUI</code> and choose <em>Keep on this Mac</em>, or symlink{' '}
        <code>models/</code> out to an external SSD that is not iCloud-synced.
      </MacGotchaBlock>

      <h2>External SSD — symlink the models folder</h2>
      <p>
        24 GB unified memory and 200+ GB of models is a real disk constraint on a laptop. You can
        keep models on an external SSD and symlink them into ComfyUI:
      </p>
      <pre>{`mv ~/Documents/ComfyUI/models /Volumes/ExternalSSD/comfy-models
ln -s /Volumes/ExternalSSD/comfy-models ~/Documents/ComfyUI/models`}</pre>
      <p>
        Trade-off: model loads are slower over USB-C/Thunderbolt (a 23 GB FLUX load goes from ~3 s to
        ~10 s on a TB3 SSD). Worth it for the disk savings; we cover the alternative — sharing models
        across multiple apps with a config file — in the next section.
      </p>

      <NoteBlock title="Symlinks are transparent">
        ComfyUI doesn't know the difference between a real folder and a symlink. The dropdowns work
        identically. The only failure mode is "external SSD unmounted" — ComfyUI shows an empty
        dropdown.
      </NoteBlock>
    </>
  )
}

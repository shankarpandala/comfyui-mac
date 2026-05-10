import CommandBlock from '../../../components/content/CommandBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1GgufNodes() {
  return (
    <>
      <p>
        ComfyUI's stock loaders don't speak GGUF. The bridge is <code>ComfyUI-GGUF</code>, a custom-node
        package by city96 that adds three loader nodes plus the dequantization kernels that make
        them work on MPS.
      </p>

      <h2>Install (if you skipped Subject 01 / Chapter 7)</h2>
      <p>Via ComfyUI Manager:</p>
      <ol>
        <li>Click <strong>Manager</strong> → <strong>Custom Nodes Manager</strong>.</li>
        <li>Search "GGUF".</li>
        <li>Install <strong>ComfyUI-GGUF</strong> by city96.</li>
        <li>Restart ComfyUI.</li>
      </ol>

      <p>Or manually:</p>
      <CommandBlock command="cd ~/AI/ComfyUI/custom_nodes && git clone https://github.com/city96/ComfyUI-GGUF" />
      <CommandBlock command="cd ComfyUI-GGUF && pip install -r requirements.txt" label="From the activated venv" />

      <h2>The three loader nodes</h2>
      <ul>
        <li><strong>UnetLoaderGGUF</strong> — loads a UNet from <code>.gguf</code>. Replaces <code>CheckpointLoaderSimple</code> for the UNet portion.</li>
        <li><strong>CLIPLoaderGGUF</strong> — loads a single text encoder from <code>.gguf</code>. Used for SD3-style single-CLIP setups (rare).</li>
        <li><strong>DualCLIPLoaderGGUF</strong> — loads two text encoders from <code>.gguf</code>: one for CLIP-L, one for T5. Used for FLUX, SD3, SD3.5.</li>
      </ul>

      <h2>What's NOT a GGUF loader</h2>
      <ul>
        <li><strong>VAEs</strong> — VAEs are too small to benefit from GGUF; they ship as fp16/bf16 .safetensors. Use the standard <code>VAELoader</code>.</li>
        <li><strong>LoRAs</strong> — also stay in their native .safetensors format; use <code>LoraLoader</code>. (Loading a LoRA into a GGUF UNet works fine — ComfyUI-GGUF patches the dequantized weights at runtime.)</li>
        <li><strong>ControlNets / IP-Adapters</strong> — same; .safetensors via their respective loaders.</li>
      </ul>

      <h2>Folder placement</h2>
      <p>Where to put your GGUF files:</p>
      <table>
        <thead><tr><th>File type</th><th>Folder</th></tr></thead>
        <tbody>
          <tr><td>UNet GGUF (FLUX, Hunyuan, Wan)</td><td><code>models/unet/</code></td></tr>
          <tr><td>Text-encoder GGUF (T5, CLIP)</td><td><code>models/clip/</code></td></tr>
          <tr><td>VAE .safetensors (any)</td><td><code>models/vae/</code></td></tr>
        </tbody>
      </table>

      <NoteBlock title="If a GGUF loader's dropdown is empty">
        ComfyUI-GGUF scans <code>models/unet/</code> at startup, not at canvas-open time. After
        adding a new file, click the refresh button next to the dropdown or press <code>R</code>.
        If still empty, check the file extension — <code>.gguf</code> exact match required.
      </NoteBlock>
    </>
  )
}

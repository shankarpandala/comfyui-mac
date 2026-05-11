import CommandBlock from '../../../components/content/CommandBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Hashes() {
  return (
    <>
      <p>
        Once your models folder grows past 100 GB and 30 files, you need to know which file is which
        and that you got the right one. Hashes are how. This section is the boring discipline that
        prevents the "my output looks different on my other Mac" mystery.
      </p>

      <h2>What hashes catch</h2>
      <ul>
        <li><strong>Corrupted downloads.</strong> A 12 GB download interrupted at 11.99 GB silently produces a broken file.</li>
        <li><strong>Wrong file with same name.</strong> Two CivitAI versions both named <code>juggernautXL.safetensors</code> aren't the same model.</li>
        <li><strong>Re-quantized variants.</strong> Two GGUFs labeled <code>flux-Q5_K_S.gguf</code> by different people may use different conversion settings.</li>
        <li><strong>Tampering.</strong> Rare but possible. Hashes are your supply-chain check.</li>
      </ul>

      <h2>Computing a hash on Mac</h2>
      <CommandBlock command="shasum -a 256 ~/Documents/ComfyUI/models/checkpoints/sd_xl_base_1.0.safetensors" />
      <p>For a 6.7 GB SDXL file this takes 15–30 seconds (read-bound on disk).</p>

      <h2>Where to compare</h2>
      <ul>
        <li>HuggingFace shows the SHA-256 for each LFS file in the <strong>files</strong> tab.</li>
        <li>CivitAI publishes hashes (BLAKE3, SHA-256, AutoV2) on the model version page.</li>
        <li>Some maintainers publish a <code>hashes.txt</code> alongside their model dump.</li>
      </ul>

      <h2>The community AutoV2 hash</h2>
      <p>
        CivitAI uses an "AutoV2" hash — first 10 hex chars of the SHA-256 of the file's tensor
        section (skipping safetensors header). It's shorter to write but no less reliable; ComfyUI
        often shows it in logs.
      </p>

      <h2>A simple Mac hashing routine</h2>
      <p>For new models, hash on download:</p>
      <CommandBlock command="cd ~/Documents/ComfyUI/models/checkpoints && shasum -a 256 *.safetensors > hashes.txt" />
      <p>Then later you can verify nothing changed:</p>
      <CommandBlock command="shasum -a 256 -c hashes.txt" />

      <h2>For GGUF</h2>
      <p>
        city96's GGUF repos publish hashes in the README. Always cross-check after download — GGUF
        files are big enough that even minor packet loss can produce a 12 GB file with a bad bit at
        offset 100,000,000.
      </p>

      <NoteBlock title="When ComfyUI logs a hash">
        ComfyUI's startup sometimes prints a "Loaded checkpoint &lt;name&gt; with hash &lt;short&gt;".
        That's a quick sanity check — search the short hash on civitai/HF to confirm you have the
        intended model.
      </NoteBlock>
    </>
  )
}

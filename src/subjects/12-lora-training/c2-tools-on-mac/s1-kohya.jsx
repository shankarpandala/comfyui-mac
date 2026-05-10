import CommandBlock from '../../../components/content/CommandBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Kohya() {
  return (
    <>
      <p>
        kohya_ss is the most-used SDXL LoRA trainer. Originally NVIDIA-focused; the community
        maintains MPS-compatible forks. Recommended for SDXL LoRA training on Mac.
      </p>

      <h2>Install</h2>
      <CommandBlock command="git clone --branch macos https://github.com/bmaltais/kohya_ss" />
      <CommandBlock command="cd kohya_ss && bash setup-mac.sh" label="Mac install script" />
      <p>This sets up a separate Python venv and installs the MPS-compatible PyTorch + dependencies.</p>

      <h2>Launching the GUI</h2>
      <CommandBlock command="bash gui-mac.sh" />
      <p>Opens a Gradio web UI at <code>http://127.0.0.1:7860</code>.</p>

      <h2>SDXL LoRA training tab</h2>
      <ol>
        <li>"Source model" → SDXL base or your finetune (e.g., Juggernaut XL v9).</li>
        <li>"Folders" → point to your dataset (the <code>10_my-trigger person/</code> folder structure).</li>
        <li>"Parameters" → set rank (16), alpha (16), learning rate (1e-4), batch size (1), epochs (10).</li>
        <li>"Optimizer" → AdamW8bit if available, else AdamW.</li>
        <li>Click "Start training."</li>
      </ol>

      <h2>Mac-specific gotchas</h2>
      <ul>
        <li>AdamW8bit works on MPS but the bitsandbytes library has Mac quirks — fall back to AdamW if AdamW8bit fails.</li>
        <li>Mixed precision: bf16 (Mac-friendly) instead of fp8 (NVIDIA only).</li>
        <li>xformers references in config: ignore on Mac — kohya falls back to PyTorch SDPA.</li>
      </ul>

      <h2>Training time on M5 Pro</h2>
      <table>
        <thead><tr><th>LoRA scope</th><th>Steps</th><th>Wall time</th></tr></thead>
        <tbody>
          <tr><td>Style LoRA, 50 images, rank 16, 10 epochs</td><td>500 steps</td><td>~30 min</td></tr>
          <tr><td>Self-clone LoRA, 50 images + 200 reg, rank 16, 10 epochs</td><td>2500 steps</td><td>~2.5 h</td></tr>
          <tr><td>Detailed character, 100 images, rank 32, 15 epochs</td><td>1500 steps</td><td>~1.5 h</td></tr>
        </tbody>
      </table>

      <NoteBlock title="The kohya verdict">
        kohya_ss MPS branch works well for SDXL LoRAs. UI is busy but the defaults are reasonable.
        For FLUX, ai-toolkit (next section) is generally smoother on Mac.
      </NoteBlock>
    </>
  )
}

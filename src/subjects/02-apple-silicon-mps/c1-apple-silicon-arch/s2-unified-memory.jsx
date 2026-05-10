import NoteBlock from '../../../components/content/NoteBlock.jsx'
import MacGotchaBlock from '../../../components/content/MacGotchaBlock.jsx'
import VRAMBudgetBlock from '../../../components/content/VRAMBudgetBlock.jsx'

export default function S2UnifiedMemory() {
  return (
    <>
      <p>
        24 GB sounds like a lot until you start loading FLUX. This section explains exactly where
        every gigabyte goes on a real Mac and how to read the budget so you can predict OOM before
        it happens.
      </p>

      <h2>The 24 GB pie</h2>
      <p>On a freshly rebooted M5 Pro, with Safari open and ComfyUI not running:</p>
      <table>
        <thead><tr><th>Consumer</th><th>Footprint</th></tr></thead>
        <tbody>
          <tr><td>macOS kernel + WindowServer</td><td>~3.5 GB</td></tr>
          <tr><td>Safari (a few tabs)</td><td>~1.5 GB</td></tr>
          <tr><td>Background processes (Spotlight, mds, etc.)</td><td>~1 GB</td></tr>
          <tr><td>Wired memory (kernel-locked, can't swap)</td><td>~2 GB</td></tr>
          <tr><td className="font-semibold">Subtotal before ComfyUI</td><td className="font-semibold">~8 GB</td></tr>
        </tbody>
      </table>
      <p>That leaves ~16 GB for ComfyUI's working set — the model, the VAE, intermediate latents, sampler caches.</p>

      <h2>What ComfyUI consumes per workflow</h2>
      <p>Typical numbers, fp16 / bf16:</p>

      <VRAMBudgetBlock
        target="24 GB unified (M5 Pro)"
        rows={[
          { component: 'SD 1.5 UNet', dtype: 'fp16', size: '~2 GB', notes: 'Plenty of headroom' },
          { component: 'SDXL UNet', dtype: 'fp16', size: '~6.7 GB', notes: 'Comfortable' },
          { component: 'SD3.5 Large', dtype: 'bf16', size: '~16 GB', notes: 'Borderline; prefer Medium on 24 GB' },
          { component: 'FLUX Dev', dtype: 'fp16', size: '~23 GB', notes: 'Will not fit; use GGUF Q4–Q5' },
          { component: 'FLUX Dev', dtype: 'GGUF Q4_K_S', size: '~6.5 GB', notes: 'Recommended on Mac' },
          { component: 'HunyuanVideo', dtype: 'fp16', size: '~25 GB', notes: 'Will not fit; use GGUF Q4' },
          { component: 'HunyuanVideo', dtype: 'GGUF Q4_K_S', size: '~7 GB', notes: 'Plus heavy activations' },
          { component: 'T5-XXL text encoder', dtype: 'fp16', size: '~9.5 GB', notes: 'Used in SD3, FLUX' },
          { component: 'T5-XXL text encoder', dtype: 'GGUF Q5_K', size: '~3.5 GB', notes: 'Recommended companion to GGUF UNet' },
        ]}
      />

      <h2>Activations are not free</h2>
      <p>
        The model size is only half the story. A diffusion forward pass keeps activations alive at
        each UNet block — for a single 1024×1024 SDXL forward, the activation memory is around
        2–3 GB. For HunyuanVideo at 5 s × 720p, activations balloon to 8–12 GB.
      </p>
      <p>
        This is why "the model fits in X GB" is the wrong question. The right question: <strong>does
        model + activations + cached LATENTs + the VAE fit in your working budget?</strong>
      </p>

      <h2>How to read your budget live</h2>
      <p>Open Activity Monitor → Memory tab. The bottom of the window shows:</p>
      <ul>
        <li><strong>Memory Pressure</strong> — green = fine, yellow = compressing, red = swapping. Always-green is the goal.</li>
        <li><strong>Memory Used</strong> — total RAM committed.</li>
        <li><strong>Wired Memory</strong> — kernel-pinned; can't be swapped or compressed.</li>
        <li><strong>Compressed</strong> — RAM the OS has compressed in place. Some compression is fine; large compressed = heading to swap.</li>
        <li><strong>Swap Used</strong> — anything &gt; 0 GB is bad for diffusion.</li>
      </ul>

      <MacGotchaBlock title="When swap kicks in, you've already lost">
        Once macOS starts paging tensors to swap, your sampler step time goes from seconds to
        minutes. The OS doesn't know which pages are currently-being-denoised activations vs idle
        Safari tabs. Goal: stay below 90% memory pressure. We tune launch flags in chapter 4 to
        stretch the budget further.
      </MacGotchaBlock>

      <h2>Reducing the OS footprint</h2>
      <p>If you're going to run a long video render or train a LoRA, free up budget first:</p>
      <ul>
        <li>Quit Safari/Chrome (browsers are memory pigs; an open YouTube tab eats 800 MB).</li>
        <li>Quit Slack, Discord, Notion.</li>
        <li>Disconnect external displays — each adds ~500 MB to WindowServer.</li>
        <li>Run ComfyUI from Terminal, not an IDE. (VS Code by itself is 1+ GB.)</li>
      </ul>

      <NoteBlock title="The 32 GB and 36 GB configurations">
        If you're shopping: 32 GB and 36 GB M-series Pro/Max configurations exist. The curriculum
        targets 24 GB explicitly because that's a common SKU and the tightest budget that's still
        viable for the full pipeline. Every recipe that runs on 24 GB also runs (with slack) on 36+.
      </NoteBlock>
    </>
  )
}

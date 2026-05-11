import CommandBlock from '../../../components/content/CommandBlock.jsx'
import MacGotchaBlock from '../../../components/content/MacGotchaBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'
import WarningBlock from '../../../components/content/WarningBlock.jsx'

export default function S4FirstLaunch() {
  return (
    <>
      <p>
        Time to launch ComfyUI for the first time. We'll start it with a few Mac-specific environment
        variables and flags that are non-negotiable. Subject 02 explains <em>why</em>; this section
        gets you running.
      </p>

      <h2>1 — Launch flags that matter on Mac</h2>
      <p>From the activated venv, in <code>~/Documents/ComfyUI</code>:</p>
      <CommandBlock
        command="PYTORCH_ENABLE_MPS_FALLBACK=1 python main.py --force-fp16"
        label="First launch"
      />
      <p>What each piece does:</p>
      <ul>
        <li><code>PYTORCH_ENABLE_MPS_FALLBACK=1</code> — when MPS doesn't implement an op, fall back to CPU instead of crashing. Several Stable Diffusion ops still rely on this.</li>
        <li><code>--force-fp16</code> — load model weights in half precision. SDXL fp32 won't fit in 24 GB; fp16 leaves headroom.</li>
      </ul>

      <MacGotchaBlock title="If you skip --force-fp16">
        ComfyUI defaults to fp32 on systems it doesn't recognize. On a 24 GB Mac that means an OOM
        crash on the first SDXL load. We'll make this the default in your launch script in step 4.
      </MacGotchaBlock>

      <h2>2 — Open the UI</h2>
      <p>The terminal will print:</p>
      <pre>{`To see the GUI go to: http://127.0.0.1:8188`}</pre>
      <p>Open that URL in Safari, Chrome, or Arc. You should see an empty canvas with the default workflow loaded (a basic SD1.5 t2i graph).</p>

      <WarningBlock title="It works without any models?">
        Yes — the canvas renders before any model is loaded. The default workflow expects a Stable
        Diffusion 1.5 checkpoint that you don't have yet, so pressing "Queue Prompt" will error. We
        download a model in chapter 5 of this subject. For now we just confirm the server boots.
      </WarningBlock>

      <h2>3 — Stop the server</h2>
      <p>In the terminal, <code>Ctrl-C</code>. ComfyUI shuts down cleanly.</p>

      <h2>4 — A launch script</h2>
      <p>
        Typing the full command every time is tedious. Save this as <code>~/Documents/ComfyUI/start.sh</code>{' '}
        and <code>chmod +x</code> it:
      </p>
      <pre>{`#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"
source venv/bin/activate
export PYTORCH_ENABLE_MPS_FALLBACK=1
export PYTORCH_MPS_HIGH_WATERMARK_RATIO=0.0
python main.py --force-fp16 "$@"`}</pre>
      <p>Now you can launch with:</p>
      <CommandBlock command="~/Documents/ComfyUI/start.sh" />
      <p>And pass extra flags through:</p>
      <CommandBlock command="~/Documents/ComfyUI/start.sh --listen 0.0.0.0" />

      <NoteBlock title="What's PYTORCH_MPS_HIGH_WATERMARK_RATIO=0.0?">
        It removes PyTorch's safety cap on MPS memory allocation. On a unified-memory system this is
        actually what you want — the OS already manages memory pressure across the whole machine.
        Subject 02 / Chapter 5 covers the trade-offs in detail.
      </NoteBlock>

      <h2>5 — Common first-launch errors</h2>
      <ul>
        <li><strong><code>RuntimeError: MPS backend out of memory</code></strong> — you launched without <code>--force-fp16</code>. Stop, restart with the flag.</li>
        <li><strong><code>command not found: python</code></strong> — venv not activated. <code>source venv/bin/activate</code>.</li>
        <li><strong><code>Address already in use</code></strong> — another ComfyUI is running. Find it: <code>lsof -i :8188</code>.</li>
        <li><strong>Browser shows nothing</strong> — Safari sometimes caches a "site cannot be reached" page. Hard reload (Cmd-Shift-R).</li>
      </ul>

      <p>
        With ComfyUI booting, we move on to learning the UI itself.
      </p>
    </>
  )
}

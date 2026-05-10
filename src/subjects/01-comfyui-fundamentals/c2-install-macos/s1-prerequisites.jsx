import CommandBlock from '../../../components/content/CommandBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'
import MacGotchaBlock from '../../../components/content/MacGotchaBlock.jsx'

export default function S1Prerequisites() {
  return (
    <>
      <p>
        Before we clone ComfyUI, we need a sane macOS development environment. On an M5 Pro with
        24 GB unified memory, the requirements are: Apple's command-line tools, a Python that PyTorch
        actually supports, and a package manager. We'll use Homebrew's Python; you can substitute{' '}
        <code>pyenv</code> or <code>conda</code> if that's already your habit.
      </p>

      <h2>1 — Xcode Command Line Tools</h2>
      <p>This installs <code>git</code>, the C/C++ toolchain, and headers some Python packages compile against.</p>
      <CommandBlock command="xcode-select --install" />
      <p>If a dialog appears, accept it. If you see "command line tools are already installed", you're set.</p>

      <h2>2 — Homebrew</h2>
      <p>
        Homebrew is the path of least resistance for installing Python and ffmpeg on macOS. If you
        already have it, skip this.
      </p>
      <CommandBlock command='/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"' />
      <p>After install, follow the on-screen instructions to add brew to your shell PATH (the script tells you the exact command).</p>

      <h2>3 — Python 3.11 or 3.12</h2>
      <MacGotchaBlock title="Do not use Python 3.13 yet">
        Several ComfyUI custom-node ecosystems (Impact Pack, ControlNet Aux, ComfyUI-GGUF) lag on
        Python 3.13 wheels. Stick to <strong>3.11</strong> or <strong>3.12</strong> until late 2026.
      </MacGotchaBlock>
      <CommandBlock command="brew install python@3.12" label="Install Python 3.12" />
      <p>Verify:</p>
      <CommandBlock command="python3.12 --version" />

      <h2>4 — ffmpeg (for any video work later)</h2>
      <CommandBlock command="brew install ffmpeg" />
      <p>
        We'll use ffmpeg in Phase 3 (video) and Phase 5 (avatar pipelines). Install it now so you
        don't have to remember later.
      </p>

      <h2>5 — Disk space</h2>
      <p>
        Plan for <strong>at least 200 GB free</strong> on the volume where you'll keep models. SDXL,
        FLUX Dev fp16, HunyuanVideo, and Wan 2.2 weights together easily exceed 100 GB; with LoRAs,
        VAEs, ControlNets, and a couple of TTS bases, 200 GB fills fast. External SSD is fine — we
        cover symlinking <code>models/</code> in chapter 8.
      </p>

      <h2>6 — Optional but useful</h2>
      <ul>
        <li><strong>asitop</strong> — live GPU/ANE/memory bandwidth viewer. <code>brew install asitop</code>. We use it in Subject 02 / Chapter 6.</li>
        <li><strong>mactop</strong> — alternative to asitop. <code>brew install mactop</code>.</li>
        <li><strong>git-lfs</strong> — required if you'll <code>git clone</code> model repos. <code>brew install git-lfs</code> then <code>git lfs install</code>.</li>
      </ul>

      <NoteBlock title="Why not Anaconda?">
        Conda environments are fine; the only catch on Apple Silicon is that the conda-forge PyTorch
        build sometimes lags behind the official PyPI wheel. If you already use conda, install PyTorch
        from <code>pip</code> inside the conda env. We use <code>venv</code> in this curriculum because
        it ships with Python and isolates ComfyUI from your global packages.
      </NoteBlock>
    </>
  )
}

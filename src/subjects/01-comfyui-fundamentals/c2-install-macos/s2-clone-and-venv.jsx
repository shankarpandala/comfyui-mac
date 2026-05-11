import CommandBlock from '../../../components/content/CommandBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2CloneAndVenv() {
  return (
    <>
      <p>
        We will install ComfyUI as a self-contained directory at{' '}
        <code>~/Documents/ComfyUI</code> — the conventional macOS location used by every other
        lesson in this curriculum. One caveat: if iCloud Drive is syncing your Documents folder,
        either turn that off (System Settings → Apple ID → iCloud → iCloud Drive → Documents) or
        right-click <code>~/Documents/ComfyUI</code> after cloning and choose{' '}
        <em>Remove Download</em> → <em>Keep on this Mac</em>. iCloud will otherwise evict model
        weights as "not recently used" and break workflows.
      </p>

      <h2>1 — Clone the repo</h2>
      <CommandBlock command="cd ~/Documents" />
      <CommandBlock command="git clone https://github.com/comfyanonymous/ComfyUI.git" />
      <CommandBlock command="cd ComfyUI" />

      <h2>2 — Create a virtual environment</h2>
      <p>
        We pin to Python 3.12 explicitly. The <code>venv</code> directory is conventionally called{' '}
        <code>venv</code> or <code>.venv</code> — either works.
      </p>
      <CommandBlock command="python3.12 -m venv venv" />
      <CommandBlock command="source venv/bin/activate" />
      <p>Once activated, your shell prompt should show <code>(venv)</code>. Every future ComfyUI command runs inside this venv.</p>

      <NoteBlock title="Activating the venv on every new terminal">
        The venv is not a permanent shell modification — opening a new terminal puts you back in the
        global Python. Always run <code>source ~/Documents/ComfyUI/venv/bin/activate</code> first. We'll
        add a launch script in section 4 to make this one command.
      </NoteBlock>

      <h2>3 — Upgrade pip and install build tools</h2>
      <CommandBlock command="pip install --upgrade pip wheel setuptools" />

      <h2>4 — Where the directory will end up</h2>
      <p>After this section your tree looks like:</p>
      <pre>{`~/Documents/ComfyUI/
├── venv/                # the Python virtual environment
├── main.py              # the entry point we'll launch in section 4
├── nodes.py             # the built-in node implementations
├── execution.py
├── server.py
├── comfy/               # the diffusion runtime
├── custom_nodes/        # we'll install ComfyUI Manager here in chapter 7
├── models/              # we'll populate this in chapter 8
├── input/               # uploaded images go here
├── output/              # generated images land here
└── temp/                # scratch`}</pre>

      <p>
        Nothing has been installed beyond Python yet — PyTorch and ComfyUI's own dependencies come in
        the next section.
      </p>
    </>
  )
}

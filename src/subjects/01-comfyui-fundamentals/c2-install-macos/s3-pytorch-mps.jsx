import CommandBlock from '../../../components/content/CommandBlock.jsx'
import MacGotchaBlock from '../../../components/content/MacGotchaBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3PytorchMps() {
  return (
    <>
      <p>
        On Apple Silicon, PyTorch's GPU backend is called <strong>MPS</strong> (Metal Performance
        Shaders). It's not a separate package — you install regular PyTorch from PyPI and it
        auto-detects your Mac. The whole curriculum stands on this install working correctly.
      </p>

      <h2>1 — Install PyTorch</h2>
      <p>From inside the activated venv:</p>
      <CommandBlock command="pip install torch torchvision torchaudio" />
      <p>
        That pulls the latest stable PyTorch. As of this writing, that's <strong>2.5+</strong>, which
        you want — older PyTorch had MPS bugs that bite Stable Diffusion specifically.
      </p>

      <h2>2 — Verify MPS is available</h2>
      <CommandBlock
        command={`python -c "import torch; print('MPS available:', torch.backends.mps.is_available()); print('MPS built:', torch.backends.mps.is_built())"`}
        label="MPS smoke test"
      />
      <p>You want both lines to say <code>True</code>. If either says False:</p>
      <ul>
        <li>Wrong Python (must be a native arm64 Python, not an x86 one running through Rosetta).</li>
        <li>Old macOS (MPS requires macOS 12.3+; on M5 Pro you're way past this).</li>
        <li>You installed the CPU-only PyTorch wheel by mistake.</li>
      </ul>

      <h2>3 — Confirm the architecture</h2>
      <p>
        It's surprisingly easy on Mac to end up with an x86 Python via the system framework. Verify:
      </p>
      <CommandBlock command={`python -c "import platform; print(platform.machine())"`} />
      <p>You want <code>arm64</code>. <code>x86_64</code> means Rosetta and you'll get CPU-only PyTorch.</p>

      <h2>4 — Install ComfyUI's other dependencies</h2>
      <CommandBlock command="pip install -r requirements.txt" label="In the ComfyUI directory" />
      <p>
        This grabs <code>safetensors</code>, <code>transformers</code>, <code>aiohttp</code>,{' '}
        <code>einops</code>, and several others. Should take a minute or two.
      </p>

      <MacGotchaBlock title="Don't install xformers on Mac">
        ComfyUI's <code>requirements.txt</code> does not include xformers, which is correct — xformers
        is a CUDA-specific attention library. If a custom-node README later instructs you to install
        xformers, ignore that instruction on Mac. PyTorch's built-in scaled-dot-product attention (SDPA)
        is the right path on MPS.
      </MacGotchaBlock>

      <h2>5 — One quick MPS sanity check</h2>
      <p>Confirm a tensor actually allocates on the GPU:</p>
      <CommandBlock
        command={`python -c "import torch; x=torch.randn(1024,1024,device='mps'); y=x@x; print('OK', y.device, y.shape)"`}
      />
      <p>You want <code>OK mps:0 torch.Size([1024, 1024])</code>. If you see a CPU device, your install is broken.</p>

      <NoteBlock title="What about MLX?">
        MLX is Apple's native ML framework, separate from PyTorch. We'll discuss it in Subject 02 /
        Chapter 7. For ComfyUI proper, PyTorch-MPS is the only path — almost every node assumes
        torch.Tensor.
      </NoteBlock>
    </>
  )
}

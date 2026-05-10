import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1ComfyRegistry() {
  return (
    <>
      <p>Publishing your custom node to the Comfy Registry — the official package index used by ComfyUI Manager.</p>

      <h2>The package structure</h2>
      <pre>{`my-node-pack/
├── __init__.py          # NODE_CLASS_MAPPINGS export
├── nodes/               # actual node implementations
│   ├── node1.py
│   └── node2.py
├── requirements.txt     # pip dependencies
├── pyproject.toml       # comfy registry metadata
└── README.md`}</pre>

      <h2>pyproject.toml</h2>
      <pre>{`[project]
name = "comfyui-my-node-pack"
description = "What it does"
version = "1.0.0"
license = {file = "LICENSE"}

[tool.comfy]
PublisherId = "yourname"
DisplayName = "My Node Pack"
Icon = ""`}</pre>

      <h2>Publishing flow</h2>
      <ol>
        <li>Push to public GitHub repo.</li>
        <li><code>comfy-cli publish</code> from the repo root (registers with Comfy Registry).</li>
        <li>ComfyUI Manager users can install via the in-app Manager.</li>
      </ol>

      <h2>Local distribution (alternative)</h2>
      <p>
        Skip Registry; just publish on GitHub. Users install with:
      </p>
      <pre>{`cd ~/AI/ComfyUI/custom_nodes
git clone https://github.com/yourname/your-node-pack`}</pre>

      <h2>Testing before publishing</h2>
      <ul>
        <li>Test on Mac (MPS) AND request testers on NVIDIA — community expects both.</li>
        <li>Check no CUDA-only imports (xformers, sageattention).</li>
        <li>Wrap CUDA-specific imports in try/except for Mac compatibility.</li>
      </ul>

      <NoteBlock title="The Mac-friendly publishing principle">
        If your node depends on a CUDA-only library, mark it as such in the README and gracefully
        degrade on Mac. Don't make Mac users discover the incompatibility through cryptic errors.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1NumberCombo() {
  return (
    <>
      <p>Widget configuration in INPUT_TYPES — every option you can give the user.</p>

      <h2>INT widget</h2>
      <pre>{`"width": ("INT", {
    "default": 1024,
    "min": 64,
    "max": 4096,
    "step": 64,
    "display": "number"  # or "slider"
})`}</pre>

      <h2>FLOAT widget</h2>
      <pre>{`"strength": ("FLOAT", {
    "default": 1.0,
    "min": 0.0,
    "max": 2.0,
    "step": 0.05,
    "display": "number"
})`}</pre>

      <h2>STRING widget</h2>
      <pre>{`"prompt": ("STRING", {
    "default": "",
    "multiline": True,  # text area instead of single-line
})`}</pre>

      <h2>COMBO (dropdown) widget</h2>
      <pre>{`"sampler": (["euler", "dpmpp_2m", "ddim"],),
# or with default:
"mode": (["fast", "balanced", "quality"], {"default": "balanced"})`}</pre>

      <h2>BOOLEAN widget</h2>
      <pre>{`"normalize": ("BOOLEAN", {"default": True})`}</pre>

      <h2>Optional inputs</h2>
      <pre>{`return {
    "required": {"image": ("IMAGE",)},
    "optional": {"mask": ("MASK",)}  # may be missing at runtime
}`}</pre>

      <h2>Hidden inputs</h2>
      <pre>{`# Get a unique prompt ID and the API JSON automatically:
"hidden": {
    "prompt": "PROMPT",
    "extra_pnginfo": "EXTRA_PNGINFO"
}`}</pre>

      <NoteBlock title="The 'mirror existing nodes' approach">
        When you're not sure about a widget config, find a similar built-in node and copy its
        INPUT_TYPES. ComfyUI's nodes.py has dozens of patterns to crib from.
      </NoteBlock>
    </>
  )
}

import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Contract() {
  return (
    <>
      <p>
        ComfyUI custom nodes are Python classes following a specific contract. Three class
        attributes (INPUT_TYPES, RETURN_TYPES, FUNCTION) plus a method to do the work. That's it.
      </p>

      <DefinitionBlock title="The minimal node">
        <pre>{`class HelloNode:
    @classmethod
    def INPUT_TYPES(cls):
        return {"required": {"text": ("STRING", {"default": "hello"})}}

    RETURN_TYPES = ("STRING",)
    FUNCTION = "run"
    CATEGORY = "examples"

    def run(self, text):
        return (text.upper(),)

NODE_CLASS_MAPPINGS = {"HelloNode": HelloNode}`}</pre>
      </DefinitionBlock>

      <h2>The contract</h2>
      <ul>
        <li><strong>INPUT_TYPES</strong> — class method returning a dict describing inputs.</li>
        <li><strong>RETURN_TYPES</strong> — tuple of output types.</li>
        <li><strong>FUNCTION</strong> — string name of the method that runs.</li>
        <li><strong>CATEGORY</strong> — string for the node menu organization.</li>
        <li>The method named in FUNCTION returns a tuple matching RETURN_TYPES.</li>
      </ul>

      <h2>NODE_CLASS_MAPPINGS</h2>
      <p>
        Module-level dict that registers your nodes with ComfyUI. Key is the internal name; value
        is the class. Multiple nodes per file is fine — register all of them.
      </p>

      <h2>Optional NODE_DISPLAY_NAME_MAPPINGS</h2>
      <p>Pretty names for the menu:</p>
      <pre>{`NODE_DISPLAY_NAME_MAPPINGS = {
    "HelloNode": "Hello (Uppercase)"
}`}</pre>

      <NoteBlock title="The 10-line node">
        Custom nodes are dramatically simpler than they look in big custom-node packs. The contract
        is small. Most of a real custom node's code is the actual logic; the ComfyUI integration is
        ~10 lines.
      </NoteBlock>
    </>
  )
}

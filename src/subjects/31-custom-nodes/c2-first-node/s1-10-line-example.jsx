import CommandBlock from '../../../components/content/CommandBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S110LineExample() {
  return (
    <>
      <p>Build your first useful custom node — a "Random Choice" string picker. ~15 lines, 5 minutes.</p>

      <h2>Setup</h2>
      <CommandBlock command="cd ~/Documents/ComfyUI/custom_nodes && mkdir my-first-node && cd my-first-node" />

      <h2>The file: <code>__init__.py</code></h2>
      <pre>{`import random

class RandomChoice:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "options": ("STRING", {
                    "multiline": True,
                    "default": "cat\\ndog\\nbird"
                }),
                "seed": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff}),
            }
        }

    RETURN_TYPES = ("STRING",)
    FUNCTION = "pick"
    CATEGORY = "utils"

    def pick(self, options, seed):
        random.seed(seed)
        choices = [line.strip() for line in options.split("\\n") if line.strip()]
        return (random.choice(choices),)

NODE_CLASS_MAPPINGS = {"RandomChoice": RandomChoice}
NODE_DISPLAY_NAME_MAPPINGS = {"RandomChoice": "Random Choice"}`}</pre>

      <h2>Restart ComfyUI</h2>
      <p>The node appears in the menu under "utils" → Random Choice. Use it: feed multiline text, get a random line.</p>

      <h2>The widget types</h2>
      <ul>
        <li><code>"STRING"</code> with <code>multiline: true</code> → text area.</li>
        <li><code>"STRING"</code> default → single-line text field.</li>
        <li><code>"INT"</code> → integer input with min/max.</li>
        <li><code>"FLOAT"</code> → float input.</li>
        <li><code>"BOOLEAN"</code> → checkbox.</li>
        <li><code>(["a", "b", "c"],)</code> → dropdown with these options.</li>
      </ul>

      <NoteBlock title="The 'works first try' satisfaction">
        Custom nodes are immediately gratifying — make changes, restart, see them in the menu. The
        feedback loop is fast. Useful for building automation or one-off helpers for your own workflows.
      </NoteBlock>
    </>
  )
}

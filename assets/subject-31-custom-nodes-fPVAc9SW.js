import{j as e}from"./vendor-CumJrUdK.js";import{D as n,N as i,C as t}from"./subject-01-comfyui-fundamentals-BifJbZni.js";function s(){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"ComfyUI custom nodes are Python classes following a specific contract. Three class attributes (INPUT_TYPES, RETURN_TYPES, FUNCTION) plus a method to do the work. That's it."}),e.jsx(n,{title:"The minimal node",children:e.jsx("pre",{children:`class HelloNode:
    @classmethod
    def INPUT_TYPES(cls):
        return {"required": {"text": ("STRING", {"default": "hello"})}}

    RETURN_TYPES = ("STRING",)
    FUNCTION = "run"
    CATEGORY = "examples"

    def run(self, text):
        return (text.upper(),)

NODE_CLASS_MAPPINGS = {"HelloNode": HelloNode}`})}),e.jsx("h2",{children:"The contract"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"INPUT_TYPES"})," — class method returning a dict describing inputs."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"RETURN_TYPES"})," — tuple of output types."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"FUNCTION"})," — string name of the method that runs."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"CATEGORY"})," — string for the node menu organization."]}),e.jsx("li",{children:"The method named in FUNCTION returns a tuple matching RETURN_TYPES."})]}),e.jsx("h2",{children:"NODE_CLASS_MAPPINGS"}),e.jsx("p",{children:"Module-level dict that registers your nodes with ComfyUI. Key is the internal name; value is the class. Multiple nodes per file is fine — register all of them."}),e.jsx("h2",{children:"Optional NODE_DISPLAY_NAME_MAPPINGS"}),e.jsx("p",{children:"Pretty names for the menu:"}),e.jsx("pre",{children:`NODE_DISPLAY_NAME_MAPPINGS = {
    "HelloNode": "Hello (Uppercase)"
}`}),e.jsx(i,{title:"The 10-line node",children:"Custom nodes are dramatically simpler than they look in big custom-node packs. The contract is small. Most of a real custom node's code is the actual logic; the ComfyUI integration is ~10 lines."})]})}const h=Object.freeze(Object.defineProperty({__proto__:null,default:s},Symbol.toStringTag,{value:"Module"}));function r(){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:'Build your first useful custom node — a "Random Choice" string picker. ~15 lines, 5 minutes.'}),e.jsx("h2",{children:"Setup"}),e.jsx(t,{command:"cd ~/AI/ComfyUI/custom_nodes && mkdir my-first-node && cd my-first-node"}),e.jsxs("h2",{children:["The file: ",e.jsx("code",{children:"__init__.py"})]}),e.jsx("pre",{children:`import random

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
NODE_DISPLAY_NAME_MAPPINGS = {"RandomChoice": "Random Choice"}`}),e.jsx("h2",{children:"Restart ComfyUI"}),e.jsx("p",{children:'The node appears in the menu under "utils" → Random Choice. Use it: feed multiline text, get a random line.'}),e.jsx("h2",{children:"The widget types"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:'"STRING"'})," with ",e.jsx("code",{children:"multiline: true"})," → text area."]}),e.jsxs("li",{children:[e.jsx("code",{children:'"STRING"'})," default → single-line text field."]}),e.jsxs("li",{children:[e.jsx("code",{children:'"INT"'})," → integer input with min/max."]}),e.jsxs("li",{children:[e.jsx("code",{children:'"FLOAT"'})," → float input."]}),e.jsxs("li",{children:[e.jsx("code",{children:'"BOOLEAN"'})," → checkbox."]}),e.jsxs("li",{children:[e.jsx("code",{children:'(["a", "b", "c"],)'})," → dropdown with these options."]})]}),e.jsx(i,{title:"The 'works first try' satisfaction",children:"Custom nodes are immediately gratifying — make changes, restart, see them in the menu. The feedback loop is fast. Useful for building automation or one-off helpers for your own workflows."})]})}const m=Object.freeze(Object.defineProperty({__proto__:null,default:r},Symbol.toStringTag,{value:"Module"}));function o(){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Tensor I/O conventions for ComfyUI custom nodes. Get these wrong and your node silently produces garbage."}),e.jsx("h2",{children:"IMAGE"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Shape: ",e.jsx("code",{children:"[B, H, W, 3]"})," — note ",e.jsx("strong",{children:"HWC"}),", not CHW."]}),e.jsxs("li",{children:["Dtype: ",e.jsx("code",{children:"torch.float32"}),"."]}),e.jsx("li",{children:"Range: 0.0 to 1.0."}),e.jsx("li",{children:"Common mistake: passing CHW from PIL/numpy without permuting."})]}),e.jsx("h2",{children:"LATENT"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Wrapped in a dict: ",e.jsx("code",{children:'{"samples": tensor[B, C, H, W]}'}),"."]}),e.jsx("li",{children:"C varies: 4 (SD1.5/SDXL), 16 (SD3/FLUX), 16 (HunyuanVideo)."}),e.jsx("li",{children:"Spatial: 1/8 of pixel dims (most VAEs)."})]}),e.jsx("h2",{children:"MASK"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Shape: ",e.jsx("code",{children:"[B, H, W]"})," — single channel."]}),e.jsxs("li",{children:["Dtype: ",e.jsx("code",{children:"torch.float32"}),"."]}),e.jsx("li",{children:"Range: 0.0 (preserve) to 1.0 (modify)."})]}),e.jsx("h2",{children:"MODEL / CLIP / VAE / CONDITIONING"}),e.jsx("p",{children:"These are wrapped Python objects with their own classes (ModelPatcher, etc.). Pass through without modification unless you're writing a model patcher. CONDITIONING is a list of (embedding_tensor, dict_of_extras) pairs."}),e.jsx("h2",{children:"Conversion patterns"}),e.jsx("pre",{children:`# PIL Image to ComfyUI IMAGE
import numpy as np
img = np.array(pil_img).astype(np.float32) / 255.0  # HWC, [0,1]
tensor = torch.from_numpy(img).unsqueeze(0)  # add batch -> [1, H, W, 3]

# ComfyUI IMAGE to PIL
np_img = (tensor[0].cpu().numpy() * 255).astype(np.uint8)
pil_img = Image.fromarray(np_img)`}),e.jsxs(i,{title:"The 'check shapes' rule",children:["Custom node bugs almost always come from tensor shape/dtype mismatches. ",e.jsx("code",{children:"print(tensor.shape, tensor.dtype, tensor.min(), tensor.max())"})," at the top of your method catches them fast."]})]})}const p=Object.freeze(Object.defineProperty({__proto__:null,default:o},Symbol.toStringTag,{value:"Module"}));function l(){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Widget configuration in INPUT_TYPES — every option you can give the user."}),e.jsx("h2",{children:"INT widget"}),e.jsx("pre",{children:`"width": ("INT", {
    "default": 1024,
    "min": 64,
    "max": 4096,
    "step": 64,
    "display": "number"  # or "slider"
})`}),e.jsx("h2",{children:"FLOAT widget"}),e.jsx("pre",{children:`"strength": ("FLOAT", {
    "default": 1.0,
    "min": 0.0,
    "max": 2.0,
    "step": 0.05,
    "display": "number"
})`}),e.jsx("h2",{children:"STRING widget"}),e.jsx("pre",{children:`"prompt": ("STRING", {
    "default": "",
    "multiline": True,  # text area instead of single-line
})`}),e.jsx("h2",{children:"COMBO (dropdown) widget"}),e.jsx("pre",{children:`"sampler": (["euler", "dpmpp_2m", "ddim"],),
# or with default:
"mode": (["fast", "balanced", "quality"], {"default": "balanced"})`}),e.jsx("h2",{children:"BOOLEAN widget"}),e.jsx("pre",{children:'"normalize": ("BOOLEAN", {"default": True})'}),e.jsx("h2",{children:"Optional inputs"}),e.jsx("pre",{children:`return {
    "required": {"image": ("IMAGE",)},
    "optional": {"mask": ("MASK",)}  # may be missing at runtime
}`}),e.jsx("h2",{children:"Hidden inputs"}),e.jsx("pre",{children:`# Get a unique prompt ID and the API JSON automatically:
"hidden": {
    "prompt": "PROMPT",
    "extra_pnginfo": "EXTRA_PNGINFO"
}`}),e.jsx(i,{title:"The 'mirror existing nodes' approach",children:"When you're not sure about a widget config, find a similar built-in node and copy its INPUT_TYPES. ComfyUI's nodes.py has dozens of patterns to crib from."})]})}const u=Object.freeze(Object.defineProperty({__proto__:null,default:l},Symbol.toStringTag,{value:"Module"}));function d(){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Publishing your custom node to the Comfy Registry — the official package index used by ComfyUI Manager."}),e.jsx("h2",{children:"The package structure"}),e.jsx("pre",{children:`my-node-pack/
├── __init__.py          # NODE_CLASS_MAPPINGS export
├── nodes/               # actual node implementations
│   ├── node1.py
│   └── node2.py
├── requirements.txt     # pip dependencies
├── pyproject.toml       # comfy registry metadata
└── README.md`}),e.jsx("h2",{children:"pyproject.toml"}),e.jsx("pre",{children:`[project]
name = "comfyui-my-node-pack"
description = "What it does"
version = "1.0.0"
license = {file = "LICENSE"}

[tool.comfy]
PublisherId = "yourname"
DisplayName = "My Node Pack"
Icon = ""`}),e.jsx("h2",{children:"Publishing flow"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Push to public GitHub repo."}),e.jsxs("li",{children:[e.jsx("code",{children:"comfy-cli publish"})," from the repo root (registers with Comfy Registry)."]}),e.jsx("li",{children:"ComfyUI Manager users can install via the in-app Manager."})]}),e.jsx("h2",{children:"Local distribution (alternative)"}),e.jsx("p",{children:"Skip Registry; just publish on GitHub. Users install with:"}),e.jsx("pre",{children:`cd ~/AI/ComfyUI/custom_nodes
git clone https://github.com/yourname/your-node-pack`}),e.jsx("h2",{children:"Testing before publishing"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Test on Mac (MPS) AND request testers on NVIDIA — community expects both."}),e.jsx("li",{children:"Check no CUDA-only imports (xformers, sageattention)."}),e.jsx("li",{children:"Wrap CUDA-specific imports in try/except for Mac compatibility."})]}),e.jsx(i,{title:"The Mac-friendly publishing principle",children:"If your node depends on a CUDA-only library, mark it as such in the README and gracefully degrade on Mac. Don't make Mac users discover the incompatibility through cryptic errors."})]})}const x=Object.freeze(Object.defineProperty({__proto__:null,default:d},Symbol.toStringTag,{value:"Module"}));export{m as a,p as b,u as c,x as d,h as s};

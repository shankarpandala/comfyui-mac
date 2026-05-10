import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1ImageLatentMask() {
  return (
    <>
      <p>Tensor I/O conventions for ComfyUI custom nodes. Get these wrong and your node silently produces garbage.</p>

      <h2>IMAGE</h2>
      <ul>
        <li>Shape: <code>[B, H, W, 3]</code> — note <strong>HWC</strong>, not CHW.</li>
        <li>Dtype: <code>torch.float32</code>.</li>
        <li>Range: 0.0 to 1.0.</li>
        <li>Common mistake: passing CHW from PIL/numpy without permuting.</li>
      </ul>

      <h2>LATENT</h2>
      <ul>
        <li>Wrapped in a dict: <code>{`{"samples": tensor[B, C, H, W]}`}</code>.</li>
        <li>C varies: 4 (SD1.5/SDXL), 16 (SD3/FLUX), 16 (HunyuanVideo).</li>
        <li>Spatial: 1/8 of pixel dims (most VAEs).</li>
      </ul>

      <h2>MASK</h2>
      <ul>
        <li>Shape: <code>[B, H, W]</code> — single channel.</li>
        <li>Dtype: <code>torch.float32</code>.</li>
        <li>Range: 0.0 (preserve) to 1.0 (modify).</li>
      </ul>

      <h2>MODEL / CLIP / VAE / CONDITIONING</h2>
      <p>
        These are wrapped Python objects with their own classes (ModelPatcher, etc.). Pass through
        without modification unless you're writing a model patcher. CONDITIONING is a list of
        (embedding_tensor, dict_of_extras) pairs.
      </p>

      <h2>Conversion patterns</h2>
      <pre>{`# PIL Image to ComfyUI IMAGE
import numpy as np
img = np.array(pil_img).astype(np.float32) / 255.0  # HWC, [0,1]
tensor = torch.from_numpy(img).unsqueeze(0)  # add batch -> [1, H, W, 3]

# ComfyUI IMAGE to PIL
np_img = (tensor[0].cpu().numpy() * 255).astype(np.uint8)
pil_img = Image.fromarray(np_img)`}</pre>

      <NoteBlock title="The 'check shapes' rule">
        Custom node bugs almost always come from tensor shape/dtype mismatches. <code>print(tensor.shape, tensor.dtype, tensor.min(), tensor.max())</code> at the top of your method
        catches them fast.
      </NoteBlock>
    </>
  )
}

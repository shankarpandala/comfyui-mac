import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2MacAlternatives() {
  return (
    <>
      <p>
        With the CUDA-only kernels off the table, what does run on Mac? PyTorch's built-in scaled
        dot-product attention, called SDPA. It's fast enough, well-supported on MPS, and the path
        ComfyUI takes by default on Apple Silicon.
      </p>

      <DefinitionBlock title="torch.nn.functional.scaled_dot_product_attention (SDPA)">
        PyTorch's official memory-efficient attention. Three implementations under one API:
        <ul>
          <li><strong>FlashAttention</strong> on CUDA (when available).</li>
          <li><strong>Memory-efficient (xformers-like)</strong> on CUDA.</li>
          <li><strong>Math (vanilla)</strong> everywhere else, including MPS.</li>
        </ul>
        On Mac, SDPA dispatches to MPS Graph kernels that Apple keeps improving. It's the fastest
        attention path that exists on Apple Silicon today.
      </DefinitionBlock>

      <h2>How ComfyUI uses SDPA</h2>
      <p>
        Pass <code>--use-pytorch-cross-attention</code> at launch (or let ComfyUI auto-detect on
        Mac). Internal cross-attention layers in the UNet then call SDPA instead of any CUDA-specific
        path. As of PyTorch 2.5, SDPA has near-state-of-the-art performance on MPS for diffusion
        attention shapes.
      </p>

      <h2>Performance ballpark</h2>
      <p>For SDXL 1024×1024:</p>
      <ul>
        <li>Cross-attention is ~30% of total UNet step time.</li>
        <li>SDPA on MPS is roughly 3× slower than xformers on a 4090.</li>
        <li>That ratio improves over time as Apple optimizes MPS Graph attention kernels.</li>
      </ul>

      <h2>Other things that fall through to MPS automatically</h2>
      <ul>
        <li>RMSNorm, LayerNorm — fused in MPS Graph; fast.</li>
        <li>Group convolutions — most shapes are well-supported.</li>
        <li>FFTs (used by some upscalers) — slower than CUDA, present.</li>
      </ul>

      <h2>The practical attention checklist on Mac</h2>
      <ol>
        <li>Confirm ComfyUI startup says <code>Using pytorch cross attention</code>.</li>
        <li>Don't install xformers / sageattention / flash-attn.</li>
        <li>If a custom node demands one, patch with try/except (previous section).</li>
      </ol>

      <NoteBlock title="MLX-Attention is real, just not in ComfyUI">
        MLX has its own attention implementation that's competitive on Apple Silicon. We use it via
        Ollama and mlx-lm in Phase 7. It does not interface with PyTorch — it's a parallel universe
        accessible only through MLX's own model code.
      </NoteBlock>
    </>
  )
}

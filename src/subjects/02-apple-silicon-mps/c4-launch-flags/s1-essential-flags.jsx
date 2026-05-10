import CommandBlock from '../../../components/content/CommandBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1EssentialFlags() {
  return (
    <>
      <p>
        ComfyUI exposes dozens of launch flags. On Mac, half of them are CUDA-only and irrelevant; a
        handful are essential. This is the curated list, in priority order.
      </p>

      <h2>The starter set (always set)</h2>
      <CommandBlock
        command={`PYTORCH_ENABLE_MPS_FALLBACK=1 PYTORCH_MPS_HIGH_WATERMARK_RATIO=0.0 python main.py --force-fp16`}
        label="Mac default launch"
      />

      <table>
        <thead><tr><th>Flag</th><th>Purpose</th></tr></thead>
        <tbody>
          <tr><td><code>PYTORCH_ENABLE_MPS_FALLBACK=1</code></td><td>Fall back to CPU for ops MPS doesn't implement (covered in chapter 2 / section 3).</td></tr>
          <tr><td><code>PYTORCH_MPS_HIGH_WATERMARK_RATIO=0.0</code></td><td>Disable PyTorch's MPS allocator cap. Lets the OS manage memory pressure (chapter 5).</td></tr>
          <tr><td><code>--force-fp16</code></td><td>Load model weights as fp16. Critical — fp32 won't fit for most useful models.</td></tr>
        </tbody>
      </table>

      <h2>Optional but useful Mac flags</h2>
      <table>
        <thead><tr><th>Flag</th><th>When to use</th></tr></thead>
        <tbody>
          <tr><td><code>--bf16-unet</code></td><td>For SD3, FLUX, Hunyuan, Wan — models trained in bf16. Prevents NaN when fp16's range is too narrow.</td></tr>
          <tr><td><code>--bf16-vae</code></td><td>For FLUX VAE specifically (the FLUX VAE was bf16-trained).</td></tr>
          <tr><td><code>--fp16-vae</code></td><td>SDXL VAE; the safe default for SDXL.</td></tr>
          <tr><td><code>--cpu-vae</code></td><td>Forces VAE decode on CPU. On unified memory this is essentially free; it shaves a few hundred MB off peak GPU memory at the cost of slightly slower decode.</td></tr>
          <tr><td><code>--lowvram</code></td><td>Aggressive offloading. Use when even GGUF Q4 is borderline (e.g. HunyuanVideo on 24 GB).</td></tr>
          <tr><td><code>--novram</code></td><td>Even more aggressive than lowvram. Painful step times; emergency only.</td></tr>
          <tr><td><code>--use-pytorch-cross-attention</code></td><td>Forces PyTorch SDPA for attention. The Mac-friendly path; usually the default.</td></tr>
          <tr><td><code>--disable-smart-memory</code></td><td>Disables ComfyUI's "smart" memory model swapping. Sometimes helps; sometimes hurts. Try if you see weird OOMs.</td></tr>
        </tbody>
      </table>

      <h2>Flags to avoid on Mac</h2>
      <table>
        <thead><tr><th>Flag</th><th>Why</th></tr></thead>
        <tbody>
          <tr><td><code>--fp8_e4m3fn-unet</code> / <code>--fp8_e5m2-unet</code></td><td>fp8 not supported on MPS (chapter 3). These flags are dead letters on Mac.</td></tr>
          <tr><td><code>--use-xformers</code></td><td>xformers is CUDA-only.</td></tr>
          <tr><td><code>--use-sage-attention</code></td><td>sage-attention is CUDA-only.</td></tr>
          <tr><td><code>--cuda-device</code></td><td>No CUDA on Mac.</td></tr>
          <tr><td><code>--cuda-malloc</code></td><td>No CUDA on Mac.</td></tr>
        </tbody>
      </table>

      <NoteBlock title="ComfyUI auto-detects Mac">
        ComfyUI's startup banner will say something like <code>Set vram state to: NORMAL_VRAM</code>{' '}
        and <code>Device: mps</code>. If it instead says <code>Device: cpu</code>, your PyTorch
        install is missing MPS — see Subject 01 / Chapter 2 / Section 3.
      </NoteBlock>

      <h2>The launch script, expanded</h2>
      <p>Updating the script from Subject 01 to handle different model classes:</p>
      <pre>{`#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"
source venv/bin/activate
export PYTORCH_ENABLE_MPS_FALLBACK=1
export PYTORCH_MPS_HIGH_WATERMARK_RATIO=0.0

case "\${1:-default}" in
  flux|sd3|hunyuan|wan)
    shift
    python main.py --force-fp16 --bf16-unet --bf16-vae --use-pytorch-cross-attention "$@"
    ;;
  lowvram)
    shift
    python main.py --force-fp16 --lowvram --bf16-unet --use-pytorch-cross-attention "$@"
    ;;
  *)
    python main.py --force-fp16 "$@"
    ;;
esac`}</pre>

      <p>
        Now <code>./start.sh flux</code> uses the bf16-friendly settings; <code>./start.sh lowvram</code>{' '}
        for tight memory; <code>./start.sh</code> for default SD/SDXL.
      </p>
    </>
  )
}

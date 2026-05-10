import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3SftAndOthers() {
  return (
    <>
      <p>
        Beyond <code>.ckpt</code> / <code>.safetensors</code> / <code>.gguf</code>, you'll
        occasionally see other extensions. Most are just renames; a few are different formats with
        their own loaders.
      </p>

      <h2>.sft</h2>
      <p>
        Some ComfyUI-friendly distributions use <code>.sft</code> as a synonym for safetensors — the
        format is identical, only the extension differs. The historical reason: certain content
        moderation systems used to filter <code>.safetensors</code> in URL paths; <code>.sft</code>{' '}
        slipped past. Today both are common.
      </p>
      <p>
        ComfyUI loaders that accept <code>.safetensors</code> generally also accept <code>.sft</code>{' '}
        — you can rename the file if a loader is fussy.
      </p>

      <h2>.bin / .pt</h2>
      <p>
        Older PyTorch state-dict formats. Effectively the same risk profile as <code>.ckpt</code>{' '}
        (pickle-based; can execute code on load). Treat with the same caution. Less common in 2026.
      </p>

      <h2>.pth</h2>
      <p>
        Another PyTorch convention, often used by upscalers and face-restoration models (GFPGAN,
        CodeFormer, ESRGAN). Pickle-based, but the upscaler ecosystem is small and
        well-known-trusted; we generally accept these.
      </p>

      <h2>Diffusers format (a directory, not a file)</h2>
      <p>
        Hugging Face's <code>diffusers</code> library ships models as folders containing several
        files (one per submodule). When a model card says "diffusers format," the path is a
        directory, not a single file. ComfyUI can load these via the <code>diffusers</code>{' '}
        category of loaders, but the conventional path on Mac is to download the consolidated
        safetensors instead.
      </p>

      <h2>ONNX (.onnx)</h2>
      <p>
        Cross-framework neural net format. Some Mac users run SDXL via ONNX-CoreML pipelines for
        fast inference; that's <em>not</em> ComfyUI. We mention ONNX because some preprocessor
        nodes (DWPose) load ONNX models internally — they unwrap and use ONNX Runtime under the
        hood, hidden from the user.
      </p>

      <h2>Format → loader cheat sheet</h2>
      <table>
        <thead><tr><th>Extension</th><th>Likely contents</th><th>ComfyUI loader</th></tr></thead>
        <tbody>
          <tr><td><code>.safetensors</code> / <code>.sft</code></td><td>Full checkpoint, UNet-only, LoRA, ControlNet, VAE</td><td>CheckpointLoaderSimple, UnetLoader, LoraLoader, etc.</td></tr>
          <tr><td><code>.gguf</code></td><td>Quantized UNet or text encoder</td><td>UnetLoaderGGUF, DualCLIPLoaderGGUF</td></tr>
          <tr><td><code>.ckpt</code> / <code>.bin</code> / <code>.pt</code></td><td>Older pickle</td><td>CheckpointLoaderSimple (warns)</td></tr>
          <tr><td><code>.pth</code></td><td>Upscaler / face restorer</td><td>UpscaleModelLoader, FaceRestoreModelLoader</td></tr>
          <tr><td><code>.onnx</code></td><td>Preprocessor (rare end-user)</td><td>Internal to specific custom nodes</td></tr>
        </tbody>
      </table>

      <NoteBlock title="The 95% rule">
        95% of the files you'll touch in this curriculum are <code>.safetensors</code> or{' '}
        <code>.gguf</code>. Master those two and the rest is handled by edge cases.
      </NoteBlock>
    </>
  )
}

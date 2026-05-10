import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import WarningBlock from '../../../components/content/WarningBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1CkptVsSafetensors() {
  return (
    <>
      <p>
        Before quantization, file formats. The bytes on disk affect what loads, how fast, and
        whether opening the file is safe. Three primary formats exist; you should know all three on
        sight.
      </p>

      <DefinitionBlock title="The three primary formats">
        <ul>
          <li><strong>.ckpt</strong> — Python pickle file. The original PyTorch checkpoint format. Can execute arbitrary code on load.</li>
          <li><strong>.safetensors</strong> — Header + raw tensor blob. Safe (no code execution). The modern default.</li>
          <li><strong>.gguf</strong> — Quantized format with embedded scales and metadata. Originally for llama.cpp; adapted for diffusion.</li>
        </ul>
      </DefinitionBlock>

      <h2>Why .ckpt is dangerous</h2>
      <p>
        A <code>.ckpt</code> is a Python pickle stream. When PyTorch loads it via <code>torch.load</code>,
        the unpickler can be tricked into executing arbitrary Python — opening sockets, exfiltrating
        files, mining crypto. There have been real-world malicious checkpoints distributed on
        CivitAI and similar mirrors.
      </p>
      <WarningBlock title="Don't load .ckpt files from untrusted sources">
        Especially newer ones. There's no upside left — every reputable model now ships
        .safetensors. If the only available file is .ckpt, get the safetensors fork or skip the
        model.
      </WarningBlock>

      <h2>Why .safetensors solves the problem</h2>
      <p>
        The format is simple: a JSON header describing tensor names, dtypes, shapes, and byte
        offsets, followed by the raw tensor data as a contiguous blob. Loading is just{' '}
        <code>mmap</code> + tensor view creation; no code is executed. Memory-mapping also makes
        load times faster.
      </p>

      <h2>What's inside a checkpoint</h2>
      <p>An SDXL <code>.safetensors</code> file typically contains:</p>
      <ul>
        <li>UNet weights (~6.7 GB at fp16)</li>
        <li>CLIP-L text encoder (~250 MB)</li>
        <li>CLIP-G text encoder (~700 MB)</li>
        <li>VAE encoder + decoder (~340 MB)</li>
        <li>Optional metadata (training notes, hashes)</li>
      </ul>
      <p>
        ComfyUI's <code>CheckpointLoaderSimple</code> demuxes this bundle into the MODEL/CLIP/VAE
        outputs you wire into the rest of the graph.
      </p>

      <h2>Pruned vs unpruned</h2>
      <p>
        A "pruned" checkpoint removes EMA weights, optimizer states, and other training-only data.
        Inference-only file. SDXL pruned ≈ 6.7 GB; unpruned can be 13+ GB. Unless you're explicitly
        fine-tuning, always grab the pruned version.
      </p>

      <h2>safetensors with quantization</h2>
      <p>
        You'll see filenames like <code>flux1-dev-fp8.safetensors</code>. The format is the same
        — only the tensor dtype changes. On Mac these fp8-tagged safetensors files are unusable;
        we covered the substitution table in Subject 02 / Chapter 3.
      </p>

      <NoteBlock title="ComfyUI prefers .safetensors">
        ComfyUI will warn you when loading a .ckpt that pickle execution is happening. It does not
        warn for .safetensors because there's nothing to warn about. Treat any .ckpt warning as a
        reason to find the safetensors mirror instead.
      </NoteBlock>
    </>
  )
}

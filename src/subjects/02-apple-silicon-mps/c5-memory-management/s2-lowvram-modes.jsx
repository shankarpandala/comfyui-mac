import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2LowvramModes() {
  return (
    <>
      <p>
        ComfyUI has three vram modes: <code>highvram</code>, <code>normalvram</code>,{' '}
        <code>lowvram</code>, plus <code>novram</code>. They control how aggressively ComfyUI swaps
        models between GPU and CPU. On Mac unified memory, "swap to CPU" is mostly free, but it does
        force serialization that costs time.
      </p>

      <DefinitionBlock title="The four modes">
        <ul>
          <li><strong>highvram</strong> — keep everything on GPU. Default on big NVIDIA cards.</li>
          <li><strong>normalvram</strong> — keep the active model on GPU; swap text encoders / VAE. Default.</li>
          <li><strong>lowvram</strong> — actively offload UNet blocks during forward pass. Slower; shrinks peak VRAM.</li>
          <li><strong>novram</strong> — most aggressive offloading; keeps almost nothing resident. Painful.</li>
        </ul>
      </DefinitionBlock>

      <h2>How "swap" works on unified memory</h2>
      <p>
        When ComfyUI moves a tensor "from GPU to CPU" on Mac, the bytes don't actually go anywhere —
        only the device tag changes. <em>But</em> the practical impact is that the next operation
        wanting a GPU version has to wait for the device-context switch and synchronize. That's
        cheap individually; expensive in tight loops.
      </p>
      <p>
        So lowvram on Mac doesn't free physical bytes the way it does on NVIDIA, but it does prevent
        ComfyUI's PyTorch caching allocator from holding extra fragments. Net effect: smaller peak
        memory usage, slower step times.
      </p>

      <h2>When to use each</h2>
      <ul>
        <li><strong>SD1.5 / SDXL</strong> — default (normalvram). Plenty of headroom.</li>
        <li><strong>FLUX Dev GGUF Q5</strong> — default works.</li>
        <li><strong>FLUX Dev fp16 (~23 GB)</strong> — won't fit; use GGUF instead. lowvram alone won't save you.</li>
        <li><strong>HunyuanVideo GGUF Q4</strong> — try default first; switch to <code>--lowvram</code> if OOM.</li>
        <li><strong>Wan 14B GGUF Q4 + I2V at 720p</strong> — likely needs <code>--lowvram</code>.</li>
        <li><strong>SD3.5 Large bf16</strong> — borderline; <code>--lowvram</code> + <code>--cpu-vae</code> is the safe combo.</li>
      </ul>

      <h2>Per-node memory hints</h2>
      <p>
        Some nodes accept a <code>load_device</code> parameter (e.g., <code>ETN_LoadCheckpoint</code>{' '}
        from External Tooling Nodes). Setting it to <code>cpu</code> for components you rarely touch
        — like a never-changing reference VAE — frees GPU memory at near-zero cost on Mac.
      </p>

      <h2>The order of operations matters</h2>
      <p>
        ComfyUI plans the graph and decides which nodes to keep resident. If you have one expensive
        UNet feeding three KSamplers in parallel, ComfyUI keeps the UNet resident across all three
        sampler runs. If you instead have a different UNet per KSampler, the graph runner has to
        load/unload between runs — slower. Build graphs that share heavy nodes when you can.
      </p>

      <NoteBlock title="If lowvram doesn't help">
        Sometimes <code>--lowvram</code> doesn't fix OOM — usually because the offending tensor is an
        activation rather than a weight, and activations don't get offloaded by the vram modes. In
        that case: reduce resolution, reduce batch size, or use a smaller GGUF quant.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1TorchProfiler() {
  return (
    <>
      <p>PyTorch's profiler reveals where your workflow's time actually goes. Use when something feels slow and you want hard evidence about which op is the bottleneck.</p>

      <h2>The profiler wrapper</h2>
      <pre>{`from torch.profiler import profile, ProfilerActivity, record_function
import torch

# Wrap your model forward pass:
with profile(
    activities=[ProfilerActivity.CPU, ProfilerActivity.MPS],
    record_shapes=True
) as prof:
    with record_function("forward"):
        out = model(x)
        torch.mps.synchronize()

# Print the slowest ops:
print(prof.key_averages().table(
    sort_by="cpu_time_total",
    row_limit=20
))`}</pre>

      <h2>What to look for</h2>
      <ul>
        <li><strong>Top time on CPU</strong> when GPU should be doing the work → CPU fallback hotspot.</li>
        <li><strong>aten::to operations</strong> at the top → unnecessary device transfers.</li>
        <li><strong>Memory ops dominating</strong> → batch_size or resolution too high.</li>
      </ul>

      <h2>For ComfyUI specifically</h2>
      <p>
        Profile a custom node by wrapping its <code>FUNCTION</code> method body with the profile
        block. Run a queue; the profile prints to stdout (visible in the launching terminal).
      </p>

      <h2>asitop / mactop as live alternatives</h2>
      <p>
        For real-time checking (without instrumenting code), asitop / mactop (Subject 02 / Chapter 6)
        show GPU vs CPU usage live. Often enough to spot fallback hotspots without formal profiling.
      </p>

      <NoteBlock title="The 'profile before optimizing' rule">
        Don't speculate about why something is slow. Profile. Real bottlenecks are often surprising
        — a tiny preprocess can dominate a long sample if it's CPU-fallback.
      </NoteBlock>
    </>
  )
}

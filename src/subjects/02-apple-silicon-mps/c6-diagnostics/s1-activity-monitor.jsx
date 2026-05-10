import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1ActivityMonitor() {
  return (
    <>
      <p>
        Activity Monitor is the low-tech baseline diagnostic on Mac. It's not as detailed as <code>asitop</code>{' '}
        or PyTorch's profiler, but it ships with the OS and shows the metrics that matter most.
      </p>

      <h2>The four tabs</h2>

      <h3>Memory</h3>
      <p>The most important tab for ComfyUI users.</p>
      <ul>
        <li><strong>Memory column</strong> — sort descending. ComfyUI (the <code>python</code> process) should be near the top during a workflow.</li>
        <li><strong>Memory Pressure indicator</strong> — bottom of window. Green / Yellow / Red graph over time.</li>
        <li><strong>Compressed</strong> — fine if a few GB, worrying if growing.</li>
        <li><strong>Swap Used</strong> — should be near 0 GB during ComfyUI sessions.</li>
        <li><strong>Cached Files</strong> — disk cache; the OS will release this as needed. Don't worry about it.</li>
      </ul>

      <h3>CPU</h3>
      <ul>
        <li>ComfyUI's main thread should be 100%+ during sampler steps (the Python orchestration).</li>
        <li>If CPU is 100% on a long sampler step but GPU is low — you've found a CPU fallback hotspot.</li>
      </ul>

      <h3>GPU (introduced in newer macOS)</h3>
      <ul>
        <li>Per-process GPU usage. ComfyUI should hit 80–100% during forward passes.</li>
        <li>"GPU History" graph — should be a near-solid bar during a sampler run, not spiky.</li>
      </ul>

      <h3>Energy</h3>
      <p>Useful on battery. ComfyUI is "Very High" energy impact during sampling — expected.</p>

      <h2>Reading a healthy SDXL run</h2>
      <ul>
        <li>Memory: ComfyUI ~10 GB, total Used ~17 GB, Pressure green.</li>
        <li>CPU: <code>python</code> ~150% (multiple threads).</li>
        <li>GPU: 90–100% during sampler steps; idle between steps.</li>
        <li>Swap: 0.</li>
      </ul>

      <h2>Reading an unhealthy run</h2>
      <ul>
        <li>Memory: total Used ~22 GB, Pressure yellow, Compressed climbing — heading toward swap.</li>
        <li>CPU: <code>python</code> 100% but GPU near 0% — CPU fallback active. Profile to find the op.</li>
        <li>Multiple "WindowServer" or browser instances at the top alongside python — quit them.</li>
      </ul>

      <NoteBlock title="Open it before, not after">
        Activity Monitor takes a few seconds to "warm up" its graphs. Open it before launching the
        workflow, leave it visible. By the time you'd be reaching for it, the symptoms have already
        gone past their peak.
      </NoteBlock>
    </>
  )
}

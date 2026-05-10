import NoteBlock from '../../../components/content/NoteBlock.jsx'
import CommandBlock from '../../../components/content/CommandBlock.jsx'

export default function S1BenchMethod() {
  return (
    <>
      <p>
        Knowing what speed your machine should be hitting on a given workflow is the difference
        between "this is normal" and "something is wrong." This section is the methodology; the next
        is the reference numbers.
      </p>

      <h2>Steps per second (it/s)</h2>
      <p>
        ComfyUI's progress bar reports <strong>it/s</strong> — sampler iterations per second. For a
        20-step SDXL run at 4 it/s, the sampler portion is 5 seconds. Total wall time is sampler +
        load + decode + save, so usually a bit more.
      </p>

      <h2>Methodology — three rules</h2>

      <h3>1. Throw away the first run</h3>
      <p>
        First run loads the model from disk (cold) and JIT-compiles MPS kernels. Step time will be
        2–5× slower than steady state. Always queue once to "warm up", then measure on the second
        run.
      </p>

      <h3>2. Three runs, take the median</h3>
      <p>
        Variance is real on macOS — background processes, thermal throttling, memory pressure. Three
        consecutive runs + median is enough to remove most outliers.
      </p>

      <h3>3. Same prompt, same seed, fixed scheduler</h3>
      <p>
        Sampler step time depends on the model and resolution, not the prompt. Use a fixed seed so
        comparisons are like-for-like. dpm++ 2m karras at 20 steps is a good default benchmark
        config.
      </p>

      <h2>What to record per run</h2>
      <ul>
        <li>Model + dtype (e.g., <code>SDXL fp16</code>, <code>FLUX Q5_K_S</code>).</li>
        <li>Resolution.</li>
        <li>Sampler + scheduler + steps.</li>
        <li>it/s (median of 3).</li>
        <li>Total wall time.</li>
        <li>Peak memory (from Activity Monitor).</li>
        <li>Any non-default flags (lowvram, cpu-vae, etc.).</li>
      </ul>

      <h2>Quick CLI benchmark</h2>
      <p>For a non-ComfyUI sanity check that your MPS install is healthy:</p>
      <pre>{`# benchmark.py
import torch, time
device = 'mps'
x = torch.randn(4096, 4096, device=device)
# warm-up
for _ in range(3): y = x @ x
torch.mps.synchronize()
# measure
t = time.perf_counter()
for _ in range(50): y = x @ x
torch.mps.synchronize()
print(f"matmul 4096x4096 mps: {50 / (time.perf_counter() - t):.1f} ops/s")`}</pre>
      <CommandBlock command="python benchmark.py" />
      <p>On a healthy M5 Pro, expect a couple hundred ops/s on this matmul size. Wildly different = something is off (Rosetta, CPU device, etc.).</p>

      <NoteBlock title="Thermal throttling">
        After ~10 minutes of sustained sampling, M-series MacBooks throttle. Step times drift up by
        20–40%. For benchmarking, do your runs in the first few minutes after launch.
      </NoteBlock>
    </>
  )
}

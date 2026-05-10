import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1BatchVsSeq() {
  return (
    <>
      <p>
        ComfyUI gives you two ways to generate multiple images: <code>batch_size</code> in
        EmptyLatentImage (parallel within one sampler call) and <code>batch count</code> in the
        queue header (sequential — multiple separate runs). On Mac unified memory the trade-off
        plays differently than on NVIDIA.
      </p>

      <h2>Parallel batch — batch_size</h2>
      <ul>
        <li>One KSampler call processes N images simultaneously.</li>
        <li>Activations scale with N — memory ~N× the single-image cost.</li>
        <li>Compute scales sub-linearly (better GPU utilization).</li>
        <li>All N images share the same prompt; only seeds differ (offset by 0, 1, 2, ...).</li>
      </ul>

      <h2>Sequential batch — queue batch count</h2>
      <ul>
        <li>The whole graph runs N times; each run is independent.</li>
        <li>Memory cost stays at single-image level.</li>
        <li>Total time = N × single-image time, exactly.</li>
        <li>Each run can have a different seed and (with random seed) different output.</li>
      </ul>

      <h2>SD 1.5 batch sizing on M5 Pro</h2>
      <table>
        <thead><tr><th>batch_size</th><th>Wall time (512×512 × 20 steps)</th><th>Memory</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>~3 s</td><td>~2 GB</td></tr>
          <tr><td>2</td><td>~5 s</td><td>~3 GB</td></tr>
          <tr><td>4</td><td>~9 s</td><td>~5 GB</td></tr>
          <tr><td>8</td><td>~17 s</td><td>~9 GB</td></tr>
        </tbody>
      </table>
      <p>
        Sub-linear in time (4× the images takes 3× the time) — small batching wins. Beyond 8, memory
        scales faster than benefit.
      </p>

      <h2>When to use which</h2>
      <ul>
        <li><strong>batch_size 4 + count 1</strong> — fast 4-pack of variations of one prompt.</li>
        <li><strong>batch_size 1 + count 8</strong> — 8 different random seeds, single prompt; good when memory is tight or you want to avoid the small batch_size memory growth.</li>
        <li><strong>batch_size 1 + count 1</strong> — iterating prompts; one image per queue.</li>
      </ul>

      <NoteBlock title="The memory wall">
        On Mac, batch_size grows activation memory faster than weight memory. SD 1.5 batch 8 is fine;
        SDXL batch 4 is borderline; FLUX batch 1 is the only realistic option. Plan accordingly.
      </NoteBlock>
    </>
  )
}

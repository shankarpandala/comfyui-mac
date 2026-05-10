import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2ResolutionCost() {
  return (
    <>
      <p>
        Resolution scales activation memory quadratically. Doubling each dimension means 4× the
        activations. Knowing the curve helps you find the right resolution for your memory budget.
      </p>

      <h2>SDXL activation memory by resolution (single image, 25 steps)</h2>
      <table>
        <thead><tr><th>Resolution</th><th>Activation memory</th><th>Wall time on M5 Pro</th></tr></thead>
        <tbody>
          <tr><td>768 × 768</td><td>~1.4 GB</td><td>~10 s</td></tr>
          <tr><td>1024 × 1024</td><td>~2.5 GB</td><td>~17 s</td></tr>
          <tr><td>1216 × 832</td><td>~2.5 GB</td><td>~17 s</td></tr>
          <tr><td>1344 × 768</td><td>~2.6 GB</td><td>~18 s</td></tr>
          <tr><td>1536 × 1024</td><td>~3.7 GB</td><td>~28 s</td></tr>
          <tr><td>1536 × 1536</td><td>~5.6 GB</td><td>~45 s</td></tr>
          <tr><td>2048 × 1024</td><td>~5.0 GB</td><td>~38 s</td></tr>
        </tbody>
      </table>

      <h2>The "stay native" rule</h2>
      <p>
        Stick to SDXL's trained aspect-ratio buckets (1024×1024, 1216×832, 1344×768, 832×1216,
        768×1344). Off-bucket resolutions cost the same memory but produce worse compositions. You
        already pay the resolution cost — get the quality benefit.
      </p>

      <h2>Beyond 1536</h2>
      <p>
        For outputs &gt; 1536 in either dimension, switch from "generate big" to "generate native +
        upscale". An ESRGAN 4× upscale on a 1024 SDXL output gives you 4096×4096 in ~5 seconds. A
        direct 2048×2048 SDXL generation takes 70+ seconds and probably has composition issues. The
        upscaler wins.
      </p>

      <NoteBlock title="The Mac sweet spot">
        For most SDXL work on M5 Pro: 1024×1024 generation, optional ESRGAN upscale to 2048 or 4096
        for final delivery. This pipeline is fast, stable, and produces excellent results.
      </NoteBlock>
    </>
  )
}

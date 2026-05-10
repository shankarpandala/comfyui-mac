import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1WhenToRefine() {
  return (
    <>
      <p>
        SDXL ships with two checkpoints: <strong>base</strong> and <strong>refiner</strong>. The
        original recipe runs both — base generates the composition, refiner sharpens detail. Most
        modern SDXL finetunes (Juggernaut, RealVisXL) are base-only and don't need a refiner.
      </p>

      <h2>The original "ensemble of experts" pipeline</h2>
      <pre>{`Base CheckpointLoader → KSampler #1 (steps=25, denoise=1.0, end_at_step=20)
                                    → LATENT
Refiner CheckpointLoader → KSampler #2 (steps=25, denoise=0.2, start_at_step=20)
                                    → VAEDecode`}</pre>
      <p>
        Base does steps 0–20; refiner does steps 20–25 with low denoise. Together they produce
        slightly sharper output than base alone.
      </p>

      <h2>Does the refiner still matter in 2026?</h2>
      <p>
        Mostly no, for three reasons:
      </p>
      <ol>
        <li>Modern community finetunes (Juggernaut XL v9, RealVisXL v4) outperform base+refiner.</li>
        <li>The refiner adds ~7 GB to the workflow (memory, disk, load time).</li>
        <li>FaceDetailer / SUPIR-style upscale post-processing gives more bang for the same compute.</li>
      </ol>

      <h2>When the refiner does help</h2>
      <ul>
        <li>Vanilla SDXL base 1.0 outputs that need a polish pass.</li>
        <li>Specific texture types (skin, fabric, fur) where the refiner was particularly good.</li>
        <li>Reproducing tutorials and recipes from 2023–early-2024.</li>
      </ul>

      <NoteBlock title="The Mac decision">
        On 24 GB Mac, base + refiner is ~13 GB of weights — workable but tight when you also want
        ControlNet or IP-Adapter. Skip the refiner unless you have a specific reason. Mac time-cost is
        also significant: refiner adds ~5 s per image.
      </NoteBlock>
    </>
  )
}

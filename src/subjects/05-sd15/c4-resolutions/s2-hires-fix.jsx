import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2HiresFix() {
  return (
    <>
      <p>
        Hi-res fix is the standard pattern for SD 1.5 outputs above 512: generate at native size,
        upscale the latent, run a partial-denoise pass at the higher size to repair details. The
        result has the composition of the small generation and the detail of the larger one.
      </p>

      <h2>The graph</h2>
      <pre>{`CheckpointLoader → KSampler #1 → LatentUpscale → KSampler #2 → VAEDecode → SaveImage
                       (512×512)        (×2)        (1024×1024
                                                    denoise=0.5)`}</pre>

      <h2>Step-by-step</h2>
      <ol>
        <li>Standard t2i pipeline producing a 512 latent (KSampler #1, denoise=1.0).</li>
        <li><strong>LatentUpscale</strong> node — bilinear or nearest-neighbor upscale to 1024 latent (i.e., the latent goes from 64×64 to 128×128).</li>
        <li>Second KSampler — same MODEL/CONDITIONING, takes the upscaled latent, denoise=0.4–0.6, ~15 steps.</li>
        <li>VAEDecode and Save.</li>
      </ol>

      <h2>Choosing denoise</h2>
      <ul>
        <li><strong>0.3</strong> — preserves composition tightly; small detail improvement.</li>
        <li><strong>0.5</strong> — typical sweet spot.</li>
        <li><strong>0.7</strong> — strong refinement; can change minor composition elements.</li>
        <li><strong>1.0</strong> — full re-sample at high res; you lose the composition anchor — equivalent to direct 1024 generation, which we know fails.</li>
      </ul>

      <h2>Latent vs pixel upscale for the bridge</h2>
      <ul>
        <li><strong>LatentUpscale</strong> (bilinear) — fast, "fake" higher res. Good enough for the hi-res-fix bridge.</li>
        <li><strong>LatentUpscaleBy</strong> with method=area — slightly different bilinear; usually similar.</li>
        <li><strong>VAEDecode → ImageUpscaleWithModel (ESRGAN) → VAEEncode</strong> — much better detail to start the second pass. Slower but produces sharper finals.</li>
      </ul>

      <NoteBlock title="On Mac">
        SD 1.5 hi-res-fix to 1024 takes ~10 s end-to-end on M5 Pro (3 s base + 7 s refinement). Very
        usable. For SDXL, the equivalent pattern uses SDXL's native 1024 resolution — no hi-res-fix
        needed for that target.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2EnsembleOfExperts() {
  return (
    <>
      <p>
        If you do want to run base + refiner, the canonical "ensemble of experts" workflow uses{' '}
        <code>KSamplerAdvanced</code> nodes to control which steps each model runs.
      </p>

      <h2>Step ranges</h2>
      <table>
        <thead><tr><th>Sampler</th><th>start_at_step</th><th>end_at_step</th><th>Denoise behavior</th></tr></thead>
        <tbody>
          <tr><td>KSampler #1 (base)</td><td>0</td><td>20</td><td>add_noise=enable, return_with_leftover_noise=enable</td></tr>
          <tr><td>KSampler #2 (refiner)</td><td>20</td><td>25</td><td>add_noise=disable, return_with_leftover_noise=disable</td></tr>
        </tbody>
      </table>
      <p>
        Both samplers use the same <code>steps=25</code> and <code>seed</code>. The first runs a
        partial denoise; the second picks up where it left off using the refiner's MODEL.
      </p>

      <h2>Why KSamplerAdvanced and not regular KSampler</h2>
      <p>
        Regular KSampler always runs all <code>steps</code> from full noise. Advanced exposes the
        partial-range knobs we need to chain two models on the same noise schedule.
      </p>

      <h2>The conditioning</h2>
      <p>
        Both samplers need positive + negative conditioning. The base uses standard CLIPTextEncode;
        the refiner uses <code>CLIPTextEncodeSDXLRefiner</code> (which adds the aesthetic_score
        field). You can use the same prompt for both, or write a different one for the refiner
        (uncommon).
      </p>

      <h2>Memory pattern on Mac</h2>
      <p>
        Both UNets stay resident; only one runs at a time. Activity Monitor will show ~13 GB
        committed during the workflow. ComfyUI's smart memory will keep both cached for subsequent
        runs unless you switch checkpoints.
      </p>

      <NoteBlock title="The simpler alternative">
        Use a community finetune (Juggernaut XL v9) and skip the refiner entirely. Single-pass
        output is competitive and uses half the memory. The ensemble pipeline is mostly a historical
        artifact at this point.
      </NoteBlock>
    </>
  )
}

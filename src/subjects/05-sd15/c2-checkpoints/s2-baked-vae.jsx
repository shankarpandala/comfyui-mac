import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2BakedVae() {
  return (
    <>
      <p>
        Many community SD 1.5 checkpoints embed a custom VAE inside the .safetensors file. This is
        the "baked-in" pattern. Convenient when it works; confusing when it doesn't.
      </p>

      <h2>How to tell</h2>
      <ul>
        <li>Filename hint: <code>realisticVisionV60B1_v51HyperVAE.safetensors</code> — the "VAE" suffix declares the bake.</li>
        <li>CivitAI model page usually states "VAE included".</li>
        <li>The file is ~340 MB larger than a VAE-less variant.</li>
      </ul>

      <h2>When the baked VAE wins</h2>
      <p>
        Some finetunes train against a specific custom VAE; the bundled VAE matches the UNet's
        learned color/contrast bias. Using a different VAE produces washed-out or oversaturated
        outputs. For these models, leave the bundled VAE alone.
      </p>

      <h2>When you want to override</h2>
      <ul>
        <li>You suspect a checkpoint's VAE is buggy (rare in modern models).</li>
        <li>You want a specific color cast (e.g., the kl-f8-anime2 VAE for anime LoRAs).</li>
        <li>You're bridging two pipelines and need consistent VAE behavior.</li>
      </ul>

      <h2>How to override</h2>
      <ol>
        <li>Add a <code>VAELoader</code> node, pick your replacement VAE.</li>
        <li>In <code>VAEDecode</code>, wire the VAELoader's VAE output instead of CheckpointLoader's.</li>
      </ol>
      <p>The CheckpointLoader's VAE output simply becomes unused. ComfyUI's caching means it doesn't cost extra to leave it dangling.</p>

      <NoteBlock title="When in doubt, use the bundled VAE">
        For 95% of checkpoints, the bundled VAE is what the model author tested with. Only override
        if you have a specific reason.
      </NoteBlock>
    </>
  )
}

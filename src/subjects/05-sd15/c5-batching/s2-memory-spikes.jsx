import MacGotchaBlock from '../../../components/content/MacGotchaBlock.jsx'

export default function S2MemorySpikes() {
  return (
    <>
      <p>
        Watch Activity Monitor during a SD 1.5 batch run and you'll see two distinct memory spikes
        per image: one when the UNet does its forward pass, one when VAEDecode runs. On tight
        budgets these can OOM you even when the average memory looks fine.
      </p>

      <h2>The two-spike pattern</h2>
      <ol>
        <li><strong>UNet forward</strong> — model weights + activations. Spike size = batch_size × per-image-activation + UNet params.</li>
        <li><strong>VAEDecode</strong> — VAE weights + decode-time activations. Spike size = batch_size × VAE-decode-activation + VAE params.</li>
      </ol>
      <p>
        The two don't overlap — but ComfyUI may keep the UNet resident across batches, so total
        memory stays elevated.
      </p>

      <h2>What causes a spike to OOM</h2>
      <ul>
        <li>Other apps using memory (Safari background tabs, Slack, etc.)</li>
        <li>A previous workflow's model still cached.</li>
        <li>batch_size too large for resolution.</li>
        <li>Large VAE (FLUX, Hunyuan) on CPU not GPU.</li>
      </ul>

      <h2>Mitigations on Mac</h2>
      <ul>
        <li><code>--cpu-vae</code> — moves VAE to CPU. On unified memory this is ~free, eliminates the second spike entirely.</li>
        <li><code>--lowvram</code> — offloads more aggressively. Slower but won't OOM.</li>
        <li>Reduce batch_size by 1 — usually the simplest fix.</li>
        <li>Reduce resolution to 448×448 — activations scale with H×W.</li>
      </ul>

      <MacGotchaBlock title="The 'mid-run OOM' is the worst case">
        OOM at the UNet step kills the queue cleanly. OOM at VAEDecode after a 30-second sample
        means you wait 30 seconds, then lose the result. Configure conservatively — leave 4 GB
        headroom — to avoid burning compute on never-saved outputs.
      </MacGotchaBlock>
    </>
  )
}

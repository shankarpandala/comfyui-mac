import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3ProAvailability() {
  return (
    <>
      <p>
        FLUX Pro is Black Forest Labs's flagship cloud variant — better quality than Dev, available
        only via their API or partner platforms (Replicate, fal.ai). Not part of this curriculum
        because we focus on local Mac inference, but worth knowing about.
      </p>

      <h2>FLUX Pro variants</h2>
      <ul>
        <li><strong>FLUX 1.1 Pro</strong> — base Pro model.</li>
        <li><strong>FLUX 1.1 Pro Ultra</strong> — higher resolution support, slightly better quality.</li>
        <li><strong>FLUX 1.1 Pro Raw</strong> — less aesthetic finetuning, more "documentary" feel.</li>
      </ul>

      <h2>Why you might call out to it</h2>
      <ul>
        <li>Final hero render where 24 GB Mac quality ceiling matters.</li>
        <li>Workflows requiring &gt; 2K native resolution.</li>
        <li>Production where you can spend a few cents per image.</li>
      </ul>

      <h2>API integration in ComfyUI</h2>
      <p>
        Several custom nodes wrap the FLUX Pro API. They consume API keys, send prompts over HTTP,
        return generated images that flow into the rest of your local workflow. For purely local
        running, ignore them.
      </p>

      <h2>What we use locally instead</h2>
      <ul>
        <li><strong>FLUX Dev GGUF Q5_K_S</strong> for hero quality (~90% of Pro on most prompts).</li>
        <li><strong>FLUX Schnell GGUF Q5_K_S</strong> for iteration (~80% of Pro at 5× speed).</li>
        <li><strong>SUPIR upscale</strong> (Subject 14) to push beyond FLUX's native resolution.</li>
      </ul>

      <NoteBlock title="The local sufficiency principle">
        For 95% of personal/educational/iterative work, FLUX Dev locally on Mac is enough. Pro is
        for situations where the marginal quality matters more than the API cost and you need
        capabilities (4K, specific aesthetic) that local can't reach.
      </NoteBlock>
    </>
  )
}

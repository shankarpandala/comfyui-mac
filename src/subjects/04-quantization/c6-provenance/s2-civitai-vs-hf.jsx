import NoteBlock from '../../../components/content/NoteBlock.jsx'
import WarningBlock from '../../../components/content/WarningBlock.jsx'

export default function S2CivitaiVsHf() {
  return (
    <>
      <p>
        HuggingFace and CivitAI are the two main model distribution sites. They have different
        cultures, license stances, and quality controls. Knowing both lets you find the right file
        and avoid the wrong one.
      </p>

      <h2>HuggingFace</h2>
      <p><strong>Strengths:</strong></p>
      <ul>
        <li>Authoritative source for model authors (Stability AI, Black Forest Labs, Tencent, Alibaba).</li>
        <li>SHA-256 hashes shown for every LFS file.</li>
        <li>Reliable LFS hosting — large downloads don't corrupt mid-stream.</li>
        <li>License terms displayed prominently.</li>
        <li>Most "definitive" community quants live here (city96, kijai, lllyasviel).</li>
      </ul>
      <p><strong>Weaknesses:</strong></p>
      <ul>
        <li>Less discoverability for community finetunes.</li>
        <li>UI assumes some technical familiarity.</li>
        <li>Some models gated behind license acceptance forms.</li>
      </ul>

      <h2>CivitAI</h2>
      <p><strong>Strengths:</strong></p>
      <ul>
        <li>Massive community finetune library (LoRAs, character / style / concept).</li>
        <li>Image previews of generations with the model — easy to evaluate quality.</li>
        <li>Comments and reviews from other users.</li>
        <li>Per-version pages with prompts, sampler settings, recommended CFG.</li>
      </ul>
      <p><strong>Weaknesses:</strong></p>
      <ul>
        <li>License clarity varies; some uploads claim licenses they don't have rights to.</li>
        <li>Quality varies wildly — anyone can upload anything.</li>
        <li>Occasional model takedowns make linking unreliable.</li>
        <li>NSFW content interleaved with SFW; site filters required to navigate.</li>
      </ul>

      <h2>The recommended pattern</h2>
      <ul>
        <li><strong>Base models</strong> (SDXL, FLUX, Hunyuan, Wan, SD3.5) — always HuggingFace from the official author repo.</li>
        <li><strong>GGUF quants</strong> — HuggingFace, almost always city96's repos.</li>
        <li><strong>Community finetunes</strong> (Pony, Illustrious, Juggernaut) — usually CivitAI for the originals; sometimes mirrored to HuggingFace.</li>
        <li><strong>LoRAs</strong> — CivitAI is the primary source for character/style LoRAs; HuggingFace for technical LoRAs (LCM, Lightning).</li>
        <li><strong>ControlNets, IP-Adapters</strong> — HuggingFace for canonical, sometimes CivitAI for variants.</li>
      </ul>

      <WarningBlock title="License hygiene">
        Read licenses. Many community SDXL finetunes inherit Stability AI's license, which may
        restrict commercial use. FLUX Dev is non-commercial; FLUX Schnell is Apache. Pony has its
        own license. If you're using outputs commercially or in your HeyGen-class capstone for
        published Reels, this matters.
      </WarningBlock>

      <h2>Downloading large files reliably</h2>
      <ul>
        <li>Use <code>aria2c</code> for multi-connection HF downloads: <code>aria2c -x 8 &lt;url&gt;</code>.</li>
        <li>Use <code>huggingface-cli</code> for HF: <code>huggingface-cli download repo/name file</code>. Built-in resume and integrity checks.</li>
        <li>For CivitAI, the API token + <code>civitai-shell</code> works well for large LoRAs.</li>
      </ul>

      <h2>What we ship in this app</h2>
      <p>
        Workflow JSON files in <code>public/workflows/</code> reference models by canonical filename.
        The Models page (<code>/models</code> in this app) acts as a curated catalog with
        Mac-recommended quants and source URLs. Use it to find the right file for any subject's
        recipe.
      </p>

      <NoteBlock title="What's next">
        Subject 04 is done. Phase 1 Foundations is now complete. Phase 2 — Image Generation — is
        next, with 11 subjects spanning SD1.5 through FLUX, ControlNet, IP-Adapter, LoRAs, training,
        inpainting, upscaling, and advanced sampling. Each builds on what you now know about MPS
        constraints, dtypes, and quantization.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2TokenFusion() {
  return (
    <>
      <p>
        How exactly does MMDiT mix image and text tokens? Each MMDiT block has parallel "streams"
        — image tokens and text tokens are projected through separate Q/K/V matrices, then their
        K and V are concatenated for joint attention.
      </p>

      <h2>The fusion equation (intuitive)</h2>
      <p>For each block:</p>
      <ol>
        <li>Image tokens get image-stream Q, K, V via image-specific projection weights.</li>
        <li>Text tokens get text-stream Q, K, V via text-specific projection weights.</li>
        <li>K and V are concatenated across modalities: K = [K_img; K_text], V = [V_img; V_text].</li>
        <li>Both Q's attend to the joint K, V — so image attends to (image+text), text attends to (image+text).</li>
        <li>Output is split back per-modality, normalized, fed to the next block.</li>
      </ol>

      <h2>What this enables</h2>
      <ul>
        <li><strong>Bidirectional influence.</strong> Image tokens can influence text representations, not just the other way. The text representation evolves with the diffusion.</li>
        <li><strong>Better long-prompt handling.</strong> No 77-token bottleneck per chunk; T5 carries hundreds of tokens, all attended jointly.</li>
        <li><strong>Inpainting awareness.</strong> Masked regions of the image can attend to the prompt as easily as unmasked regions.</li>
      </ul>

      <h2>The cost</h2>
      <p>
        Joint attention has cost <code>O((N_img + N_text)²)</code>. For 1024×1024 latent + 256-token
        T5 prompt, that's ~4400² attention. Memory: ~2× a UNet with separate cross-attention.
        Manageable on M5 Pro for SD3.5 Medium; tight for Large.
      </p>

      <NoteBlock title="The DiT trend">
        FLUX, Hunyuan, Wan, LTX — every modern model uses some flavor of DiT. SDXL's UNet is the
        last of its line. Understanding MMDiT's joint attention is good preparation for everything
        that follows in this curriculum.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3CannyDepth() {
  return (
    <>
      <p>
        FLUX Canny and FLUX Depth are dedicated FLUX-specific control models — drop-in replacement
        UNets that accept a Canny edge map or depth map as input alongside the text prompt.
      </p>

      <h2>Models</h2>
      <ul>
        <li><strong>FLUX Canny Dev</strong>: <code>flux1-canny-dev-Q4_K_S.gguf</code> via <code>city96/FLUX.1-Canny-dev-gguf</code></li>
        <li><strong>FLUX Depth Dev</strong>: <code>flux1-depth-dev-Q4_K_S.gguf</code> via <code>city96/FLUX.1-Depth-dev-gguf</code></li>
      </ul>

      <h2>Why dedicated UNets instead of ControlNet</h2>
      <ul>
        <li>ControlNet adds residuals to a frozen UNet. FLUX Canny/Depth are entirely separate UNets that natively accept the control input as part of their forward pass.</li>
        <li>Result: tighter control adherence, no need to balance ControlNet strength.</li>
        <li>Cost: you're swapping out base FLUX entirely, not stacking on it.</li>
      </ul>

      <h2>Recipe (FLUX Depth)</h2>
      <ol>
        <li>UnetLoaderGGUF → <code>flux1-depth-dev-Q4_K_S.gguf</code> (replaces base FLUX UNet).</li>
        <li>Standard CLIP + VAE.</li>
        <li>LoadImage → input image.</li>
        <li>Depth preprocessor (DepthAnythingV2Preprocessor or MiDaS) → produces depth map.</li>
        <li>Wire depth + base latent through InstructPixToPixConditioning or the FLUX-specific conditioning node.</li>
        <li>KSampler → as usual.</li>
      </ol>

      <h2>Use cases</h2>
      <ul>
        <li><strong>Canny</strong> — preserve outline / silhouette of a reference image; new subject inside the silhouette.</li>
        <li><strong>Depth</strong> — preserve 3D scene geometry; relight, restyle, recolor.</li>
      </ul>

      <h2>Mac memory</h2>
      <p>
        FLUX Canny/Depth at Q4_K_S are ~6.6 GB UNets — same memory class as base FLUX. Total
        workflow ~13 GB with GGUF T5. Comfortable.
      </p>

      <NoteBlock title="ControlNet alternative">
        Community ControlNets exist for FLUX too (XLabs, InstantX) and stack on top of base FLUX
        without swapping the UNet. We cover those in Subject 09. The dedicated Canny/Depth UNets
        are higher quality but commit you to that one control type per workflow.
      </NoteBlock>
    </>
  )
}

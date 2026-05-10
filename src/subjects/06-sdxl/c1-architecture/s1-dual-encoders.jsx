import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1DualEncoders() {
  return (
    <>
      <p>
        SDXL is the first major Stable Diffusion to use two CLIP text encoders simultaneously:{' '}
        <strong>CLIP-L</strong> (the SD 1.5 encoder) and <strong>CLIP-G</strong> (a larger, OpenCLIP-bigG
        variant). Both encode your prompt independently; their outputs are concatenated before
        feeding the UNet's cross-attention.
      </p>

      <h2>Why dual encoders</h2>
      <ul>
        <li><strong>CLIP-L</strong> — 768-dim, trained on shorter captions, captures concrete subjects.</li>
        <li><strong>CLIP-G</strong> — 1280-dim, larger model, better at compositional and stylistic prompts.</li>
        <li>Combined: <strong>2048-dim conditioning</strong> per token, richer than SD 1.5's 768.</li>
      </ul>

      <h2>How ComfyUI wires them</h2>
      <p>
        SDXL's <code>CheckpointLoaderSimple</code> emits a single CLIP output, but it's actually a
        wrapper around both encoders. <code>CLIPTextEncodeSDXL</code> (or just{' '}
        <code>CLIPTextEncode</code> when fed an SDXL CLIP) handles both encoders internally — you
        write one prompt and ComfyUI runs it through both.
      </p>

      <h2>The two-prompt trick</h2>
      <p>
        Some advanced SDXL nodes (<code>CLIPTextEncodeSDXL</code>) expose <strong>two text inputs</strong>:
        one for CLIP-L and one for CLIP-G. You can write different prompts for each. The trick:
      </p>
      <ul>
        <li>CLIP-L prompt: noun-phrase / tag style (matches its training)</li>
        <li>CLIP-G prompt: descriptive sentence (matches its training)</li>
      </ul>
      <p>
        For most workflows the same prompt fed to both works fine; the dual-prompt trick is for
        squeezing extra control on tough generations.
      </p>

      <h2>Sizes</h2>
      <ul>
        <li>CLIP-L: ~250 MB</li>
        <li>CLIP-G: ~700 MB</li>
        <li>Combined: ~950 MB of text encoder</li>
      </ul>

      <NoteBlock title="The contrast with FLUX/SD3">
        FLUX uses CLIP-L + T5-XXL. SD3 uses CLIP-L + CLIP-G + T5-XXL. The trend is more and bigger
        text encoders, with T5 enabling natural-language prompting. SDXL was the last to be CLIP-only.
      </NoteBlock>
    </>
  )
}

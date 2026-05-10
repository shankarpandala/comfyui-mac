import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1ClipLGT5() {
  return (
    <>
      <p>
        SD3 uses three text encoders: CLIP-L, CLIP-G, and T5-XXL. The first two contribute the
        same way SDXL uses them; T5 adds long-context natural-language understanding. Together they
        are SD3's biggest "brain" upgrade over SDXL.
      </p>

      <h2>Roles of each encoder</h2>
      <ul>
        <li><strong>CLIP-L</strong> (250 MB, 768-dim) — concrete subjects, short tags.</li>
        <li><strong>CLIP-G</strong> (700 MB, 1280-dim) — compositional and stylistic concepts.</li>
        <li><strong>T5-XXL</strong> (~5 B params, 4096-dim, ~9.5 GB at fp16) — long descriptive sentences, complex compositions, text-in-image.</li>
      </ul>

      <h2>Total text-encoder footprint</h2>
      <p>
        SDXL: ~950 MB of text encoders. SD3: ~10.5 GB (driven by T5). On a 24 GB Mac, T5 is the
        single largest component of the SD3 workflow — bigger than the SD3.5 Medium UNet itself.
      </p>

      <h2>How ComfyUI loads them</h2>
      <p>
        SD3-family models ship in two patterns:
      </p>
      <ol>
        <li><strong>Bundled checkpoint</strong> (e.g., <code>sd3.5_medium.safetensors</code> with everything baked in) — uses <code>CheckpointLoaderSimple</code>.</li>
        <li><strong>Separate UNet + encoders + VAE</strong> — uses <code>UNetLoader</code> + <code>TripleCLIPLoader</code> + <code>VAELoader</code>.</li>
      </ol>
      <p>
        The bundled form is simpler. The separate form lets you swap a smaller T5 (e.g., GGUF
        quantized) when memory is tight on Mac.
      </p>

      <NoteBlock title="The T5 swap is the Mac play">
        Replacing fp16 T5 (9.5 GB) with GGUF Q5_K_M T5 (~3.5 GB) frees 6 GB. Critical headroom on
        24 GB. Next section.
      </NoteBlock>
    </>
  )
}

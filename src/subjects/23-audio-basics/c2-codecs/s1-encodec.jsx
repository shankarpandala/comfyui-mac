import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Encodec() {
  return (
    <>
      <p>
        Encodec (Meta, 2022) is a neural audio codec that compresses audio to a stream of discrete
        tokens. Used by MusicGen and several other audio models as the underlying representation.
      </p>

      <h2>How it works</h2>
      <ol>
        <li>Encoder: raw audio → continuous embedding sequence (~75 Hz vs 24 kHz raw).</li>
        <li>Quantizer: each embedding → 8 codebook indices (residual vector quantization).</li>
        <li>Decoder: codebook indices → reconstructed audio.</li>
      </ol>

      <h2>Compression numbers</h2>
      <ul>
        <li>24 kHz mono audio → ~600 tokens/second total.</li>
        <li>3 kbps effective bitrate at this token count.</li>
        <li>Quality: indistinguishable from MP3-128 in most cases.</li>
      </ul>

      <h2>Why discrete tokens matter</h2>
      <p>
        Once audio is tokens, you can use language-model architectures (transformers) instead of
        diffusion. MusicGen uses this — it's a transformer predicting the next audio token.
        Faster inference than diffusion, different sample characteristics.
      </p>

      <h2>Mac integration</h2>
      <p>
        Encodec runs on MPS via PyTorch. Used internally by MusicGen ComfyUI nodes and other audio
        nodes. You don't usually interact with Encodec directly — it's the plumbing.
      </p>

      <NoteBlock title="The 'know it exists' rule">
        You won't wire up Encodec yourself. But knowing it's the underlying representation explains
        why audio models work the way they do — they predict tokens, not samples.
      </NoteBlock>
    </>
  )
}

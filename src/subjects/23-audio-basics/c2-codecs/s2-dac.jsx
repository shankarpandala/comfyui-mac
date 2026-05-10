import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Dac() {
  return (
    <>
      <p>
        DAC (Descript Audio Codec, 2023) is the next-generation neural codec after Encodec. Higher
        quality, used by newer audio models (Stable Audio Open).
      </p>

      <h2>Improvements over Encodec</h2>
      <ul>
        <li>Higher reconstruction quality — closer to lossless at the same bitrate.</li>
        <li>More codebooks (12 typical vs Encodec's 8) — better representation capacity.</li>
        <li>Explicit frequency-band conditioning during training — handles full audio range better.</li>
      </ul>

      <h2>Compression</h2>
      <ul>
        <li>44.1 kHz audio → ~250 Hz token rate × 12 codebooks = 3000 tokens/sec.</li>
        <li>Higher than Encodec but quality is significantly better.</li>
        <li>~12 kbps effective.</li>
      </ul>

      <h2>Where you'll see it</h2>
      <ul>
        <li>Stable Audio Open uses DAC.</li>
        <li>Some research music models.</li>
        <li>Like Encodec, runs internally — not user-wired.</li>
      </ul>

      <h2>Mac compatibility</h2>
      <p>DAC runs on MPS. Compute cost negligible compared to the diffusion or transformer that consumes its tokens.</p>

      <NoteBlock title="The codec abstraction">
        For the user-facing audio workflows in this curriculum, you don't pick the codec. The model
        determines its own. You just feed prompts and get audio.
      </NoteBlock>
    </>
  )
}

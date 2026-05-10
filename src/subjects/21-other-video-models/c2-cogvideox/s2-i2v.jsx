import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2I2v() {
  return (
    <>
      <p>CogVideoX has an I2V variant, separate UNet trained for image-conditioning.</p>

      <h2>File</h2>
      <p><code>CogVideoX-5b-I2V.safetensors</code> or GGUF.</p>

      <h2>How it differs from t2v</h2>
      <ul>
        <li>Accepts an input image as the first-frame anchor.</li>
        <li>Better identity preservation through the clip than animating a still in t2v mode.</li>
        <li>~Same memory + time as t2v.</li>
      </ul>

      <h2>Mac alternatives</h2>
      <p>
        Wan 14B I2V usually beats CogVideoX I2V on quality at higher cost. LTX I2V is faster but
        lower fidelity. CogVideoX I2V sits in the middle.
      </p>

      <NoteBlock title="The 'pick one i2v' principle">
        Don't keep all three I2V models on disk. Pick LTX I2V (fast, lightweight) or Wan I2V (best
        identity preservation). CogVideoX is rarely the right answer for a Mac user choosing today.
      </NoteBlock>
    </>
  )
}

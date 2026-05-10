import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Recommended() {
  return (
    <>
      <p>Recommended Wan files to download for Mac.</p>

      <h2>Wan 2.2 5B (recommended Mac default)</h2>
      <ul>
        <li><strong>UNet</strong>: <code>wan2.2-t2v-5b-fp16.safetensors</code> (~10 GB, fits without GGUF)</li>
        <li>Or GGUF Q5_K_S (~3.5 GB) for tighter budgets</li>
        <li><strong>Text encoder</strong>: umT5-XXL Q5_K_M GGUF (~3.5 GB)</li>
        <li><strong>VAE</strong>: <code>wan_2.1_vae.safetensors</code> (used for both 2.1 and 2.2)</li>
      </ul>

      <h2>Wan 2.1 14B I2V Q4_K_S</h2>
      <ul>
        <li><strong>UNet</strong>: <code>Wan2.1-I2V-14B-720P-Q4_K_S.gguf</code> (~8 GB)</li>
        <li>Same encoder + VAE as above</li>
      </ul>

      <h2>Wan 2.1 VACE (video editing)</h2>
      <ul>
        <li><strong>UNet</strong>: <code>Wan2.1-VACE-14B-Q4_K_S.gguf</code></li>
        <li>Used for vid2vid editing tasks (Subject 22)</li>
      </ul>

      <h2>Where</h2>
      <p>
        <code>city96/Wan2.1-T2V-14B-gguf</code>, <code>city96/Wan2.1-I2V-14B-720P-gguf</code>,
        <code>city96/Wan2.2-T2V-5B-gguf</code> on HuggingFace.
      </p>

      <NoteBlock title="The starter kit">
        Download once: Wan 2.2 5B (~10 GB or 3.5 GB GGUF) + umT5 GGUF (~3.5 GB) + Wan VAE (~600
        MB). Powers 80% of your Wan workflows. Add 14B I2V (~8 GB) when you graduate to identity
        animation work.
      </NoteBlock>
    </>
  )
}

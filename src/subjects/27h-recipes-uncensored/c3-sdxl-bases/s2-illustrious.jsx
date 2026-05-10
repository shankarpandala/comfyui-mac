import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Illustrious() {
  return (
    <>
      <p>Illustrious-XL — modern uncensored anime base. Better default style than Pony for some use cases; smaller LoRA ecosystem.</p>

      <h2>Files</h2>
      <p><code>illustriousXL_v01.safetensors</code> (~6.7 GB) on CivitAI or its derivatives.</p>

      <h2>Prompting</h2>
      <p>Direct Booru tags. No score_ prefix system.</p>

      <h2>Pony vs Illustrious</h2>
      <ul>
        <li>Pony: established, large LoRA ecosystem, slightly older feel.</li>
        <li>Illustrious: cleaner default style, growing ecosystem, more modern feel.</li>
      </ul>

      <NoteBlock title="Pick one anime base">
        Don't keep both Pony AND Illustrious — overlapping use cases and ~13 GB of disk for
        marginal additional capability. Pick the aesthetic you prefer.
      </NoteBlock>
    </>
  )
}

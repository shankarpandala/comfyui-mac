import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Illustrious() {
  return (
    <>
      <p>
        Illustrious-XL (2024) is the newer-generation SDXL anime/illustration base. Where Pony is
        established and broad, Illustrious is fresher and arguably better at characters from recent
        anime/games.
      </p>

      <h2>Why Illustrious</h2>
      <ul>
        <li>Trained on a more recent dataset — knows characters Pony doesn't.</li>
        <li>Better at compositions with multiple characters.</li>
        <li>Cleaner default style — less "soft DSLR" look than Pony.</li>
        <li>Growing LoRA library on CivitAI.</li>
      </ul>

      <h2>Prompting style</h2>
      <p>
        Illustrious uses Booru-style tags directly without Pony's quality/source tag prefix system.
        Just write tags:
      </p>
      <pre>{`1girl, long black hair, school uniform, classroom, looking at viewer,
bright lighting, sharp focus`}</pre>
      <p>
        Underscore-separated tags work (e.g., <code>looking_at_viewer</code>) but commas and spaces
        also work. Both are tokenized to the same Booru vocabulary the model trained on.
      </p>

      <h2>Recommended settings on Mac</h2>
      <ul>
        <li><strong>resolution</strong>: 1024×1024 or 832×1216 portrait</li>
        <li><strong>cfg</strong>: 6.0</li>
        <li><strong>steps</strong>: 28</li>
        <li><strong>sampler</strong>: <code>euler_ancestral</code> or <code>dpmpp_2m_sde</code></li>
        <li><strong>scheduler</strong>: <code>karras</code></li>
      </ul>

      <h2>Combining with Lightning</h2>
      <p>
        Illustrious + Lightning 4-step LoRA works great for fast anime iteration. Quality LoRA
        first, then Lightning, then any character LoRA.
      </p>

      <NoteBlock title="The 'pick one' guidance">
        For anime/illustration on Mac, pick Pony OR Illustrious as your primary base. Stack character
        LoRAs on whichever you choose. Don't keep both — they're large and most LoRAs are designed
        for one base or the other.
      </NoteBlock>
    </>
  )
}

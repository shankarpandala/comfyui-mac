import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1BooruVsNatural() {
  return (
    <>
      <p>Prompt style differs across uncensored bases. Booru tags for SDXL anime bases (Pony, Illustrious); natural language for FLUX.</p>

      <h2>Booru-tag style (Pony / Illustrious / NoobAI)</h2>
      <pre>{`score_9, source_anime, [character LoRA trigger],
1woman, [clothing tags], [pose tags], [setting tags], [aesthetic tags]`}</pre>

      <h2>Natural-language style (FLUX)</h2>
      <pre>{`A [adult age descriptor] woman with [hair description], wearing [outfit],
in [setting], [pose description], [mood/lighting].`}</pre>

      <h2>Why the difference</h2>
      <ul>
        <li>SDXL anime bases trained on Booru-tagged datasets — speak that language natively.</li>
        <li>FLUX trained on caption-style descriptions — accepts and follows natural sentences.</li>
      </ul>

      <h2>Mixed-vocabulary</h2>
      <p>
        For FLUX with Booru-style content: still works, but mix in some natural-language framing.
        For SDXL anime: stick to Booru tags; natural language confuses it.
      </p>

      <NoteBlock title="Match the base's training">
        Always study what prompts produced the model's training samples. The internet (CivitAI,
        Reddit) has examples for every base. Mimic those styles for best output.
      </NoteBlock>
    </>
  )
}

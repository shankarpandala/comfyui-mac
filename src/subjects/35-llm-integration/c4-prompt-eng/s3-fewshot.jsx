import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3Fewshot() {
  return (
    <>
      <p>Few-shot prompting — include 2-5 example input/output pairs in the prompt. Often beats fine-tuning for narrow tasks.</p>

      <h2>The pattern</h2>
      <pre>{`system: "Convert image descriptions to FLUX prompts."

user: "a sunset"
assistant: "Cinematic sunset over rolling hills, warm golden light, lens flare, 35mm photography, vibrant colors"

user: "a coffee shop"
assistant: "Cozy coffee shop interior, warm afternoon light through windows, exposed brick, hanging plants, professional photography"

user: "a hiking trail"
assistant: ___ <- model fills this in matching your style`}</pre>

      <h2>Why it works</h2>
      <ul>
        <li>The model copies the format / style / length of your examples.</li>
        <li>No fine-tuning needed.</li>
        <li>Easy to iterate — change examples to change behavior.</li>
      </ul>

      <h2>For the capstone</h2>
      <ul>
        <li>Few-shot the script agent with 3-5 example Reel scripts in your style.</li>
        <li>Few-shot the prompt-expansion agent with example FLUX prompts.</li>
        <li>Few-shot the critique agent with example "good vs bad" judgments.</li>
      </ul>

      <h2>Token budget</h2>
      <p>Few-shot adds tokens. With a 5-shot prompt + 200-token response, you're sending ~3000 tokens. Plan inference time accordingly (~10 s on Llama 3.1 8B for that size).</p>

      <NoteBlock title="The 'examples in your voice' principle">
        Few-shot examples should be in YOUR style — your script voice, your prompt vocabulary,
        your aesthetic preferences. The agent's outputs will inherit your stylistic fingerprint.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2PromptTemplates() {
  return (
    <>
      <p>Reusable visual prompt templates. Speeds up the script agent and ensures visual consistency across content.</p>

      <h2>Templates for common shot types</h2>
      <pre>{`# templates.json
{
  "talking_head": "{trigger}, [pose], [expression], [outfit/setting], soft natural light, 9:16 portrait, photoreal",
  "screen_capture": "Close-up of MacBook screen showing {content}, [lighting], home-office setup, photoreal, 9:16 portrait",
  "diagram": "Clean modern infographic illustrating {concept}, soft pastel palette, clean typography, 9:16 portrait",
  "before_after": "Side-by-side comparison: left {before}, right {after}, clean studio lighting, 9:16 portrait",
  "atmosphere": "Wide cinematic shot of {scene}, [lighting], [mood], 9:16 portrait"
}`}</pre>

      <h2>Agent uses templates</h2>
      <p>
        Agent receives narration + selects template + fills in placeholders. More reliable than
        free-form generation. Templates encode your visual style.
      </p>

      <h2>For brand-consistent visuals</h2>
      <ul>
        <li>Add brand-color cues: "soft blue palette".</li>
        <li>Add aesthetic cues: "minimalist composition".</li>
        <li>Add style cues: "documentary photography style".</li>
      </ul>

      <NoteBlock title="The 'style locked, content varies' principle">
        Templates lock the visual style. Content varies per Reel via placeholder substitution.
        Audience sees consistent aesthetic; topics rotate.
      </NoteBlock>
    </>
  )
}

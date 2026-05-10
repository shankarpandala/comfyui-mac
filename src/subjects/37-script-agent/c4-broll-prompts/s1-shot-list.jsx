import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1ShotList() {
  return (
    <>
      <p>Shot list generation — for each non-talking-head scene, the agent generates an image-prompt the visual model can render.</p>

      <h2>The agent's task</h2>
      <p>
        Input: scene narration + scene type ("b-roll").
        <br />
        Output: detailed visual prompt for FLUX/SDXL.
      </p>

      <h2>System prompt for B-roll agent</h2>
      <pre>{`You are an image-prompt expert. Convert scene narrations into FLUX prompts.

Format: detailed sentence describing subject, setting, lighting, composition, style.

Always include:
- A subject (concrete noun)
- A setting (where)
- Lighting (mood)
- Composition (close-up / wide / medium)
- Style cue ("cinematic" / "photoreal" / "documentary")

Aspect ratio: 9:16 portrait.

Example:
Narration: "Show vanilla FLUX taking 60 seconds per image."
Visual prompt: "Close-up over-the-shoulder view of a MacBook screen showing ComfyUI's progress bar moving slowly, dim home-office background, focused workspace, photoreal documentary style, 9:16 portrait."`}</pre>

      <h2>For the capstone</h2>
      <p>
        The script agent itself can produce visual prompts inline (in the scene JSON), or hand off
        narrations to a separate B-roll prompt agent. The separate-agent pattern is cleaner for
        debugging.
      </p>

      <NoteBlock title="The 'iterate prompt template' practice">
        Save 10-20 successful narration + visual-prompt pairs as few-shot examples. Each Reel you
        produce that you like adds to the corpus. Agent's outputs improve with corpus size.
      </NoteBlock>
    </>
  )
}

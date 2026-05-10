import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3SceneBreakdown() {
  return (
    <>
      <p>Scene breakdown + B-roll prompts — script becomes a scene-by-scene production plan.</p>

      <h2>What's in scene_breakdown</h2>
      <p>Subject 39 / Chapter 2 / Section 2 had the schema. Each scene is a self-contained production unit:</p>
      <ul>
        <li>narration text → TTS</li>
        <li>visual_prompt → image generation</li>
        <li>type → tells downstream pipeline whether talking-head or B-roll</li>
        <li>expression → for talking-head models</li>
      </ul>

      <h2>The B-roll prompt expansion</h2>
      <p>
        Script agent generates rough visual_prompt. A separate B-roll prompt agent expands it
        using your visual prompt templates (Subject 37 / Chapter 4):
      </p>
      <pre>{`def expand_visual_prompts(scenes):
    for scene in scenes:
        if scene["type"] == "b-roll":
            expanded = llm(f"Expand this rough visual into a FLUX prompt: {scene['visual_prompt']}", system_prompt=BROLL_SYSTEM)
            scene["visual_prompt"] = expanded
    return scenes`}</pre>

      <NoteBlock title="The 'one prompt per scene' rule">
        Each scene gets one visual prompt. Don't try to share prompts across scenes — kills
        consistency and makes the pipeline harder to debug.
      </NoteBlock>
    </>
  )
}

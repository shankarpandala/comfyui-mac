import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2LlmJudge() {
  return (
    <>
      <p>LLM-judge pattern — vision-LLM evaluates the finished Reel against the rubric.</p>

      <h2>The pattern</h2>
      <pre>{`def llm_judge(reel_path, script):
    # Extract keyframes from finished Reel
    keyframes = extract_keyframes(reel_path, n=10)

    # Vision-LLM with rubric
    judgment = vlm(
        images=keyframes,
        prompt=f"""Evaluate this Reel against the rubric:
{RUBRIC_DEFINITION}

Script: {script}

Score 1-10 on each rubric dimension. Provide reasoning.""",
        json_mode=True
    )

    return judgment`}</pre>

      <h2>Vision-LLM picks</h2>
      <p>Llava 13B Q4 (Subject 35 / Chapter 2 / S4) handles this well on Mac. ~30s per evaluation.</p>

      <h2>Limitations</h2>
      <ul>
        <li>VLMs can't evaluate audio directly — score audio dimensions from script + transcribed audio + caption matching.</li>
        <li>VLM judgment is rough; ~80% accurate vs human. Use as filter, not final gate.</li>
        <li>For high-stakes content, follow with human review.</li>
      </ul>

      <NoteBlock title="The 'auto-judge filter, human gate hero' approach">
        LLM judge filters out obviously bad Reels. Human reviews the rest before publish. Scales
        production while maintaining quality.
      </NoteBlock>
    </>
  )
}

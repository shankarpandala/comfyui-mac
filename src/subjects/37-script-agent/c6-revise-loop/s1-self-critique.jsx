import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1SelfCritique() {
  return (
    <>
      <p>Self-critique loop — generate script, critique it, regenerate. Often improves output quality more than tuning the original prompt.</p>

      <h2>The pattern</h2>
      <pre>{`def generate_script_with_critique(topic, max_iterations=3):
    script = generate_script(topic)
    for _ in range(max_iterations):
        critique = llm(f"""Critique this Reel script. Score 1-10 on:
        - Hook strength
        - Specific claims
        - Brand voice match
        - Pacing
        - Call-to-action

        Script: {script}

        Return JSON with scores + specific suggestions.""")

        if all_scores_above(critique, 8):
            return script

        script = llm(f"Revise this script based on the critique:
{script}

Critique: {critique}")

    return script  # best-effort after iterations`}</pre>

      <h2>Why it works</h2>
      <ul>
        <li>LLMs are better critics than they are first-draft writers.</li>
        <li>Critique surfaces issues the first draft missed.</li>
        <li>Iterative refinement converges on better quality.</li>
      </ul>

      <h2>Cost</h2>
      <p>3 iterations × 2 LLM calls per iteration = 6 LLM calls per script. ~30-60 s on Llama 3.1 8B. Worth it for hero content.</p>

      <NoteBlock title="The 'critique with rubric' principle">
        Don't ask "is this good?". Give explicit criteria. The agent's critique is only useful if
        it's grounded in specific judgments.
      </NoteBlock>
    </>
  )
}

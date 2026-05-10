import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Audience() {
  return (
    <>
      <p>Audience persona — who you're talking to. Affects vocabulary, references, hook style.</p>

      <h2>Define your audience</h2>
      <ul>
        <li><strong>Demographics</strong>: age range, profession, location.</li>
        <li><strong>Knowledge level</strong>: novice / intermediate / expert in your niche.</li>
        <li><strong>Why they're watching</strong>: learn / entertain / be inspired / shop.</li>
        <li><strong>Their friction points</strong>: what they don't understand or struggle with.</li>
        <li><strong>What they already know</strong>: don't waste time explaining basics they have.</li>
      </ul>

      <h2>The audience persona document</h2>
      <pre>{`# Audience Persona

Primary: Solo content creators, age 25-40, working full-time on creative side projects.
Knowledge: Comfortable with consumer software. Curious about AI but not deep technical.
Why watching: Practical workflows they can adopt. Time-saving tips. Avoiding pitfalls.
Friction: Confused by NVIDIA-vs-Mac differences. Overwhelmed by tooling sprawl.
Already know: Basic prompt engineering. What "AI image" means.

Don't:
- Explain what diffusion is.
- Recommend NVIDIA-only solutions.
- Use academic phrasing.

Do:
- Lead with the practical Mac-specific tip.
- Show before/after.
- Honest about limitations / time costs.`}</pre>

      <NoteBlock title="The agent prompt structure">
        System prompt = voice doc + audience persona. Together they bound the agent's output to
        match your channel. Subject 37's script agent (next chapters) builds on this foundation.
      </NoteBlock>
    </>
  )
}

import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3FeedbackLoop() {
  return (
    <>
      <p>Feedback loop into the agents — the judge's feedback updates the agents' behavior over time.</p>

      <h2>Per-Reel learnings</h2>
      <ul>
        <li>Low hook score? → Update script agent's hook patterns.</li>
        <li>Low identity score? → Increase PuLID strength or retrain LoRA.</li>
        <li>Low coherence? → Add more research depth.</li>
      </ul>

      <h2>Iterative voice doc updates</h2>
      <p>
        Track feedback over 20 Reels. Common critiques (e.g., "hooks are too generic") become
        explicit anti-patterns in the voice doc.
      </p>

      <h2>Few-shot example refresh</h2>
      <p>
        High-scoring Reels' scripts become few-shot examples for the script agent. Bad examples
        get removed. Quality compounds.
      </p>

      <h2>System-level loops</h2>
      <ul>
        <li>Monthly: review feedback aggregate; update voice doc + system prompts.</li>
        <li>Quarterly: retrain self-LoRA on better photo set if appearance drifted.</li>
        <li>Yearly: rebuild pipeline with newer models.</li>
      </ul>

      <NoteBlock title="The 'agent that improves' principle">
        A static agent stagnates. A feedback loop turns it into a system that improves over time.
        The capstone's effectiveness compounds.
      </NoteBlock>
    </>
  )
}

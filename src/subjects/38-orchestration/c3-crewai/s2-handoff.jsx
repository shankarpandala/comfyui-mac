import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Handoff() {
  return (
    <>
      <p>CrewAI handoff patterns — how agents pass context to each other.</p>

      <h2>Sequential context</h2>
      <p>Tasks declare <code>context=[other_task]</code>. The dependent task receives the prior task's output.</p>

      <h2>Async parallel</h2>
      <p>Independent tasks can run in parallel. Crew kicks off matching tasks concurrently when context allows.</p>

      <h2>Hierarchical</h2>
      <p>One "manager" agent orchestrates others — gives sub-tasks dynamically based on intermediate results.</p>

      <h2>For the capstone</h2>
      <ul>
        <li>Sequential: research → script → visuals → tts → compose.</li>
        <li>Parallel: visualizer + tts agents work concurrently after script (different inputs).</li>
        <li>Hierarchical: editor agent orchestrates final composition based on what the others produced.</li>
      </ul>

      <NoteBlock title="The throughput payoff">
        Parallel handoff cuts wall time. Visuals + TTS can run in parallel — saves ~10 minutes per
        Reel. Subject 39's pipeline takes advantage.
      </NoteBlock>
    </>
  )
}

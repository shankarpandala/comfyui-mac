import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2AnythingEverywhere() {
  return (
    <>
      <p>Anything-Everywhere as state — broadcast key values across a sprawling graph. Useful when many sub-graphs need the same MODEL / CLIP / config.</p>

      <h2>The pattern</h2>
      <p>
        Add <code>Anything Everywhere?</code> nodes for each shared value. Sub-graphs pick up the
        value automatically. Result: tidy graph despite many consumers.
      </p>

      <h2>For complex workflows</h2>
      <ul>
        <li>Self-clone identity stack: PuLID + LoRA + character ref broadcast across multiple sample paths.</li>
        <li>Style preset: one place to set; many places to consume.</li>
        <li>Seed broadcast for reproducibility.</li>
      </ul>

      <h2>Limit</h2>
      <p>Anything-Everywhere is a static value broadcast. For dynamic per-call state (user inputs varying per Reel), use Python orchestration.</p>

      <NoteBlock title="The 'static config in graph, dynamic state in Python'">
        Things that don't change per render → ComfyUI Anything-Everywhere. Things that do change
        per render → Python orchestrator.
      </NoteBlock>
    </>
  )
}

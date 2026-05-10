import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1TopicInput() {
  return (
    <>
      <p>Stage 1: topic input + research brief. The user provides intent; the agent researches.</p>

      <h2>Input shapes</h2>
      <ul>
        <li>Free-form topic: "FLUX speed tips on Mac"</li>
        <li>With angle: "Why most FLUX tutorials are wrong about Mac"</li>
        <li>With format hint: "60s Reel about local AI privacy"</li>
        <li>Reference URLs: "Make a Reel based on this article"</li>
      </ul>

      <h2>Brief generation</h2>
      <p>The agent expands input into a research brief:</p>
      <pre>{`{
  "topic": "FLUX speed tips on Mac",
  "angle": "Counter-conventional Mac-specific tricks",
  "audience": "Mac AI creators",
  "format": "60s Reel",
  "research_questions": [
    "What is the typical FLUX render time on M5 Pro?",
    "What's the biggest single Mac speedup?",
    "What flags / patches are commonly overlooked?",
    "Are there any 2026 updates worth mentioning?"
  ],
  "key_search_queries": [
    "FLUX Mac MPS performance",
    "FLUX GGUF quant comparison",
    "FLUX Schnell speedup techniques"
  ]
}`}</pre>

      <NoteBlock title="The 'brief drives the rest' principle">
        Spend tokens on a good brief. The brief shapes search queries, summary, script angle. Bad
        brief = bad downstream output regardless of how good your other agents are.
      </NoteBlock>
    </>
  )
}

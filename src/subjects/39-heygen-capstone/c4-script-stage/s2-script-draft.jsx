import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2ScriptDraft() {
  return (
    <>
      <p>Script drafting — applies voice doc + format template + research to produce structured script JSON.</p>

      <h2>The agent</h2>
      <pre>{`SYSTEM_PROMPT = """You are a Reel script writer.

Voice doc: {voice_doc}
Audience persona: {audience_persona}
Format: 60s Reel
Word target: 165-200 words
Hook patterns to prefer: {hook_patterns}

Output JSON matching the scene_breakdown schema."""

def script_draft_node(state):
    research = state["research"]
    response = llm(SYSTEM_PROMPT.format(...) + f"\\n\\nResearch:\\n{research}", json_mode=True)
    return {"script_draft": response}`}</pre>

      <h2>The few-shot examples</h2>
      <p>System prompt should include 2-3 example (research → script) pairs in your voice. Subject 35 / Chapter 4 / S3 covers few-shot.</p>

      <h2>Mac wall time</h2>
      <p>~30-60 seconds with Llama 3.1 8B. Faster with Llama 3.2 3B (slight quality cost).</p>

      <NoteBlock title="The 'voice doc as configuration' approach">
        The voice doc is the most-edited file in your capstone. Treat as living config; iterate
        weekly based on output quality.
      </NoteBlock>
    </>
  )
}

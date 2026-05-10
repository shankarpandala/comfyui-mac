import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2DataContracts() {
  return (
    <>
      <p>Data contracts between stages — every stage's output JSON schema is locked. Downstream stages depend on these schemas.</p>

      <h2>Research → Script (research_summary)</h2>
      <pre>{`{
  "topic": str,
  "summary": str,  # 200-400 words
  "key_points": [str, ...],  # 3-7 bullets
  "sources": [{"title": str, "url": str, "author": str}, ...],
  "angle": str  # the unique angle for this Reel
}`}</pre>

      <h2>Script → Visual + TTS (scene_breakdown)</h2>
      <pre>{`{
  "title": str,
  "duration_sec": int,
  "music_prompt": str,
  "scenes": [
    {
      "id": int,
      "type": "talking-head" | "b-roll" | "title" | "end-card",
      "start": float,
      "end": float,
      "narration": str,  # for TTS
      "visual_prompt": str,  # for FLUX
      "expression": str  # for talking-head models
    }, ...
  ]
}`}</pre>

      <h2>Visual → Compose (visual_artifacts)</h2>
      <pre>{`{
  "scene_id": int,
  "still_path": str,
  "clip_path": str,
  "thumbnail_path": str
}`}</pre>

      <h2>TTS → Compose (audio_artifacts)</h2>
      <pre>{`{
  "scene_id": int,
  "audio_path": str,
  "duration_sec": float
}`}</pre>

      <NoteBlock title="The 'contracts as code' principle">
        Define schemas in Python (Pydantic or TypedDict). Validate outputs at every stage
        boundary. Catch schema drift early; downstream stages don't have to defend against malformed
        inputs.
      </NoteBlock>
    </>
  )
}

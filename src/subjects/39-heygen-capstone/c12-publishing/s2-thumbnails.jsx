import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Thumbnails() {
  return (
    <>
      <p>Auto-generated thumbnails. Critical for YouTube; optional for Reels (auto-extracted from first frame anyway).</p>

      <h2>For YouTube</h2>
      <ul>
        <li>Generate via FLUX with thumbnail-specific prompt.</li>
        <li>Or pick a high-quality frame from talking-head segment.</li>
        <li>Add big text overlay with hook word/phrase via ffmpeg drawtext.</li>
        <li>Use channel-consistent template.</li>
      </ul>

      <h2>Recipe</h2>
      <pre>{`def thumbnail_node(state):
    # Option 1: generate fresh
    thumb = comfy_submit("flux-thumbnail.json", {
        "prompt": f"{state['research']['title']} {state['research']['angle']}, viral YouTube thumbnail style"
    })
    # Option 2: extract from talking-head + add text
    thumb = ffmpeg_extract_frame(state["talking_head_clip"], time_sec=2)
    thumb = add_thumbnail_text(thumb, state["research"]["title"])

    return {"thumbnail_path": thumb}`}</pre>

      <h2>Style consistency</h2>
      <p>Build a thumbnail template: same font, same color scheme, same layout. Saves design time and builds brand.</p>

      <NoteBlock title="The 'thumbnails are 50% of the click' principle">
        For YouTube, thumbnail quality determines CTR more than title. Spend the agent budget on
        thumbnail generation; A/B test if possible.
      </NoteBlock>
    </>
  )
}

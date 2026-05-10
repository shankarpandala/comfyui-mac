import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1EndToEnd() {
  return (
    <>
      <p>
        The capstone. Take everything from Phases 1-5 and build a complete pipeline to produce
        photorealistic videos of your AI clone, in your voice, doing what you script. End-to-end on
        24 GB Mac.
      </p>

      <DefinitionBlock title="The complete pipeline">
        <ol>
          <li><strong>Capture</strong>: 50-80 photos of yourself (Subject 29 / Chapter 2).</li>
          <li><strong>Train LoRA</strong>: SDXL or FLUX self-LoRA from photos (Subject 12).</li>
          <li><strong>Capture voice</strong>: 30s reference + optional 20-min RVC training set.</li>
          <li><strong>Generate stills</strong>: FLUX + PuLID + your-LoRA → photorealistic stills.</li>
          <li><strong>Animate stills</strong>: Sonic / LivePortrait → talking-head clips.</li>
          <li><strong>Voice clone</strong>: F5-TTS / RVC → audio in your voice.</li>
          <li><strong>Compose</strong>: ffmpeg → final mp4 with synced audio + video.</li>
        </ol>
      </DefinitionBlock>

      <h2>The capabilities you'll have</h2>
      <ul>
        <li>"Me reading any script in any setting" — videos generated end-to-end from text.</li>
        <li>"Me in any photo" — stills of yourself in any scene.</li>
        <li>"Me speaking any words" — audio in your voice from text.</li>
        <li>"Me dancing / acting" — body motion via Wan I2V or VACE editing.</li>
      </ul>

      <h2>The time budget</h2>
      <ul>
        <li>One-time setup: ~1 day (capture + LoRA training + voice setup).</li>
        <li>Per "AI clone Reel" production: 30-45 min wall time on Mac.</li>
        <li>Hero video (longer, multi-scene): 1-2 hours.</li>
      </ul>

      <h2>The files you'll have at the end</h2>
      <ul>
        <li>Your SDXL self-LoRA + your FLUX self-LoRA.</li>
        <li>Your RVC voice model + 30s F5-TTS reference clip.</li>
        <li>Saved ComfyUI workflows for stills, talking-heads, full pipelines.</li>
      </ul>

      <NoteBlock title="The Phase 7 lead-in">
        Subject 29 is the manual capstone. Phase 7 (Subjects 35-39) wraps this whole pipeline in
        agentic LLM orchestration — describe a topic, the agent runs the entire pipeline.
      </NoteBlock>
    </>
  )
}

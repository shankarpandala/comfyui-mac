import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1BlockDiagram() {
  return (
    <>
      <p>The complete pipeline architecture.</p>

      <h2>Block diagram</h2>
      <pre>{`User: "Make a Reel about [topic]"
        ↓
[Stage 1: Research Agent]
   Tools: Tavily / Brave + Trafilatura + YouTube Transcripts
   LLM: Llama 3.1 8B
   → Research summary (JSON)
        ↓
[Stage 2: Script Agent]
   LLM: Qwen 2.5 14B (better structured output)
   → Scene breakdown (JSON: scenes with prompts, narration, visuals)
        ↓
[Human approval gate]
        ↓
[Stage 3: Visual Agent] (parallel with Stage 4)
   For each scene:
     - Talking-head: FLUX + LoRA + PuLID → still
     - B-roll: FLUX → still
     - Animation: LTX-i2v / Wan-i2v
   → Per-scene .mp4 clips
        ↓
[Stage 4: Voice Agent] (parallel with Stage 3)
   F5-TTS with your voice reference
   → Per-segment .wav files
        ↓
[Stage 5: Talking-head sync]
   Sonic + LivePortrait per talking-head segment
        ↓
[Stage 6: Compose]
   ffmpeg: concat clips + audio + captions + watermark + LUT
   → final.mp4
        ↓
[Stage 7: Publish] (optional)
   Platform-specific presets + scheduled posting`}</pre>

      <NoteBlock title="The 7-stage capstone">
        Each stage is its own agent (Subject 35-38). Subject 39 ties them together with LangGraph
        orchestration.
      </NoteBlock>
    </>
  )
}

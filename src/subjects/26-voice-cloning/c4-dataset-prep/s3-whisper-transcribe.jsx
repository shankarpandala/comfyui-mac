import NoteBlock from '../../../components/content/NoteBlock.jsx'
import CommandBlock from '../../../components/content/CommandBlock.jsx'

export default function S3WhisperTranscribe() {
  return (
    <>
      <p>
        For RVC training (and supervised TTS training), each audio clip needs a transcript text
        file alongside. Whisper handles this automatically — runs on Mac via MLX or PyTorch,
        produces transcripts with timestamps.
      </p>

      <h2>MLX Whisper (recommended)</h2>
      <CommandBlock command="pip install mlx-whisper" />
      <CommandBlock command="mlx_whisper recording.wav --model mlx-community/whisper-large-v3-mlx" />

      <h2>Output format</h2>
      <p>JSON with segment-level timestamps + plain text transcript.</p>

      <h2>For RVC training</h2>
      <p>
        RVC training accepts segmented audio + transcripts in a specific format. Tools like
        Audio-Slicer + Whisper auto-segment your 20-minute recording into 5-second clips with
        matching .txt files.
      </p>

      <h2>The pipeline</h2>
      <ol>
        <li>Record 20 minutes of source audio.</li>
        <li>Denoise.</li>
        <li>Audio-Slicer → ~150 5-second clips.</li>
        <li>Whisper-Large-v3 → transcript per clip.</li>
        <li>Manual cleanup of misheard transcripts (5-10% typically need fixes).</li>
        <li>Feed into RVC training tool.</li>
      </ol>

      <h2>Mac wall time</h2>
      <p>MLX Whisper Large v3 on 20 minutes of audio: ~3-5 minutes. Fast.</p>

      <NoteBlock title="The Phase 7 capstone usage">
        Whisper is also used in Subject 39 for transcribing reference videos and source materials
        during the research stage of the agentic pipeline.
      </NoteBlock>
    </>
  )
}

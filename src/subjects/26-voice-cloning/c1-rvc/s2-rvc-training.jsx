import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2RvcTraining() {
  return (
    <>
      <p>
        Training RVC on M5 Pro takes a few hours and produces a personal voice model. Not as
        zero-shot-easy as F5-TTS, but produces a tighter voice match for singing and dramatic
        speech.
      </p>

      <h2>Dataset requirements</h2>
      <ul>
        <li>10-30 minutes of clean recordings of the target voice.</li>
        <li>Single speaker, no music, no echo.</li>
        <li>Sample rate 32-48 kHz preferred.</li>
        <li>Variety: questions, statements, different volumes/emotions.</li>
      </ul>

      <h2>Tools</h2>
      <ul>
        <li><strong>RVC v2 WebUI (Mangio fork)</strong> — most common training tool. Has Mac fork.</li>
        <li><strong>Applio</strong> — modern fork with cleaner UI and Mac MPS support.</li>
      </ul>

      <h2>Training time on M5 Pro</h2>
      <ul>
        <li>15 minutes of audio → 30 minutes preprocessing + ~3-5 hours training (300 epochs).</li>
        <li>Comparable to SDXL LoRA training time.</li>
      </ul>

      <h2>Output</h2>
      <ul>
        <li><code>your-voice.pth</code> — RVC model (~50 MB)</li>
        <li><code>your-voice.index</code> — feature index (~50 MB)</li>
        <li>Drop both into ComfyUI's RVC inference workflow to use.</li>
      </ul>

      <h2>Mac gotchas</h2>
      <ul>
        <li>RVC training scripts expect CUDA in places — MPS forks have patched this.</li>
        <li>Some preprocessing (CREPE pitch extraction) runs on CPU — slow but functional.</li>
        <li>Use Applio if Mangio fork has issues; better Mac support.</li>
      </ul>

      <NoteBlock title="The Phase 5 capstone path">
        For the AI clone capstone (Subject 29), RVC is your "singing voice" and "dramatic speech"
        path. F5-TTS is your "everyday narration" path. Both trained on the same source recordings.
      </NoteBlock>
    </>
  )
}

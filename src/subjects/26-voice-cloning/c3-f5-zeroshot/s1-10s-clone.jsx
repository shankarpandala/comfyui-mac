import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S110sClone() {
  return (
    <>
      <p>
        F5-TTS zero-shot from a 10-second reference is the simplest path to "speak in my voice".
        No training required. The recommended Mac default for voice cloning.
      </p>

      <h2>The 10-second clip</h2>
      <ul>
        <li>Record yourself reading a paragraph at normal pace.</li>
        <li>Quiet environment, single speaker.</li>
        <li>10-30 seconds is the sweet spot.</li>
        <li>Save as 24 kHz wav for best results.</li>
      </ul>

      <h2>Recipe</h2>
      <ol>
        <li>F5-TTS workflow (Subject 25 / Chapter 1).</li>
        <li>LoadAudio → your 10-second clip.</li>
        <li>F5TTSGenerate → target text + reference.</li>
        <li>Output: your voice speaking the target text.</li>
      </ol>

      <h2>Tips for best fidelity</h2>
      <ul>
        <li>Reference clip should match target style (calm reference → calm output; energetic reference → energetic output).</li>
        <li>Short, declarative sentences in reference work best.</li>
        <li>Multiple reference clips combined (concat 3 × 10 s clips into one 30 s reference) often improve quality.</li>
      </ul>

      <h2>Limitations</h2>
      <ul>
        <li>Long outputs (&gt; 2 minutes) accumulate small drift — voice fidelity decreases.</li>
        <li>For long content: chunk into 30-second segments, generate each with same reference, concatenate.</li>
        <li>Singing doesn't work — RVC for that.</li>
      </ul>

      <NoteBlock title="The Phase 5 capstone integration">
        Subject 29's capstone records ~30 seconds of reference, then generates all narration in
        your cloned voice via F5-TTS. The Phase 7 agentic capstone calls F5-TTS chunked per
        script section.
      </NoteBlock>
    </>
  )
}

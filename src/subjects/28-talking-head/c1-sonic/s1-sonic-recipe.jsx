import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1SonicRecipe() {
  return (
    <>
      <p>
        Sonic (2024) is an audio-driven portrait animation model. Feed a still portrait + audio;
        Sonic generates a talking-head video where the face speaks the audio (lip-sync + facial
        expression matching). Strong Mac choice for talking-head content.
      </p>

      <h2>Files</h2>
      <ul>
        <li>Sonic UNet (~2 GB)</li>
        <li>Audio2Bucket model (audio embedding)</li>
        <li>Whisper-Tiny (audio tokenization)</li>
        <li>SVD base model (Sonic uses SVD as the video backbone)</li>
      </ul>

      <h2>Custom node</h2>
      <p><code>ComfyUI-Sonic</code> by smthemex — install via Manager.</p>

      <h2>Recipe</h2>
      <ol>
        <li><code>SonicLoader</code> → loads Sonic + SVD base.</li>
        <li><code>LoadImage</code> → portrait still (square crop, face-centered).</li>
        <li><code>LoadAudio</code> → audio file (your voice clone output, or any speech).</li>
        <li><code>SonicSampler</code> → 25 steps, motion strength 1.0, dynamic scale 1.0.</li>
        <li><code>VHS_VideoCombine</code> → mp4 with the input audio merged in.</li>
      </ol>

      <h2>Mac wall time</h2>
      <p>~5-8 minutes per 10-second talking-head clip on M5 Pro.</p>

      <h2>Output quality</h2>
      <ul>
        <li>Lip-sync accuracy: very strong on English speech.</li>
        <li>Expression: natural, varies with speech intensity.</li>
        <li>Limitation: SVD-based, so output capped at ~3.5 seconds per generation. Chain segments for longer.</li>
      </ul>

      <NoteBlock title="The Phase 5 capstone integration">
        Sonic is the talking-head primitive for Subject 29's pipeline: AI clone face still →
        F5-TTS voice clone audio → Sonic → talking-head video clip.
      </NoteBlock>
    </>
  )
}

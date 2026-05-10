import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Recipe() {
  return (
    <>
      <p>
        Stable Audio Open is Stability AI's open-source music/audio model. Generates ~47-second
        clips from text prompts. The Mac default for "any audio" generation outside music-specific
        workflows.
      </p>

      <h2>Files</h2>
      <ul>
        <li><code>stable-audio-open-1.0.safetensors</code> — model (~1.2 GB)</li>
        <li>Config JSON</li>
      </ul>

      <h2>Custom node</h2>
      <p><code>ComfyUI-Stable-Audio-Open</code> by Stability or community wrappers.</p>

      <h2>Recipe</h2>
      <ol>
        <li><code>StableAudioModelLoader</code> → load the model.</li>
        <li><code>CLIPTextEncode</code>-like text input → describe the audio (style, instrument, tempo, mood).</li>
        <li><code>StableAudioSampler</code> → 100 steps, cfg 7.0.</li>
        <li><code>StableAudioSaveAudio</code> → wav output.</li>
      </ol>

      <h2>Prompts that work</h2>
      <ul>
        <li>"upbeat electronic dance music, 128 BPM, synth lead, driving bassline"</li>
        <li>"sound design: explosion in a cavernous space, deep bass, echoing"</li>
        <li>"ambient piano, melancholic, slow tempo, reverb"</li>
        <li>"footsteps on gravel, walking pace, outdoor"</li>
      </ul>

      <h2>Mac wall time</h2>
      <p>~30-45 seconds for a 30-second audio clip on M5 Pro.</p>

      <h2>Use cases for the capstone</h2>
      <ul>
        <li>Background music for AI Reels (Phase 7 capstone).</li>
        <li>Sound effects.</li>
        <li>Ambient loops.</li>
      </ul>

      <NoteBlock title="The Mac audio default">
        Stable Audio Open is the recommended Mac default for non-music audio (SFX, ambient,
        background music). For specifically music with vocals or dedicated genre work, see Subject
        24.
      </NoteBlock>
    </>
  )
}

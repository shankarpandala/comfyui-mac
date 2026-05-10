import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2MelodyCond() {
  return (
    <>
      <p>
        MusicGen Melody is a variant that conditions on a melody reference. Hum a tune, MusicGen
        produces a track that follows it. The closest open-source equivalent to "compose music
        based on this melody."
      </p>

      <h2>The model</h2>
      <ul>
        <li><code>facebook/musicgen-melody</code> — same size as standard MusicGen Medium plus melody encoder.</li>
        <li>Accepts an audio reference (humming, instrument recording) alongside text.</li>
      </ul>

      <h2>Use cases</h2>
      <ul>
        <li>Hum a chorus → MusicGen creates the full arrangement.</li>
        <li>Provide a beat/rhythm → MusicGen builds melody on top.</li>
        <li>Reference an existing track's progression → similar musical structure, new sound.</li>
      </ul>

      <h2>Recipe</h2>
      <ol>
        <li>Load melody MusicGen.</li>
        <li>Load reference audio (your hummed melody, ~10-30 seconds).</li>
        <li>Text prompt: describe instrumentation, genre, mood.</li>
        <li>Generate.</li>
      </ol>

      <h2>For social media content</h2>
      <p>
        Hum a quick chorus into your phone, drop into ComfyUI, get a fully arranged track. Perfect
        for Reels intros where you want unique-but-on-brand music.
      </p>

      <NoteBlock title="License note">
        MusicGen training data includes copyrighted material; outputs are usable for personal /
        non-commercial. Check Meta's release notes before commercial use.
      </NoteBlock>
    </>
  )
}

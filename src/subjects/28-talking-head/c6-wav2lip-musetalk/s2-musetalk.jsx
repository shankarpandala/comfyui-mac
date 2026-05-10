import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Musetalk() {
  return (
    <>
      <p>
        MuseTalk (2024) is the modern Wav2Lip equivalent. Better mouth-region quality, real-time
        capable on Mac. Drop-in replacement for Wav2Lip workflows.
      </p>

      <h2>Files</h2>
      <ul>
        <li>MuseTalk model (~700 MB)</li>
        <li>Custom node: <code>ComfyUI-MuseTalk</code></li>
      </ul>

      <h2>Recipe</h2>
      <ol>
        <li>LoadVideo → existing video.</li>
        <li>LoadAudio → new audio.</li>
        <li><code>MuseTalk</code> node → re-syncs lips.</li>
        <li>SaveVideo with merged audio.</li>
      </ol>

      <h2>Quality vs Wav2Lip</h2>
      <ul>
        <li>MuseTalk: cleaner mouth region; less visible "mouth doesn't fit" artifact.</li>
        <li>Better generalization to non-frontal angles.</li>
        <li>Slightly slower than Wav2Lip (~80% real-time on M5 Pro).</li>
      </ul>

      <h2>The Mac choice</h2>
      <p>For dubbing existing video with new audio: MuseTalk. Wav2Lip only if MuseTalk has issues with your specific footage.</p>

      <NoteBlock title="The Phase 5 capstone usage">
        For Subject 29's pipeline: MuseTalk re-syncs Sonic-generated talking-head clips when you
        revise the script and need to update audio without regenerating the visual. Faster
        iteration.
      </NoteBlock>
    </>
  )
}

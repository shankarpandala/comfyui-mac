import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Wav2lip() {
  return (
    <>
      <p>
        Wav2Lip (2020!) is an old but still-useful lip-sync-only model. Doesn't generate full
        talking-heads — it takes an existing video and replaces the mouth region to match a new
        audio track.
      </p>

      <h2>Use case</h2>
      <ul>
        <li>You already have a video (someone speaking).</li>
        <li>You want to replace the audio with new audio (your voice clone).</li>
        <li>Wav2Lip re-syncs the lip movements to match the new audio.</li>
      </ul>

      <h2>Recipe</h2>
      <ol>
        <li>LoadVideo → existing talking-head video.</li>
        <li>LoadAudio → new audio (your voice clone).</li>
        <li>Wav2Lip processes per-frame: detect mouth region, replace with audio-synced version.</li>
        <li>Output: same video, new audio, mouth re-synced.</li>
      </ol>

      <h2>Mac compatibility</h2>
      <p>Wav2Lip uses a small CNN, runs on CPU or MPS. ~real-time on M5 Pro.</p>

      <h2>Limitations</h2>
      <ul>
        <li>Quality of mouth region is dated — visible as "mouth doesn't quite match face".</li>
        <li>No expression / head motion changes; just lip-sync.</li>
        <li>MuseTalk (next) is the newer alternative.</li>
      </ul>

      <NoteBlock title="When Wav2Lip wins">
        For dubbing existing footage with new audio. Sonic/Hallo generate from scratch; Wav2Lip
        modifies existing. Different use cases.
      </NoteBlock>
    </>
  )
}

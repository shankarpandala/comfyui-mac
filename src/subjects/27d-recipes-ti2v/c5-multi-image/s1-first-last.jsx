import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1FirstLast() {
  return (
    <>
      <p>First-frame + last-frame interpolation. Provide two stills; model generates the in-between motion. Great for narrative shots.</p>

      <h2>Models that support this</h2>
      <ul>
        <li>LTX-Video — has first/last frame conditioning.</li>
        <li>Wan VACE — first/last frame editing mode.</li>
      </ul>

      <h2>Recipe (LTX first/last)</h2>
      <ol>
        <li>LTX load.</li>
        <li>LoadImage A → first frame.</li>
        <li>LoadImage B → last frame (different scene/pose/state).</li>
        <li><code>LTXVFirstLastFrames</code> → wraps both as anchors.</li>
        <li>CLIPTextEncode → describe the transition.</li>
        <li>KSampler.</li>
        <li>Output: 4-second video transitioning A → B.</li>
      </ol>

      <h2>Use cases</h2>
      <ul>
        <li>Day-to-night transition of same scene.</li>
        <li>Person walking from one location to another.</li>
        <li>Object transformation sequences.</li>
        <li>Style transitions (matching first frame style → last frame style).</li>
      </ul>

      <NoteBlock title="The narrative video primitive">
        For storyboarded content where you have key moments planned, first/last interpolation is
        exactly the tool. Generate the keyframes as stills; let the video model fill in motion.
      </NoteBlock>
    </>
  )
}

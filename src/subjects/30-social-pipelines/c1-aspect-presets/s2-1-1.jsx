import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S21_1() {
  return (
    <>
      <p>
        1:1 square (1080×1080) was the original Instagram default. Still useful for posts that
        play in feed without expanding to fullscreen.
      </p>

      <h2>Use cases</h2>
      <ul>
        <li>Instagram main feed posts (non-Reel).</li>
        <li>Carousel slides.</li>
        <li>Profile-grid-friendly content.</li>
      </ul>

      <h2>Generation</h2>
      <ul>
        <li>SDXL: 1024×1024 (native).</li>
        <li>FLUX: 1024×1024.</li>
        <li>For video: usually crop from 9:16 master.</li>
      </ul>

      <h2>The 1:1 from 9:16 crop</h2>
      <pre>{`ffmpeg -i input_9_16.mp4 -vf "crop=1080:1080" output_1_1.mp4`}</pre>
      <p>Crops the center 1080×1080 from a 1080×1920 input. Loses top and bottom but keeps the talking head face-centered.</p>

      <h2>The 9:16 with 1:1 safe area</h2>
      <p>
        Pro tip: when designing a 9:16 master, keep critical content (face, key text) in the center
        1080×1080 region. Then both 9:16 and 1:1 exports work without re-composition.
      </p>

      <NoteBlock title="The 'design for the smallest' rule">
        Design for 1:1 safe area within your 9:16 frame. Then any platform crop works.
      </NoteBlock>
    </>
  )
}

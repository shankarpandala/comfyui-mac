import CommandBlock from '../../../components/content/CommandBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Visible() {
  return (
    <>
      <p>
        Visible watermarks (channel handle, logo) on Reels reduce theft and reinforce branding.
        ffmpeg overlays a logo PNG.
      </p>

      <h2>The overlay command</h2>
      <CommandBlock command={`ffmpeg -i in.mp4 -i logo.png -filter_complex "[1:v]scale=200:-1[logo];[0:v][logo]overlay=W-w-30:30" out.mp4`} label="Top-right corner, 30px margin, 200px wide logo" />

      <h2>Position options</h2>
      <ul>
        <li><strong>Top-right (default)</strong>: <code>overlay=W-w-30:30</code></li>
        <li>Top-left: <code>overlay=30:30</code></li>
        <li>Bottom-right: <code>overlay=W-w-30:H-h-30</code></li>
        <li>Bottom-center: <code>overlay=(W-w)/2:H-h-50</code></li>
      </ul>

      <h2>Opacity</h2>
      <p>For subtle watermark, lower opacity in the logo PNG (or via ffmpeg colorchannelmixer):</p>
      <CommandBlock command={`ffmpeg -i in.mp4 -i logo.png -filter_complex "[1:v]format=rgba,colorchannelmixer=aa=0.5[logo];[0:v][logo]overlay=W-w-30:30" out.mp4`} label="50% opacity logo overlay" />

      <h2>Brand handle text</h2>
      <p>Alternative: ffmpeg drawtext for text-based handle without a PNG.</p>
      <CommandBlock command={`ffmpeg -i in.mp4 -vf "drawtext=text='@yourhandle':fontfile=/path/to/Inter-Bold.ttf:fontsize=32:fontcolor=white@0.7:x=W-tw-30:y=30" out.mp4`} />

      <NoteBlock title="The 'hard to crop out' position">
        Place watermarks near the subject so cropping them out also crops important content.
        Bottom-right is common; some creators put handles where they overlap the subject's body
        for the same reason.
      </NoteBlock>
    </>
  )
}

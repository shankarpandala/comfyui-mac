import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S4CutawaysAndText() {
  return (
    <>
      <p>Cutaways, lower-thirds, title cards — the production polish layer. Adds visual variety and clarity.</p>

      <h2>Title cards</h2>
      <ul>
        <li>Generated from FLUX with text prompt.</li>
        <li>Or composed in ffmpeg directly: solid color + drawtext filter.</li>
        <li>3-5 seconds at start; can repeat as section dividers.</li>
      </ul>

      <h2>Lower-thirds</h2>
      <p>Text overlay on talking-head segments — name, topic, key fact.</p>
      <pre>{`ffmpeg -i talking-head.mp4 -vf "drawtext=text='Mac FLUX Tip #1':x=50:y=H-100:fontsize=42:fontcolor=white:bordercolor=black:borderw=3" out.mp4`}</pre>

      <h2>Cutaway text overlays</h2>
      <ul>
        <li>Mid-Reel text emphasis ("CFG = 1!" appearing on screen).</li>
        <li>Numbered points ("1. ... 2. ... 3. ...").</li>
        <li>End-of-Reel CTA text ("FOLLOW for more").</li>
      </ul>

      <h2>Implementation</h2>
      <ul>
        <li>Use ffmpeg drawtext for simple cases.</li>
        <li>Pre-render in FLUX/SDXL for stylized cards.</li>
        <li>Web-app overlay tools (Captacity, Submagic) for animated text.</li>
      </ul>

      <NoteBlock title="The 'cards add 30% perceived production value'">
        Title cards + lower-thirds + cutaway text make Reels feel like edited content vs raw AI
        generations. Spend the 5 minutes per Reel adding them.
      </NoteBlock>
    </>
  )
}

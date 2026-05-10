import CommandBlock from '../../../components/content/CommandBlock.jsx'
import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Luts() {
  return (
    <>
      <p>Color and lighting consistency post-process via LUTs (Look-Up Tables). Different segments may have slightly different color casts; LUT applies a consistent grade.</p>

      <h2>What a LUT does</h2>
      <p>
        A LUT is a 3D color mapping. Input RGB → output RGB via a stored function. Cinema-style LUTs
        emulate film stocks (Kodak Portra, Fuji Velvia, etc.) or specific TV looks.
      </p>

      <h2>Apply via ffmpeg</h2>
      <CommandBlock command={`ffmpeg -i in.mp4 -vf "lut3d=teal_orange.cube" out.mp4`} label="Apply 3D LUT post-render" />

      <h2>Where to get LUTs</h2>
      <ul>
        <li>Free .cube files from cinematographer sites.</li>
        <li>FilmConvert, Filmic Pro export LUTs.</li>
        <li>Build your own in Davinci Resolve free.</li>
      </ul>

      <h2>Use cases for AI clone content</h2>
      <ul>
        <li>Apply same LUT to all segments → consistent grade across the whole video.</li>
        <li>Match LUT to your "channel look" — viewers recognize the aesthetic.</li>
        <li>Hide minor color drift between segments.</li>
      </ul>

      <NoteBlock title="The 'always grade' rule">
        Apply a LUT to every video output going to social media. Even a subtle teal-orange grade
        adds professional polish vs raw diffusion output.
      </NoteBlock>
    </>
  )
}

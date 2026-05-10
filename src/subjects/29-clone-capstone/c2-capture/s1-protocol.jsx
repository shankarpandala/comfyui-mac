import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Protocol() {
  return (
    <>
      <p>
        Phone-camera capture protocol for your AI clone dataset. The single highest-leverage
        thing you can do — bad capture means bad clone regardless of how good the training is.
      </p>

      <h2>Equipment</h2>
      <ul>
        <li>Modern smartphone (any iPhone 13+/equivalent Android).</li>
        <li>Tripod or steady surface (eliminates hand shake).</li>
        <li>Self-timer or remote shutter — gives you 5-10 seconds to position.</li>
      </ul>

      <h2>The 80-shot list</h2>
      <table>
        <thead><tr><th>Category</th><th>Count</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Front-facing headshots</td><td>15</td><td>Neutral expression, varying eye direction</td></tr>
          <tr><td>3/4 angle headshots</td><td>10</td><td>Both sides, looking forward</td></tr>
          <tr><td>Profile</td><td>5</td><td>Both sides full profile</td></tr>
          <tr><td>Smiling</td><td>10</td><td>Different smiles — closed-mouth, open-mouth, light, big</td></tr>
          <tr><td>Talking</td><td>10</td><td>Mouth in mid-speech (capture during conversation)</td></tr>
          <tr><td>Half-body</td><td>10</td><td>Various standing poses</td></tr>
          <tr><td>Full-body</td><td>10</td><td>Including walking poses</td></tr>
          <tr><td>Different outfits</td><td>5</td><td>3-5 outfits worn across the above categories</td></tr>
          <tr><td>Outdoor light</td><td>5</td><td>Natural light, varied weather</td></tr>
        </tbody>
      </table>

      <h2>Resolution</h2>
      <ul>
        <li>Phone native (12 MP+ is fine).</li>
        <li>Don't crop in-camera — capture wide, crop in post.</li>
      </ul>

      <h2>What to avoid</h2>
      <ul>
        <li>Heavy filters or beauty modes.</li>
        <li>Sunglasses, masks, anything occluding face.</li>
        <li>Identical backgrounds across all photos (model learns the background, not just you).</li>
        <li>Heavy/dark shadows on face.</li>
      </ul>

      <NoteBlock title="The 'one afternoon' approach">
        Spend 2-3 hours on a Saturday capturing the 80 shots. Walk through neighborhood for
        outdoor variety. Change outfits 3-4 times. Done. Don't space it across weeks — your
        appearance varies more than you think.
      </NoteBlock>
    </>
  )
}

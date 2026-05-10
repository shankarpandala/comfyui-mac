import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3CapabilitiesMatrix() {
  return (
    <>
      <p>Capability parity matrix — what we match, exceed, or trade off vs HeyGen.</p>

      <h2>Direct comparison</h2>
      <table>
        <thead><tr><th>Capability</th><th>HeyGen</th><th>Mac local</th></tr></thead>
        <tbody>
          <tr><td>Avatar quality</td><td>Polished, narrow style</td><td>FLUX + your LoRA — broader styles, matches your aesthetic</td></tr>
          <tr><td>Voice quality</td><td>Studio-quality cloning</td><td>F5-TTS — close to HeyGen quality</td></tr>
          <tr><td>Lip-sync accuracy</td><td>Excellent</td><td>Sonic + LivePortrait — comparable</td></tr>
          <tr><td>Speed</td><td>~1 minute per Reel (cloud)</td><td>~30-50 minutes per Reel (Mac)</td></tr>
          <tr><td>UI</td><td>Polished web app</td><td>CLI / Python script</td></tr>
          <tr><td>Research</td><td>None</td><td>✓ via Subject 36</td></tr>
          <tr><td>B-roll generation</td><td>Limited stock library</td><td>✓ FLUX/LTX/Wan via Subject 27c</td></tr>
          <tr><td>Long-form (10+ min)</td><td>Limited</td><td>✓ via Subject 27f consistency</td></tr>
          <tr><td>Privacy</td><td>Face/voice on cloud</td><td>100% local</td></tr>
          <tr><td>Cost</td><td>$30-100/month</td><td>One-time hardware investment</td></tr>
          <tr><td>Customization</td><td>Their templates</td><td>Anything you can wire</td></tr>
        </tbody>
      </table>

      <h2>Where Mac wins</h2>
      <ul>
        <li>Privacy / no cloud upload of biometric data.</li>
        <li>Cost over time.</li>
        <li>Customization / orchestration depth.</li>
        <li>Research + B-roll integrated.</li>
      </ul>

      <h2>Where HeyGen wins</h2>
      <ul>
        <li>Speed per Reel.</li>
        <li>Polished UI.</li>
        <li>Setup is "type and click" vs Mac's "install + train + script".</li>
      </ul>

      <NoteBlock title="The trade-off summary">
        Mac local trades convenience for control. For solo creators who value privacy + cost +
        customization, the trade is worth it. For teams that need fast turnaround on simple Reels,
        HeyGen is faster.
      </NoteBlock>
    </>
  )
}

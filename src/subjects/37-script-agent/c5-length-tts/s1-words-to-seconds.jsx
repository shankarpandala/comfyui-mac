import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1WordsToSeconds() {
  return (
    <>
      <p>Words ↔ seconds calibration. The script agent must hit its target duration; word count is the lever.</p>

      <h2>Speech rate by content type</h2>
      <table>
        <thead><tr><th>Type</th><th>Words / minute</th><th>Words / second</th></tr></thead>
        <tbody>
          <tr><td>Reels (energetic)</td><td>180-200</td><td>3.0-3.3</td></tr>
          <tr><td>Conversational</td><td>150-170</td><td>2.5-2.8</td></tr>
          <tr><td>Documentary / measured</td><td>120-140</td><td>2.0-2.3</td></tr>
          <tr><td>Slow / dramatic</td><td>100-120</td><td>1.7-2.0</td></tr>
        </tbody>
      </table>

      <h2>Target word counts by Reel duration</h2>
      <ul>
        <li>15s: ~50 words</li>
        <li>30s: ~85-100 words</li>
        <li>45s: ~125-150 words</li>
        <li>60s: ~165-200 words</li>
      </ul>

      <h2>Agent constraint</h2>
      <p>System prompt should specify: "Target duration X seconds. Aim for Y words. Verify final word count."</p>

      <h2>F5-TTS rate</h2>
      <p>F5-TTS speaks at the rate of your reference audio. Record your reference at the pace you want output. Energetic reference → energetic output.</p>

      <NoteBlock title="The 'count and trim' loop">
        Generate script → count words → if too long, prompt LLM to "tighten by 20 words" → recount.
        Iterate until duration matches.
      </NoteBlock>
    </>
  )
}

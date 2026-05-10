import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Openvoice() {
  return (
    <>
      <p>
        OpenVoice v2 (MyShell, 2024) is another zero-shot voice cloning option. Strong on
        emotional control — different from F5-TTS in supporting explicit "happy/sad/angry"
        modulation alongside voice cloning.
      </p>

      <h2>Files</h2>
      <ul>
        <li><code>myshell-ai/OpenVoiceV2</code> on HuggingFace.</li>
        <li>~700 MB.</li>
      </ul>

      <h2>Distinctive features</h2>
      <ul>
        <li>Voice clone from 6+ seconds of reference.</li>
        <li>Explicit emotion conditioning (happy, sad, angry, neutral, surprised).</li>
        <li>Fine-grained accent / language control.</li>
      </ul>

      <h2>OpenVoice vs F5-TTS</h2>
      <ul>
        <li><strong>F5-TTS</strong>: simpler, slightly better voice fidelity.</li>
        <li><strong>OpenVoice v2</strong>: explicit emotion control, multilingual.</li>
      </ul>

      <h2>Mac wall time</h2>
      <p>~10 s for 30 s output — faster than F5-TTS.</p>

      <h2>Use cases</h2>
      <ul>
        <li>Voiceover that needs varied emotional delivery.</li>
        <li>Multilingual narration.</li>
        <li>Character voices with distinct emotional ranges.</li>
      </ul>

      <NoteBlock title="The pick">
        For pure voice cloning of yourself reading scripts, F5-TTS is simpler and slightly better.
        For multi-character / emotionally varied content, OpenVoice v2 is worth the slightly more
        complex setup.
      </NoteBlock>
    </>
  )
}

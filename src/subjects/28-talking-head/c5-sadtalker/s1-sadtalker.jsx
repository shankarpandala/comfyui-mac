import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1Sadtalker() {
  return (
    <>
      <p>
        SadTalker (2023) is the older audio-driven talking-head model. Lighter (~200 MB) and faster
        than Sonic/Hallo. Lower quality but Mac-friendly when memory is very tight.
      </p>

      <h2>Files</h2>
      <ul>
        <li>SadTalker weights (~200 MB)</li>
        <li>Custom node: <code>ComfyUI-SadTalker</code></li>
      </ul>

      <h2>Use cases</h2>
      <ul>
        <li>Tight memory — Sonic + Hallo too heavy.</li>
        <li>Quick previews of "does the audio fit this face shape".</li>
        <li>Stylized / cartoon portraits where Sonic's photoreal-leaning output looks wrong.</li>
      </ul>

      <h2>Mac wall time</h2>
      <p>~30 seconds per 10-second clip. Fastest talking-head option.</p>

      <h2>Quality</h2>
      <ul>
        <li>Lip-sync: decent, not great.</li>
        <li>Expression: minimal — mostly mouth movement.</li>
        <li>Identity: preserved well; strict face deformation.</li>
      </ul>

      <NoteBlock title="The 'first try' option">
        For initial validation that your pipeline works ("does my AI clone face accept audio at
        all"), SadTalker is a quick test. Once validated, upgrade to Sonic/Hallo for production
        quality.
      </NoteBlock>
    </>
  )
}

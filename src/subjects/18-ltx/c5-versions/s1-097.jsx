import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1097() {
  return (
    <>
      <p>
        LTX has shipped multiple versions in 2024-2025. Knowing which to download saves you from
        outdated configs.
      </p>

      <h2>Version history</h2>
      <table>
        <thead><tr><th>Version</th><th>Notable</th></tr></thead>
        <tbody>
          <tr><td>0.9.0</td><td>Original release</td></tr>
          <tr><td>0.9.1</td><td>Quality improvements</td></tr>
          <tr><td>0.9.5</td><td>STG support</td></tr>
          <tr><td>0.9.6</td><td>Better prompt adherence</td></tr>
          <tr><td>0.9.7</td><td>Current recommended; best quality</td></tr>
          <tr><td>13B</td><td>Larger model variant</td></tr>
        </tbody>
      </table>

      <h2>Backward compatibility</h2>
      <p>
        Workflows for 0.9.x versions are largely compatible — the model file changes, the node
        wiring stays the same. Update the model file; check that your custom nodes (LTX-related)
        are also updated.
      </p>

      <h2>Recommended downloads</h2>
      <ul>
        <li><code>ltx-video-2b-v0.9.7.safetensors</code> — current standard. Mac default.</li>
        <li><code>ltx-13b-fp16.safetensors</code> only if you specifically need the bigger model and have memory headroom.</li>
      </ul>

      <NoteBlock title="The 'use latest unless told otherwise' rule">
        Always pick the latest 0.9.x or 13B unless a specific tutorial requires an older version.
        Lightricks ships incremental quality improvements with each version.
      </NoteBlock>
    </>
  )
}

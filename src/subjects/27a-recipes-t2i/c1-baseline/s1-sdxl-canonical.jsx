import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S1SdxlCanonical() {
  return (
    <>
      <p>
        The canonical SDXL workflow on Mac. Save as your t2i baseline; clone for variations.
      </p>

      <h2>Files needed</h2>
      <ul>
        <li><code>juggernautXL_v9.safetensors</code> (~6.7 GB) — Juggernaut XL v9 photoreal SDXL</li>
        <li>Or <code>sd_xl_base_1.0.safetensors</code> for vanilla SDXL</li>
      </ul>

      <h2>Settings</h2>
      <table>
        <thead><tr><th>Parameter</th><th>Value</th></tr></thead>
        <tbody>
          <tr><td>Resolution</td><td>1024×1024 or 832×1216 / 1216×832</td></tr>
          <tr><td>Steps</td><td>25</td></tr>
          <tr><td>cfg</td><td>6.5</td></tr>
          <tr><td>Sampler</td><td><code>dpmpp_2m</code></td></tr>
          <tr><td>Scheduler</td><td><code>karras</code></td></tr>
          <tr><td>Denoise</td><td>1.0</td></tr>
        </tbody>
      </table>

      <h2>Wall time</h2>
      <p>~17 seconds per image on M5 Pro at 1024×1024.</p>

      <h2>Memory</h2>
      <p>~10 GB. Comfortable.</p>

      <h2>Variations</h2>
      <ul>
        <li>Add ControlNet for spatial control.</li>
        <li>Add LoRA stack for style/character.</li>
        <li>Add FaceDetailer post-sampler for face polish.</li>
      </ul>

      <NoteBlock title="The 'baseline' workflow">
        Build this once, save as <code>sdxl-mac-baseline.json</code> in your workflows library.
        Every other SDXL recipe in this curriculum starts from this template.
      </NoteBlock>
    </>
  )
}

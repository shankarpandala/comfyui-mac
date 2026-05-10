import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S3Simpletuner() {
  return (
    <>
      <p>
        SimpleTuner is a third LoRA trainer worth knowing — particularly for FLUX, SD3, and Pixart.
        More research-oriented than kohya_ss; cleaner code than ai-toolkit. MPS support is good but
        younger.
      </p>

      <h2>Install</h2>
      <p>
        From <code>https://github.com/bghira/SimpleTuner</code>. Clone and follow the README's macOS
        section. Uses pip + venv like the others.
      </p>

      <h2>Config style</h2>
      <p>
        TOML configs (slightly different syntax from ai-toolkit's YAML). Same general structure —
        model, dataset, training params, sampling for validation.
      </p>

      <h2>SimpleTuner specialties</h2>
      <ul>
        <li><strong>SD3 / SD3.5 LoRA</strong> — best supported here.</li>
        <li><strong>Pixart-Sigma</strong> — niche but nice for stylized work.</li>
        <li><strong>Flux LoRA + DoRA</strong> — first-class.</li>
        <li><strong>Multi-aspect-ratio bucketing</strong> — automatically groups training images by aspect ratio.</li>
      </ul>

      <h2>Mac compatibility</h2>
      <ul>
        <li>MPS support is present but newer than kohya/ai-toolkit.</li>
        <li>Some advanced features (bf16 + AdamW8bit + DoRA all together) may not all work — fall back per-feature if you hit errors.</li>
        <li>Most stable for FLUX standard LoRA training.</li>
      </ul>

      <h2>Picking a trainer</h2>
      <table>
        <thead><tr><th>Use case</th><th>Recommended trainer</th></tr></thead>
        <tbody>
          <tr><td>SDXL LoRA</td><td>kohya_ss MPS branch</td></tr>
          <tr><td>FLUX LoRA</td><td>ai-toolkit</td></tr>
          <tr><td>SD3 / SD3.5 LoRA</td><td>SimpleTuner</td></tr>
          <tr><td>FLUX DoRA</td><td>ai-toolkit or SimpleTuner</td></tr>
          <tr><td>Pixart / niche</td><td>SimpleTuner</td></tr>
        </tbody>
      </table>

      <NoteBlock title="The 'one trainer' philosophy">
        Pick one trainer and learn it deeply rather than dabbling in three. For most Mac users,
        ai-toolkit is the best single pick — covers FLUX (the most useful base) and works fine for
        SDXL with adjusted configs.
      </NoteBlock>
    </>
  )
}

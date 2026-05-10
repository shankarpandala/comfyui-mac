import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Presets() {
  return (
    <>
      <p>
        Common block-weight patterns get reused enough that they have names. Custom-node block-weight
        loaders ship a presets dropdown.
      </p>

      <h2>Common SD 1.5 / SDXL presets</h2>
      <table>
        <thead><tr><th>Preset</th><th>Effect</th></tr></thead>
        <tbody>
          <tr><td><strong>FACE</strong></td><td>Strong in OUT blocks (face details), weak elsewhere</td></tr>
          <tr><td><strong>STYLE</strong></td><td>Strong in IN + M blocks (composition style)</td></tr>
          <tr><td><strong>POSE</strong></td><td>Strong in IN blocks (composition / pose), weak elsewhere</td></tr>
          <tr><td><strong>OUTFIT</strong></td><td>Strong in middle OUT blocks (clothing detail)</td></tr>
          <tr><td><strong>BACKGROUND</strong></td><td>Strong in early IN blocks (scene composition)</td></tr>
          <tr><td><strong>NSFW</strong></td><td>Strong in middle blocks (anatomy)</td></tr>
        </tbody>
      </table>

      <h2>How to use a preset</h2>
      <ol>
        <li>Add <code>LoraLoaderBlockWeight</code> instead of standard LoraLoader.</li>
        <li>Pick the LoRA file.</li>
        <li>Pick a preset from the <code>preset</code> dropdown.</li>
        <li>Set base strength.</li>
        <li>Final per-block strength = base × preset[block].</li>
      </ol>

      <h2>Custom presets</h2>
      <p>
        Most block-weight loaders accept comma-separated custom values:
      </p>
      <pre>{`1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0`}</pre>
      <p>
        That's 19 values for the 19 SDXL blocks (IN×9 + M×1 + OUT×9). You can save your own
        patterns this way.
      </p>

      <h2>FLUX block weights</h2>
      <p>
        FLUX has 57 blocks (19 double-stream + 38 single-stream). Block weights for FLUX LoRAs are
        more complex. Most published FLUX LoRAs work at full strength globally; block weights are
        rarely needed.
      </p>

      <NoteBlock title="The pragmatic stance">
        Block weights are a power-user tool for taming difficult LoRA stacks. For 95% of workflows,
        they're not needed. Get standard LoraLoader working first; reach for block weights only
        when standard strength tuning has failed.
      </NoteBlock>
    </>
  )
}

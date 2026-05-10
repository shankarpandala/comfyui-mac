import NoteBlock from '../../../components/content/NoteBlock.jsx'

export default function S2Widgets() {
  return (
    <>
      <p>
        Widgets are the form-style controls that live inside a node. ComfyUI has a small fixed set;
        custom nodes can compose them but rarely invent new ones.
      </p>

      <h2>Widget catalog</h2>
      <table>
        <thead><tr><th>Widget</th><th>Purpose</th><th>Common nodes</th></tr></thead>
        <tbody>
          <tr><td><strong>INT</strong></td><td>Integer with min/max/step</td><td>seed, steps, width, height</td></tr>
          <tr><td><strong>FLOAT</strong></td><td>Float with min/max/step</td><td>cfg, denoise, lora strength</td></tr>
          <tr><td><strong>STRING</strong></td><td>Single-line or multi-line text</td><td>prompt, negative prompt, file path</td></tr>
          <tr><td><strong>COMBO</strong></td><td>Dropdown list</td><td>sampler_name, scheduler, model file</td></tr>
          <tr><td><strong>BOOLEAN</strong></td><td>Checkbox</td><td>tile_overlap, force_size</td></tr>
          <tr><td><strong>IMAGEUPLOAD</strong></td><td>File picker for images</td><td>LoadImage</td></tr>
        </tbody>
      </table>

      <h2>The seed widget specifically</h2>
      <p>The <code>seed</code> input on KSampler has a few special modes accessed via the row below the number:</p>
      <ul>
        <li><strong>Fixed</strong> — keep the same seed every queue. Use for reproducibility.</li>
        <li><strong>Increment</strong> — +1 each queue. Useful when iterating through a series.</li>
        <li><strong>Decrement</strong> — -1 each queue.</li>
        <li><strong>Randomize</strong> — pick a fresh random seed every queue. Default for exploration.</li>
      </ul>

      <h2>STRING widgets — multiline</h2>
      <p>
        CLIPTextEncode's text widget is multi-line and accepts arbitrary length. Newlines are not
        meaningful to the encoder; they're just for your readability. We cover prompt syntax (weights,
        BREAK, scheduling) in Subject 05.
      </p>

      <h2>COMBO widgets — model dropdowns</h2>
      <p>
        The <code>ckpt_name</code> dropdown on CheckpointLoader, <code>lora_name</code> on LoraLoader,
        etc., are populated by scanning your <code>models/</code> directory at startup. If you add a
        new file while ComfyUI is running, click the refresh button next to the dropdown — or press{' '}
        <code>R</code> — to rescan without restarting.
      </p>

      <NoteBlock title="Widget order is curated">
        The order of widgets in a node is chosen by the node author. KSampler's order — seed, steps,
        cfg, sampler_name, scheduler, denoise — is itself a teaching tool. As you build custom nodes
        in Subject 31, copy this discipline.
      </NoteBlock>
    </>
  )
}
